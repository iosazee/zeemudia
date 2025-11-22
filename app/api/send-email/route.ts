import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { env } from "@/lib/env";
import { generateContactFormEmailHtml } from "@/mail";
import * as z from "zod";
import { checkRateLimit } from "@/lib/rate-limit";
import { verifyRecaptcha } from "@/lib/recaptcha";

// Helper to get client IP address
function getClientIp(req: Request): string {
  // Check common headers for IP (handles proxies/load balancers)
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return "unknown";
}

// LAYER 1: Bot detection pattern functions
const hasConsecutiveConsonants = (str: string, count: number): boolean => {
  const consonantPattern = new RegExp(`[bcdfghjklmnpqrstvwxyz]{${count},}`, "i");
  return consonantPattern.test(str);
};

const hasRepeatedChars = (str: string): boolean => {
  // Detects patterns like "aaaa", "ssss", etc.
  return /(.)\1{3,}/.test(str);
};

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .refine((val) => !hasConsecutiveConsonants(val, 6), {
      message: "Please enter a valid name",
    })
    .refine((val) => !hasRepeatedChars(val), {
      message: "Please enter a valid name",
    }),
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .refine((val) => !hasConsecutiveConsonants(val, 8), {
      message: "Please enter a valid subject",
    }),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .refine((val) => !hasConsecutiveConsonants(val, 10), {
      message: "Please enter a valid message",
    }),
  website: z.string().optional(), // honeypot
  recaptchaToken: z.string().optional(),
});

type EmailOptions = {
  from: string;
  password: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
};

async function createTransporter(email: string, password: string) {
  return nodemailer.createTransport({
    host: env.EMAIL_HOST,
    port: parseInt(env.EMAIL_PORT),
    secure: false,
    auth: {
      user: email,
      pass: password,
    },
  });
}

async function sendEmail(options: EmailOptions) {
  const transporter = await createTransporter(options.from, options.password);
  const info = await transporter.sendMail({
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
  console.log("Message sent: %s", info.messageId);
  return info;
}

export async function POST(req: Request) {
  try {
    // LAYER 4: Rate Limiting
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      const resetTime = rateLimit.resetTime
        ? new Date(rateLimit.resetTime).toLocaleTimeString()
        : "later";
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return NextResponse.json(
        { error: `Too many attempts. Please try again after ${resetTime}.` },
        { status: 429 }
      );
    }

    console.log(`Rate limit check passed for ${clientIp}: ${rateLimit.remaining} attempts remaining`);

    const body = await req.json();

    // LAYER 1: Enhanced Validation (pattern detection)
    const validatedFields = formSchema.safeParse(body);

    if (!validatedFields.success) {
      console.log("Bot detected: Invalid form data (pattern validation failed)", {
        errors: validatedFields.error.errors,
        data: { name: body.name, subject: body.subject, email: body.email }
      });
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    // LAYER 2: Honeypot Check
    const { website } = body;
    if (website && website.length > 0) {
      console.log("Bot detected: Honeypot field filled");
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 400 }
      );
    }

    // LAYER 3: reCAPTCHA Verification
    const { recaptchaToken } = body;
    if (!recaptchaToken) {
      console.log("Bot detected: Missing reCAPTCHA token");
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 400 }
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      console.log("Bot detected: reCAPTCHA verification failed");
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 400 }
      );
    }

    console.log("All bot protection layers passed");

    const { name, email, subject, message } = validatedFields.data;
    const contactEmail = env.CONTACT_EMAIL;

    // Generate HTML for admin email
    const adminHtml = await generateContactFormEmailHtml({
      name,
      email,
      subject,
      message,
      isUserEmail: false,
    });

    // Generate HTML for user email
    const userHtml = await generateContactFormEmailHtml({
      name,
      email,
      subject,
      message,
      isUserEmail: true,
    });

    // Send email to admin
    await sendEmail({
      from: env.CONTACT_EMAIL,
      password: env.EMAIL_PASSWORD,
      to: contactEmail,
      subject: "New Contact Form Submission",
      text: `New contact form submission from ${name}`,
      html: adminHtml,
    });

    // Send acknowledgment email to the user
    await sendEmail({
      from: env.CONTACT_EMAIL,
      password: env.EMAIL_PASSWORD,
      to: email,
      subject: "Contact Form Submission Received",
      text: "Thank you for contacting us. We will get back to you soon.",
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact form emails:", error);

    // More specific error handling
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Failed to send emails. Please try again later." },
      { status: 500 }
    );
  }
}

"use server";

interface RecaptchaResponse {
  success: boolean;
  score?: number;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

/**
 * Verify reCAPTCHA token with Google API
 * @param token - reCAPTCHA token from client
 * @returns true if human (score >= 0.5), false if bot
 */
export async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not configured");
    return false;
  }

  if (!token) {
    console.warn("reCAPTCHA token is missing");
    return false;
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data: RecaptchaResponse = await response.json();

    console.log("reCAPTCHA verification:", {
      success: data.success,
      score: data.score,
      hostname: data.hostname,
    });

    // reCAPTCHA v3 returns score 0.0 (bot) to 1.0 (human)
    // We require score >= 0.5 for submission
    return data.success && (data.score ?? 0) >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

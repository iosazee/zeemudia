"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2 } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormError } from "@/components/ui/form-error";
import { FormSuccess } from "@/components/ui/form-success";

// Bot detection patterns
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
  website: z.string().optional(), // honeypot field
  recaptchaToken: z.string().optional(),
});

const ContactForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, setIsPending] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "", // honeypot
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError(undefined);
    setSuccess(undefined);
    setIsPending(true);

    try {
      // Execute reCAPTCHA to get token
      if (!executeRecaptcha) {
        setError("reCAPTCHA not loaded. Please refresh and try again.");
        setIsPending(false);
        return;
      }

      const recaptchaToken = await executeRecaptcha("contact_submit");

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Too many attempts. Please try again later.");
        }
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Something went wrong. Please try again later."
      );
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  className="[&::-webkit-contacts-auto-fill-button]:brightness-0 [&::-webkit-contacts-auto-fill-button]:invert"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email"
                  {...field}
                  className="[&::-webkit-contacts-auto-fill-button]:brightness-0 [&::-webkit-contacts-auto-fill-button]:invert"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Message subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="text-white">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Honeypot field - hidden from users, catches bots */}
        <div style={{ position: "absolute", left: "-9999px", opacity: 0 }}>
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}

        <Button
          type="submit"
          className="w-full bg-gray-200 text-gray-800 hover:bg-gradient-to-r from-emerald-300 to-sky-400"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

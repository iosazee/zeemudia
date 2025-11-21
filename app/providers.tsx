"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      >
        {children}
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}

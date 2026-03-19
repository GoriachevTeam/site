"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { ApplicationForm } from "@/components/application-form-page";

export default function ApplicationFormPage() {
  return (
    <section className="container py-12 grid place-items-center min-h-[50vh] relative">
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        scriptProps={{ async: true, defer: true }}
      >
        <ApplicationForm />
      </GoogleReCaptchaProvider>
    </section>
  );
}

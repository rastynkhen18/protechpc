"use client";

import React from 'react'
import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: "2nd Floor LB Pagala Bldg., Brgy. Muzon Proper, San Jose del Monte, Philippines, 3023",
    href: "https://maps.app.goo.gl/5wqbs7a6ufGHwkKF6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0967 082 1565",
    href: "tel:+639670821565",
  },
  {
    icon: Mail,
    label: "Email",
    value: "protechpcstore@gmail.com",
    href: "mailto:protechpcstore@gmail.com",
  },
  {
    icon: ExternalLink,
    label: "Social Media",
    value: "Facebook",
    href: "https://www.facebook.com/ProTechPcStore",
  },
];

const subjectOptions = [
  "Product inquiry",
  "Custom PC build or upgrade",
  "PC Repair",
  "Laptop Repair",
  "Printer Repair",
  "IT Support",
  "Preventive Maintenance",
  "Networking Support",
  "Other",
];

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const selectedSubject = String(formData.get("subject") ?? "").trim();
    const subjectDetails = String(formData.get("subjectDetails") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const resolvedSubject =
      selectedSubject === "Other" && subjectDetails
        ? subjectDetails
        : selectedSubject;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          subject: resolvedSubject,
          message,
          subjectDetails,
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        { publicKey },
      );

      form.reset();
      setSubject("");
      setStatus("success");
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="overflow-hidden bg-background py-10"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="border-t border-border pt-16 sm:pt-20">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
              <div>
            <h2
              id="contact-title"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-[1.05] lg:text-5xl lg:leading-[1.05]"
            >
              Let&apos;s Power Up Your Technology
            </h2>
            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              Need help with a PC, POS system, laptop, or printer? Get in touch
              with our team and let&apos;s find the right solution for your business.
            </p>



            <div>
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl p-3 transition-colors"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
                    <Icon className="size-5" />
                  </div>


                  <span className="min-w-0">
                    <span className="block text-sm text-muted-foreground">
                      {label}
                    </span>
                    <span className="block wrap-break-word font-semibold leading-5 group-hover:text-primary group-hover:underline">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
              </div>


              <div className="mt-8">
            <form
              onSubmit={handleSubmit}
              className="p-0 sm:p-2"
            >


              <div className="grid gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="h-11 w-full rounded-[var(--radius)] border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-11 w-full rounded-[var(--radius)] border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    className="h-11 w-full rounded-[var(--radius)] border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  >
                    <option value="">

                    </option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {subject === "Other" && (
                  <div className="space-y-2">
                    <label htmlFor="contact-subject-other" className="text-sm font-medium">
                      Please specify
                    </label>
                    <input
                      id="contact-subject-other"
                      name="subjectDetails"
                      type="text"
                      required
                      autoComplete="off"
                      className="h-11 w-full rounded-[var(--radius)] border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-y rounded-[var(--radius)] border border-input bg-background px-3 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20"
                  />
                </div>
              </div>
              <Button
                size="lg"
                className="relative h-[38px] w-auto gap-2 rounded-[calc(var(--radius-md)*(1+(38/26-1)*0.35))] mt-4 px-4 py-2 text-base cursor-pointer hover:shadow-primary/30 md:text-sm"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <p className="mt-3 min-h-6 text-sm" aria-live="polite">
                {status === "success" && (
                  <span className="text-green-600">
                    Your message has been sent. We&apos;ll get back to you soon.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-destructive">
                    We couldn&apos;t send your message. Please try again or email us directly.
                  </span>
                )}
              </p>
            </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <iframe
        title="Find ProtechPC on Google Maps"
        src="https://www.google.com/maps?q=PROTECH+PC+-+Muzon&output=embed"
        className="h-72 w-full border-0 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  )
}

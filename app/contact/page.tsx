"use client";

import React from 'react'
import { useState } from "react";
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
  "Computer repair",
  "Printer repair",
  "IT support",
  "Preventive maintenance",
  "Networking support",
  "Other",
];

export default function ContactPage() {
  const [subject, setSubject] = useState("");

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
              className="mt-3 text-5xl font-semibold tracking-tight"
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
              action="mailto:protechpcstore@gmail.com"
              method="post"
              encType="text/plain"
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
              >
                Send Message
              </Button>
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

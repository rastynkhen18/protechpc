import React from 'react'
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "2nd Floor LB Pagala Bldg., Brgy. Muzon Proper, San Jose del Monte, Philippines, 3023",
    href: "https://goo.gl/maps/1g5k6Z7x8yQ2",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+63 967 082 1565",
    href: "tel:+639670821565",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "protechpcstore@gmail.com",
    href: "mailto:protechpcstore@gmail.com",
  },
  {
    icon: ExternalLink,
    label: "Message us",
    value: "Facebook",
    href: "https://www.facebook.com/ProTechPcStore",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="grid gap-12 border-t border-border pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Let&apos;s work together
          </p>
          <h2
            id="contact-title"
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Keep your technology running smoothly.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-muted-foreground">
            Need help with a PC, POS system, laptop, or printer? Get in touch
            with our team and let&apos;s find the right solution for your business.
          </p>

         

          <div>
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted/60"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
                  <Icon className="size-5" />
                </div>
                <span className="min-w-0">
                  <span className="block text-sm leading-5 text-muted-foreground">
                    {label}
                  </span>
                  <span className="mt-2 block break-words font-semibold leading-5 group-hover:text-primary group-hover:underline">
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
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  className="h-11 w-full rounded-[var(--radius)] border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/20"
                />
              </div>

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

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-[var(--radius)] bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/80"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
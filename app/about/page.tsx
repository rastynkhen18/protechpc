import React from "react";
import Image from "next/image";
import ProtechPcHeroLogo from "@/assets/protechpchero.png";
import {
  Eye,
  Target,
} from "lucide-react";
import SocialBanner from "@/components/SocialBanner";

export default function AboutPage() {
  return (
    <>
    <section aria-labelledby="about-us-title" className="overflow-hidden py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="border-t border-border pt-16 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <article className="space-y-5 text-muted-foreground">
              <h2 id="about-us-title" className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground">
                Our Story
              </h2>
              <p className="text-sm leading-7">
                Founded in 2017, PROTECH PC is a Philippine-based IT company providing reliable
                technology products and professional IT support services. With hands-on experience
                dating back to 2017, we have built our reputation on one simple principle: prevent
                problems before they stop your business.
              </p>
              <p className="text-sm leading-7">
                We supply a complete range of computer sets, laptops, printers, peripherals, and
                computer and laptop parts, backed by expert technical services, preventive maintenance,
                and responsive after-sales support. Whether you are setting up a new office, upgrading
                an existing workstation, or keeping your systems running smoothly, we deliver the
                right products and solutions at fair and transparent prices.
              </p>
            </article>

            <div className="flex items-center justify-center">
              <Image
                src={ProtechPcHeroLogo}
                alt="ProtechPC Logo"
                className="h-auto max-h-100 w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>

        <div className="my-10 grid gap-6 sm:grid-cols-2">
          <article className="rounded-3xl bg-muted/30 p-8">
            <Target className="size-7 text-accent" />
            <h2 className="mt-4 text-xl font-semibold">Our Mission</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              To provide dependable, affordable, and high-quality IT products and services that
              keep our clients productive, secure, and connected, delivered with integrity,
              technical excellence, and a proactive approach to customer care.
            </p>
          </article>
          <article className="rounded-3xl bg-muted/30 p-8">
            <Eye className="size-7 text-destructive" />
            <h2 className="mt-4 text-xl font-semibold">Our Vision</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              To be a leading and most trusted IT solutions provider in our region, recognized for
              exceptional service, innovative technology solutions, and long-term partnerships
              that help businesses and individuals grow with confidence.
            </p>
          </article>
        </div>
        <SocialBanner />
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
  );
}

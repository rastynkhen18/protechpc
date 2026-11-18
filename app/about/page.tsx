import React from "react";
import Image from "next/image";
import ProtechPcHeroLogo from "@/assets/protechpchero.png";
import {
  Eye,
  Laptop,
  Target,
  Wrench,
} from "lucide-react";
import CallToAction from "@/components/cta";

const products = [
  ["Computer Sets & Packages", "Complete desktop computer sets and customized packages for home, school, office, and business use, available in a range of specifications and budgets."],
  ["Laptops", "A selection of laptops for students, professionals, business users, and everyday computing needs."],
  ["Printers", "Inkjet, ink tank, laser, and multifunction printers suited for home offices, schools, and business operations, along with compatible supplies."],
  ["Peripherals & Accessories", "Monitors, keyboards, mice, webcams, headsets, speakers, UPS and power protection, networking devices, external storage, cables, and other accessories."],
  ["Computer Parts", "Processors, motherboards, memory, storage drives, graphics cards, power supplies, cases, and cooling components for new builds and upgrades."],
  ["Laptop Parts", "Replacement batteries, chargers and adapters, screens, keyboards, storage, memory, and other laptop components."],
];

const services = [
  ["IT Support", "On-site and remote technical assistance for hardware, software, and network concerns, helping clients resolve issues quickly and get back to work."],
  ["Preventive Maintenance", "Scheduled inspection, cleaning, updates, performance checks, and system health monitoring to extend equipment life and minimize unexpected downtime."],
  ["Computer & Laptop Repair", "Diagnostics, troubleshooting, hardware replacement, and component-level support for desktops and laptops."],
  ["Upgrades & Optimization", "RAM, SSD, and component upgrades, plus operating system and software optimization to improve speed and performance."],
  ["Installation & Setup", "Setup of new computers, printers, peripherals, operating systems, and software, including configuration and user orientation."],
  ["Networking Support", "Basic network setup, Wi-Fi configuration, and troubleshooting for homes and offices."],
  ["Software & Security Support", "Operating system installation, software setup, antivirus protection, data backup, and virus and malware removal."],
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-us-title" className="mx-auto max-w-7xl mt-8 grid gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-12 lg:py-28">
        <div className="space-y-5 text-muted-foreground">
          <article className="space-y-4">
            <h2 id="about-us-title" className="max-w-3xl text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">Our Story</h2>
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
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={ProtechPcHeroLogo}
            alt="ProtechPC Logo"
            className="h-auto max-h-100 w-full max-w-lg object-contain"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
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
      </section>

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <section aria-labelledby="products-title" className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <Laptop className="size-8 text-primary" />
              <h2 id="products-title" className="mt-4 text-3xl font-bold">Products</h2>
            </div>
            <div className="space-y-4">
              {products.map(([title, description]) => (
                <article key={title} className="border-b border-border pb-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <Wrench className="size-8 text-accent" />
              <h2 id="services-title" className="mt-4 text-3xl font-bold">Services</h2>
            </div>
            <div className="space-y-4">
              {services.map(([title, description]) => (
                <article key={title} className="border-b border-border pb-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CallToAction />
    </>
  );
}

import React from "react";
import Image from "next/image";
import ProtechPcHeroLogo from "@/assets/protechpchero.png";
import {
  CheckCircle2,
  Eye,
  Laptop,
  Network,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";
import CallToAction from "@/components/cta";


const coreValues = [
  ["Proactivity", "We anticipate issues and act early, so our clients avoid costly downtime."],
  ["Integrity", "We are honest in our recommendations, pricing, and product quality."],
  ["Customer Focus", "We listen first, then recommend solutions that fit each client's needs and budget."],
  ["Excellence", "We maintain high technical standards in every product we sell and every service we perform."],
  ["Reliability", "We respond promptly, keep our commitments, and stand behind our work."],
  ["Continuous Improvement", "We keep learning and adopting new technologies to serve our clients better."],
];

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

const reasons = [
  "Proactive approach: We focus on preventing problems, not just fixing them.",
  "Complete solutions: Products, parts, and services under one roof.",
  "Quality you can trust: Carefully sourced products and professional workmanship.",
  "Fair, transparent pricing: Clear quotations with no hidden charges.",
  "Responsive support: Quick response times and dependable after-sales service.",
  "Customized recommendations: Solutions matched to your needs, whether for home, school, or business.",
];

const objectives = [
  "Offer a wide selection of quality computers, laptops, printers, peripherals, and parts from trusted brands.",
  "Provide fast, accurate diagnosis and repair for desktops, laptops, and office equipment.",
  "Increase the number of clients under regular preventive maintenance agreements each year.",
  "Respond to client inquiries and service requests promptly and professionally.",
  "Provide customized computer packages for different budgets and use cases, from home and school to office and business.",
  "Maintain a high customer satisfaction rate through quality products, fair pricing, and dependable after-sales support.",
  "Continuously train our technical team on the latest hardware, software, and security practices.",
  "Grow our client base by building a strong brand and reputation for trust and reliability.",
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-us-title" className="mx-auto mt-20 grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:px-12 lg:py-28">
        <div className="space-y-5 text-muted-foreground">
          <div className="space-y-4">
            <h2 id="about-us-title" className="text-5xl font-bold text-foreground">Our Story</h2>
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
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={ProtechPcHeroLogo}
            alt="ProtechPC Logo"
            className="h-auto max-h-100 w-full max-w-lg object-contain"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
          <article className="rounded-3xl border border-border bg-muted/30 p-8">
            <Target className="size-7 text-accent" />
            <h2 className="mt-4 text-xl font-semibold">Our Mission</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              To provide dependable, affordable, and high-quality IT products and services that
              keep our clients productive, secure, and connected, delivered with integrity,
              technical excellence, and a proactive approach to customer care.
            </p>
          </article>
          <article className="rounded-3xl border border-border bg-muted/30 p-8">
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

      <div className="mx-auto mt-24 max-w-7xl px-6 sm:px-10 lg:px-12">
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


      {/* <section aria-labelledby="values-title" className="mt-24">
        <div className="mb-8 max-w-2xl">
          <h2 id="values-title" className="text-3xl font-bold">Our Core Values</h2>
          <p className="mt-3 text-muted-foreground">The principles behind every recommendation, product, and service we provide.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-border p-6">
              <CheckCircle2 className="size-6 text-accent" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section> */}

      {/* <section aria-labelledby="goals-title" className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 id="goals-title" className="mt-4 text-3xl font-bold">Our Goals</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            We aim to make dependable IT support easier to access while building lasting
            relationships with the people and businesses we serve.
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Deliver complete IT solutions: Be a one-stop source for IT hardware, parts, and technical services.",
            "Build long-term client relationships through repeat business, referrals, and maintenance partnerships.",
            "Promote preventive IT care and educate clients on the value of regular maintenance.",
            "Expand our reach through our website, online channels, and community partnerships.",
            "Maintain service excellence from inquiry to after-sales support.",
          ].map((goal) => (
            <li key={goal} className="rounded-xl border border-border p-5 text-sm leading-6 text-muted-foreground">
              {goal}
            </li>
          ))}
        </ul>
      </section> */}

      {/* <section aria-labelledby="objectives-title" className="mt-24">
        <h2 id="objectives-title" className="text-3xl font-bold">Our Objectives</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((objective) => (
            <div key={objective} className="flex gap-3 rounded-2xl border border-border p-5 text-sm leading-6 text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>{objective}</span>
            </div>
          ))}
        </div>
      </section> */}


      {/* <section aria-labelledby="why-choose-us-title" className="mt-24 rounded-3xl bg-secondary p-8 sm:p-12">
        <div className="max-w-2xl">
          <ShieldCheck className="size-8 text-primary" />
          <h2 id="why-choose-us-title" className="mt-4 text-3xl font-bold">Why Choose Us</h2>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason} className="flex gap-3 text-sm leading-6">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </section> */}

      {/* <section aria-labelledby="who-we-serve-title" className="mt-24 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <Network className="size-8 text-primary" />
          <h2 id="who-we-serve-title" className="mt-4 text-3xl font-bold">Who We Serve</h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {["Homes and individual users", "Students and schools", "Small and medium-sized businesses", "Offices and professional firms", "Startups and growing enterprises"].map((audience) => (
            <li key={audience} className="rounded-xl border border-border px-5 py-4 text-muted-foreground">
              {audience}
            </li>
          ))}
        </ul>
      </section> */}
      <CallToAction />
    </>
  );
}

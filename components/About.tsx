import React from 'react';
import { CheckCircle2, Eye, Target, Wrench } from "lucide-react";

const services = [
  "Point of Sale systems",
  "Office computers and laptops",
  "Printers and everyday business equipment",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-us-title"
      className="container mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        <div className="space-y-2 text-sm leading-8 text-muted-foreground">
          <h1 id="about-us-title" className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"> About Us </h1>
          <p>ProtechPC is an IT support and preventive maintenance company dedicated to keeping businesses running smoothly. For 3 to 5 years, we have helped local businesses avoid costly downtime by catching hardware and system issues before they become full-blown breakdowns.</p>
          <p>We specialize in Point of Sale (POS) systems, office PCs, laptops, and printers — the everyday equipment businesses depend on. Our proactive approach means fewer surprises, less downtime, and more time for you to focus on running your business.</p>
        </div>


        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <article className="rounded-3xl border border-border bg-muted/30 p-8">
            <div className="flex items-center gap-4">
              <Target className="size-6 text-green-500 "/>
              <h2 className="text-xl font-semibold">Our mission</h2>
            </div>

            <p className="mt-4 leading-7 text-muted-foreground">
              To provide reliable, affordable, and proactive IT
              maintenance services that keep our clients&apos; technology
              running at its best.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-muted/30 p-8">
            <div className="flex items-center gap-4">
              <Eye className="size-6 text-red-500" />
               <h2 className="text-xl font-semibold">Our vision</h2>
            </div>

            <p className="mt-4 leading-7 text-muted-foreground">
              To be the trusted IT maintenance partner of choice for
              businesses in our community.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

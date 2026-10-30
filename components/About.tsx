import React from 'react';
import { CheckCircle2, Eye, Target, Wrench } from "lucide-react";
import FadeInOnView from "@/components/FadeInOnView";

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
      className="max-w-7xl mx-auto px-6 py-20 sm:px-10 lg:px-12 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        
          <div className="space-y-2 text-sm leading-8 text-muted-foreground">
          <h1 id="about-us-title" className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"> About Us </h1>
          <p>PROTECH PC is a supplier of IT products and computer services committed to giving individuals, students, gamers, and businesses access to dependable technology. From complete PC sets and high-performance gaming rigs to laptops, peripherals, printers, and computer parts, we bring everything our customers need together in one place.</p>
          <p>Beyond selling products, we guide our customers to the right choice and stand behind every sale with professional setup, repair, and maintenance services. Our goal is simple: quality technology, honest advice, and service that keeps you productive long after your purchase.</p>
          </div>
        


        <FadeInOnView>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <article className="rounded-3xl border border-border bg-muted/30 p-8">
            <div className="flex items-center gap-4">
              <Target className="size-6 text-green-500 " />
              <h2 className="text-xl font-semibold">Our mission</h2>
            </div>

            <p className="mt-4 leading-7 text-muted-foreground">
              To provide quality, reliable, and affordable IT products and services that empower our customers to work, learn, create, and play with confidence.
            </p>
          </article>

          <article className="rounded-3xl border border-border bg-muted/30 p-8">
            <div className="flex items-center gap-4">
              <Eye className="size-6 text-red-500" />
              <h2 className="text-xl font-semibold">Our vision</h2>
            </div>

            <p className="mt-4 leading-7 text-muted-foreground">
              To be the most trusted and preferred IT products and solutions provider in our community.
            </p>
          </article>
          </div>
        </FadeInOnView>
      </div>
    </section>
  );
}

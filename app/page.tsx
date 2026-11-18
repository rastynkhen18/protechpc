"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Laptop,
  MonitorCog,
  Printer,
  ShoppingCart,
  CheckCircle2,
  Wrench,
  Zap,
  ArrowUpRight,
  MessageCircle,
  ClipboardCheck,
  PackageCheck,
  Headphones,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeInOnView from "@/components/FadeInOnView";
import { Button } from "@/components/ui/button";
import PartnersMarquee from "@/components/partnersMarquee";
import ClientsMarquee from "@/components/clientsMarquee";
import CallToAction from "@/components/cta";


const featuredServices = [
  {
    icon: ShoppingCart,
    title: "Custom PC Builds",
    description:
      "A carefully matched setup built around your budget, workload, and performance goals.",
  },
  {
    icon: Wrench,
    title: "Computer Repair",
    description:
      "Reliable diagnosis and repair for hardware, software, and performance issues.",
  },
  {
    icon: Zap,
    title: "Upgrades & Maintenance",
    description:
      "Make your current system faster, cleaner, and ready for what comes next.",
  },
  {
    icon: Laptop,
    title: "Laptop Services",
    description:
      "Setup, troubleshooting, upgrades, and support for laptops at home, school, or work.",
  },
  {
    icon: Printer,
    title: "Printer Solutions",
    description:
      "Get your printer installed, connected, and working smoothly when you need it.",
  },
  {
    icon: MonitorCog,
    title: "Business IT Support",
    description:
      "Practical technology solutions for offices and small businesses that need dependable support.",
  },
];

const frequentlyAskedQuestions = [
  {
    question: "Can you help me choose the right PC or laptop?",
    answer:
      "Yes. Tell us how you plan to use it, your preferred specifications, and your budget. We will recommend options that fit your needs without unnecessary upgrades.",
  },
  {
    question: "Do you offer custom PC builds and upgrades?",
    answer:
      "We do. We can build a new system from compatible quality components or upgrade your current PC to improve performance and extend its usable life.",
  },
  {
    question: "What kinds of computer problems do you repair?",
    answer:
      "We help with hardware failures, slow performance, software issues, operating system setup, troubleshooting, cleaning, and other common computer problems.",
  },
  {
    question: "Can you set up my new computer or printer?",
    answer:
      "Yes. Our setup service can include device installation, software and operating system configuration, printer connection, and basic testing.",
  },
  {
    question: "Do you provide after-sales support?",
    answer:
      "Yes. We provide friendly guidance after your purchase and can help with warranty concerns, product questions, maintenance, and future upgrades.",
  },
];

const process = [
  {
    icon: MessageCircle,
    title: "Consult",
    description: "Understand your needs, budget, and use case",
  },
  {
    icon: ClipboardCheck,
    title: "Recommend",
    description: "Suggest the right products and configuration",
  },
  {
    icon: PackageCheck,
    title: "Deliver & Set Up",
    description: "Prepare, install, and test your equipment",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Provide after-sales help and maintenance",
  },
];

const benefits = [
  "Complete range — PC sets, gaming PCs, laptops, peripherals, printers, and parts under one roof",
  "Quality, genuine products from trusted brands at competitive prices",
  "Knowledgeable team that recommends what fits your needs and budget, not just what is in stock",
  "Custom builds and upgrades tailored to your performance goals",
  "In-house setup, repair, and maintenance services for complete peace of mind",
  "Friendly, responsive after-sales support you can count on",
];


export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const bounds = hero.getBoundingClientRect();
    hero.style.setProperty("--mesh-x", `${(event.clientX - bounds.left - bounds.width / 2) * -0.035}px`);
    hero.style.setProperty("--mesh-y", `${(event.clientY - bounds.top - bounds.height / 2) * -0.035}px`);
  }

  function handlePointerLeave() {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    hero.style.setProperty("--mesh-x", "0px");
    hero.style.setProperty("--mesh-y", "0px");
  }

  return (
    <>
      <section
        ref={heroRef}
        id="home"
        aria-labelledby="hero-title"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative isolate overflow-hidden bg-background text-foreground"
        style={{
          "--mesh-x": "0px",
          "--mesh-y": "0px",
        } as React.CSSProperties}
      >
        <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 -z-10 opacity-20 transition-transform duration-500 ease-out sm:-inset-16 sm:opacity-30 lg:-inset-24 lg:opacity-40"
                style={{
                    transform: "translate3d(var(--mesh-x), var(--mesh-y), 0)",
                }}
            >
                <svg
                    className="h-full w-full text-muted-foreground"
                    viewBox="0 0 1440 760"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <defs>
                        <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <g stroke="currentColor" strokeWidth="1" opacity=".65">
                        <path d="M-30 580 150 390 330 520 510 260 700 430 860 170 1040 350 1230 120 1480 280" />
                        <path d="M-30 580 120 720 330 520 480 700 700 430 850 690 1040 350 1190 650 1480 280" />
                        <path d="M150 390 330 520 510 260 700 430 860 170 1040 350 1230 120" />
                        <path d="M120 720 330 520 480 700 700 430 850 690 1040 350 1190 650" />
                        <path d="M330 520 700 430 1040 350 1190 650" />
                        <path d="M510 260 480 700M860 170 850 690M1230 120 1190 650" />
                        <path d="M150 390 480 700M510 260 850 690M860 170 1190 650" />
                        <path d="M330 520 860 170M700 430 1230 120M700 430 480 700" />
                        <path d="M-20 160 150 390M1040 350 1480 280M850 690 1230 120" />
                    </g>
                    <g fill="currentColor" filter="url(#node-glow)" opacity=".9">
                        <circle cx="30" cy="160" r="2" />
                        <circle cx="150" cy="390" r="3" />
                        <circle cx="330" cy="520" r="4" />
                        <circle cx="510" cy="260" r="3" />
                        <circle cx="700" cy="430" r="5" />
                        <circle cx="860" cy="170" r="3" />
                        <circle cx="1040" cy="350" r="4" />
                        <circle cx="1230" cy="120" r="3" />
                        <circle cx="480" cy="700" r="3" />
                        <circle cx="850" cy="690" r="3" />
                        <circle cx="1190" cy="650" r="4" />
                        <circle cx="1430" cy="500" r="2" />
                    </g>
                    <g fill="currentColor" opacity=".06">
                        <path d="m150 390 180 130 180-260Z" />
                        <path d="m330 520 370-90-220 270Z" />
                        <path d="m700 430 160-260 180 180Z" />
                        <path d="m700 430 340-80-190 340Z" />
                        <path d="m1040 350 190-230-40 530Z" />
                    </g>
                    <g fill="currentColor" opacity=".35">
                        <circle cx="30" cy="160" r="7" />
                        <circle cx="700" cy="430" r="10" />
                        <circle cx="1430" cy="500" r="7" />
                    </g>
                </svg>
            </div>
            {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_32%,color-mix(in_srgb,var(--primary)_18%,transparent),transparent_30%),radial-gradient(circle_at_20%_100%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_34%)]" /> */}
            {/* <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(color-mix(in_srgb,var(--border)_16%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--border)_16%,transparent)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,var(--foreground),transparent_85%)] sm:[background-size:48px_48px] lg:[background-size:64px_64px]" /> */}

        {/* // Hero content */}
        <div className="max-w-7xl mx-auto px-6 pb-0 pt-8 sm:px-10 lg:px-12">
          <div className="relative grid items-center gap-14 pb-8 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-28">
            <div className="relative z-10 max-w-2xl">
              <h1
                id="hero-title"
                className="max-w-3xl text-6xl font-semibold leading-[1.05] tracking-tight"
              >
                Build Your Dream{" "}
                <span className="bg-gradient-to-r from-primary via-destructive to-accent bg-clip-text text-transparent">
                  PC With Us Now.
                </span>
              </h1>
              {/* <span
                aria-hidden="true"
                className="mt-4 block h-1.5 w-32 bg-gradient-to-r from-accent via-destructive to-primary"
              /> */}
              <p className="mt-6 max-w-xl text-base text-muted-foreground">
                From powerful gaming setups to dependable everyday devices, ProTechPC helps you get more from your technology. Find the right PC, laptop, or printer. With IT support and preventive maintenance to keep your devices secure, reliable, and performing at their best.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="relative h-[38px] w-auto gap-2 rounded-[calc(var(--radius-md)*(1+(38/26-1)*0.35))] px-4 py-2 text-base hover:shadow-primary/30 md:text-sm"
                  render={<Link href="/products" />}
                >
                  Explore our products
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="relative h-[38px] w-auto gap-2 rounded-[calc(var(--radius-md)*(1+(38/26-1)*0.35))] px-4 py-2 text-base md:text-sm"
                  render={<Link href="/contact" />}
                >
                  Contact Us
                </Button>
              </div>

            </div>
            {/* <Image
              src={ProtechPcHeroLogo}
              alt="ProtechPC Logo"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-full max-w-xs -translate-x-1/2 -translate-y-1/2 opacity-15 sm:max-w-md lg:relative lg:left-auto lg:top-auto lg:z-auto lg:translate-x-0 lg:translate-y-0 lg:max-w-lg lg:opacity-100"
            /> */}
          </div>
        </div>
        <PartnersMarquee />
      </section>

      <section
        id="featured"
        aria-labelledby="featured-title"
        className="overflow-hidden bg-background py-12"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex w-fit items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              What We Do
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2
              id="featured-title"
              className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Technology that works{" "}
              <span className="bg-gradient-to-r from-primary via-destructive to-accent bg-clip-text text-transparent">
                for you.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">
              From choosing the right device to keeping it running at its best,
              we make technology easier.
            </p>
          </div>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 hidden size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/20 lg:block"
            />
            <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                  <ArrowUpRight
                    className="absolute bottom-6 right-6 size-4 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="service-details"
        aria-label="How we work and why choose us"
        className="overflow-hidden bg-background py-10"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <FadeInOnView>
            <div className="border-t border-border py-16 sm:py-20">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex w-fit items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="h-px w-8 bg-accent" />
                  Simple, dependable care.
                  <span className="h-px w-8 bg-primary" />
                </div>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  How We{" "}
                  <span className="bg-gradient-to-r from-accent via-destructive to-primary bg-clip-text text-transparent">
                    Work.
                  </span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">
                  From the first conversation to ongoing support, every step is
                  connected to making your technology work better.
                </p>
              </div>

              <div className="relative mt-12">
                <div
                  aria-hidden="true"
                  className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-accent/40 via-destructive/50 to-primary/40 sm:block"
                />
                <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {process.map(({ icon: Icon, title, description }, index) => (
                    <article
                      key={title}
                      className="group relative rounded-3xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="relative mx-auto flex size-16 items-center justify-center rounded-full border-8 border-background bg-primary/10 text-primary ring-1 ring-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="mt-5 block font-mono text-xs font-semibold tracking-widest text-muted-foreground/60">
                        STEP {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </FadeInOnView>

          <FadeInOnView>
            <div className="border-t border-border py-16 sm:py-20">
              <div className="grid overflow-hidden rounded-3xl border border-border bg-muted/30 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="relative overflow-hidden bg-foreground p-8 text-background sm:p-10 lg:p-12">
                  <div
                    aria-hidden="true"
                    className="absolute -right-20 -top-20 size-56 rounded-full border-[24px] border-background/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-28 -left-16 size-64 rounded-full border-[32px] border-primary/30"
                  />
                  <div className="relative flex h-full flex-col">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background/60">
                      Why Choose Us
                    </p>
                    <h2 className="mt-5 max-w-sm text-3xl font-semibold tracking-tight sm:text-4xl">
                      Technology support with fewer surprises.
                    </h2>
                    <p className="mt-5 max-w-md leading-7 text-background/70">
                      Friendly, responsive after-sales support you can count on.
                    </p>
                    <div className="mt-auto hidden pt-12 sm:block">
                      <div className="h-px w-16 bg-primary" />
                      <p className="mt-4 text-sm font-medium text-background/70">
                        Built around your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-px bg-border sm:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div
                      key={benefit}
                      className="group bg-background p-6 transition-colors hover:bg-muted/50 sm:p-8"
                    >
                      <div className="flex items-center justify-between">
                        <CheckCircle2 className="size-5 text-green-500 transition-transform group-hover:scale-110" />
                        <span className="font-mono text-xs font-semibold text-muted-foreground/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-8 text-sm leading-6">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ClientsMarquee />
          </FadeInOnView>
        </div>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-title"
        className="overflow-hidden bg-background py-10"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <FadeInOnView>
            <div className="border-t border-border py-16 sm:py-20">
              <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    FAQ
                  </p>
                  <h2
                    id="faq-title"
                    className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                  >
                    Frequently Asked Questions.
                  </h2>
                  <p className="mt-4 max-w-md leading-7 text-muted-foreground">
                    Can&apos;t find what you need? Our team is happy to help you find the right solution.
                  </p>
                </div>

                <Accordion>
                  {frequentlyAskedQuestions.map(({ question, answer }, index) => (
                    <AccordionItem
                      key={question}
                      value={`question-${index}`}
                      className="py-5 first:pt-0 last:pb-0"
                    >
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="max-w-2xl pt-3 leading-6 text-muted-foreground">
                          {answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </FadeInOnView>
        </div>
      </section>
      <CallToAction />
    </>
  );
}

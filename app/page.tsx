"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Laptop,
  MonitorCog,
  Printer,
  ShoppingCart,
  Wrench,
  Zap,
} from "lucide-react";
import ProtechPcHeroLogo from "@/assets/protechpchero.png";
import FadeInOnView from "@/components/FadeInOnView";
import SlideShow from "@/components/slideShow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
        {/* <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 -z-10 opacity-20 transition-transform duration-500 ease-out sm:-inset-16 sm:opacity-30 lg:-inset-24 lg:opacity-40"
                style={{
                    transform: "translate3d(var(--mesh-x), var(--mesh-y), 0)",
                }}
            >
                <svg
                    className="h-full w-full text-primary"
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
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_32%,color-mix(in_srgb,var(--primary)_18%,transparent),transparent_30%),radial-gradient(circle_at_20%_100%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_34%)]" />
            <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(color-mix(in_srgb,var(--border)_16%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--border)_16%,transparent)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,var(--foreground),transparent_85%)] sm:[background-size:48px_48px] lg:[background-size:64px_64px]" /> */}

        {/* // Hero content */}
        <div className="max-w-7xl mx-auto px-6 pb-0 pt-8 sm:px-10 lg:px-12">
          <div className="relative grid items-center gap-14 pb-8 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-28">
            <div className="relative z-10 max-w-2xl">
              <h1
                id="hero-title"
                className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-5xl"
              >
                Build Your Dream PC With Us Now.
              </h1>
              <p className="mt-5 max-w-xl text-md leading-8 text-muted-foreground">
                Your trusted source for PC products and IT solutions. Quality, reliable, and professional computer solutions for your
                home, business, school, and gaming needs. Whether you are
                upgrading your setup, building your first gaming PC, or need
                reliable IT support, ProtechPC is here to help. Our services
                include computer repair, preventive maintenance, deep cleaning,
                troubleshooting, laptop services, and printer services.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Button
                  size="lg"
                  className="relative h-[38px] w-auto gap-2 rounded-[calc(var(--radius-md)*(1+(38/26-1)*0.35))] px-4 py-2 text-base hover:shadow-primary/30 md:text-sm"
                  render={<Link href="/services" />}
                >
                  Explore our solutions
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
            <Image
              src={ProtechPcHeroLogo}
              alt="ProtechPC Logo"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-full max-w-xs -translate-x-1/2 -translate-y-1/2 opacity-15 sm:max-w-md lg:relative lg:left-auto lg:top-auto lg:z-auto lg:translate-x-0 lg:translate-y-0 lg:max-w-lg lg:opacity-100"
            />
          </div>
        </div>
        <SlideShow />
      </section>

      <section
        id="featured"
        aria-labelledby="featured-title"
        className="overflow-hidden bg-background py-10"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <FadeInOnView>
            <div className="border-t border-border pt-16 sm:pt-20">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Featured / What We Do
                  </p>
                  <h2
                    id="featured-title"
                    className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                  >
                    Practical technology support, all in one place.
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                  From choosing the right device to keeping it running at its best, we make technology easier.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {featuredServices.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="group rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted"
                  >
                    <div className="flex size-11 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
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
                    Questions, answered.
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
    </>
  );
}

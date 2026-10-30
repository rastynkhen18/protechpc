"use client";

import Image from "next/image";
import { useRef } from "react";
import ProtechPcLogo from "../assets/protechpc.png";
import SlideShow from "@/components/slideShow";



export default function HeroSection() {
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
                className="pointer-events-none absolute -inset-24 -z-10 opacity-40 transition-transform duration-500 ease-out"
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
            <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(color-mix(in_srgb,var(--border)_16%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_srgb,var(--border)_16%,transparent)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,var(--foreground),transparent_85%)]" />

            <div className="container mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10 lg:px-12 lg:pb-28">
                <div className="grid items-center gap-14 pb-6 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-28">
                    <div className="max-w-2xl">

                        <h1
                            id="hero-title"
                            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-5xl"
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
                        {/* <ul className="mt-7 grid max-w-xl gap-3 text-sm text-foreground sm:grid-cols-2">
                            {[
                                "Gaming PC sets",
                                "Laptops for work and school",
                                "Printers for home and office",
                                "Repair and maintenance",
                            ].map((service) => (
                                <li key={service} className="flex items-center gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-xs text-primary"
                                    >
                                        ✓
                                    </span>
                                    {service}
                                </li>
                            ))}
                        </ul> */}
                        <div className="mt-5 flex flex-wrap items-center gap-4">
                            <a
                                href="#services"
                                className="rounded-[var(--radius)] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/80 hover:shadow-primary/30"
                            >
                                Explore our solutions
                                <span aria-hidden="true" className="ml-2">
                                    →
                                </span>
                            </a>
                            <a
                                href="#about"
                                className="border border-border rounded-[var(--radius)] px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-ring hover:text-foreground"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <SlideShow />
        </section>
    );
}

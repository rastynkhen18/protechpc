"use client";

import Image from "next/image";
import { useRef } from "react";
import ProtechPcLogo from "../assets/protechpc.png";



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
      className="relative isolate overflow-hidden bg-slate-950 text-white"
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
          className="h-full w-full text-blue-300"
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_32%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_20%_100%,rgba(14,165,233,0.16),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-10 lg:px-12 lg:pb-28">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="transition-opacity hover:opacity-80">
            <Image src={ProtechPcLogo} alt="ProtechPC" width={130} priority />
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition-colors hover:text-white" href="#home">
              Home
            </a>
            <a className="transition-colors hover:text-white" href="#about">
              About
            </a>
             <a className="transition-colors hover:text-white" href="#about">
              Products
            </a>
            <a className="transition-colors hover:text-white" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-blue-400 hover:text-white"
          >
            Get in touch
          </a>
        </nav>

        <div className="grid items-center gap-14 pb-6 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-28">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-blue-400">
              <span className="h-px w-8 bg-blue-400" />
              Your trusted source for PC products and IT solutions
            </p>
            <h1
              id="hero-title"
              className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-5xl"
            >
              Build Your Dream PC
              <span className="block text-blue-400">With Us.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Quality, reliable, and professional computer solutions for your
              home, business, school, and gaming needs. Whether you are
              upgrading your setup, building your first gaming PC, or need
              reliable IT support, ProtechPC is here to help. Our services
              include computer repair, preventive maintenance, deep cleaning,
              troubleshooting, laptop services, and printer services.
            </p>
            <ul className="mt-7 grid max-w-xl gap-3 text-sm text-slate-200 sm:grid-cols-2">
              {[
                "Gaming PC sets",
                "Laptops for work and school",
                "Printers for home and office",
                "Repair and maintenance",
              ].map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400/15 text-xs text-blue-300"
                  >
                    ✓
                  </span>
                  {service}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-400 hover:shadow-blue-400/30"
              >
                Explore our solutions
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
              <a
                href="#about"
                className="rounded-full border border-slate-700 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
              >
                Contact ProtechPC
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:justify-self-end">
            <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    ProtechPC services
                  </p>
                  <p className="mt-1 text-lg font-semibold">Here to help</p>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Reliable
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-sm text-slate-400">Support for</p>
                  <p className="mt-1 text-4xl font-semibold tracking-tight">Every need</p>
                </div>
                <svg
                  aria-hidden="true"
                  className="h-24 w-56"
                  viewBox="0 0 224 96"
                  fill="none"
                >
                  <path
                    d="M2 78C25 75 29 52 48 57C67 62 67 70 87 61C106 52 106 25 128 34C150 43 148 57 166 45C184 33 194 38 222 10"
                    stroke="#60A5FA"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                  <path
                    d="M2 78C25 75 29 52 48 57C67 62 67 70 87 61C106 52 106 25 128 34C150 43 148 57 166 45C184 33 194 38 222 10V96H2V78Z"
                    fill="url(#fill)"
                    opacity=".25"
                  />
                  <defs>
                    <linearGradient id="fill" x1="112" y1="10" x2="112" y2="96" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60A5FA" />
                      <stop offset="1" stopColor="#60A5FA" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {["Home", "Business", "Gaming"].map((item) => (
                  <div key={item} className="rounded-xl bg-slate-900/70 px-3 py-3 text-center">
                    <span className="text-xs text-slate-400">{item}</span>
                    <span className="mt-1 block text-sm font-semibold text-blue-300">✓</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl sm:-left-10">
              <p className="text-xs text-slate-400">Professional IT support</p>
              <p className="mt-1 text-sm font-semibold">Built around you</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

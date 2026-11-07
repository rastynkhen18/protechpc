import React from 'react'
import FadeInOnView from '@/components/FadeInOnView'
import { Cpu, Gamepad2, Keyboard, Laptop, Monitor, Printer } from 'lucide-react'

const products = [
  {
    icon: Monitor,
    title: "PC Sets",
    description:
      "Complete desktop packages for home, school, and office use, ready to plug in and perform from day one.",
  },
  {
    icon: Gamepad2,
    title: "Gaming PCs",
    description:
      "High-performance gaming rigs built for smooth gameplay, fast load times, and room to upgrade.",
  },
  {
    icon: Laptop,
    title: "Laptops",
    description:
      "A wide range of laptops for students, professionals, and creators, from everyday models to performance machines.",
  },
  {
    icon: Keyboard,
    title: "Peripherals",
    description:
      "Monitors, keyboards, mice, headsets, webcams, speakers, and other accessories to complete any setup.",
  },
  {
    icon: Printer,
    title: "Printers",
    description:
      "Reliable printing, scanning, and copying solutions for home, small business, and office needs.",
  },
  {
    icon: Cpu,
    title: "Computer Parts",
    description:
      "Processors, graphics cards, memory, storage, motherboards, power supplies, and cooling for builds and upgrades.",
  },
]

export default function page() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="overflow-hidden bg-background py-10"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="border-t border-border pt-16 sm:pt-20">

          <FadeInOnView>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Our Products
                </p>
                <h2
                  id="products-title"
                  className="mt-3 text-3xl font-semibold tracking-tight"
                >
                  Technology for every need
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                A complete range of IT products to match every need and budget.
              </p>
            </div>
          </FadeInOnView>

          <FadeInOnView>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </FadeInOnView>

        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Image from 'next/image'
import CallToAction from "@/components/CallToAction";

const products = [
  {
    image: "photo-1593640408182-31c70c8268f5",
    title: "Computer Sets & Packages",
    description:
      "Complete desktop computer sets and customized packages for home, school, office, and business use, available in a range of specifications and budgets.",
  },
  {
    image: "photo-1496181133206-80ce9b88a853",
    title: "Laptops",
    description:
      "A selection of laptops for students, professionals, business users, and everyday computing needs.",
  },
  {
    image: "photo-1612815154858-60aa4c59eaa6",
    title: "Printers",
    description:
      "Inkjet, ink tank, laser, and multifunction printers suited for home offices, schools, and business operations, along with compatible supplies.",
  },
  {
    image: "photo-1587829741301-dc798b83add3",
    title: "Peripherals & Accessories",
    description:
      "Monitors, keyboards, mice, webcams, headsets, speakers, UPS and power protection, networking devices, external storage, cables, and other accessories.",
  },
  {
    image: "photo-1587202372775-e229f172b9d7",
    title: "Computer Parts",
    description:
      "Processors, motherboards, memory (RAM), storage drives (SSD and HDD), graphics cards, power supplies, cases, and cooling components for new builds and upgrades.",
  },
  {
    image: "photo-1555617981-dac3880eac6e",
    title: "Laptop Parts",
    description:
      "Replacement batteries, chargers and adapters, screens, keyboards, storage, memory, and other laptop components.",
  },
]

const imageUrl = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

export default function page() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="overflow-hidden bg-background py-10"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="border-t border-border pt-16 sm:pt-20">
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


            <div className="my-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map(({ image, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted"
                >
                  <Image
                    src={imageUrl(image)}
                    alt={title}
                    width={900}
                    height={520}
                    className="h-40 w-full rounded-xl object-cover"
                  />
                  <h3 className="mt-5 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>
        </div>
        <CallToAction />
      </div>
    </section>
  )
}

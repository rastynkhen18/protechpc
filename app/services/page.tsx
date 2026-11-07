import {
  Laptop,
  MonitorCog,
  Printer,
  ShoppingCart,
} from "lucide-react";
import FadeInOnView from '@/components/FadeInOnView'

const services = [
  {
    icon: ShoppingCart,
    title: "Custom PC Build & Upgrade",
    description:
      "Systems built and upgraded to your budget and performance goals, with compatible, quality components.",
  },
  {
    icon: Laptop,
    title: "Installation & Setup",
    description:
      "Hands-on setup of computers, printers, and peripherals, including operating system and software installation.",
  },
  {
    icon: MonitorCog,
    title: "Repair & Troubleshooting",
    description:
      "Diagnosis and repair of hardware and software problems to get you back up and running quickly.",
  },
  {
    icon: Printer,
    title: "Preventive Maintenance",
    description:
      "Cleaning, tune-ups, and system checks that extend equipment life and prevent costly breakdowns.",
  },
  {
    icon: MonitorCog,
    title: "Office & Business Solutions",
    description:
      "Bulk equipment supply and workstation setups tailored to the needs of offices and small businesses.",
  },
  {
    icon: ShoppingCart,
    title: "After-Sales Support",
    description:
      "Friendly, responsive support and guidance on warranty and product concerns after your purchase.",
  },
];

export default function page() {
  return (
    <section
      id="services"
      aria-labelledby="about-title"
      className="overflow-hidden bg-background py-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        <FadeInOnView>
          <div className="border-t border-border pt-16 sm:pt-20">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Our Services
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  IT Support and Preventive Maintenance
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Professional support that goes hand in hand with every product we sell:
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-background text-primary shadow-sm">
                    <Icon className="size-5" />
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
  )
}

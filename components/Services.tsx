import {
  CheckCircle2,
  Laptop,
  MonitorCog,
  Printer,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";

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

const process = [
  ["1", "Consult", "Understand your needs, budget, and use case"],
  ["2", "Recommend", "Suggest the right products and configuration"],
  ["3", "Deliver & Set Up", "Prepare, install, and test your equipment"],
  ["4", "Support", "Provide after-sales help and maintenance"],
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="about-title"
      className="overflow-hidden bg-background py-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

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
                <div className="flex size-11 items-center justify-center rounded-xl bg-background text-foreground shadow-sm">
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

        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Simple, dependable care.
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            How We Work
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {process.map(([number, title, description]) => (
              <div key={number} className="flex gap-4">
                <span className="text-sm font-semibold text-muted-foreground">
                  {number}
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-y border-border py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              {/* <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
                <ShieldCheck className="size-6" />
              </div> */}
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Technology support with fewer surprises.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-muted-foreground">
                Friendly, responsive after-sales support you can count on.
              </p>
            </div>

            <div className="grid divide-y divide-border">
              {[
                "Complete range — PC sets, gaming PCs, laptops, peripherals, printers, and parts under one roof",
                "Quality, genuine products from trusted brands at competitive prices",
                "Knowledgeable team that recommends what fits your needs and budget, not just what is in stock",
                "Custom builds and upgrades tailored to your performance goals",
                "In-house setup, repair, and maintenance services for complete peace of mind",
                "Friendly, responsive after-sales support you can count on",
              ].map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <span className="mt-0.5 text-sm font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-500" />
                    <p className="leading-7">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

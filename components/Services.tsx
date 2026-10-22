import {
  CheckCircle2,
  ClipboardCheck,
  Laptop,
  MonitorCog,
  Printer,
  ShieldCheck,
  ShoppingCart,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "POS Systems Maintenance",
    description:
      "Keep checkout terminals and peripherals ready for every transaction.",
  },
  {
    icon: Laptop,
    title: "Laptop Maintenance",
    description:
      "Extend device life with performance tune-ups and hardware inspections.",
  },
  {
    icon: MonitorCog,
    title: "Office PCs",
    description:
      "Maintain fast, dependable workstations with routine care and updates.",
  },
  {
    icon: Printer,
    title: "Printers",
    description:
      "Reduce paper jams and print issues through scheduled cleaning and service.",
  },
];

const process = [
  ["01", "Assess", "We inspect your equipment and current setup."],
  ["02", "Schedule", "We build a maintenance plan around your hours."],
  ["03", "Maintain", "We perform preventive checks and servicing."],
  ["04", "Report", "We share clear findings and recommendations."],
];

export default function Services() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="overflow-hidden border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        <div className="border-t border-border pt-16 sm:pt-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Our Services
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              We offer comprehensive preventive maintenance services for the technology your business relies on every day:
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

        <div className="grid gap-12 border-t border-border py-16 sm:py-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Simple, dependable care.
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
      </div>
    </section>
  );
}

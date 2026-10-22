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
    title: "POS Systems Maintenance",
    description:
      "Regular checkups and servicing of Point of Sale terminals and peripherals to prevent transaction downtime.",
  },
  {
    icon: Laptop,
    title: "Laptop Maintenance",
    description:
      "Preventive servicing for company laptops, including performance tune-ups and hardware inspections.",
  },
  {
    icon: MonitorCog,
    title: "Office PC Maintenance",
    description:
      "Routine cleaning, software updates, and hardware checks to keep desktop workstations running efficiently.",
  },
  {
    icon: Printer,
    title: "Printer Maintenance",
    description:
      "Scheduled cleaning, part checks, and servicing to reduce paper jams and print quality issues",
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
      id="services"
      aria-labelledby="about-title"
      className="overflow-hidden bg-background py-10"
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        <div className="border-t border-border pt-16 sm:pt-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                IT Support and Preventive Maintenance
              </p>
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

        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Simple, dependable care.
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              How we work
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
                Why choose us
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Technology support with fewer surprises.
              </h2>
              <p className="mt-4 max-w-md leading-7 text-muted-foreground">
                We take care of the details behind the scenes so your team can
                focus on serving customers.
              </p>
            </div>

            <div className="grid divide-y divide-border">
              {[
                "Proactive checks before small issues become downtime",
                "Experienced support for POS systems, PCs, laptops, and printers",
                "Maintenance schedules built around your business hours",
                "Responsive, friendly support when you need it",
                "Affordable care that helps reduce emergency repair costs",
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

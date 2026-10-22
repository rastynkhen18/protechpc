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
      id="about"
      aria-labelledby="about-title"
      className="overflow-hidden bg-background py-10 sm:py-28"
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



        <div>
          WHY CHOOSE US
          Proactive approach — we catch problems before they cause downtime   Experienced in supporting POS systems, PCs, laptops, and printers   Flexible maintenance schedules tailored to your business hours   Responsive, friendly support you can count on   Affordable preventive care that saves you money on emergency repairs 
        </div>
      </div>
    </section>
  );
}

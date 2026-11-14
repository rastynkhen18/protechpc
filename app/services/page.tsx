import Image from "next/image";


const services = [
  {
    image: "photo-1556761175-b413da4baf72",
    title: "IT Support",
    description:
      "On-site and remote technical assistance for hardware, software, and network concerns, helping clients resolve issues quickly and get back to work.",
  },
  {
    image: "photo-1581091226825-a6a2a5aee158",
    title: "Preventive Maintenance",
    description:
      "Scheduled inspection, cleaning, updates, performance checks, and system health monitoring to extend equipment life and minimize unexpected downtime.",
  },
  {
    image: "photo-1593642532400-2682810df593",
    title: "Computer & Laptop Repair",
    description:
      "Diagnostics, troubleshooting, hardware replacement, and component-level support for desktops and laptops.",
  },
  {
    image: "photo-1597872200969-2b65d56bd16b",
    title: "Upgrades & Optimization",
    description:
      "RAM, SSD, and component upgrades, plus operating system and software optimization to improve speed and performance.",
  },
  {
    image: "photo-1516321318423-f06f85e504b3",
    title: "Installation & Setup",
    description:
      "Setup of new computers, printers, peripherals, operating systems, and software, including configuration and user orientation.",
  },
  {
    image: "photo-1558494949-ef010cbdcc31",
    title: "Networking Support",
    description:
      "Basic network setup, Wi-Fi configuration, and troubleshooting for homes and offices.",
  },
  {
    image: "photo-1563013544-824ae1b704d3",
    title: "Software & Security Support",
    description:
      "Operating system installation, software setup, antivirus protection, data backup, and virus and malware removal.",
  },
];

const imageUrl = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export default function page() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="overflow-hidden bg-background py-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="border-t border-border pt-16 sm:pt-20">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Our Services
                </p>
                <h2 id="services-title" className="mt-3 text-3xl font-semibold tracking-tight">
                  IT Support and Preventive Maintenance
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Professional support that goes hand in hand with every product we sell:
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ image, title, description }) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-border bg-muted/30 p-6 transition-colors hover:bg-muted"
                >
                  <Image
                    src={imageUrl(image)}
                    alt=""
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
      </div>
    </section>
  )
}

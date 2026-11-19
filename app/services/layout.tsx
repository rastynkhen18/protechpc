import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProTechPC | Services",
  description:
    "Get reliable IT support, repairs, maintenance, upgrades, and technology services from ProTechPC.",
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

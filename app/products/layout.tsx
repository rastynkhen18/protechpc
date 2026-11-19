import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProTechPC | Products",
  description:
    "Explore ProTechPC computers, laptops, printers, parts, and accessories.",
};

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

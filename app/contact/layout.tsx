import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProTechPC | Contact Us",
  description:
    "Contact ProTechPC for computer products, IT support, repairs, and maintenance services.",
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

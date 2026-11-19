import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProTechPC | About Us",
  description:
    "Learn about ProTechPC and our commitment to reliable technology products and IT support.",
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

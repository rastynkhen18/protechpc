import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProTechPC | Blogs",
  description:
    "Read the latest ProTechPC announcements, product updates, services, and store news.",
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

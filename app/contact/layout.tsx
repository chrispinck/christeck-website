import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CHRISTECK | Engineering Knowledge + Engineering Services",
  description:
    "Contact CHRISTECK for LV switchboard engineering, IEC 61439 design verification support, temperature-rise assessment, busbar design, and technical documentation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
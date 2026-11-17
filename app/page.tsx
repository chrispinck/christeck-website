import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Resources from "@/components/home/Resources";
import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "CHRISTECK | LV Switchboard Engineering & IEC 61439",
  description:
    "CHRISTECK provides LV switchboard engineering, IEC 61439 design verification support, temperature-rise assessment, busbar system design and technical documentation for engineering teams in Australia, New Zealand and India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://christeck.in",
    siteName: "CHRISTECK",
    title: "CHRISTECK | Engineering Knowledge & Engineering Services",
    description:
      "Engineering knowledge and professional services for LV switchboards, IEC 61439 design verification, temperature-rise assessment and busbar design.",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 1536,
        height: 1024,
        alt: "CHRISTECK – Engineering Knowledge and Engineering Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHRISTECK | LV Switchboard Engineering",
    description:
      "Engineering knowledge and services for LV switchboard manufacturers, panel builders and engineering teams.",
    images: ["/images/hero-engineering-v1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Resources />
      <About />
      <ContactCTA />
    </main>
  );
}
import type { Metadata } from "next";
import ServicesExplorer from "@/components/services/ServicesExplorer";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ProfessionalServiceSchema from "@/components/seo/ProfessionalServiceSchema";

export const metadata: Metadata = {
  title: "LV Switchboard Engineering Services | CHRISTECK",
  description:
    "Professional LV switchboard engineering services, IEC 61439 design verification, temperature rise assessment, busbar design, and technical documentation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "LV Switchboard Engineering Services | CHRISTECK",
    description:
      "Engineering knowledge and services for LV switchboards, design verification, thermal assessment, and technical documentation.",
    url: "https://christeck.in/services",
    siteName: "CHRISTECK",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 1536,
        height: 1024,
        alt: "CHRISTECK LV Switchboard Engineering Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LV Switchboard Engineering Services | CHRISTECK",
    description:
      "Professional engineering services for LV switchboards and IEC 61439 design verification.",
    images: ["/images/hero-engineering-v1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return (
    <>
      <ProfessionalServiceSchema />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />

      <ServicesExplorer />
    </>
  );
}
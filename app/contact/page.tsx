import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Our Engineering Team",
  description:
    "Contact CHRISTECK for LV switchboard engineering, IEC 61439 design verification support, temperature-rise assessments, busbar design and technical documentation.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    url: "https://christeck.in/contact",
    siteName: "CHRISTECK",
    title: "Contact CHRISTECK | Engineering Support",
    description:
      "Discuss your LV switchboard engineering requirements with CHRISTECK. Contact us for IEC 61439 support, temperature-rise assessments, busbar design and technical documentation.",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 1536,
        height: 1024,
        alt: "Contact CHRISTECK Engineering Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact CHRISTECK | Engineering Support",
    description:
      "Get in touch with CHRISTECK to discuss your LV switchboard engineering requirements.",
    images: ["/images/hero-engineering-v1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
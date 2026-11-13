import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  FileText,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "LV Switchboard Engineering Support",
  description:
    "LV switchboard engineering services covering IEC 61439, GA drawings, busbar design, temperature-rise assessments, technical calculations and documentation.",
  alternates: {
    canonical: "/services/lv-switchboard-engineering",
  },
  openGraph: {
    type: "website",
    url: "https://christeck.in/services/lv-switchboard-engineering",
    siteName: "CHRISTECK",
    title: "LV Switchboard Engineering Support",
    description:
      "Engineering support for LV switchboard manufacturers, panel builders and engineering teams, including design reviews, calculations and IEC 61439 documentation.",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 840,
        height: 840,
        alt: "CHRISTECK LV switchboard engineering services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LV Switchboard Engineering Support",
    description:
      "Professional LV switchboard engineering, design reviews, technical calculations and IEC 61439 documentation.",
    images: ["/images/hero-engineering-v1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const capabilities = [
  {
    icon: CircuitBoard,
    title: "Switchboard Design Support",
    description:
      "Engineering support for LV switchboard arrangements, functional units, compartments, and assembly configurations.",
  },
  {
    icon: ShieldCheck,
    title: "IEC 61439 Compliance",
    description:
      "Support with applicable IEC 61439-1 and IEC 61439-2 requirements, design verification planning, and technical evidence",
  },
  {
    icon: Layers3,
    title: "GA Drawings & Layouts",
    description:
      "Support for general arrangement drawings, section layouts, equipment placement, and enclosure integration",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Calculations",
    description:
      "Engineering calculations and technical reviews relating to temperature rise, busbar selection, and short-circuit requirements",
  },
  {
    icon: FileText,
    title: "Engineering Documentation",
    description:
      "Organised technical documents, calculation sheets, design records, and supporting information for project review",
  },
  {
    icon: CheckCircle2,
    title: "Design Review",
    description:
      "Review of available drawings and specifications to identify technical gaps, coordination issues, and items requiring confirmation",
  },
];

const deliverables = [
  "General arrangement drawing review and engineering inputs",
  "IEC 61439 design-verification support documentation",
  "Temperature-rise assessment calculations, where applicable",
  "Busbar selection and technical calculation support",
  "Technical queries, assumptions, and clarification records",
  "Engineering document review and recommendations",
];

const process = [
  {
    number: "01",
    title: "Understand the Requirements",
    description:
      "Review the project specification, single-line diagram, ratings, applicable standards, and available drawings",
  },
  {
    number: "02",
    title: "Review the Design",
    description:
      "Assess the proposed arrangement, enclosure configuration, switchgear selection, and available verification evidence",
  },
  {
    number: "03",
    title: "Develop Engineering Outputs",
    description:
      "Prepare the agreed calculations, drawing inputs, technical notes, and supporting documentation",
  },
  {
    number: "04",
    title: "Review & Finalise",
    description:
      "Address comments, record assumptions, and provide the agreed deliverables for project coordination",
  },
];

export default function LVSwitchboardEngineeringPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://christeck.in/" },
          { name: "Services", url: "https://christeck.in/services" },
          {
            name: "LV Switchboard Engineering",
            url: "https://christeck.in/services/lv-switchboard-engineering",
          },
        ]}
      />

      <main>
        {/* Keep your existing page sections and content unchanged */}
      {/* Replace this comment with the complete existing <main> content */}
      {/* from your original LVSwitchboardEngineeringPage component */}
    </main>
    </>
  );
}
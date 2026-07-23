import {
  ShieldCheck,
  Globe,
  Thermometer,
  FileText,
  Lightbulb,
  Zap,
} from "lucide-react";

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    icon: Zap,
    title: "LV Switchboard Design",
    description:
      "Professional low-voltage switchboard design tailored to industrial, commercial and infrastructure projects. We focus on safe, reliable and maintainable power distribution solutions.",
    href: "/services/lv-switchboard-design",
  },
  {
    icon: ShieldCheck,
    title: "IEC 61439 Design Verification",
    description:
      "Engineering support for IEC 61439 design verification, helping manufacturers and panel builders achieve compliant low-voltage assemblies with confidence.",
    href: "/services/iec-61439-design-verification",
  },
  {
    icon: Globe,
    title: "AS/NZS 61439 Compliance",
    description:
      "Engineering solutions developed for Australian and New Zealand markets, supporting AS/NZS 61439 requirements for compliant switchboard assemblies.",
    href: "/services/asnzs-61439-compliance",
  },
  {
    icon: Thermometer,
    title: "Temperature Rise Assessment",
    description:
      "Thermal verification using IEC TR 60890 methodology to evaluate heat dissipation, equipment arrangement and safe operating temperatures.",
    href: "/services/temperature-rise-assessment",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Preparation of single-line diagrams, general arrangement drawings, bill of materials, engineering calculations and technical documentation for project delivery.",
    href: "/services/technical-documentation",
  },
  {
    icon: Lightbulb,
    title: "Engineering Consulting",
    description:
      "Technical consulting and engineering support for panel builders, EPC contractors, consultants and industrial clients throughout the project lifecycle.",
    href: "/services/engineering-consulting",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="ENGINEERING SERVICES"
          title="Comprehensive Engineering"
          subtitle="Solutions for Modern Power Systems"
          description="CHRISTECK provides standards-compliant electrical engineering services for low-voltage power distribution systems. Our expertise supports panel builders, EPC contractors, consultants and industrial clients from concept through project completion."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
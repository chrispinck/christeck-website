import Link from "next/link";
import {
  ShieldCheck,
  Thermometer,
  CircuitBoard,
  FileText,
  Box,
  Layers3,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "IEC 61439 Design Verification",
    description:
      "Engineering support for LV switchboard design verification, technical assessments, compliance documentation and verification planning.",
    href: "/services/iec-61439-design-verification",
  },
  {
    icon: Thermometer,
    number: "02",
    title: "Temperature Rise Assessment",
    description:
      "Temperature-rise calculations and thermal design reviews for low-voltage switchboards, based on applicable methods and available design data.",
    href: "/services/temperature-rise-assessment",
  },
  {
    icon: CircuitBoard,
    number: "03",
    title: "LV Switchboard Engineering",
    description:
      "Technical design support for low-voltage switchboards, including layouts, component arrangements and engineering design reviews.",
    href: "/services/lv-switchboard-engineering",
  },
  {
    icon: FileText,
    number: "04",
    title: "Technical Documentation",
    description:
      "Structured engineering documentation, technical reports, calculation records and supporting documents for switchboard projects.",
    href: "/services/technical-documentation",
  },
  {
    icon: Box,
    number: "05",
    title: "Modular Enclosure Solutions",
    description:
      "Engineering support for modular enclosure selection, configuration, dimensions and integration into LV switchboard assemblies.",
    href: "/services/modular-enclosure-solutions",
  },
  {
    icon: Layers3,
    number: "06",
    title: "Busbar System Design",
    description:
      "Busbar sizing support, current-carrying assessments, conductor arrangement reviews and related engineering calculations.",
    href: "/services/busbar-system-design",
  },
];

export default function Services() {
  return (
    <Section background="white" spacing="xl" id="services">
      <Container>
       <SectionHeading
  eyebrow="Our Services"
  title="Engineering Solutions Built Around Compliance & Performance"
  description="CHRISTECK provides professional engineering services for low-voltage power distribution systems, helping manufacturers, EPC contractors and consultants deliver standards-compliant projects."
/>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#176C73] transition group-hover:bg-[#176C73] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <span className="text-sm font-semibold tracking-wider text-slate-300">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 flex-grow text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#176C73] transition hover:gap-3"
                >
                  Learn More
                  <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#145d63]"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
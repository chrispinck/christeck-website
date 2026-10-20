"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Thermometer,
  CircuitBoard,
  FileText,
  Boxes,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const services = [
  {
    slug: "iec-61439-design-verification",
    icon: ShieldCheck,
    title: "IEC / AS/NZS 61439 Design Verification",
    description:
      "Professional engineering support for IEC 61439 and AS/NZS 61439 design verification, compliance assessment, and technical review.",
  },
  {
    slug: "temperature-rise-assessment",
    icon: Thermometer,
    title: "Temperature Rise Assessment",
    description:
      "Thermal calculations and engineering assessments based on IEC TR 60890 for safe and reliable switchboard performance.",
  },
  {
    slug: "lv-switchboard-engineering",
    icon: CircuitBoard,
    title: "LV Switchboard Engineering",
    description:
      "Complete low-voltage switchboard engineering including GA drawings, busbar layouts, BOMs and technical support.",
  },
  {
    slug: "technical-documentation",
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Preparation of technical declarations, calculation reports, engineering documentation and project deliverables, as applicable to the project scope.",
  },
  {
    slug: "modular-enclosure-solutions",
    icon: Boxes,
    title: "Modular Enclosure Solutions",
    description:
      "Engineering support for modular enclosure systems suitable for industrial and commercial power distribution.",
  },
  {
    slug: "busbar-system-design",
    icon: CircuitBoard,
    title: "Busbar System Design",
    description:
      "Busbar sizing, layout verification and engineering support for reliable LV power distribution systems.",
  },
];

export default function Services() {
  return (
    <div id="services" className="scroll-mt-20">
      <Section background="white" spacing="xl">
        <Container>
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Our Services"
              title="Engineering Solutions"
              subtitle="Built Around Compliance & Performance"
              description="CHRISTECK provides professional engineering services for low-voltage power distribution systems, helping manufacturers, EPC contractors and consultants deliver standards-compliant projects."
            />
          </motion.div>

          {/* Service Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <FeatureCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={`/services/${service.slug}`}
                />
              </motion.div>
            ))}
          </div>

          {/* Section CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 text-center"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#176C73] px-8 py-4 font-semibold text-white shadow-lg shadow-[#176C73]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#145d63] hover:shadow-xl"
            >
              Explore All Engineering Services

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
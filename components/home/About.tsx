"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  Thermometer,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const highlights = [
  "IEC 61439 Design Verification",
  "AS/NZS 61439 Compliance Engineering",
  "Technical Documentation & Calculations",
  "Engineering Consulting & Technical Support",
];

const expertise = [
  {
    icon: ShieldCheck,
    title: "IEC 61439 Design Verification",
    description:
      "Professional engineering support for design verification and standards-compliant low-voltage switchboard solutions.",
  },
  {
    icon: Globe,
    title: "AS/NZS 61439 Engineering",
    description:
      "Engineering expertise aligned with Australian and New Zealand low-voltage standards.",
  },
  {
    icon: Thermometer,
    title: "Temperature Rise Assessment",
    description:
      "Thermal calculations based on IEC TR 60890 for reliable switchboard performance.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Preparation of SLDs, GA drawings, calculation reports and Declaration of Conformity documentation.",
  },
];

export default function About() {
  return (
    <div id="about" className="scroll-mt-20">
      <Section background="light" spacing="xl">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                eyebrow="About CHRISTECK"
                title="Engineering Knowledge"
                subtitle="Meets Practical Solutions"
                align="left"
                description="CHRISTECK delivers professional electrical engineering services for low-voltage power distribution systems. We help panel builders, EPC contractors, consultants and industries achieve safe, reliable and standards-compliant solutions."
              />

              {/* Highlight List */}
              <div className="mt-9 space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="group flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 transition-colors duration-300 group-hover:bg-[#176C73]">
                      <CheckCircle2
                        size={18}
                        className="text-[#176C73] transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <span className="text-base font-medium text-slate-700 sm:text-lg">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#176C73] px-8 py-4 font-semibold text-white shadow-lg shadow-[#176C73]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#145d63] hover:shadow-xl"
                >
                  Learn More About Us

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Right Expertise Grid */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                  }}
                >
                  <FeatureCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
"use client";

import Link from "next/link";
import {
  BookOpen,
  Calculator,
  Download,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const resources = [
  {
    title: "IEC 61439 Design Verification",
    description:
      "Understand design verification requirements, compliance methods and engineering best practices for LV switchboards.",
    icon: BookOpen,
    href: "/resources/articles/iec-61439-design-verification-guide",
    button: "Read Article",
    category: "Technical Guide",
    number: "01",
  },
  {
    title: "Temperature Rise Assessment",
    description:
      "Explore temperature-rise assessment principles, IEC TR 60890 methodology and thermal performance considerations.",
    icon: Calculator,
    href: "/resources/articles/temperature-rise-assessment-lv-switchboards",
    button: "Read Article",
    category: "Engineering Guide",
    number: "02",
  },
  {
    title: "Engineering Downloads",
    description:
      "Access engineering checklists, technical documents and practical templates for LV switchboards.",
    icon: Download,
    href: "/resources/downloads",
    button: "Browse Downloads",
    category: "Downloads",
    number: "03",
  },
];

export default function Resources() {
  return (
    <div id="resources" className="scroll-mt-20">
      <Section background="light" spacing="xl">
        <Container>
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="ENGINEERING KNOWLEDGE"
              title="Technical Resources"
              subtitle="Built for Engineers"
              description="Explore engineering articles, practical guides and technical downloads supporting reliable, standards-based low-voltage switchboard engineering."
            />
          </motion.div>

          {/* Resource Cards */}
          <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="h-full"
                >
                  <Link
                    href={resource.href}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2BA9B5]/60 hover:shadow-xl hover:shadow-slate-900/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176C73]"
                  >
                    {/* Technical Header */}
                    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[#145d63] via-[#176C73] to-[#2BA9B5]">
                      {/* Engineering Grid */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
                          backgroundSize: "26px 26px",
                        }}
                      />

                      {/* Decorative Number */}
                      <span
                        aria-hidden="true"
                        className="absolute bottom-1 right-5 select-none text-7xl font-bold tracking-tighter text-white/10"
                      >
                        {resource.number}
                      </span>

                      {/* Icon */}
                      <div className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15">
                        <Icon size={36} strokeWidth={1.7} />
                      </div>

                      {/* Category */}
                      <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-md">
                        {resource.category}
                      </span>

                      {/* Technical Accent */}
                      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20">
                        <div className="h-full w-0 bg-white transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-[#176C73]">
                        {resource.title}
                      </h3>

                      <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-600">
                        {resource.description}
                      </p>

                      {/* Action */}
                      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#176C73]">
                          {resource.button}
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-[#176C73] transition-all duration-300 group-hover:bg-[#176C73] group-hover:text-white">
                          <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* View All Resources */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 flex justify-center"
          >
            <Link
              href="/resources"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#176C73] px-7 py-3 font-semibold text-white shadow-sm shadow-[#176C73]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#145d63] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176C73]"
            >
              Explore All Resources

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
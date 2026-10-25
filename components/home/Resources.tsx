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
      "Understand design verification requirements, compliance methods and engineering best practices.",
    icon: BookOpen,
    href: "/resources/iec-61439-design-verification",
    button: "Read Article",
    category: "Technical Guide",
  },
  {
    title: "Temperature Rise Assessment",
    description:
      "Learn how temperature rise calculations are performed using IEC TR 60890 methodology.",
    icon: Calculator,
    href: "/resources/temperature-rise",
    button: "Learn More",
    category: "Engineering Guide",
  },
  {
    title: "Engineering Downloads",
    description:
      "Access engineering checklists, technical documents and practical templates for LV switchboards.",
    icon: Download,
    href: "/resources/downloads",
    button: "Browse Downloads",
    category: "Downloads",
  },
];

export default function Resources() {
  return (
    <div id="resources" className="scroll-mt-20">
      <Section background="light" spacing="xl">
        <Container>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Knowledge Centre"
              title="Engineering"
              subtitle="Resources"
              description="Explore technical articles, engineering guides and downloadable resources to help you design reliable, standards-compliant low-voltage switchboards."
            />
          </motion.div>

          {/* Resource Cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Link
                    href={resource.href}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2BA9B5] hover:shadow-xl"
                  >
                    {/* Technical Header */}
                    <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-[#176C73] to-[#2BA9B5]">
                      {/* Decorative Grid */}
                      <div className="absolute inset-0 opacity-20">
                        <div
                          className="h-full w-full"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                          }}
                        />
                      </div>

                      {/* Icon */}
                      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon size={40} strokeWidth={1.8} />
                      </div>

                      {/* Category */}
                      <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {resource.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-[#176C73]">
                        {resource.title}
                      </h3>

                      <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-600">
                        {resource.description}
                      </p>

                      <div className="mt-7 inline-flex items-center gap-2 font-semibold text-[#176C73]">
                        {resource.button}

                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 text-center"
          >
            <Link
              href="/resources"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#176C73] bg-white px-7 py-3 font-semibold text-[#176C73] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#176C73] hover:text-white hover:shadow-lg"
            >
              View All Resources

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
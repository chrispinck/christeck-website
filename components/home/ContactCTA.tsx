"use client";

import Link from "next/link";
import { ArrowRight, Mail, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const capabilities = [
  "IEC 61439 Design Verification",
  "Temperature Rise Assessment",
  "LV Switchboard Engineering",
];

export default function ContactCTA() {
  return (
    <div id="contact" className="scroll-mt-20">
      <Section spacing="xl">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#176C73] via-[#1D8791] to-[#2BA9B5] px-7 py-14 text-white shadow-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20"
          >
            {/* Background Elements */}
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-white/10 lg:block" />
            <div className="absolute bottom-10 left-10 hidden h-20 w-20 rounded-full border border-white/10 lg:block" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
              >
                Let's Build Reliable Electrical Solutions
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              >
                Ready to Discuss Your
                <span className="block">Next Engineering Project?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-base leading-7 text-teal-50 sm:text-lg sm:leading-8"
              >
                Whether you need IEC 61439 design verification, temperature
                rise assessment, switchboard engineering or technical
                documentation, CHRISTECK is ready to support your project.
              </motion.p>

              {/* Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3"
              >
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-white/90"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-white"
                    />
                    {item}
                  </div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#176C73] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
                >
                  <Mail size={18} />
                  Contact Us

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto"
                >
                  <FileText size={18} />
                  Explore Services

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              {/* Closing Line */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-8 text-sm font-medium text-white/70"
              >
                Engineering Knowledge.{" "}
                <span className="text-white">Engineering Services.</span>
              </motion.p>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
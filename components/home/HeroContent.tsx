"use client";

import Link from "next/link";
import { ArrowRight, FileCheck, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-2xl">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[2.65rem] font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.35rem]"
      >
        Engineering Knowledge
        <span className="mt-2 block text-[#176C73]">
          + Engineering Services
        </span>
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
      >
        Practical engineering expertise for low-voltage switchboards,
        design verification, temperature-rise assessment and technical
        documentation — supporting reliable, standards-based engineering.
      </motion.p>

      {/* Engineering Capabilities */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-7 flex flex-wrap gap-x-5 gap-y-3"
      >
        {[
          "IEC / AS/NZS 61439",
          "IEC TR 60890",
          "LV Switchboard Engineering",
        ].map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700"
          >
            <FileCheck size={17} className="shrink-0 text-[#2BA9B5]" />
            {item}
          </div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-9 flex flex-col gap-3 sm:flex-row"
      >
        <Link
          href="#contact"
          className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white shadow-lg shadow-[#176C73]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#145d63] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176C73]"
        >
          Discuss Your Project
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="#services"
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2BA9B5] hover:text-[#176C73] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176C73]"
        >
          <MessageSquare size={18} />
          Explore Services
        </Link>
      </motion.div>

      {/* Trust Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-9 border-l-2 border-[#2BA9B5] pl-4"
      >
        <p className="max-w-lg text-sm leading-6 text-slate-500">
          Supporting panel builders, EPC contractors, consultants and
          electrical industries through practical engineering knowledge
          and technical expertise.
        </p>
      </motion.div>
    </div>
  );
}
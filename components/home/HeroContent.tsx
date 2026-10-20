"use client";

import Link from "next/link";
import { ArrowRight, FileCheck, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2BA9B5]/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur"
      >
        <span className="h-2 w-2 rounded-full bg-[#2BA9B5]" />
        <span className="text-sm font-semibold tracking-wide text-[#176C73]">
          Electrical Engineering Solutions
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[4.25rem]"
      >
        Engineering Knowledge.
        <span className="block text-[#176C73]">
          Engineering Services.
        </span>
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl"
      >
        Professional engineering support for low-voltage switchboards,
        IEC 61439 compliance, temperature rise assessment and technical
        documentation.
      </motion.p>

      {/* Capability Line */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700"
      >
        <div className="flex items-center gap-2">
          <FileCheck size={17} className="text-[#2BA9B5]" />
          IEC / AS/NZS 61439
        </div>

        <div className="flex items-center gap-2">
          <FileCheck size={17} className="text-[#2BA9B5]" />
          IEC TR 60890
        </div>

        <div className="flex items-center gap-2">
          <FileCheck size={17} className="text-[#2BA9B5]" />
          LV Switchboard Engineering
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-9 flex flex-col gap-4 sm:flex-row"
      >
        <Link
          href="#contact"
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white shadow-lg shadow-[#176C73]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#145d63] hover:shadow-xl"
        >
          Discuss Your Project
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="#services"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-7 py-4 font-semibold text-slate-700 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#2BA9B5] hover:text-[#176C73]"
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
        className="mt-10 border-l-2 border-[#2BA9B5] pl-4"
      >
        <p className="text-sm leading-6 text-slate-500">
          Supporting panel builders, EPC contractors, consultants and
          electrical industries with practical engineering expertise.
        </p>
      </motion.div>
    </div>
  );
}
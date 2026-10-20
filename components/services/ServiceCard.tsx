"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#2BA9B5] hover:shadow-xl"
    >
      {/* Top Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2BA9B5] to-[#176C73]" />

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#176C73] transition-colors duration-300 group-hover:bg-[#176C73] group-hover:text-white">
        <Icon size={30} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mb-8 text-base leading-7 text-slate-600">
        {service.description}
      </p>

      {/* Footer */}
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-2 font-semibold text-[#176C73] transition-all duration-300 group-hover:gap-3"
      >
        Learn More
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.article>
  );
}
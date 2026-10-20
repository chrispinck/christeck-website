"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileCheck,
  ShieldCheck,
  Thermometer,
  Layers3,
} from "lucide-react";

interface FloatingBadgeProps {
  title: string;
  icon: React.ReactNode;
  className: string;
  duration?: number;
}

function FloatingBadge({
  title,
  icon,
  className,
  duration = 5,
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      className={`absolute z-30 rounded-2xl border border-slate-200/80 bg-white/95 px-3.5 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:px-4 sm:py-3 ${className}`}
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-[#176C73] sm:h-10 sm:w-10">
          {icon}
        </div>

        <span className="whitespace-nowrap text-xs font-semibold text-slate-700 sm:text-sm">
          {title}
        </span>
      </div>
    </motion.div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative flex h-[500px] items-center justify-center overflow-visible sm:h-[580px] lg:h-[660px]">

      {/* Ambient Engineering Glow */}
      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200/30 blur-3xl sm:h-[540px] sm:w-[540px] lg:h-[620px] lg:w-[620px]" />

      {/* Blueprint Ring — Outer */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-teal-200/50 sm:h-[530px] sm:w-[530px] lg:h-[610px] lg:w-[610px]"
      />

      {/* Blueprint Ring — Inner */}
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/70 sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]" />

      {/* Engineering Crosshair */}
      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-100/40 sm:h-[480px] sm:w-[480px] lg:h-[560px] lg:w-[560px]" />

      {/* Connector Lines */}
      <div className="absolute left-1/2 top-[7%] h-20 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-teal-300/70 to-transparent sm:top-[8%] sm:h-24" />

      <div className="absolute bottom-[7%] left-1/2 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-teal-300/70 to-transparent sm:bottom-[8%] sm:h-24" />

      <div className="absolute left-[4%] top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-teal-300/70 to-transparent sm:left-[6%] sm:w-24" />

      <div className="absolute right-[4%] top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-teal-300/70 to-transparent sm:right-[6%] sm:w-24" />

      {/* Technical Nodes */}
      <div className="absolute left-1/2 top-[7%] h-3 w-3 -translate-x-1/2 rounded-full bg-[#176C73] shadow-[0_0_0_5px_rgba(43,169,181,0.12)] sm:top-[8%]" />

      <div className="absolute bottom-[7%] left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#176C73] shadow-[0_0_0_5px_rgba(43,169,181,0.12)] sm:bottom-[8%]" />

      <div className="absolute left-[4%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#176C73] shadow-[0_0_0_5px_rgba(43,169,181,0.12)] sm:left-[6%]" />

      <div className="absolute right-[4%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#176C73] shadow-[0_0_0_5px_rgba(43,169,181,0.12)] sm:right-[6%]" />

      {/* Main Engineering Visual */}
      <motion.div
        animate={{
          y: [0, -9, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-20 w-full max-w-[390px] translate-x-2 sm:max-w-[500px] sm:translate-x-4 lg:max-w-[620px] lg:translate-x-8"
      >
        <Image
          src="/images/hero-engineering-v1.png"
          alt="CHRISTECK low-voltage switchboard engineering"
          width={840}
          height={840}
          priority
          className="h-auto w-full select-none drop-shadow-[0_45px_70px_rgba(15,23,42,0.22)]"
        />
      </motion.div>

      {/* IEC 61439 */}
      <FloatingBadge
        title="IEC 61439"
        icon={<FileCheck size={19} />}
        className="left-0 top-8 sm:left-1 sm:top-12 lg:left-0 lg:top-14"
        duration={4.5}
      />

      {/* AS/NZS 61439 */}
      <FloatingBadge
        title="AS/NZS 61439"
        icon={<ShieldCheck size={19} />}
        className="right-0 top-16 sm:right-1 sm:top-20 lg:right-0 lg:top-24"
        duration={5.5}
      />

      {/* Temperature Rise */}
      <FloatingBadge
        title="Temperature Rise"
        icon={<Thermometer size={19} />}
        className="bottom-20 left-0 sm:bottom-24 sm:left-1 lg:bottom-24 lg:left-0"
        duration={5}
      />

      {/* Technical Documentation */}
      <FloatingBadge
        title="Technical Documentation"
        icon={<Layers3 size={19} />}
        className="bottom-8 right-0 sm:bottom-10 sm:right-1 lg:bottom-8 lg:right-0"
        duration={6}
      />
    </div>
  );
}
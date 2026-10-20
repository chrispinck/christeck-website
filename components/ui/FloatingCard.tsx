"use client";

import { motion } from "framer-motion";

function FloatingCard({
  icon,
  title,
  className,
  duration = 4,
}: {
  icon: React.ReactNode;
  title: string;
  className: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-teal-100 p-2 text-[#176C73]">
          {icon}
        </div>

        <span className="text-sm font-semibold text-slate-700">
          {title}
        </span>
      </div>
    </motion.div>
  );
}

export default FloatingCard;
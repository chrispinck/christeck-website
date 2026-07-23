import { ReactNode } from "react";

interface FloatingCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export default function FloatingCard({
  title,
  description,
  icon,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`
        group
        rounded-2xl
        border
        border-slate-200
        bg-white/90
        backdrop-blur-md
        p-5
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        ${className}
      `}
    >
      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F9FA] text-[#176C73]">
          {icon}
        </div>

        <div className="flex-1">

          <h3 className="text-lg font-semibold text-[#176C73]">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
}
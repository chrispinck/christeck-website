import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-[#BEECEF]
        bg-[#E8F9FA]
        px-5
        py-2
        text-sm
        font-semibold
        text-[#176C73]
        shadow-sm
        ${className}
      `}
    >
      {children}
    </span>
  );
}
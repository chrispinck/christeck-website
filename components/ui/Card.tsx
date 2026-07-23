import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        ${
          hover
            ? "hover:-translate-y-2 hover:border-[#2BA9B5] hover:shadow-xl"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "slate" | "teal" | "gradient";
  spacing?: "sm" | "md" | "lg" | "xl";
  divider?: boolean;
}

const backgrounds = {
  white: "bg-white",
  slate: "bg-slate-50",
  teal: "bg-teal-50",
  gradient: "bg-gradient-to-b from-white via-slate-50 to-white",
};

const spacing = {
  sm: "py-12",
  md: "py-20",
  lg: "py-28",
  xl: "py-36",
};

export default function Section({
  children,
  id,
  className,
  background = "white",
  spacing: sectionSpacing = "lg",
  divider = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative scroll-mt-24",
        backgrounds[background],
        spacing[sectionSpacing],
        className
      )}
    >
      {divider && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      )}

      {children}
    </section>
  );
}
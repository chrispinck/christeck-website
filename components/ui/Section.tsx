import type { ReactNode, HTMLAttributes } from "react";

type SectionBackground = "white" | "light" | "dark";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: SectionBackground;
  spacing?: SectionSpacing;
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-white",
  light: "bg-slate-50",
  dark: "bg-slate-900 text-white",
};

const spacingStyles: Record<SectionSpacing, string> = {
  sm: "py-8 sm:py-10",
  md: "py-10 sm:py-14",
  lg: "py-14 sm:py-16",
  xl: "py-16 sm:py-20 lg:py-24",
};

export default function Section({
  children,
  background = "white",
  spacing = "lg",
  className = "",
  ...props
}: SectionProps) {
  const combinedClasses = [
    backgroundStyles[background],
    spacingStyles[spacing],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={combinedClasses} {...props}>
      {children}
    </section>
  );
}
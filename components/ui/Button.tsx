import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary:
    "bg-[#2BA9B5] text-white hover:bg-[#176C73] shadow-lg hover:shadow-xl",

  secondary:
    "bg-[#176C73] text-white hover:bg-[#145a61] shadow-lg hover:shadow-xl",

  outline:
    "border-2 border-[#2BA9B5] text-[#176C73] hover:bg-[#2BA9B5] hover:text-white",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  type = "button",
}: ButtonProps) {
  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    px-7
    py-4
    font-semibold
    text-base
    transition-all
    duration-300
    hover:-translate-y-1
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
      {icon}
    </button>
  );
}
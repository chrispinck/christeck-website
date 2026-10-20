import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: FeatureCardProps) {
  const CardContent = (
    <>
      {/* Brand Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2BA9B5] to-[#176C73]" />

      {/* Icon */}
      <div className="mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 text-[#176C73] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#176C73] group-hover:text-white">
        <Icon size={32} strokeWidth={2} />
      </div>

      {/* Title */}
      <div className="mb-4 min-h-[72px]">
        <h3 className="text-2xl font-bold leading-snug text-slate-900">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="flex-1 text-[15px] leading-7 text-slate-600">
        {description}
      </p>

      {/* Link */}
      {href && (
        <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#176C73] transition-all duration-300 group-hover:gap-3 group-hover:text-[#145d63]">
          Learn More
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      )}
    </>
  );

  const className =
    "group relative flex min-h-[315px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2BA9B5] hover:shadow-2xl";

  if (href) {
    return (
      <Link href={href} className={className}>
        {CardContent}
      </Link>
    );
  }

  return <div className={className}>{CardContent}</div>;
}
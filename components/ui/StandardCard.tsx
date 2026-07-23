import { LucideIcon } from "lucide-react";
import Card from "./Card";

interface StandardCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export default function StandardCard({
  icon: Icon,
  title,
  subtitle,
  description,
}: StandardCardProps) {
  return (
    <Card className="group h-full p-8">
      <div className="flex flex-col gap-6">

        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F9FA] text-[#176C73] transition-transform duration-300 group-hover:scale-110">
          <Icon size={28} strokeWidth={2} />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 font-semibold text-[#176C73]">
            {subtitle}
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
import { LucideIcon } from "lucide-react";

import Card from "./Card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="group h-full p-8">
      <div className="flex flex-col gap-6">
        {/* Icon */}
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-[#2BA9B5]/20
            bg-[#2BA9B5]/10
            text-[#176C73]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:border-[#2BA9B5]
            group-hover:bg-[#2BA9B5]
            group-hover:text-white
          "
        >
          <Icon size={30} strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="leading-7 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
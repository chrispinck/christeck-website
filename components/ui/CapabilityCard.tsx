import { LucideIcon } from "lucide-react";
import Card from "./Card";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function CapabilityCard({
  icon: Icon,
  title,
  description,
}: CapabilityCardProps) {
  return (
    <Card className="group h-full p-7">
      <div className="space-y-5">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-[#2BA9B5]/10
            text-[#176C73]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-[#2BA9B5]
            group-hover:text-white
          "
        >
          <Icon size={28} strokeWidth={2} />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-900">
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
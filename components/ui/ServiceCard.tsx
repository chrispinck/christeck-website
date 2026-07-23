import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

import Card from "./Card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Card className="group h-full overflow-hidden p-8">
      <div className="flex h-full flex-col">
        {/* Icon */}
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-[#2BA9B5]/10
            text-[#176C73]
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-[#2BA9B5]
            group-hover:text-white
          "
        >
          <Icon size={30} strokeWidth={2} />
        </div>

        {/* Content */}
        <div className="mt-6 flex-1">
          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href={href}
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#176C73]
              transition-all
              duration-300
              hover:gap-3
              hover:text-[#2BA9B5]
            "
          >
            Learn More

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </Card>
  );
}
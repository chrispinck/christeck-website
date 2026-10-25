import Link from "next/link";
import {
  Factory,
  Building2,
  Zap,
  Droplets,
  Fuel,
  Leaf,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    title: "Industrial Manufacturing",
    description:
      "Reliable LV switchboard engineering for manufacturing plants and production facilities.",
    icon: Factory,
  },
  {
    title: "Commercial Buildings",
    description:
      "Power distribution engineering for offices, hospitals, shopping centres and commercial infrastructure.",
    icon: Building2,
  },
  {
    title: "Power Distribution",
    description:
      "Engineering solutions for PCC, MCC and LV distribution systems with IEC 61439 compliance.",
    icon: Zap,
  },
  {
    title: "Water & Wastewater",
    description:
      "Switchboard engineering supporting pumping stations, treatment plants and utility infrastructure.",
    icon: Droplets,
  },
  {
    title: "Oil & Gas",
    description:
      "Robust engineering solutions designed for demanding industrial environments.",
    icon: Fuel,
  },
  {
    title: "Renewable Energy",
    description:
      "Engineering support for solar, battery storage and sustainable energy distribution projects.",
    icon: Leaf,
  },
];

export default function Industries() {
  return (
    <Section id="industries" background="light" spacing="xl">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Engineering Across"
          subtitle="Multiple Industries"
          description="Our engineering solutions support a wide range of industries, delivering reliable low-voltage power distribution systems for diverse applications."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2BA9B5] hover:shadow-2xl"
              >
                {/* Accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#2BA9B5] to-[#176C73]" />

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 text-[#176C73] transition-all duration-300 group-hover:bg-[#176C73] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {industry.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 rounded-xl bg-[#176C73] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#145d63]"
          >
            Explore Industries
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
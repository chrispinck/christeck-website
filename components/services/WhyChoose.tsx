import {
  BadgeCheck,
  BookOpenCheck,
  Factory,
  FileSpreadsheet,
  Users,
  Award,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: BadgeCheck,
    title: "IEC & AS/NZS Expertise",
    description:
      "Engineering solutions developed in accordance with IEC 61439 and AS/NZS 61439 requirements.",
  },
  {
    icon: BookOpenCheck,
    title: "Specialized Design Verification",
    description:
      "Strong expertise in design verification, temperature rise assessment, and engineering compliance.",
  },
  {
    icon: Factory,
    title: "Practical Manufacturing Experience",
    description:
      "Engineering backed by hands-on experience in modular enclosure and LV switchboard manufacturing.",
  },
  {
    icon: FileSpreadsheet,
    title: "Complete Technical Documentation",
    description:
      "Professional reports including calculations, Declaration of Conformity, design verification, and project documentation.",
  },
  {
    icon: Users,
    title: "Engineering Partnership",
    description:
      "Working closely with panel builders, OEMs, and system integrators to deliver practical engineering solutions.",
  },
  {
    icon: Award,
    title: "Quality-Focused Engineering",
    description:
      "Every project is developed with emphasis on safety, compliance, reliability, and long-term performance.",
  },
];

export default function WhyChoose() {
  return (
    <Section background="white" spacing="lg">
      <Container>
        <SectionHeading
          eyebrow="Why CHRISTECK"
          title="Engineering Expertise You Can Depend On"
          description="Combining engineering knowledge with practical manufacturing experience to deliver reliable, standards-compliant low-voltage solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2BA9B5] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#176C73] transition-colors duration-300 group-hover:bg-[#176C73] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
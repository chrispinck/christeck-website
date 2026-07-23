import {
  ShieldCheck,
  Globe,
  Thermometer,
  Zap,
  BadgeCheck,
} from "lucide-react";

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import StandardCard from "../ui/StandardCard";

const standards = [
  {
    icon: ShieldCheck,
    title: "IEC 61439",
    subtitle: "Low Voltage Assemblies",
    description:
      "International standard governing low-voltage switchgear and controlgear assemblies.",
  },
  {
    icon: Globe,
    title: "AS/NZS 61439",
    subtitle: "Australian Compliance",
    description:
      "Compliance for low-voltage switchboard assemblies across Australia and New Zealand.",
  },
  {
    icon: Thermometer,
    title: "IEC TR 60890",
    subtitle: "Temperature Rise",
    description:
      "Engineering assessment for temperature-rise verification of low-voltage assemblies.",
  },
  {
    icon: Zap,
    title: "IEC 62271",
    subtitle: "Medium Voltage",
    description:
      "International standards supporting medium-voltage switchgear engineering solutions.",
  },
  {
    icon: BadgeCheck,
    title: "Type Tested",
    subtitle: "Verified Assemblies",
    description:
      "Supporting engineered solutions based on verified and tested assembly principles.",
  },
];

export default function TrustedStandards() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Blueprint Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2BA9B5 1px, transparent 1px),
            linear-gradient(to bottom, #2BA9B5 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <Container>

        <SectionHeading
          badge="TRUSTED STANDARDS"
          title="Engineering Standards"
          subtitle="We Work With"
          description="Our engineering solutions are developed around internationally recognised standards, ensuring compliance, safety, reliability and long-term performance."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {standards.map((standard) => (
            <StandardCard
              key={standard.title}
              icon={standard.icon}
              title={standard.title}
              subtitle={standard.subtitle}
              description={standard.description}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
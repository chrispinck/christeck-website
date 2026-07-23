import {
  ShieldCheck,
  Globe,
  Thermometer,
  FileText,
  Lightbulb,
  Zap,
  CheckCircle,
} from "lucide-react";

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import CapabilityCard from "../ui/CapabilityCard";
import Button from "../ui/Button";

const highlights = [
  "IEC 61439 Design Verification",
  "AS/NZS 61439 Compliance Engineering",
  "Technical Documentation & Calculations",
  "Engineering Consulting & Technical Support",
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: "IEC 61439 Design Verification",
    description:
      "Support for design verification and standards-compliant low-voltage switchboard engineering.",
  },
  {
    icon: Globe,
    title: "AS/NZS 61439 Engineering",
    description:
      "Engineering solutions aligned with Australian and New Zealand low-voltage standards.",
  },
  {
    icon: Thermometer,
    title: "Temperature Rise Assessment",
    description:
      "Thermal calculations based on IEC TR 60890 to help verify safe operating conditions.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Preparation of SLDs, GA drawings, BOMs, engineering calculations and technical reports.",
  },
  {
    icon: Zap,
    title: "LV Switchboard Design",
    description:
      "Professional low-voltage switchboard design tailored to industrial and commercial projects.",
  },
  {
    icon: Lightbulb,
    title: "Engineering Consulting",
    description:
      "Practical engineering guidance to deliver reliable, compliant and efficient power distribution systems.",
  },
];

export default function About() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2 lg:items-start">
          {/* Left Content */}
          <div>
            <SectionHeading
              align="left"
              badge="ABOUT CHRISTECK"
              title="Engineering Knowledge"
              subtitle="Meets Practical Solutions"
              description="CHRISTECK delivers professional electrical engineering services for low-voltage power distribution systems. We help panel builders, EPC contractors, consultants and industries achieve safe, reliable and standards-compliant solutions."
            />

            <div className="mt-10 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[#2BA9B5] flex-shrink-0"
                  />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/about">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right Capability Grid */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
            {capabilities.map((capability) => (
              <CapabilityCard
                key={capability.title}
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
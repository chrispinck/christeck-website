import {
  ShieldCheck,
  Compass,
  FileCheck,
  Handshake,
  Globe2,
  Layers3,
} from "lucide-react";

import Container from "../layout/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

const features = [
  {
    icon: ShieldCheck,
    title: "Standards Compliance Expertise",
    description:
      "Engineering support aligned with IEC 61439, AS/NZS 61439 and IEC TR 60890 to help deliver compliant and reliable low-voltage power distribution systems.",
  },
  {
    icon: Compass,
    title: "Engineering-First Approach",
    description:
      "Every solution is developed with practical engineering principles, focusing on safety, performance, maintainability and long-term reliability.",
  },
  {
    icon: FileCheck,
    title: "Professional Documentation",
    description:
      "Comprehensive engineering documentation including calculations, drawings, BOMs and technical reports prepared with attention to detail.",
  },
  {
    icon: Layers3,
    title: "End-to-End Technical Support",
    description:
      "Support throughout the engineering process—from concept development and design verification to project execution and documentation.",
  },
  {
    icon: Globe2,
    title: "International Engineering Support",
    description:
      "Engineering solutions developed for projects in India, Australia and New Zealand while following internationally recognized standards.",
  },
  {
    icon: Handshake,
    title: "Trusted Engineering Partner",
    description:
      "Committed to building long-term relationships with panel builders, EPC contractors, consultants and industrial clients through dependable technical support.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="WHY CHOOSE CHRISTECK"
          title="Engineering Expertise"
          subtitle="You Can Trust"
          description="CHRISTECK combines engineering knowledge, standards compliance and practical industry experience to deliver reliable electrical engineering solutions for modern power distribution systems."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
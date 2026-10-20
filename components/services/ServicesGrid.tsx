import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import ServiceCard from "./ServiceCard";

import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <Section
      id="services"
      background="white"
      spacing="lg"
    >
      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title="Engineering Services Built Around IEC & AS/NZS Standards"
          description="CHRISTECK provides specialized engineering solutions for low-voltage switchboards, helping manufacturers, panel builders, and system integrators deliver safe, compliant, and high-quality electrical systems."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
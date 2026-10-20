import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <div id="hero" className="scroll-mt-20">
      <Section
        background="gradient"
        spacing="md"
        className="overflow-hidden pt-12 lg:pt-16"
      >
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <HeroContent />
            <HeroVisual />
          </div>
        </Container>
      </Section>
    </div>
  );
}
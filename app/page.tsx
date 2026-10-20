import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Resources from "@/components/home/Resources";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* About CHRISTECK */}
      <About />

      {/* Engineering Services */}
      <Services />

      {/* Knowledge Centre */}
      <Resources />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Resources from "@/components/home/Resources";
import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Resources />
      <About />
      <ContactCTA />
    </main>
  );
}
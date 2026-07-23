import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustedStandards from "../components/home/TrustedStandards";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Industries from "../components/home/Industries";
import WhyChoose from "../components/home/WhyChoose";
import Projects from "../components/home/Projects";
import Resources from "../components/home/Resources";
import ContactCTA from "../components/home/ContactCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Services />

        <WhyChoose />

        <Projects />

        <Resources />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
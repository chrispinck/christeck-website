import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white">

      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#2BA9B5]/10 blur-3xl" />
        <div className="absolute right-[-120px] bottom-0 h-96 w-96 rounded-full bg-[#176C73]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}
          <HeroContent />

          {/* Right Visual */}
          <HeroVisual />

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#F8FAFC] to-transparent" />

    </section>
  );
}
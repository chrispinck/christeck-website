import HeroEngineering from "../illustrations/HeroEngineering";
import FloatingCard from "../ui/FloatingCard";

export default function HeroVisual() {
  return (
    <div className="relative flex min-h-[650px] items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-[#2BA9B5]/10 blur-3xl" />

      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(43,169,181,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(43,169,181,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Hero Engineering Illustration */}
      <div className="relative z-10 flex items-center justify-center">
        <HeroEngineering className="w-full max-w-[560px]" />
      </div>

      {/* Floating Cards */}

      <FloatingCard
        title="IEC 61439"
        description="Design Verification"
        className="absolute left-0 top-16 w-64"
      />

      <FloatingCard
        title="Temperature Rise"
        description="IEC TR 60890"
        className="absolute right-0 top-24 w-64"
      />

      <FloatingCard
        title="AS/NZS 61439"
        description="Australian Compliance"
        className="absolute bottom-16 left-4 w-72"
      />

      <FloatingCard
        title="Engineering Services"
        description="Technical Consulting"
        className="absolute bottom-10 right-4 w-72"
      />
    </div>
  );
}
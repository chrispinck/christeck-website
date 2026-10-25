import {
  Award,
  ShieldCheck,
  FileCheck2,
  Users,
  Globe2,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Engineering Expertise",
    description:
      "Professional experience in low-voltage switchboard engineering, design verification and electrical system solutions.",
  },
  {
    icon: ShieldCheck,
    title: "IEC & AS/NZS Compliance",
    description:
      "Engineering services aligned with IEC 61439, AS/NZS 61439 and IEC TR 60890 standards.",
  },
  {
    icon: FileCheck2,
    title: "Complete Documentation",
    description:
      "GA drawings, engineering calculations, Declaration of Conformity and technical reports prepared with accuracy.",
  },
  {
    icon: Users,
    title: "Industry Partnership",
    description:
      "Supporting panel builders, OEMs, EPC contractors and consultants with dependable engineering solutions.",
  },
  {
    icon: Globe2,
    title: "International Support",
    description:
      "Engineering support for projects in Australia, New Zealand and global low-voltage power distribution markets.",
  },
  {
    icon: Zap,
    title: "Reliable Solutions",
    description:
      "Focused on safety, performance, manufacturability and long-term reliability for every engineering project.",
  },
];

export default function WhyChoose() {
  return (
    <Section background="light" spacing="xl">
      <Container>
        <SectionHeading
          eyebrow="Why Choose CHRISTECK"
          title="Trusted Engineering"
          subtitle="For Every Project"
          description="We combine engineering knowledge, practical manufacturing experience and international standards expertise to deliver reliable low-voltage engineering solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2BA9B5] hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 text-[#176C73] transition-all duration-300 group-hover:bg-[#176C73] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 rounded-3xl bg-[#176C73] p-10 text-center text-white md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-extrabold">IEC</h3>
            <p className="mt-2 text-teal-100">
              61439 Engineering
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">AS/NZS</h3>
            <p className="mt-2 text-teal-100">
              Compliance Support
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">LV</h3>
            <p className="mt-2 text-teal-100">
              Switchboard Engineering
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold">Global</h3>
            <p className="mt-2 text-teal-100">
              Engineering Services
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Thermometer,
  CircuitBoard,
  FileText,
  Boxes,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "Explore CHRISTECK engineering services for LV switchboards, IEC 61439 design verification support, temperature-rise assessment, busbar design, technical documentation and modular enclosures.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    slug: "iec-61439-design-verification",
    icon: ShieldCheck,
    title: "IEC / AS/NZS 61439 Design Verification",
    description:
      "Engineering support for low-voltage switchboard design verification, technical reviews and standards-related documentation.",
  },
  {
    slug: "temperature-rise-assessment",
    icon: Thermometer,
    title: "Temperature Rise Assessment",
    description:
      "Temperature-rise calculation support using applicable engineering methods and available technical data.",
  },
  {
    slug: "lv-switchboard-engineering",
    icon: CircuitBoard,
    title: "LV Switchboard Engineering",
    description:
      "Engineering support for general arrangement drawings, switchgear layouts, busbar arrangements and manufacturing documentation.",
  },
  {
    slug: "technical-documentation",
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Structured technical documentation, calculation reports, component schedules and project engineering deliverables.",
  },
  {
    slug: "modular-enclosure-solutions",
    icon: Boxes,
    title: "Modular Enclosure Solutions",
    description:
      "Engineering support for modular enclosure configuration, mounting arrangements, compartments and assembly documentation.",
  },
  {
    slug: "busbar-system-design",
    icon: CircuitBoard,
    title: "Busbar System Design",
    description:
      "Engineering support for busbar sizing, layout, conductor selection and short-circuit withstand considerations.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#176C73]">
              CHRISTECK Engineering Services
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Engineering Solutions Built Around Compliance &amp; Performance
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Specialist engineering support for low-voltage switchboard
              manufacturers, panel builders, consultants and project teams.
              Explore our engineering capabilities and find the right support
              for your project.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#145d63]"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section background="white" spacing="xl">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Engineering Services"
            subtitle="Technical expertise for practical engineering challenges"
            description="Explore our services to learn about the scope of work, technical capabilities and potential deliverables."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#176C73]">
                    <Icon size={25} />
                  </div>

                  <h2 className="text-xl font-bold leading-snug text-slate-900">
                    {service.title}
                  </h2>

                  <p className="mt-3 flex-grow leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-7 inline-flex items-center gap-2 border-t border-slate-100 pt-5 font-semibold text-[#176C73] transition-colors hover:text-[#2BA9B5]"
                  >
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <section className="bg-[#176C73] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">
                Have an Engineering Requirement?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Let&apos;s discuss your next project.
              </h2>

              <p className="mt-4 leading-7 text-teal-50">
                Share your technical requirements and drawings so we can
                discuss the appropriate engineering support for your project.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#176C73] transition hover:-translate-y-0.5 hover:bg-teal-50"
            >
              Contact CHRISTECK
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
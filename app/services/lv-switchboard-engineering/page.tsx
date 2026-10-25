import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  FileText,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "LV Switchboard Engineering | CHRISTECK",
  description:
    "LV switchboard engineering support covering IEC 61439 design verification, switchboard layouts, busbar systems, temperature-rise assessment, and technical documentation.",
  alternates: {
    canonical: "/services/lv-switchboard-engineering",
  },
};

const capabilities = [
  {
    icon: CircuitBoard,
    title: "Switchboard Design Support",
    description:
      "Engineering support for LV switchboard arrangements, functional units, compartments, and assembly configurations.",
  },
  {
    icon: ShieldCheck,
    title: "IEC 61439 Compliance",
    description:
      "Support with applicable IEC 61439-1 and IEC 61439-2 requirements, design verification planning, and technical evidence.",
  },
  {
    icon: Layers3,
    title: "GA Drawings & Layouts",
    description:
      "Support for general arrangement drawings, section layouts, equipment placement, and enclosure integration.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Calculations",
    description:
      "Engineering calculations and technical reviews relating to temperature rise, busbar selection, and short-circuit requirements.",
  },
  {
    icon: FileText,
    title: "Engineering Documentation",
    description:
      "Organised technical documents, calculation sheets, design records, and supporting information for project review.",
  },
  {
    icon: CheckCircle2,
    title: "Design Review",
    description:
      "Review of available drawings and specifications to identify technical gaps, coordination issues, and items requiring confirmation.",
  },
];

const deliverables = [
  "General arrangement drawing review and engineering inputs",
  "IEC 61439 design-verification support documentation",
  "Temperature-rise assessment calculations, where applicable",
  "Busbar selection and technical calculation support",
  "Technical queries, assumptions, and clarification records",
  "Engineering document review and recommendations",
];

const process = [
  {
    number: "01",
    title: "Understand the Requirements",
    description:
      "Review the project specification, single-line diagram, ratings, applicable standards, and available drawings.",
  },
  {
    number: "02",
    title: "Review the Design",
    description:
      "Assess the proposed arrangement, enclosure configuration, switchgear selection, and available verification evidence.",
  },
  {
    number: "03",
    title: "Develop Engineering Outputs",
    description:
      "Prepare the agreed calculations, drawing inputs, technical notes, and supporting documentation.",
  },
  {
    number: "04",
    title: "Review & Finalise",
    description:
      "Address comments, record assumptions, and provide the agreed deliverables for project coordination.",
  },
];

export default function LVSwitchboardEngineeringPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#176C73]/40 via-transparent to-[#2BA9B5]/10" />

        <Container>
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#70D6DE]">
                Engineering Services
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                LV Switchboard
                <span className="block text-[#70D6DE]">
                  Engineering Support
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Practical engineering support for low-voltage switchboard
                manufacturers, panel builders, and electrical engineering
                teams—from design reviews and technical calculations to
                IEC 61439 documentation.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#2BA9B5] px-6 py-3 font-semibold text-white transition hover:bg-[#238e98]"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services/iec-61439-design-verification"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  IEC 61439 Support
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm md:p-9">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#70D6DE]">
                Engineering Focus
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                From design inputs to technical documentation
              </h2>

              <ul className="mt-7 space-y-4">
                {[
                  "LV switchboard layouts and GA reviews",
                  "IEC 61439 design-verification support",
                  "Temperature-rise and busbar calculations",
                  "Technical documentation and design reviews",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#70D6DE]"
                      size={20}
                    />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Overview"
            title="Engineering Support for LV Switchboard Projects"
            description="Technical assistance tailored to the requirements of each assembly, project specification, and manufacturing process."
          />

          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-base leading-8 text-slate-600">
            <p>
              LV switchboard engineering requires coordination between
              electrical ratings, switchgear selection, busbar arrangements,
              enclosure construction, thermal performance, and applicable
              verification requirements.
            </p>
            <p>
              CHRISTECK supports engineering teams with design reviews,
              technical calculations, drawing coordination, and documentation
              to help them develop clear, consistent, and technically
              supported project deliverables.
            </p>
            <p>
              The scope of each engagement is agreed against the available
              project information, applicable standards, and the evidence
              required for the specific assembly.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="light" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Our Engineering Capabilities"
            description="Targeted technical support across the main stages of LV switchboard development."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-[#2BA9B5]/10 p-3 text-[#176C73]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Deliverables"
                title="Clear Technical Outputs"
                description="Deliverables are agreed to suit the project scope and available engineering inputs."
                align="left"
              />

              <ul className="mt-8 space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#176C73]"
                      size={20}
                    />
                    <span className="leading-7 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-950 p-8 text-white md:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#70D6DE]">
                Typical Applications
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Support for different LV assembly projects
              </h3>

              <ul className="mt-7 space-y-4 text-slate-300">
                {[
                  "Main switchboards and distribution boards",
                  "Motor control centres and control assemblies",
                  "Commercial and industrial electrical projects",
                  "Modular enclosure-based switchboard assemblies",
                  "Australian and international LV switchboard projects",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#70D6DE]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="light" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="A Structured Engineering Workflow"
            description="A clear process helps keep technical inputs, assumptions, and project outputs aligned."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-3xl font-bold text-[#2BA9B5]">
                  {item.number}
                </p>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <div className="rounded-3xl bg-[#176C73] px-7 py-12 text-center text-white md:px-12 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C6F4F5]">
              Let’s Discuss Your Requirements
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
              Need Engineering Support for Your LV Switchboard Project?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/85">
              Share your project scope, drawings, ratings, and technical
              requirements to discuss the most suitable engineering support.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#176C73] transition hover:bg-slate-100"
            >
              Contact CHRISTECK
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
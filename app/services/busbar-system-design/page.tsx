import type { Metadata } from "next";
import Link from "next/link";
import {
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Calculator,
  ShieldCheck,
  ArrowRight,
  FileText,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Busbar System Design for LV Switchboards",
  description:
    "CHRISTECK provides busbar engineering support for LV switchboards, including conductor sizing, current-carrying assessments, arrangement reviews and technical calculations.",
  alternates: {
    canonical: "/services/busbar-system-design",
  },
};

const capabilities = [
  {
    icon: Calculator,
    title: "Busbar Sizing Support",
    description:
      "Engineering assistance with busbar dimensions based on rated current, material, installation conditions and project requirements.",
  },
  {
    icon: Zap,
    title: "Current-Carrying Assessment",
    description:
      "Review of busbar configurations and relevant operating conditions when assessing current-carrying capability.",
  },
  {
    icon: Cable,
    title: "Busbar Arrangement Review",
    description:
      "Technical review of busbar orientation, spacing, supports, connections and layout within the switchboard assembly.",
  },
  {
    icon: ShieldCheck,
    title: "Design Verification Support",
    description:
      "Support with identifying relevant design verification requirements and documenting engineering assumptions and limitations.",
  },
];

const deliverables = [
  "Busbar sizing calculations within the agreed scope.",
  "Review of busbar material, dimensions and arrangement.",
  "Current-carrying assessment inputs and assumptions.",
  "Review of support spacing and connection arrangements.",
  "Engineering observations based on the supplied design information.",
  "Supporting calculation records and technical documentation.",
];

const applications = [
  "Main low-voltage switchboards",
  "Main busbar systems",
  "Distribution busbars",
  "Copper and aluminium busbar arrangements",
  "Industrial power distribution panels",
  "Modular switchboard assemblies",
];

const process = [
  {
    number: "01",
    title: "Collect Design Inputs",
    description:
      "Review rated current, busbar material, dimensions, arrangement, installation conditions and relevant project specifications.",
  },
  {
    number: "02",
    title: "Review the Configuration",
    description:
      "Examine conductor orientation, spacing, support arrangements, connections and other relevant design parameters.",
  },
  {
    number: "03",
    title: "Perform the Assessment",
    description:
      "Carry out the agreed calculations using appropriate methods and clearly documented assumptions.",
  },
  {
    number: "04",
    title: "Document the Results",
    description:
      "Present calculation results, design inputs, engineering observations and any applicable limitations.",
  },
];

export default function BusbarSystemDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-[#176C73]">
              <Cable size={34} />
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#176C73]">
              CHRISTECK Engineering Services
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Busbar System Design
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Engineering support for LV switchboard busbar sizing,
              conductor arrangement reviews, current-carrying assessments
              and supporting technical calculations.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#145d63]"
              >
                Discuss Your Requirements
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-teal-600 hover:text-[#176C73]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <Section background="white" spacing="xl">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#176C73]">
                Electrical Engineering
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Engineering Support for Reliable Busbar Design
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Busbar system design involves more than selecting a conductor
                size. Material, dimensions, arrangement, connections, supports
                and installation conditions can all influence performance.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                CHRISTECK supports switchboard manufacturers, panel builders
                and engineering teams with busbar calculations and technical
                reviews tailored to the project scope and available design
                information.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 sm:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#176C73] shadow-sm">
                <ClipboardCheck size={26} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                A Structured Design Approach
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Busbar engineering assessments should use clearly defined
                inputs and methods appropriate to the assembly configuration.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Defined electrical ratings and design inputs",
                  "Review of material and conductor dimensions",
                  "Assessment of layout and support arrangements",
                  "Documented assumptions and results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#176C73]"
                    />
                    <span className="leading-7 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section background="light" spacing="xl">
        <Container>
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Busbar Engineering Support"
            description="Support can be tailored to the busbar material, electrical ratings, assembly configuration and available technical information."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#176C73]">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
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

      {/* Deliverables */}
      <Section background="white" spacing="xl">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Project Deliverables"
                title="What Your Busbar Assessment Can Include"
                description="Deliverables depend on the agreed engineering scope, available design inputs and selected assessment methods."
                align="left"
              />

              <ul className="mt-8 space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-[#176C73]"
                    />
                    <span className="leading-7 text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                <FileText size={26} />
              </div>

              <h3 className="text-2xl font-bold">
                Information Needed to Get Started
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Depending on the project, we may request:
              </p>

              <ul className="mt-6 space-y-3 text-slate-200">
                {[
                  "Rated current and required electrical ratings",
                  "Busbar material and dimensions",
                  "Busbar arrangement and support details",
                  "Switchboard GA drawings and enclosure dimensions",
                  "Applicable standards and project specifications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-teal-300 transition hover:text-white"
              >
                Send Your Enquiry
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Applications */}
      <Section background="light" spacing="xl">
        <Container>
          <SectionHeading
            eyebrow="Applications"
            title="Where Busbar Design Support Can Help"
            description="Engineering assistance for busbar systems used in different low-voltage power distribution assemblies."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-[#176C73]"
                />
                <span className="font-medium leading-7 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section background="white" spacing="xl">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="From Busbar Inputs to Engineering Results"
            description="A structured workflow helps establish the design basis, document assumptions and communicate the assessment results."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <p className="text-3xl font-bold text-[#2BA9B5]">
                  {step.number}
                </p>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Scope clarification */}
      <section className="bg-amber-50 py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-lg font-bold text-slate-900">
              Important Scope Consideration
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              Busbar calculations must be assessed against the applicable
              design conditions, assembly configuration and relevant
              requirements. A calculation alone should not be treated as
              independent proof of compliance where additional design
              verification or testing is required.
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-[#176C73] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">
                Need Busbar Design Support?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Let's review your busbar requirements.
              </h2>

              <p className="mt-4 leading-7 text-teal-50">
                Share your drawings and technical requirements with CHRISTECK
                to discuss the engineering support suitable for your project.
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
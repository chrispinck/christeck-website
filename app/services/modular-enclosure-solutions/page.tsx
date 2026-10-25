import type { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  CheckCircle2,
  Ruler,
  Layers3,
  ShieldCheck,
  ArrowRight,
  Settings,
  Factory,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Modular Enclosure Solutions for LV Switchboards",
  description:
    "CHRISTECK provides engineering support for modular electrical enclosures, enclosure selection, dimensional coordination and LV switchboard integration.",
  alternates: {
    canonical: "/services/modular-enclosure-solutions",
  },
};

const capabilities = [
  {
    icon: Box,
    title: "Modular Enclosure Selection",
    description:
      "Engineering assistance with selecting suitable modular enclosure configurations based on assembly requirements and project specifications.",
  },
  {
    icon: Ruler,
    title: "Dimensional Coordination",
    description:
      "Review of enclosure width, height, depth, compartment arrangements and installation clearances relevant to the proposed assembly.",
  },
  {
    icon: Layers3,
    title: "Assembly Configuration",
    description:
      "Support for coordinating enclosure sections, mounting arrangements, covers and internal component layouts.",
  },
  {
    icon: Settings,
    title: "Switchboard Integration",
    description:
      "Technical coordination of modular enclosures with switchgear, busbar systems, cable access and other assembly requirements.",
  },
];

const deliverables = [
  "Review of enclosure dimensions and configuration.",
  "Modular section and compartment arrangement support.",
  "Technical coordination of enclosure and switchgear layouts.",
  "Review of mounting plates, covers and cable access requirements.",
  "Engineering observations based on supplied project information.",
  "Supporting technical documentation within the agreed scope.",
];

const applications = [
  "Main low-voltage switchboards",
  "Main distribution boards",
  "Industrial power distribution panels",
  "Motor control centres",
  "Modular electrical panel assemblies",
  "Custom enclosure-based switchboard projects",
];

const process = [
  {
    number: "01",
    title: "Define Project Requirements",
    description:
      "Review electrical ratings, installation conditions, project specifications and the required enclosure arrangement.",
  },
  {
    number: "02",
    title: "Review Dimensions",
    description:
      "Evaluate the required width, height, depth, section arrangement and relevant installation clearances.",
  },
  {
    number: "03",
    title: "Coordinate the Assembly",
    description:
      "Review enclosure sections, internal equipment layouts, mounting arrangements and cable access requirements.",
  },
  {
    number: "04",
    title: "Confirm the Design Scope",
    description:
      "Document the agreed configuration, technical assumptions and outstanding information required for project review.",
  },
];

export default function ModularEnclosureSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-[#176C73]">
              <Box size={34} />
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#176C73]">
              CHRISTECK Engineering Services
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Modular Enclosure Solutions
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Engineering support for modular electrical enclosures,
              dimensional coordination and enclosure integration into
              low-voltage switchboard assemblies.
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
                Enclosure Engineering
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                A Coordinated Enclosure for Every Assembly
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Modular enclosure systems provide a flexible way to configure
                electrical switchboard assemblies. The enclosure arrangement
                must be coordinated with equipment dimensions, internal
                layouts, cable access and installation requirements.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                CHRISTECK supports manufacturers, panel builders and
                engineering teams with enclosure selection, dimensional
                coordination and technical design reviews based on project
                requirements.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 sm:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#176C73] shadow-sm">
                <Factory size={26} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Designed Around Your Requirements
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Enclosure coordination considers the assembly configuration,
                component arrangements and practical installation needs.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Enclosure dimensions and section layouts",
                  "Internal mounting arrangements",
                  "Cable entry and access considerations",
                  "Coordination with electrical equipment",
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
            title="Modular Enclosure Engineering Support"
            description="Support can be tailored to enclosure dimensions, assembly configuration and project-specific technical requirements."
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
                title="What We Can Support"
                description="The deliverables depend on the agreed scope, enclosure system and available technical information."
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
              <h3 className="text-2xl font-bold">
                Information Needed to Get Started
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Depending on the project, we may request:
              </p>

              <ul className="mt-6 space-y-3 text-slate-200">
                {[
                  "Required enclosure dimensions",
                  "Single-line diagrams and GA drawings",
                  "Equipment dimensions and component schedules",
                  "Cable entry and installation requirements",
                  "Applicable project specifications",
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
            title="Where Modular Enclosures Can Help"
            description="Enclosure engineering support for different low-voltage power distribution assemblies."
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
            title="From Enclosure Requirements to Design Review"
            description="A structured workflow helps coordinate enclosure dimensions, equipment layouts and project requirements."
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

      {/* Final CTA */}
      <section className="bg-[#176C73] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">
                Need Modular Enclosure Support?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Let's discuss your enclosure requirements.
              </h2>

              <p className="mt-4 leading-7 text-teal-50">
                Share your drawings and technical requirements with CHRISTECK
                to discuss the enclosure engineering support suitable for
                your project.
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
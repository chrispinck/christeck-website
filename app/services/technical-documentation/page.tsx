import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  ClipboardCheck,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  FileSpreadsheet,
  Settings,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Technical Documentation for LV Switchboards",
  description:
    "CHRISTECK provides technical documentation support for LV switchboard manufacturers, including engineering calculations, design records and compliance documentation.",
  alternates: {
    canonical: "/services/technical-documentation",
  },
};

const capabilities = [
  {
    icon: FileText,
    title: "Engineering Reports",
    description:
      "Structured technical reports presenting engineering inputs, calculation results, assumptions and relevant design observations.",
  },
  {
    icon: FileSpreadsheet,
    title: "Calculation Documentation",
    description:
      "Organised calculation sheets and supporting records for agreed engineering assessments and design activities.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Documentation Support",
    description:
      "Support in organising technical evidence and design records relevant to the applicable project requirements and standards.",
  },
  {
    icon: Settings,
    title: "Technical Design Records",
    description:
      "Documentation of design parameters, component information, assembly configurations and engineering decisions.",
  },
];

const deliverables = [
  "Engineering calculation reports within the agreed scope.",
  "Technical design review records.",
  "Documented design inputs and assumptions.",
  "Supporting technical schedules and calculation sheets.",
  "Organised design verification records where applicable.",
  "Technical documentation packages prepared for project review.",
];

const applications = [
  "LV switchboard manufacturers",
  "Electrical panel builders",
  "EPC contractors",
  "Electrical engineering consultants",
  "Industrial power distribution projects",
  "Engineering design and compliance reviews",
];

const process = [
  {
    number: "01",
    title: "Understand the Scope",
    description:
      "Identify the required documents, project requirements, applicable standards and intended use of the documentation.",
  },
  {
    number: "02",
    title: "Collect Technical Inputs",
    description:
      "Review drawings, equipment data, specifications, calculations and other relevant project information.",
  },
  {
    number: "03",
    title: "Prepare Documentation",
    description:
      "Organise the agreed technical information into a clear and structured format with traceable inputs and assumptions.",
  },
  {
    number: "04",
    title: "Review and Deliver",
    description:
      "Check the documentation for consistency and provide the agreed deliverables for customer review.",
  },
];

export default function TechnicalDocumentationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-[#176C73]">
              <FileText size={34} />
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#176C73]">
              CHRISTECK Engineering Services
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Technical Documentation
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Structured engineering documentation and technical reporting
              to support LV switchboard design, engineering assessments and
              project documentation requirements.
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
                Engineering Records
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Clear Documentation for Engineering Decisions
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Engineering projects rely on accurate technical information,
                documented assumptions and clear records of design activities.
                Well-organised documentation helps teams review calculations,
                communicate design decisions and maintain project records.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                CHRISTECK supports LV switchboard manufacturers, panel builders
                and engineering teams with technical documentation tailored
                to the agreed project scope and available engineering inputs.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 sm:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#176C73] shadow-sm">
                <BookOpen size={26} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Structured Technical Information
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Documentation is prepared to make the scope, technical inputs
                and engineering outcomes easier to understand and review.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Clear presentation of technical information",
                  "Traceable calculation inputs",
                  "Documented assumptions and limitations",
                  "Consistent project records",
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
            title="Technical Documentation Support"
            description="Documentation services can be tailored to your engineering scope, technical inputs and project deliverables."
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
                title="What Your Documentation Can Include"
                description="The final document package depends on the agreed scope, the supplied information and the intended project use."
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
                Depending on the agreed scope, we may request:
              </p>

              <ul className="mt-6 space-y-3 text-slate-200">
                {[
                  "Project specifications and applicable standards",
                  "Single-line diagrams and GA drawings",
                  "Existing calculation sheets and technical reports",
                  "Component schedules and equipment data",
                  "Required document formats and deliverables",
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
            title="Who We Support"
            description="Technical documentation support for teams involved in the design, manufacture and delivery of electrical power distribution systems."
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
            title="From Technical Inputs to Final Documents"
            description="A structured workflow helps ensure that documentation reflects the agreed scope and available engineering information."
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
                Need Technical Documentation Support?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Let's organise your engineering deliverables.
              </h2>

              <p className="mt-4 leading-7 text-teal-50">
                Share your project requirements with CHRISTECK to discuss
                the documentation support suitable for your needs.
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
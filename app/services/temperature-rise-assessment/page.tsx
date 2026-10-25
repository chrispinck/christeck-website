import type { Metadata } from "next";
import Link from "next/link";
import {
  Thermometer,
  CheckCircle2,
  FileText,
  ShieldCheck,
  ArrowRight,
  ClipboardCheck,
  CircuitBoard,
  BarChart3,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Temperature Rise Assessment for LV Switchboards",
  description:
    "CHRISTECK provides engineering support for LV switchboard temperature-rise calculations, thermal design reviews and technical documentation.",
  alternates: {
    canonical: "/services/temperature-rise-assessment",
  },
};

const capabilities = [
  {
    icon: Thermometer,
    title: "Temperature-Rise Calculations",
    description:
      "Engineering calculations to assess temperature rise within low-voltage switchboard assemblies using an appropriate method and available design data.",
  },
  {
    icon: CircuitBoard,
    title: "Enclosure and Layout Review",
    description:
      "Review of enclosure dimensions, internal arrangements, component positioning and ventilation openings relevant to thermal performance.",
  },
  {
    icon: BarChart3,
    title: "Power Loss Assessment",
    description:
      "Review of component losses, conductor losses and other relevant heat sources used in the thermal assessment.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Design Review",
    description:
      "Engineering review of calculation inputs, assumptions and results to identify potential thermal design concerns.",
  },
];

const deliverables = [
  "Temperature-rise calculation report based on the agreed assessment scope.",
  "Summary of design inputs, assumptions and calculation methodology.",
  "Review of enclosure dimensions and assembly configuration.",
  "Review of component and conductor power-loss data supplied for the project.",
  "Engineering observations and recommendations where applicable.",
  "Supporting technical documentation for the customer's design review.",
];

const process = [
  {
    number: "01",
    title: "Collect Project Information",
    description:
      "Review enclosure drawings, dimensions, rated current, component data, power losses and other relevant project information.",
  },
  {
    number: "02",
    title: "Validate Calculation Inputs",
    description:
      "Check the available data and identify missing information, assumptions or limitations that may affect the assessment.",
  },
  {
    number: "03",
    title: "Perform the Assessment",
    description:
      "Apply an appropriate engineering calculation method within its applicable scope and evaluate the resulting temperature-rise estimates.",
  },
  {
    number: "04",
    title: "Review and Report",
    description:
      "Present the calculation results, assumptions and engineering observations in a structured technical report.",
  },
];

const applications = [
  "Low-voltage switchboard assemblies",
  "Main switchboards and distribution boards",
  "Industrial control and power distribution panels",
  "Modular enclosure-based assemblies",
  "New switchboard designs and design modifications",
  "Engineering reviews for manufacturers and panel builders",
];

export default function TemperatureRiseAssessmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-[#176C73]">
              <Thermometer size={34} />
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#176C73]">
              CHRISTECK Engineering Services
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Temperature Rise Assessment for LV Switchboards
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Engineering support for temperature-rise calculations, thermal
              design reviews and technical documentation for low-voltage
              switchboard assemblies, based on applicable methods and project
              requirements.
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
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-teal-600 hover:text-[#176C73]"
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
                Thermal Engineering
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Understand Thermal Performance Before Finalising Your Design
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Temperature rise is an important consideration in the design
                of low-voltage switchboard assemblies. Component losses,
                conductor arrangements, enclosure dimensions and ventilation
                conditions can influence the thermal performance of an
                assembly.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                CHRISTECK supports manufacturers, panel builders and
                engineering teams with structured calculations and technical
                reviews to help assess thermal performance and document design
                assumptions.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The calculation method is selected according to the assembly
                configuration, available inputs and the method's applicable
                limits. Where IEC TR 60890 is relevant, its scope and
                limitations are considered as part of the assessment.
              </p>
            </div>

            <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 sm:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#176C73] shadow-sm">
                <ShieldCheck size={26} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                A Structured Engineering Approach
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                A useful assessment begins with reliable design inputs,
                transparent assumptions, an appropriate calculation method
                and a clear record of the results.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Documented calculation inputs",
                  "Review of relevant design parameters",
                  "Clear assumptions and limitations",
                  "Structured technical reporting",
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
            title="Temperature Rise Engineering Support"
            subtitle="Thermal assessment tailored to your assembly"
            description="Support can be tailored to the project scope, available technical data and applicable engineering requirements."
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
                title="What Your Assessment Can Include"
                subtitle="Clear, traceable technical information"
                description="Deliverables depend on the agreed scope, the supplied information and the selected calculation method."
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
                Depending on the project scope, we may request the following
                information:
              </p>

              <ul className="mt-6 space-y-3 text-slate-200">
                {[
                  "General arrangement drawings and enclosure dimensions",
                  "Rated current and assembly configuration",
                  "Component and conductor power-loss data",
                  "Ventilation details and mounting arrangements",
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
            title="Where This Service Can Help"
            subtitle="Thermal assessment across LV power distribution projects"
            description="Temperature-rise assessment can support a range of assembly designs and engineering review activities."
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
            title="From Design Inputs to Technical Report"
            subtitle="A clear and collaborative workflow"
            description="Each assessment follows an agreed scope, with the required technical inputs reviewed before calculations are finalised."
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
              A temperature-rise calculation is an engineering assessment and
              should not be presented as independent proof of compliance in
              every situation. The suitability of the method depends on its
              applicable scope, assembly characteristics and the requirements
              of the relevant standard. Additional design verification,
              testing or evidence must be considered separately where required.
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
                Need a Temperature Rise Assessment?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Let's review your switchboard design.
              </h2>

              <p className="mt-4 leading-7 text-teal-50">
                Share your drawings and technical requirements with CHRISTECK
                to discuss the appropriate assessment scope for your project.
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
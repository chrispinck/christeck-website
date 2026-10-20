import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Settings,
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "IEC / AS/NZS 61439 Design Verification Support",
  description:
    "Engineering support for IEC 61439 and AS/NZS 61439 low-voltage switchboard design verification, technical assessments and supporting documentation.",
  alternates: {
    canonical: "/services/iec-61439-design-verification",
  },
};

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Design Verification Planning",
    description:
      "Identify applicable verification requirements and review the available technical evidence against the relevant assembly design.",
  },
  {
    icon: Settings,
    title: "Technical Design Review",
    description:
      "Review assembly configurations, component selection, conductor arrangements and relevant design information.",
  },
  {
    icon: ShieldCheck,
    title: "Verification Evidence Review",
    description:
      "Support the assessment of available design verification evidence, including applicable test reports, calculations and design rules.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Organise engineering calculations, supporting records and technical documentation for design reviews and project requirements.",
  },
];

const deliverables = [
  "Design verification requirement checklist",
  "Review of available technical evidence",
  "Applicable calculation and documentation support",
  "Technical observations and recommendations",
  "Structured project documentation, as agreed",
];

const clients = [
  "Low-voltage switchboard manufacturers",
  "Electrical panel builders and system integrators",
  "Electrical engineering consultants",
  "EPC contractors and project engineering teams",
];

export default function IEC61439DesignVerificationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#176C73]">
              <ShieldCheck size={34} />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#176C73]">
              CHRISTECK Engineering Services
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              IEC / AS/NZS 61439 Design Verification Support
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Practical engineering support for low-voltage switchboard
              manufacturers and project teams working with IEC 61439 and
              AS/NZS 61439 requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#145d63]"
              >
                Discuss Your Requirements
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-[#176C73] hover:text-[#176C73]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176C73]">
                Understanding the Requirements
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Structured engineering support for switchboard design
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                IEC 61439 and AS/NZS 61439 establish requirements for
                low-voltage switchgear and controlgear assemblies. Demonstrating
                conformity requires appropriate design verification evidence
                for the applicable assembly and its characteristics.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                CHRISTECK supports manufacturers and engineering teams by
                reviewing technical information, organising relevant evidence
                and preparing agreed engineering documentation. The scope is
                defined according to the project, applicable standard edition
                and information available.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <ShieldCheck className="text-[#176C73]" size={34} />

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Our focus
              </h3>

              <ul className="mt-6 space-y-4">
                {[
                  "Clear verification requirements",
                  "Traceable technical evidence",
                  "Engineering calculations and reviews",
                  "Well-organised documentation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#2BA9B5]"
                    />
                    <span className="leading-7 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176C73]">
              Our Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How we can support your project
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Engineering activities are agreed according to the assembly,
              applicable requirements and project scope.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#176C73]">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
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
      </section>

      {/* Deliverables */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176C73]">
                Project Deliverables
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Technical documentation tailored to your scope
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Deliverables are agreed at the beginning of the engagement
                based on the project requirements, technical inputs and
                verification activities included in the scope.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <ul className="space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#2BA9B5]"
                    />
                    <span className="leading-7 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Target Clients */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176C73]">
                Who We Support
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Supporting teams across the switchboard industry
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We work with engineering-focused organisations that need
                practical support with low-voltage assembly design,
                technical assessments and documentation.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#176C73]">
                <Users size={25} />
              </div>

              <ul className="space-y-4">
                {clients.map((client) => (
                  <li key={client} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#2BA9B5]"
                    />
                    <span className="leading-7 text-slate-700">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#176C73]">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A clear engineering workflow
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Review project requirements, assembly details and applicable standards.",
              },
              {
                number: "02",
                title: "Assess",
                description:
                  "Identify relevant verification requirements and review available evidence.",
              },
              {
                number: "03",
                title: "Develop",
                description:
                  "Complete the agreed engineering reviews, calculations and documentation.",
              },
              {
                number: "04",
                title: "Deliver",
                description:
                  "Provide the agreed technical outputs and explain any identified gaps.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 p-6 sm:p-7"
              >
                <span className="text-sm font-bold tracking-widest text-[#2BA9B5]">
                  {step.number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Scope Note */}
      <section className="bg-white pb-12">
        <Container>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <p className="text-sm leading-6 text-slate-600">
              <strong className="text-slate-800">Scope clarification:</strong>{" "}
              CHRISTECK provides engineering support and documentation within
              the agreed scope. Formal certification, independent testing and
              conformity declarations are not implied by this service page.
              Applicable verification requirements and responsibilities must
              be confirmed for each project.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#176C73] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">
              Start a Conversation
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Need support with your IEC 61439 project?
            </h2>

            <p className="mt-5 leading-7 text-teal-50">
              Tell us about your assembly, project requirements and available
              technical documentation. We can discuss the appropriate
              engineering support for your needs.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#176C73] transition hover:-translate-y-0.5 hover:bg-teal-50"
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
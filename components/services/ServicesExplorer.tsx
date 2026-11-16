"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Thermometer,
  CircuitBoard,
  FileText,
  Boxes,
  ArrowRight,
  CheckCircle2,
  Workflow,
  ClipboardCheck,
  DraftingCompass,
  Settings2,
  Zap,
} from "lucide-react";

const services = [
  {
    slug: "iec-61439-design-verification",
    icon: ShieldCheck,
    number: "01",
    title: "IEC / AS/NZS 61439 Design Verification",
    description:
      "Engineering support for LV switchboard design verification, technical reviews, and standards-related documentation.",
    highlights: [
      "Design verification support",
      "Technical assessment",
      "Verification documentation",
    ],
  },
  {
    slug: "temperature-rise-assessment",
    icon: Thermometer,
    number: "02",
    title: "Temperature Rise Assessment",
    description:
      "Engineering calculations and thermal assessments to support temperature-rise evaluation of LV switchboard assemblies.",
    highlights: [
      "Thermal calculations",
      "Internal air temperature assessment",
      "Temperature-rise reporting",
    ],
  },
  {
    slug: "lv-switchboard-engineering",
    icon: CircuitBoard,
    number: "03",
    title: "LV Switchboard Engineering",
    description:
      "Engineering support for general arrangement drawings, switchgear layouts, busbar arrangements, and manufacturing documentation.",
    highlights: [
      "GA and SLD development support",
      "Switchgear layout engineering",
      "Manufacturing documentation",
    ],
  },
  {
    slug: "technical-documentation",
    icon: FileText,
    number: "04",
    title: "Technical Documentation",
    description:
      "Structured engineering documentation, calculation reports, component schedules, and project-specific deliverables.",
    highlights: [
      "Engineering calculation reports",
      "Technical schedules",
      "Project documentation",
    ],
  },
  {
    slug: "modular-enclosure-solutions",
    icon: Boxes,
    number: "05",
    title: "Modular Enclosure Solutions",
    description:
      "Engineering support for modular enclosure configurations, mounting arrangements, compartments, and assembly documentation.",
    highlights: [
      "Enclosure configuration",
      "Component integration",
      "Assembly documentation",
    ],
  },
  {
    slug: "busbar-system-design",
    icon: Zap,
    number: "06",
    title: "Busbar System Design",
    description:
      "Engineering support for copper and aluminium busbar sizing, conductor selection, arrangement, and short-circuit considerations.",
    highlights: [
      "Copper and aluminium busbars",
      "Busbar arrangement engineering",
      "Electrical and mechanical considerations",
    ],
  },
];

const workflow = [
  {
    number: "01",
    icon: DraftingCompass,
    title: "Understand",
    description:
      "Review project requirements, specifications, drawings, and technical constraints.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Engineer",
    description:
      "Develop practical engineering solutions aligned with project requirements.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Verify",
    description:
      "Evaluate applicable design requirements and engineering considerations.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Document",
    description:
      "Prepare structured engineering reports, drawings, and technical deliverables.",
  },
];

export default function ServicesExplorer() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

      {/* Services Portfolio */}
      <section>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#176C73]">
            Engineering Capabilities
          </p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Engineering Services
            <span className="text-[#176C73]">
              {" "}Designed for Practical Results
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore our engineering capabilities across LV switchboard
            design, verification support, thermal assessment, busbar
            engineering, and technical documentation.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#176C73] to-[#2BA9B5]" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.slug}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/5 sm:p-7"
              >
                {/* Card Number */}
                <span className="pointer-events-none absolute right-6 top-5 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-teal-50">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-50 to-slate-50 text-[#176C73] ring-1 ring-teal-100 transition-all duration-300 group-hover:from-[#176C73] group-hover:to-[#2BA9B5] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h2 className="relative min-h-[3.5rem] text-lg font-bold leading-7 text-slate-900 sm:text-xl">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="mt-4 flex-grow text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                  {service.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-[#2BA9B5]"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Service Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-7 inline-flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold text-[#176C73] transition-colors hover:text-[#2BA9B5]"
                >
                  Explore Service
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-teal-300">
              <Workflow size={15} />
              Our Engineering Approach
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              A structured approach to
              <span className="text-teal-300"> engineering excellence.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Every project follows a structured engineering workflow
              focused on requirements, technical development, verification
              considerations, and clear documentation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {workflow.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04] sm:p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300">
                      <Icon size={23} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-slate-600">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>

                  {index !== workflow.length - 1 && (
                    <div className="absolute right-0 top-6 hidden h-px w-8 translate-x-5 bg-teal-400/20 xl:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Capabilities */}
      <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#176C73]">
            Engineering Knowledge
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Technical understanding.
            <br />
            <span className="text-[#176C73]">Practical engineering.</span>
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            CHRISTECK brings together engineering knowledge and practical
            technical support to help address LV switchboard design,
            documentation, and assessment requirements.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "LV switchboard design and engineering",
              "IEC / AS/NZS 61439 engineering support",
              "Temperature-rise assessment",
              "Copper and aluminium busbar engineering",
              "Technical reports and documentation",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#2BA9B5]"
                />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-slate-50 via-white to-teal-50 p-7 sm:p-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-teal-200/20 blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#176C73] text-white shadow-lg shadow-teal-900/10">
              <CircuitBoard size={27} />
            </div>

            <h3 className="text-2xl font-bold leading-snug text-slate-900">
              Engineering Support for Your Projects
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              From initial engineering requirements to structured technical
              deliverables, explore how our services can support your
              switchboard engineering workflow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Design", "Assessment", "Verification", "Documentation"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-teal-100 bg-white px-3 py-2 text-sm font-medium text-[#176C73]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
{/* Contact CTA */}
<section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#176C73] to-[#208F98] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-16">
  <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

  <div className="relative mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">
        Have an Engineering Requirement?
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        Let&apos;s engineer your next project.
      </h2>

      <p className="mt-5 max-w-xl leading-7 text-teal-50">
        Share your technical requirements, drawings, or project
        specifications to discuss the appropriate engineering support.
      </p>
    </div>

    <Link
      href="/contact"
      className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-7 py-4 font-bold text-[#176C73] shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-50 md:self-center"
    >
      Discuss Your Project
      <ArrowRight size={18} />
    </Link>
  </div>
</section>
    </main>
  );
}
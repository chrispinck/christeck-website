import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Thermometer,
  CircuitBoard,
  FileText,
  Target,
  Eye,
  Lightbulb,
  CheckCircle2,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About CHRISTECK | Electrical Engineering Solutions",
  description:
    "Learn about CHRISTECK, an electrical engineering platform focused on LV switchboard engineering knowledge, technical assessments, and practical engineering services.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About CHRISTECK | Electrical Engineering Solutions",
    description:
      "Engineering knowledge and practical engineering services for LV switchboards.",
    url: "https://christeck.in/about",
    siteName: "CHRISTECK",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 1536,
        height: 1024,
        alt: "CHRISTECK Electrical Engineering Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About CHRISTECK | Electrical Engineering Solutions",
    description:
      "Engineering knowledge and practical engineering services for LV switchboards.",
    images: ["/images/hero-engineering-v1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const expertise = [
  {
    icon: ShieldCheck,
    title: "IEC 61439 Engineering",
    description:
      "Design verification support, technical assessments, and engineering documentation.",
  },
  {
    icon: Thermometer,
    title: "Temperature Rise Assessment",
    description:
      "Thermal calculations and assessment support for LV switchboard assemblies.",
  },
  {
    icon: CircuitBoard,
    title: "LV Switchboard Engineering",
    description:
      "Engineering support for layouts, busbar arrangements, and switchboard documentation.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "Structured calculation reports, technical schedules, and project deliverables.",
  },
];

export default function AboutPage() {
  return (
    <>
            <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://christeck.in/" },
          { name: "About", url: "https://christeck.in/about" },
        ]}
      />

      <div>
        {/* Hero */}
        <Section className="relative overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
          <Container>
            <div className="relative mx-auto max-w-4xl text-center">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#176C73]">
                About CHRISTECK
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Engineering Knowledge.
                <br />
                <span className="text-[#176C73]">
                  Practical Engineering Solutions.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                CHRISTECK brings together electrical engineering knowledge
                and practical technical services to support LV switchboard
                design, assessment, verification, and documentation.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-[#145B61]"
                >
                  Explore Engineering Services
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-teal-300 hover:text-[#176C73]"
                >
                  Explore Resources
                </Link>
              </div>
            </div>
          </Container>
        </Section>

        {/* Who We Are */}
        <Section className="bg-slate-50">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="Who We Are"
                  title="Built around engineering knowledge and practical application."
                  description="CHRISTECK focuses on making electrical engineering knowledge accessible and connecting it with practical engineering support."
                  align="left"
                />

                <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Our focus is low-voltage switchboard engineering,
                    covering design considerations, technical assessments,
                    thermal evaluation, busbar engineering, and engineering
                    documentation.
                  </p>

                  <p>
                    Through engineering resources and service-oriented
                    support, CHRISTECK aims to help engineers and
                    organisations approach technical requirements with
                    greater clarity and structured understanding.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-white via-slate-50 to-teal-50 p-8 sm:p-10">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#176C73] text-white shadow-lg shadow-teal-900/10">
                    <Lightbulb size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Our Engineering Philosophy
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    Engineering should be technically sound, clearly
                    documented, practically applicable, and aligned with
                    project requirements.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Technical clarity",
                      "Practical engineering",
                      "Structured documentation",
                      "Continuous learning",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0 text-[#2BA9B5]"
                        />
                        <span className="font-medium text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Mission and Vision */}
        <Section>
          <Container>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <SectionHeading
                eyebrow="Purpose & Direction"
                title="Our Mission and Vision"
                description="A clear purpose for engineering knowledge and technical development."
                align="center"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/5 sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#176C73] ring-1 ring-teal-100">
                  <Target size={27} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Our Mission
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  To share engineering knowledge and provide practical
                  electrical engineering support that helps address LV
                  switchboard design, assessment, and documentation
                  requirements.
                </p>
              </article>

              <article className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/5 sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-[#176C73] ring-1 ring-teal-100">
                  <Eye size={27} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Our Vision
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  To build a trusted engineering knowledge and services
                  platform that supports continuous learning, technical
                  understanding, and practical engineering development.
                </p>
              </article>
            </div>
          </Container>
        </Section>

        {/* Expertise */}
        <Section className="bg-slate-50">
          <Container>
            <SectionHeading
              eyebrow="Engineering Expertise"
              title="Our Technical Focus"
              description="Focused engineering capabilities across LV switchboard design and technical assessment."
              align="center"
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#176C73] ring-1 ring-teal-100">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-bold text-[#176C73] transition hover:text-[#2BA9B5]"
              >
                Explore All Engineering Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </Container>
        </Section>

        {/* Closing CTA */}
        <Section>
          <Container>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#176C73] to-[#208F98] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

              <div className="relative mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">
                    Engineering Knowledge + Engineering Services
                  </p>

                  <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    Let&apos;s build better engineering understanding.
                  </h2>

                  <p className="mt-5 leading-7 text-teal-50">
                    Explore our engineering resources or discuss your
                    technical requirements with CHRISTECK.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-7 py-4 font-bold text-[#176C73] shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-50 md:self-center"
                >
                  Contact CHRISTECK
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Download,
  CircuitBoard,
  FileText,
  ClipboardCheck,
  Thermometer,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Engineering Resources",
  description:
    "Explore engineering articles, technical guides and engineering downloads covering LV switchboard design, IEC 61439 and temperature-rise assessment.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    type: "website",
    url: "https://christeck.in/resources",
    siteName: "CHRISTECK",
    title: "Engineering Resources",
    description:
      "Engineering knowledge, technical guides and practical resources for LV switchboard manufacturers, panel builders and electrical engineers.",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const articles = [
  {
    title: "IEC 61439 Design Verification Guide",
    description:
      "Understand the design verification requirements, verification methods and engineering considerations for LV switchboard assemblies.",
    label: "Engineering Article",
    icon: BookOpen,
    action: "Read Article",
    href: "/resources/articles/iec-61439-design-verification-guide",
  },
  {
    title: "Temperature Rise Assessment of LV Switchboards",
    description:
      "Explore temperature-rise fundamentals, heat sources, ventilation considerations and calculation-based thermal assessment.",
    label: "Engineering Article",
    icon: Thermometer,
    action: "Read Article",
    href: "/resources/articles/temperature-rise-assessment-lv-switchboards",
  },
];

const guides = [
  {
    title: "LV Switchboard Engineering",
    description:
      "Explore engineering considerations for LV switchboard configurations, layouts and assembly design.",
    label: "Engineering Guide",
    icon: CircuitBoard,
    action: "Explore Service",
    href: "/services/lv-switchboard-engineering",
  },
  {
    title: "Busbar System Design",
    description:
      "Explore copper and aluminium busbar design, conductor arrangements and engineering considerations.",
    label: "Busbar Engineering",
    icon: Zap,
    action: "Explore Service",
    href: "/services/busbar-system-design",
  },
  {
    title: "IEC 61439 Engineering",
    description:
      "Explore engineering services supporting IEC 61439 design verification and LV assembly requirements.",
    label: "IEC 61439",
    icon: ClipboardCheck,
    action: "Explore Service",
    href: "/services/iec-61439-design-verification",
  },
  {
    title: "Modular Enclosure Solutions",
    description:
      "Discover modular enclosure systems and their application in LV switchboard engineering.",
    label: "Enclosure Engineering",
    icon: CircuitBoard,
    action: "Explore Service",
    href: "/services/modular-enclosure-solutions",
  },
  {
    title: "Technical Documentation",
    description:
      "Understand engineering documentation, technical reports and project-specific calculation records.",
    label: "Documentation",
    icon: FileText,
    action: "Explore Service",
    href: "/services/technical-documentation",
  },
  {
    title: "Temperature Rise Assessment",
    description:
      "Explore temperature-rise calculations and thermal assessment services for LV switchboard assemblies.",
    label: "Thermal Engineering",
    icon: Calculator,
    action: "Explore Service",
    href: "/services/temperature-rise-assessment",
  },
];

const downloads = [
  {
    title: "Engineering Downloads",
    description:
      "Access engineering checklists, technical documents, calculation sheets and practical templates.",
    label: "Downloads",
    icon: Download,
    action: "Browse Downloads",
    href: "/resources/downloads",
  },
];

function ResourceCard({
  title,
  description,
  label,
  icon: Icon,
  action,
  href,
}: {
  title: string;
  description: string;
  label: string;
  icon: React.ElementType;
  action: string;
  href: string;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl">
      <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-[#176C73] to-[#2BA9B5]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-white">
          {label}
        </span>

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg transition group-hover:scale-105">
          <Icon size={32} strokeWidth={1.8} />
        </div>
      </div>

      <div className="flex min-h-[225px] flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#176C73] transition group-hover:gap-3"
          >
            {action}
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ResourceSection({
  title,
  description,
  resources,
}: {
  title: string;
  description: string;
  resources: typeof articles;
}) {
  return (
    <section className="mt-16 first:mt-0">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          {description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} {...resource} />
        ))}
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://christeck.in/" },
          {
            name: "Engineering Resources",
            url: "https://christeck.in/resources",
          },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-16 sm:py-20">
        <Container>
          {/* Hero */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-5 py-2 text-sm font-semibold text-[#176C73]">
              Engineering Knowledge & Resources
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Engineering
              <span className="block text-[#176C73]">Resources</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explore engineering articles, technical guides and practical
              resources to support reliable and standards-based low-voltage
              switchboard engineering.
            </p>
          </div>

          {/* Engineering Articles */}
          <div className="mt-16">
            <ResourceSection
              title="Engineering Articles"
              description="Technical articles explaining engineering principles, standards and practical considerations for LV switchboard applications."
              resources={articles}
            />
          </div>

          {/* Technical Guides */}
          <div className="mt-16">
            <ResourceSection
              title="Technical Guides"
              description="Explore engineering topics, technical references and CHRISTECK engineering services."
              resources={guides}
            />
          </div>

          {/* Engineering Downloads */}
          <div className="mt-16">
            <ResourceSection
              title="Engineering Downloads"
              description="Access practical engineering documents, checklists, calculation resources and technical templates."
              resources={downloads}
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 rounded-3xl border border-teal-100 bg-white p-8 text-center shadow-sm sm:p-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Need Engineering Support?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Have a technical question or require engineering support for your
              LV switchboard project? Connect with CHRISTECK.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#145d63]"
            >
              Discuss Your Engineering Requirements
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
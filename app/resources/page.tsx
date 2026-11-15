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
  title: "Engineering Knowledge & Resources",
  description:
    "Explore technical articles, engineering guides and practical resources covering LV switchboard design, IEC 61439 compliance and temperature-rise assessment.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    type: "website",
    url: "https://christeck.in/resources",
    siteName: "CHRISTECK",
    title: "Engineering Knowledge & Resources",
    description:
      "Technical engineering knowledge for LV switchboard manufacturers, panel builders and electrical engineers.",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const resources = [
  {
    title: "IEC 61439 Design Verification",
    description:
      "Understand design verification requirements, compliance methods and engineering best practices for LV switchboard assemblies.",
    label: "Technical Guide",
    icon: BookOpen,
    action: "Read Article",
    href: "/knowledge/iec-61439-design-verification-guide",
  },
  {
    title: "Temperature Rise Assessment",
    description:
      "Learn how temperature-rise calculations and thermal assessments are performed for LV switchboard assemblies.",
    label: "Engineering Guide",
    icon: Calculator,
    action: "Learn More",
    href: "/services/temperature-rise-assessment",
  },
  {
    title: "Engineering Downloads",
    description:
      "Access engineering checklists, technical documents and practical templates for LV switchboard projects.",
    label: "Downloads",
    icon: Download,
    action: "Browse Downloads",
    href: "/contact",
  },
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
    title: "Technical Documentation",
    description:
      "Understand engineering documentation, technical reports and project-specific calculation records.",
    label: "Documentation",
    icon: FileText,
    action: "Explore Service",
    href: "/services/technical-documentation",
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
];

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://christeck.in/" },
          {
            name: "Engineering Knowledge & Resources",
            url: "https://christeck.in/resources",
          },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50 py-16 sm:py-20">
        <Container>
          {/* Hero */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-5 py-2 text-sm font-semibold text-[#176C73]">
              Engineering Knowledge Centre
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Engineering
              <span className="block text-[#176C73]">Resources</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explore technical articles, engineering guides and practical
              resources to help you design reliable, standards-compliant
              low-voltage switchboards.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <article
                  key={resource.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
                >
                  {/* Card Header */}
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
                      {resource.label}
                    </span>

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white shadow-lg transition group-hover:scale-105">
                      <Icon size={32} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex min-h-[225px] flex-col p-6">
                    <h2 className="text-lg font-bold text-slate-900">
                      {resource.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {resource.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <Link
                        href={resource.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#176C73] transition group-hover:gap-3"
                      >
                        {resource.action}
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#176C73] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#145d63]"
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
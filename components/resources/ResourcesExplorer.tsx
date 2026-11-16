"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CircuitBoard,
  ClipboardCheck,
  FileText,
  Search,
  Thermometer,
  Zap,
  Download,
  Clock,
  Sparkles,
} from "lucide-react";

const articles = [
  {
    title: "IEC 61439 Design Verification Guide",
    description:
      "Understand design verification requirements, verification methods and engineering considerations for LV switchboard assemblies.",
    category: "IEC 61439",
    type: "Engineering Article",
    readTime: "8 min read",
    href: "/resources/articles/iec-61439-design-verification-guide",
    icon: ClipboardCheck,
    featured: true,
  },
  {
    title: "Temperature Rise Assessment of LV Switchboards",
    description:
      "Explore temperature-rise fundamentals, heat sources, ventilation considerations and calculation-based thermal assessment.",
    category: "Temperature Rise",
    type: "Engineering Article",
    readTime: "10 min read",
    href: "/resources/articles/temperature-rise-assessment-lv-switchboards",
    icon: Thermometer,
    featured: false,
  },
];

const guides = [
  {
    title: "LV Switchboard Engineering",
    description:
      "Engineering considerations for LV switchboard configurations, layouts and assembly design.",
    category: "Switchboard Design",
    icon: CircuitBoard,
    href: "/services/lv-switchboard-engineering",
  },
  {
    title: "Busbar System Design",
    description:
      "Copper and aluminium busbar design, conductor arrangements and engineering considerations.",
    category: "Busbar Engineering",
    icon: Zap,
    href: "/services/busbar-system-design",
  },
  {
    title: "IEC 61439 Engineering",
    description:
      "Engineering services supporting IEC 61439 design verification and LV assembly requirements.",
    category: "IEC 61439",
    icon: ClipboardCheck,
    href: "/services/iec-61439-design-verification",
  },
  {
    title: "Modular Enclosure Solutions",
    description:
      "Modular enclosure systems and their applications in LV switchboard engineering.",
    category: "Enclosure Engineering",
    icon: CircuitBoard,
    href: "/services/modular-enclosure-solutions",
  },
  {
    title: "Technical Documentation",
    description:
      "Engineering documentation, technical reports and project-specific calculation records.",
    category: "Documentation",
    icon: FileText,
    href: "/services/technical-documentation",
  },
  {
    title: "Temperature Rise Assessment",
    description:
      "Temperature-rise calculations and thermal assessment services for LV assemblies.",
    category: "Temperature Rise",
    icon: Calculator,
    href: "/services/temperature-rise-assessment",
  },
];

const filters = ["All Articles", "IEC 61439", "Temperature Rise"];

export default function ResourcesExplorer() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Articles");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesFilter =
        activeFilter === "All Articles" ||
        article.category === activeFilter;

      const searchableText =
        `${article.title} ${article.description} ${article.category}`.toLowerCase();

      const matchesSearch = searchableText.includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  const FeaturedIcon = articles[0].icon;

  return (
    <div className="space-y-20">
      {/* Featured Article */}
      <section>
        <div className="mb-8 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-[#176C73]">
            <Sparkles size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176C73]">
              Featured Article
            </p>
            <h2 className="text-2xl font-bold text-slate-900">
              Engineering Spotlight
            </h2>
          </div>
        </div>

        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl lg:grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#123D46] via-[#176C73] to-[#2BA9B5] p-10">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/20" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-white/20" />

            <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-sm transition duration-500 group-hover:scale-105">
              <FeaturedIcon size={64} strokeWidth={1.3} />
            </div>

            <span className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
              IEC 61439
            </span>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-teal-50 px-3 py-1 font-semibold text-[#176C73]">
                Engineering Article
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                8 min read
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              IEC 61439 Design Verification Guide
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              Understand the design verification requirements, verification
              methods and engineering considerations for low-voltage
              switchboard assemblies.
            </p>

            <Link
              href="/resources/articles/iec-61439-design-verification-guide"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-[#176C73] px-6 py-3 font-semibold text-white transition hover:bg-[#145d63]"
            >
              Read Featured Article
              <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      {/* Article Search */}
      <section>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176C73]">
            Knowledge Library
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Engineering Articles
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Explore practical engineering articles covering standards,
            calculations and technical considerations for LV switchboards.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search engineering articles..."
              aria-label="Search engineering articles"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-50"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {filters.map((filter) => {
              const selected = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selected
                      ? "bg-[#176C73] text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-[#176C73]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {filteredArticles.map((article) => {
            const Icon = article.icon;

            return (
              <article
                key={article.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-[#176C73]">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition group-hover:scale-110">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {article.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{article.type}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
                    {article.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {article.description}
                  </p>

                  <Link
                    href={article.href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#176C73] transition group-hover:gap-3"
                  >
                    Read Article
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {filteredArticles.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
            <Search className="mx-auto text-slate-400" size={32} />
            <h3 className="mt-4 font-semibold text-slate-900">
              No articles found
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Try another search term or select a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveFilter("All Articles");
              }}
              className="mt-5 font-semibold text-[#176C73] underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Technical Guides */}
      <section>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#176C73]">
            Engineering Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Technical Guides
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Explore specialist engineering capabilities and technical topics
            relevant to LV switchboard design and verification.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => {
            const Icon = guide.icon;

            return (
              <Link
                key={guide.title}
                href={guide.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-[#176C73] transition group-hover:bg-[#176C73] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-wide text-[#176C73]">
                  {guide.category}
                </span>

                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {guide.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {guide.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#176C73] transition group-hover:gap-3">
                  Explore Guide
                  <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Downloads */}
      <section>
        <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-slate-50 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#176C73] text-white shadow-lg">
                <Download size={26} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#176C73]">
                  Technical Library
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Engineering Downloads
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Access engineering documents, checklists, calculation
                  resources and practical technical templates.
                </p>
              </div>
            </div>

            <Link
              href="/resources/downloads"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#176C73] bg-white px-6 py-3 font-semibold text-[#176C73] transition hover:bg-[#176C73] hover:text-white"
            >
              Browse Downloads
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="rounded-3xl bg-slate-950 px-8 py-12 text-center sm:px-12">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
          CHRISTECK Engineering
        </span>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
          Need Engineering Support?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          Have a technical question or require engineering support for your LV
          switchboard project? Connect with CHRISTECK.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2BA9B5] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#238e98]"
        >
          Discuss Your Engineering Requirements
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
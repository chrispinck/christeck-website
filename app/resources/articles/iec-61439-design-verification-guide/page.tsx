import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const url =
  "https://christeck.in/resources/articles/iec-61439-design-verification-guide";

const title =
  "IEC 61439: Guide to LV Switchboard Design Verification";

const description =
  "An engineering overview of IEC 61439 design verification for LV switchboards, including temperature rise, short-circuit withstand, enclosure protection and documentation.";

const organizationId = "https://christeck.in/#organization";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical: url,
  },

  openGraph: {
    title: `${title} | CHRISTECK`,
    description,
    url,
    type: "article",
    siteName: "CHRISTECK",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 1536,
        height: 1024,
        alt: "IEC 61439 LV Switchboard Design Verification Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | CHRISTECK`,
    description,
    images: ["/images/hero-engineering-v1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${url}#article`,
  headline: title,
  description,
  image: ["https://christeck.in/images/hero-engineering-v1.png"],
  author: {
    "@type": "Organization",
    "@id": organizationId,
    name: "CHRISTECK",
  },
  publisher: {
    "@type": "Organization",
    "@id": organizationId,
    name: "CHRISTECK",
    url: "https://christeck.in",
    logo: {
      "@type": "ImageObject",
      url: "https://christeck.in/logo/christeck-logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
  datePublished: "2026-11-15",
  dateModified: "2026-11-16",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 mt-2 border-t border-slate-200 pt-2"
    >
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>

      <div className="space-y-3 text-lg leading-8 text-slate-700 [&_p]:!m-0">
        {children}
      </div>
    </section>
  );
}

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://christeck.in/" },
          { name: "Resources", url: "https://christeck.in/resources" },
          {
            name: "IEC 61439 Design Verification Guide",
            url: "https://christeck.in/resources/articles/iec-61439-design-verification-guide",
          },
        ]}
      />

      <div className="bg-white text-slate-900">
        {/* Article Header */}
        <header className="border-b bg-gradient-to-br from-teal-50 via-white to-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <nav
              aria-label="Breadcrumb"
              className="text-sm text-slate-500"
            >
              <Link href="/" className="hover:text-[#176C73]">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/resources" className="hover:text-[#176C73]">
                Resources
              </Link>{" "}
              / IEC 61439
            </nav>

            <span className="mt-5 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-[#176C73]">
              IEC 61439 · Engineering Guide
            </span>

            <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-7 text-slate-600">
              {description}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              CHRISTECK Engineering Resources · 8 min read
            </p>
          </div>
        </header>

        {/* Article Layout */}
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          {/* Main Article */}
          <article className="min-w-0 text-lg">
            {/* Engineering Note */}
            <div className="mb-7 rounded-xl border-l-4 border-[#2BA9B5] bg-teal-50 p-4 text-sm leading-6 text-slate-700">
              <b>Engineering note:</b> This is an introductory overview, not a
              substitute for the applicable IEC 61439 edition, project
              specifications or a complete design-verification assessment.
              Requirements and permitted methods depend on the assembly and
              characteristic.
            </div>

            <Section id="intro" title="Introduction">
              <p>
                Low-voltage switchboard assemblies are important parts of
                electrical distribution systems. Their design must address
                electrical safety, thermal performance, mechanical integrity
                and reliability.
              </p>

              <p>
                The IEC 61439 series establishes requirements for low-voltage
                switchgear and controlgear assemblies, including design
                verification and routine verification.
              </p>
            </Section>

            <Section id="standard" title="What is IEC 61439?">
              <p>
                IEC 61439 is a series of standards for low-voltage switchgear
                and controlgear assemblies. It addresses assembly
                characteristics, construction and verification. The applicable
                part depends on the assembly type and intended application.
              </p>

              <p>
                Design teams should identify the relevant standard, edition,
                project requirements and assembly ratings before verification
                begins.
              </p>
            </Section>

            <Section id="design" title="What is design verification?">
              <p>
                Design verification demonstrates that an assembly or
                assembly-system design satisfies applicable requirements. It
                establishes evidence for the relevant performance
                characteristics and configuration being assessed.
              </p>

              <p>
                Depending on the characteristic, permitted methods may include
                testing, comparison with a verified reference design or
                assessment. The chosen method must be allowed by the standard
                and meet its conditions.
              </p>
            </Section>

            <Section id="thermal" title="Temperature-rise verification">
              <p>
                Temperature-rise verification evaluates thermal performance
                under specified operating conditions. Inputs can include
                circuit currents, conductor dimensions and material, losses,
                enclosure geometry, ventilation, component limits and ambient
                conditions.
              </p>

              <p>
                The assessment should define scope, assumptions, configuration
                and limitations. Calculation or assessment methods must only
                be used where permitted and supported by required evidence.
              </p>

              <p>
                <Link
                  className="font-semibold text-[#176C73] underline underline-offset-4"
                  href="/services/temperature-rise-assessment"
                >
                  Learn about temperature-rise assessment support →
                </Link>
              </p>
            </Section>

            <Section
              id="fault"
              title="Short-circuit withstand verification"
            >
              <p>
                Short-circuit verification addresses thermal and mechanical
                fault-current effects under applicable conditions.
                Considerations can include rated short-time and peak withstand
                currents, protective-device characteristics, busbar supports,
                spacing and assembly configuration.
              </p>

              <p>
                Evidence must apply to the design and fault conditions under
                consideration; differences from a reference configuration
                should be evaluated against the standard.
              </p>
            </Section>

            <Section id="ip" title="Degree of protection (IP)">
              <p>
                Enclosure IP protection relates to access to hazardous parts
                and ingress of solid objects or water, as defined by the
                classification. The required level depends on the installation
                environment and project specification.
              </p>

              <p>
                Openings, doors, covers, ventilation and cable-entry provisions
                should be considered in the specified enclosure configuration.
              </p>
            </Section>

            <Section id="busbar" title="Busbar system design">
              <p>
                Busbar considerations include conductor material and
                dimensions, current carrying capacity, thermal performance,
                short-circuit withstand, support spacing, clearances and
                mechanical arrangement.
              </p>

              <p>
                Copper and aluminium have different material characteristics.
                Selection and sizing should reflect assembly design, operating
                conditions and applicable verification evidence—not a single
                current-density value alone.
              </p>

              <p>
                <Link
                  className="font-semibold text-[#176C73] underline underline-offset-4"
                  href="/services/busbar-system-design"
                >
                  Explore busbar system design support →
                </Link>
              </p>
            </Section>

            <Section
              id="routine"
              title="Design verification vs routine verification"
            >
              <p>
                Design verification establishes that the design meets
                applicable requirements. Routine verification is performed on
                each completed assembly to check defects in materials and
                workmanship and to verify the assembly as manufactured. Both
                support a documented manufacturing process.
              </p>
            </Section>

            <Section id="docs" title="Engineering documentation">
              <p>
                A structured package supports traceability and identifies the
                configuration and verification basis. Project records may
                include:
              </p>

              <ul className="list-disc space-y-1 pl-6">
                <li>General arrangement drawings and single-line diagrams</li>
                <li>Busbar arrangement and assembly drawings</li>
                <li>Design-verification records and supporting evidence</li>
                <li>Temperature-rise assessment records, where applicable</li>
                <li>
                  Short-circuit and enclosure-protection verification records
                </li>
                <li>
                  Bill of materials, component data and routine-verification
                  records
                </li>
              </ul>

              <p>
                Confirm exact records from the applicable standard, project
                specification and verification plan.
              </p>
            </Section>

            <Section id="conclusion" title="Conclusion">
              <p>
                IEC 61439 design verification is a key part of LV switchboard
                engineering. A systematic approach to design, thermal
                performance, short-circuit withstand, enclosure protection and
                documentation helps demonstrate assembly performance and
                supports reliable manufacturing.
              </p>

              <p>
                Always use the applicable standard edition and confirm that
                evidence matches the assembly configuration and intended
                application.
              </p>
            </Section>

            {/* Engineering Support */}
            <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
              <h2 className="text-xl font-bold">
                Engineering support from CHRISTECK
              </h2>

              <p className="mt-2 leading-6 text-slate-600">
                CHRISTECK supports LV switchboard engineering, IEC 61439
                design-verification activities, temperature-rise assessment,
                busbar system design and technical documentation.
              </p>

              <Link
                href="/services"
                className="mt-4 inline-block rounded-lg bg-[#176C73] px-5 py-3 font-semibold text-white transition hover:bg-[#145d63]"
              >
                Explore engineering services
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="border-t pt-4 text-sm leading-6 text-slate-500">
              <b>Disclaimer:</b> General engineering information only. This
              is not certification, approval or a project-specific compliance
              determination. Consult applicable standards, project
              requirements and competent engineering professionals.
            </div>
          </article>

          {/* Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-slate-900">In this article</p>

              <nav
                aria-label="Article contents"
                className="mt-3 space-y-2 text-sm text-slate-600"
              >
                {[
                  ["intro", "Introduction"],
                  ["standard", "What is IEC 61439?"],
                  ["design", "Design verification"],
                  ["thermal", "Temperature rise"],
                  ["fault", "Short-circuit withstand"],
                  ["ip", "IP protection"],
                  ["busbar", "Busbar system"],
                  ["routine", "Routine verification"],
                  ["docs", "Documentation"],
                  ["conclusion", "Conclusion"],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block transition hover:text-[#176C73]"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <Link
                href="/resources"
                className="mt-4 block border-t pt-3 text-sm font-semibold text-[#176C73]"
              >
                ← Resources
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
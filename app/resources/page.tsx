import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ResourcesExplorer from "@/components/resources/ResourcesExplorer";

export const metadata: Metadata = {
  title: "Engineering Resources | CHRISTECK",
  description:
    "Explore engineering articles, technical guides and engineering downloads covering LV switchboard design, IEC 61439 and temperature-rise assessment.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    type: "website",
    url: "https://christeck.in/resources",
    siteName: "CHRISTECK",
    title: "Engineering Resources | CHRISTECK",
    description:
      "Engineering knowledge, technical guides and practical resources for LV switchboard manufacturers, panel builders and electrical engineers.",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
        {/* Hero */}
        <div className="relative border-b border-teal-100/70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(43,169,181,0.12),transparent_35%)]" />

          <Container>
            <div className="relative py-20 text-center sm:py-28">
              <span className="inline-flex items-center rounded-full border border-teal-200 bg-white/80 px-5 py-2 text-sm font-semibold text-[#176C73] shadow-sm">
                Engineering Knowledge & Resources
              </span>

              <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Engineering Knowledge.
                <span className="mt-2 block text-[#176C73]">
                  Built for Practical Excellence.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore technical articles, engineering guides and practical
                resources covering LV switchboard design, IEC 61439,
                temperature-rise assessment and busbar engineering.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
                  IEC 61439
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
                  Temperature Rise
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
                  Busbar Engineering
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
                  LV Switchboards
                </span>
              </div>
            </div>
          </Container>
        </div>

        {/* Resources Explorer */}
        <Container>
          <div className="py-16 sm:py-20">
            <ResourcesExplorer />
          </div>
        </Container>
      </section>
    </>
  );
}
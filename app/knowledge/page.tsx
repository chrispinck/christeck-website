import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | CHRISTECK",
  description:
    "Explore CHRISTECK engineering articles, technical guides and resources for LV switchboard engineering.",
  alternates: {
    canonical: "https://christeck.in/resources",
  },
};

export default function KnowledgeRedirectPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Engineering Resources
        </h1>

        <p className="mt-3 text-slate-600">
          Redirecting you to CHRISTECK Resources...
        </p>

        <meta httpEquiv="refresh" content="0;url=/resources" />

        <a
          href="/resources"
          className="mt-6 inline-block font-semibold text-[#176C73] underline"
        >
          Continue to Resources →
        </a>
      </div>
    </main>
  );
}
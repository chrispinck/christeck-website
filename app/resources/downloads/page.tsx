import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engineering Downloads | CHRISTECK",

  description:
    "Explore CHRISTECK engineering downloads, including LV switchboard engineering checklists, technical documents, calculation templates and practical resources.",

  alternates: {
    canonical: "/resources/downloads",
  },

  openGraph: {
    type: "website",
    url: "https://christeck.in/resources/downloads",
    siteName: "CHRISTECK",
    title: "Engineering Downloads | CHRISTECK",
    description:
      "Explore engineering checklists, technical documents, calculation templates and practical resources for LV switchboard engineering.",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-engineering-v1.png",
        width: 1536,
        height: 1024,
        alt: "CHRISTECK Engineering Downloads",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Engineering Downloads | CHRISTECK",
    description:
      "Explore engineering checklists, technical documents and calculation templates for LV switchboard engineering.",
    images: ["/images/hero-engineering-v1.png"],
  },

  robots: {
    index: false,
    follow: true,
  },
};

export default function DownloadsPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
      <div className="max-w-2xl text-center">
        <span className="inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-[#176C73]">
          CHRISTECK Engineering Resources
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
          Engineering Downloads
        </h1>

        <p className="mt-5 text-xl font-semibold text-[#176C73]">
          Coming Soon!
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          We are preparing engineering checklists, technical documents,
          calculation templates and practical resources for LV switchboard
          engineering.
        </p>

        <Link
          href="/resources"
          className="mt-8 inline-block rounded-lg bg-[#176C73] px-6 py-3 font-semibold text-white transition hover:bg-[#145d63]"
        >
          ← Back to Resources
        </Link>
      </div>
    </div>
  );
}
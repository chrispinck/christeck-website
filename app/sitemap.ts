import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://christeck.in";

const staticPages = [
  {
    path: "",
    priority: 1,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/knowledge",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
];

const servicePages = [
  "/services/iec-61439-design-verification",
  "/services/temperature-rise-assessment",
  "/services/lv-switchboard-engineering",
  "/services/technical-documentation",
  "/services/modular-enclosure-solutions",
  "/services/busbar-system-design",
];

const knowledgePages = [
  "/knowledge/iec-61439-design-verification-guide",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),

    ...servicePages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...knowledgePages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
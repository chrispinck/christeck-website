type BreadcrumbItem = {
  name: string;
  url: string;
};

type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

const SITE_URL = "https://christeck.in";

export default function BreadcrumbSchema({
  items,
}: BreadcrumbSchemaProps) {
  const validItems = items.filter(
    (item) => item.name.trim() && item.url.trim()
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${new URL(
      validItems[validItems.length - 1]?.url || "/",
      SITE_URL
    ).toString()}#breadcrumb`,

    itemListElement: validItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.url, SITE_URL).toString(),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
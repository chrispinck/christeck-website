export default function ProfessionalServiceSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://christeck.in/services/#service",
    name: "CHRISTECK Engineering Services",
    url: "https://christeck.in/services",
    image: "https://christeck.in/images/hero-engineering-v1.png",
    description:
      "CHRISTECK provides LV switchboard engineering services for manufacturers, panel builders and engineering teams, with a primary focus on Australia and New Zealand, followed by India. Services include IEC 61439 design verification support, temperature-rise assessment, busbar system design and technical documentation.",
    provider: {
      "@id": "https://christeck.in/#organization",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Australia",
      },
      {
        "@type": "Country",
        name: "New Zealand",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    serviceType: [
      "LV Switchboard Engineering",
      "IEC 61439 Design Verification Support",
      "Temperature Rise Assessment",
      "Busbar System Design",
      "Technical Documentation",
      "Modular Enclosure Solutions",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
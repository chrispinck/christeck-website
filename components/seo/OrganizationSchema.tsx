export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CHRISTECK",
    url: "https://christeck.in",
    logo: "https://christeck.in/images/christeck-logo.png",
    description:
      "CHRISTECK provides professional LV switchboard engineering, IEC 61439 design verification support, temperature-rise assessment, busbar design and technical documentation.",
    knowsAbout: [
      "LV Switchboard Engineering",
      "IEC 61439",
      "AS/NZS 61439",
      "Temperature Rise Assessment",
      "Busbar System Design",
      "Electrical Engineering",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
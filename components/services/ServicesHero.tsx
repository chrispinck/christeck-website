import PageHero from "@/components/ui/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      badge="Engineering Services"
      title={
        <>
          Professional
          <span className="block text-[#176C73]">
            Low-Voltage Engineering
          </span>
          Solutions
        </>
      }
      description="CHRISTECK delivers professional low-voltage electrical engineering solutions, including IEC 61439 design verification, temperature rise assessment, LV switchboard engineering, technical documentation, modular enclosure solutions, and Australian standards support for industrial and commercial projects."
      image="/images/hero/hero-engineering-v1.png"
      imageAlt="CHRISTECK Engineering Services"
      primaryButton={{
        label: "Request Consultation",
        href: "/contact",
      }}
      secondaryButton={{
        label: "Explore Resources",
        href: "/resources",
      }}
      badges={[
        "IEC 61439",
        "AS/NZS 61439",
        "Temperature Rise",
        "LV Switchboards",
        "Technical Documentation",
      ]}
    />
  );
}
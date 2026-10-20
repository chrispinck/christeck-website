import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FileCheck,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    label: "IEC 61439 Design Verification",
    href: "/services#design-verification",
  },
  {
    label: "Temperature Rise Assessment",
    href: "/services#temperature-rise",
  },
  {
    label: "LV Switchboard Design",
    href: "/services#switchboard-design",
  },
  {
    label: "Technical Documentation",
    href: "/services#documentation",
  },
];

const standards = [
  {
    label: "IEC 61439",
    href: "/resources/iec-61439-design-verification",
  },
  {
    label: "AS/NZS 61439",
    href: "/resources/iec-61439-design-verification",
  },
  {
    label: "IEC TR 60890",
    href: "/resources/temperature-rise",
  },
  {
    label: "Low Voltage Switchboards",
    href: "/resources",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Brand Accent */}
      <div className="h-1 bg-gradient-to-r from-[#176C73] via-[#2BA9B5] to-[#176C73]" />

      {/* Subtle Background Detail */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#176C73]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex transition-opacity duration-300 hover:opacity-90"
            >
              <Image
                src="/logo/christeck-logo.png"
                alt="CHRISTECK"
                width={220}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Professional engineering services for low-voltage switchboards,
              IEC 61439 compliance, temperature rise assessment and technical
              documentation.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-400">
              <MapPin
                size={18}
                className="flex-shrink-0 text-[#2BA9B5]"
              />
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Services */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <FileCheck size={17} className="text-[#2BA9B5]" />
              Engineering Services
            </h3>

            <ul className="space-y-3.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Standards */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <BookOpen size={17} className="text-[#2BA9B5]" />
              Engineering Standards
            </h3>

            <ul className="space-y-3.5">
              {standards.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800 lg:my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm md:flex-row md:text-left">
          <p className="text-slate-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-300">
              CHRISTECK
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-slate-500">
            Engineering Knowledge.
            <span className="font-semibold text-[#2BA9B5]">
              {" "}
              Engineering Services.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
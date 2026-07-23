import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";

const trustChips = [
  "IEC 61439",
  "AS/NZS 61439",
  "Temperature Rise",
  "Engineering Consulting",
];

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}
      <Badge>
        ENGINEERING KNOWLEDGE + ENGINEERING SERVICES
      </Badge>

      {/* Heading */}
      <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
        Engineering Knowledge.
        <br />
        <span className="text-[#2BA9B5]">
          Engineering Services.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-xl font-semibold leading-relaxed text-slate-700">
        Professional Electrical Engineering Solutions for
        <span className="text-[#2BA9B5]"> IEC 61439</span> &{" "}
        <span className="text-[#2BA9B5]">AS/NZS 61439</span> Compliance.
      </p>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-slate-600">
        Helping switchboard manufacturers, OEMs and industrial businesses
        deliver compliant, reliable and high-performance low-voltage electrical
        systems through engineering consulting, design verification,
        temperature rise calculations and technical documentation.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link href="/contact">
          <Button className="w-full sm:w-auto">
            Request Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>

        <Link href="/services">
          <Button
            variant="outline"
            className="w-full sm:w-auto"
          >
            View Engineering Services
          </Button>
        </Link>

      </div>

      {/* Trust Chips */}
      <div className="mt-10 flex flex-wrap gap-3">

        {trustChips.map((chip) => (
          <div
            key={chip}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-[#2BA9B5] hover:text-[#2BA9B5]"
          >
            {chip}
          </div>
        ))}

      </div>
    </div>
  );
}
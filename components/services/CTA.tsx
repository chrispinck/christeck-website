import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section
      background="gradient"
      spacing="xl"
      className="overflow-hidden"
    >
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#176C73] to-[#2BA9B5] px-8 py-16 text-center shadow-2xl md:px-16">
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur">
              Let's Build Better Switchboards Together
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Need Professional Engineering Support?
            </h2>

            <p className="mt-6 text-lg leading-8 text-teal-50">
              Whether you require IEC 61439 design verification,
              temperature rise assessment, busbar verification,
              or complete LV switchboard engineering,
              CHRISTECK is ready to support your next project.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#176C73] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Request Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                <FileText size={18} />
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
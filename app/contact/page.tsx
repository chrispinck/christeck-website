import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquareText,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact CHRISTECK | Engineering Knowledge + Engineering Services",
  description:
    "Contact CHRISTECK for LV switchboard engineering, IEC 61439 design verification support, temperature-rise assessment, busbar design, and technical documentation.",
  alternates: {
    canonical: "/contact",
  },
};

const enquiryTopics = [
  "IEC 61439 Design Verification",
  "Temperature Rise Assessment",
  "LV Switchboard Engineering",
  "Technical Documentation",
  "Modular Enclosure Solutions",
  "Busbar System Design",
  "Other Engineering Enquiry",
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#176C73]/40 via-transparent to-[#2BA9B5]/10" />

        <Container>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#70D6DE]">
              Get in Touch
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Let&apos;s Discuss Your
              <span className="block text-[#70D6DE]">
                Engineering Requirements
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Have a project, technical question, or engineering challenge?
              Contact CHRISTECK to discuss how we can support your requirements.
            </p>
          </div>
        </Container>
      </section>

      <Section spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Contact CHRISTECK"
                title="How Can We Help?"
                description="Reach out to discuss your project, request engineering support, or enquire about our services."
                align="left"
              />

              <div className="mt-9 space-y-5">
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-5">
                  <div className="rounded-lg bg-[#2BA9B5]/10 p-3 text-[#176C73]">
                    <Mail size={23} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Business Enquiries
                    </h2>

                    <a
                      href="mailto:sales@christeck.in"
                      className="mt-1 inline-block text-[#176C73] hover:underline"
                    >
                      sales@christeck.in
                    </a>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      For project enquiries, quotations, and engineering
                      support requests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-slate-200 p-5">
                  <div className="rounded-lg bg-[#2BA9B5]/10 p-3 text-[#176C73]">
                    <MapPin size={23} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-slate-900">
                      Location
                    </h2>

                    <p className="mt-1 text-slate-700">
                      Bengaluru, Karnataka, India
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Supporting engineering requirements across local and
                      international markets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-xl bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <MessageSquareText
                    size={22}
                    className="text-[#176C73]"
                  />

                  <h3 className="font-semibold text-slate-900">
                    Prefer email?
                  </h3>
                </div>

                <p className="mt-3 leading-7 text-slate-600">
                  Send your drawings, project specifications, or technical
                  questions directly to our business email.
                </p>

                <a
                  href="mailto:sales@christeck.in?subject=CHRISTECK%20Engineering%20Enquiry"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-[#176C73] hover:underline"
                >
                  Email CHRISTECK
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
              <h2 className="text-2xl font-bold text-slate-900">
                Send an Enquiry
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Complete the form below to prepare your enquiry. Your email
                application will open with the details ready to send.
              </p>

              <form
                action="mailto:sales@christeck.in"
                method="post"
                encType="text/plain"
                className="mt-8 space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="Name"
                      type="text"
                      autoComplete="name"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2BA9B5] focus:ring-2 focus:ring-[#2BA9B5]/20"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="Company"
                      type="text"
                      autoComplete="organization"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2BA9B5] focus:ring-2 focus:ring-[#2BA9B5]/20"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Business Email *
                    </label>

                    <input
                      id="email"
                      name="Reply Email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2BA9B5] focus:ring-2 focus:ring-[#2BA9B5]/20"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="Phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2BA9B5] focus:ring-2 focus:ring-[#2BA9B5]/20"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="topic"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Service Required *
                  </label>

                  <select
                    id="topic"
                    name="Service Required"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#2BA9B5] focus:ring-2 focus:ring-[#2BA9B5]/20"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {enquiryTopics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    name="Project Details"
                    required
                    rows={5}
                    className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2BA9B5] focus:ring-2 focus:ring-[#2BA9B5]/20"
                    placeholder="Describe your project, technical requirements, ratings, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176C73] px-6 py-4 font-semibold text-white transition hover:bg-[#12565c] sm:w-auto"
                >
                  Prepare Email Enquiry
                  <ArrowRight size={18} />
                </button>

                <p className="text-sm leading-6 text-slate-500">
                  This form uses your device&apos;s configured email
                  application. It does not submit enquiries directly to a
                  server.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="light" spacing="lg">
        <Container>
          <div className="rounded-2xl bg-slate-950 px-7 py-12 text-center text-white md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#70D6DE]">
              CHRISTECK
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Engineering Knowledge + Engineering Services
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Explore our engineering services for LV switchboards, IEC 61439
              compliance support, temperature-rise assessment, and busbar
              systems.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#2BA9B5] px-6 py-3 font-semibold text-white transition hover:bg-[#238e98]"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
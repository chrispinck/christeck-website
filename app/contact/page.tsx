"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquareText,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const FUNCTION_URL =
  "https://paxkxbgsnnczaqutfwos.supabase.co/functions/v1/submit-lead";

const enquiryTopics = [
  "IEC 61439 Design Verification",
  "Temperature Rise Assessment",
  "LV Switchboard Engineering",
  "Technical Documentation",
  "Modular Enclosure Solutions",
  "Busbar System Design",
  "Other Engineering Enquiry",
];

type SubmissionState =
  | { status: "idle"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export default function ContactPage() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmission({ status: "idle", message: "" });

    const params = new URLSearchParams(window.location.search);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
      source_page: window.location.pathname,
      referrer: document.referrer || "",
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_term: params.get("utm_term") ?? "",
      utm_content: params.get("utm_content") ?? "",
    };

    try {
      const response = await fetch(FUNCTION_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apikey": process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  },
  body: JSON.stringify(payload),
});

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        throw new Error(
          result?.error ||
            "We couldn't submit your enquiry. Please try again.",
        );
      }

      setSubmission({
        status: "success",
        message:
          "Thank you for contacting CHRISTECK. Your enquiry has been submitted successfully.",
      });

      form.reset();
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
                Complete the form below to send your enquiry directly to
                CHRISTECK.
              </p>

              {submission.status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0"
                    size={21}
                  />
                  <p className="text-sm leading-6">
                    {submission.message}
                  </p>
                </div>
              )}

              {submission.status === "error" && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800"
                >
                  <AlertCircle
                    className="mt-0.5 shrink-0"
                    size={21}
                  />
                  <p className="text-sm leading-6">
                    {submission.message}
                  </p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
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
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={120}
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
                      name="company"
                      type="text"
                      autoComplete="organization"
                      maxLength={160}
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
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
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
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={40}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2BA9B5] focus:ring-2 focus:ring-[#2BA9B5]/20"
                      placeholder="Optional"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Service Required *
                  </label>

                  <select
                    id="service"
                    name="service"
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
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-[#2BA9B5] focus:ring-2 focus:ring-[#2BA9B5]/20"
                    placeholder="Describe your project, technical requirements, ratings, or questions..."
                  />
                </div>

                {/* Honeypot field: keep hidden from normal visitors. */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                >
                  <label htmlFor="website">
                    Leave this field empty
                  </label>

                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#176C73] px-6 py-4 font-semibold text-white transition hover:bg-[#12565c] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle
                        size={18}
                        className="animate-spin"
                      />
                      Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-sm leading-6 text-slate-500">
                  Your details will be used to respond to your enquiry.
                  Please avoid including passwords or other sensitive
                  information in your message.
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
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What engineering services does CHRISTECK provide?",
    answer:
      "We specialize in IEC/AS/NZS 61439 design verification, temperature rise assessment (IEC TR 60890), LV switchboard engineering, technical documentation, modular enclosure solutions, and busbar system design & verification.",
  },
  {
    question: "Can you assist with IEC 61439 compliance?",
    answer:
      "Yes. We provide engineering support for design verification, compliance reviews, and technical documentation in accordance with IEC 61439 and AS/NZS 61439 requirements.",
  },
  {
    question: "Do you prepare Declaration of Conformity documents?",
    answer:
      "Yes. We prepare professional Declaration of Conformity (DOC) documents together with supporting engineering calculations and design verification reports.",
  },
  {
    question: "Can you support existing switchboard manufacturers?",
    answer:
      "Absolutely. We work with panel builders, OEMs, and system integrators by providing engineering support, calculations, documentation, and design improvements.",
  },
  {
    question: "Do you provide remote engineering support?",
    answer:
      "Yes. CHRISTECK provides engineering services remotely, allowing clients worldwide to receive technical support efficiently and professionally.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section background="light" spacing="lg">
      <Container size="md">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers to Common Questions"
          description="Everything you need to know about our engineering services and technical support."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="border-t border-slate-200 px-6 py-5">
                    <p className="leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
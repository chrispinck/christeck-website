import {
  ClipboardCheck,
  PencilRuler,
  ShieldCheck,
  FileText,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "Review customer specifications, single line diagrams, equipment schedules, and project requirements before commencing engineering.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Engineering & Design",
    description:
      "Develop switchboard layouts, busbar systems, thermal calculations, BOMs, and technical documentation in accordance with project requirements.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Verification & Compliance",
    description:
      "Perform design verification and engineering assessments in accordance with IEC 61439, AS/NZS 61439, and IEC TR 60890 standards.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Documentation & Delivery",
    description:
      "Deliver calculation reports, Declaration of Conformity, engineering documentation, and provide technical support throughout the project lifecycle.",
    icon: FileText,
  },
];

export default function EngineeringProcess() {
  return (
    <Section background="slate" spacing="lg">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A Structured Engineering Workflow"
          description="Every project follows a systematic engineering process to ensure compliance, accuracy, and reliable project delivery."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2BA9B5] hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#176C73] transition-colors duration-300 group-hover:bg-[#176C73] group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <span className="text-4xl font-extrabold text-slate-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
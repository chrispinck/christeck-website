import {
  ShieldCheck,
  Thermometer,
  CircuitBoard,
  FileCheck,
  Box,
  FileText,
} from "lucide-react";

const projects = [
  {
    icon: ShieldCheck,
    title: "IEC 61439 Design Verification",
    description:
      "Professional support for design verification, compliance assessment and switchboard engineering.",
  },
  {
    icon: Thermometer,
    title: "Temperature Rise Assessment",
    description:
      "Engineering calculations based on IEC TR 60890 for safe and compliant LV switchboards.",
  },
  {
    icon: CircuitBoard,
    title: "LV Switchboard Engineering",
    description:
      "Engineering support for PCC, MCC, Distribution Boards and modular electrical assemblies.",
  },
  {
    icon: FileCheck,
    title: "AS/NZS Compliance",
    description:
      "Documentation and engineering support for Australian low-voltage switchboard projects.",
  },
  {
    icon: Box,
    title: "Modular Enclosure Design",
    description:
      "Custom enclosure configurations optimized for manufacturing, assembly and maintenance.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description:
      "GA Drawings, BOM preparation, engineering documentation and project support.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
            ENGINEERING EXPERTISE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Delivering Reliable Engineering Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            CHRISTECK provides engineering knowledge and technical services
            covering IEC 61439 compliance, LV switchboard design,
            temperature rise verification and engineering documentation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-500 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 transition group-hover:bg-teal-600">
                  <Icon
                    size={32}
                    className="text-teal-600 transition group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
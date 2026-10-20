import {
  ShieldCheck,
  Thermometer,
  PanelsTopLeft,
  FileCheck,
  Package,
  Cable,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: typeof ShieldCheck;
}

export const services: Service[] = [
  {
    slug: "iec-as-nzs-61439-design-verification",
    title: "IEC/AS/NZS 61439 Design Verification & Support",
    description:
      "Professional design verification and engineering support in accordance with IEC 61439 and AS/NZS 61439 standards to ensure compliance, safety, and reliable switchboard performance.",
    icon: ShieldCheck,
  },
  {
    slug: "temperature-rise-assessment",
    title: "Temperature Rise Assessment (IEC TR 60890)",
    description:
      "Thermal assessment using IEC TR 60890 to validate enclosure temperature rise, optimize ventilation, and improve switchboard performance.",
    icon: Thermometer,
  },
  {
    slug: "lv-switchboard-design-engineering",
    title: "LV Switchboard Design & Engineering",
    description:
      "Complete engineering support for low-voltage switchboards including GA drawings, BOM preparation, equipment selection, busbar layouts, and manufacturing support.",
    icon: PanelsTopLeft,
  },
  {
    slug: "technical-documentation-doc",
    title: "Technical Documentation & Declaration of Conformity",
    description:
      "Preparation of Declaration of Conformity (DOC), design verification reports, calculation reports, technical datasheets, and complete project documentation.",
    icon: FileCheck,
  },
  {
    slug: "modular-enclosure-solutions",
    title: "Modular Enclosure Solutions",
    description:
      "Engineering solutions for modular enclosure systems, providing flexible, scalable, and standards-compliant electrical panel designs.",
    icon: Package,
  },
  {
    slug: "busbar-system-design-verification",
    title: "Busbar System Design & Verification",
    description:
      "Busbar sizing, current carrying capacity calculations, short-circuit verification, and optimized copper/aluminium busbar system engineering.",
    icon: Cable,
  },
];
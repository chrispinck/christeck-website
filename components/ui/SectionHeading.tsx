import Badge from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div
      className={`flex max-w-3xl flex-col gap-5 ${alignment} ${className}`}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}

      <div>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {title}

          {subtitle && (
            <>
              <br />
              <span className="text-[#176C73]">{subtitle}</span>
            </>
          )}
        </h2>
      </div>

      {description && (
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
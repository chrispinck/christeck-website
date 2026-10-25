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

  // Apply the two-colour heading only to the Services section title.
  const isServicesTitle =
    title === "Engineering Solutions Built Around Compliance & Performance";

  return (
    <div
      className={`flex max-w-3xl flex-col gap-5 ${alignment} ${className}`}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}

      <div>
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {isServicesTitle ? (
            <>
  <span className="text-slate-900">
    Engineering Solutions
  </span>
  <br />
  <span className="text-[#176C73]">
    Built Around Compliance &amp; Performance
  </span>
</>
          ) : (
            <span className="text-slate-900">{title}</span>
          )}

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
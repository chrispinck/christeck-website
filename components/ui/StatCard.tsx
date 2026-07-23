import Card from "./Card";

interface StatCardProps {
  value: string;
  title: string;
  description?: string;
}

export default function StatCard({
  value,
  title,
  description,
}: StatCardProps) {
  return (
    <Card className="group p-6 text-center">
      <div className="space-y-3">

        {/* Value */}
        <h3 className="text-4xl font-extrabold tracking-tight text-[#176C73] transition-transform duration-300 group-hover:scale-105">
          {value}
        </h3>

        {/* Title */}
        <h4 className="text-lg font-semibold text-slate-900">
          {title}
        </h4>

        {/* Description */}
        {description && (
          <p className="text-sm leading-6 text-slate-600">
            {description}
          </p>
        )}

      </div>
    </Card>
  );
}
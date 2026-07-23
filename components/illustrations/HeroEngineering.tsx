interface HeroEngineeringProps {
  className?: string;
}

export default function HeroEngineering({
  className = "",
}: HeroEngineeringProps) {
  return (
    <svg
      viewBox="0 0 700 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Electrical Engineering Illustration"
    >
      <defs>
        <linearGradient id="panel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>

        <linearGradient id="busbar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D08A36" />
          <stop offset="100%" stopColor="#C97A2B" />
        </linearGradient>

        <filter id="shadow">
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="14"
            floodColor="#176C73"
            floodOpacity="0.12"
          />
        </filter>
      </defs>

      {/* Blueprint Grid */}

      {Array.from({ length: 18 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 40}
          y1="0"
          x2={i * 40}
          y2="600"
          stroke="#DCEEF1"
          strokeWidth="1"
        />
      ))}

      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 40}
          x2="700"
          y2={i * 40}
          stroke="#DCEEF1"
          strokeWidth="1"
        />
      ))}

      {/* Glow */}

      <circle
        cx="350"
        cy="300"
        r="220"
        fill="#2BA9B5"
        opacity="0.08"
      />

      {/* Switchboard */}

      <rect
        x="180"
        y="70"
        width="340"
        height="460"
        rx="18"
        fill="url(#panel)"
        stroke="#CBD5E1"
        strokeWidth="2"
        filter="url(#shadow)"
      />

      {/* Doors */}

      <line
        x1="350"
        y1="70"
        x2="350"
        y2="530"
        stroke="#CBD5E1"
        strokeWidth="2"
      />

      {/* Busbars */}

      <rect
        x="220"
        y="145"
        width="260"
        height="10"
        rx="5"
        fill="url(#busbar)"
      />

      <rect
        x="220"
        y="175"
        width="260"
        height="10"
        rx="5"
        fill="url(#busbar)"
      />

      <rect
        x="220"
        y="205"
        width="260"
        height="10"
        rx="5"
        fill="url(#busbar)"
      />

      {/* Breakers */}

      {[0, 1, 2, 3, 4, 5].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={225 + col * 82}
            y={255 + row * 42}
            width="56"
            height="28"
            rx="5"
            fill="#E8F9FA"
            stroke="#2BA9B5"
          />
        ))
      )}

      {/* CAD Circles */}

      <circle
        cx="120"
        cy="120"
        r="45"
        fill="none"
        stroke="#2BA9B5"
        opacity="0.25"
      />

      <circle
        cx="575"
        cy="470"
        r="60"
        fill="none"
        stroke="#176C73"
        opacity="0.2"
      />

      {/* Labels */}

      <text
        x="350"
        y="45"
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fill="#176C73"
      >
        LV SWITCHBOARD
      </text>

      <text
        x="350"
        y="565"
        textAnchor="middle"
        fontSize="16"
        fill="#64748B"
      >
        IEC 61439 • AS/NZS 61439
      </text>
    </svg>
  );
}
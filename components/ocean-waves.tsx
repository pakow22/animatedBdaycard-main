"use client"

export default function OceanWaves() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Wave Layer 1 - Slowest, darkest */}
      <svg
        className="absolute bottom-0 w-full wave-animation"
        style={{ animationDuration: "20s", opacity: 0.3 }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#1e40af"
          fillOpacity="0.8"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Wave Layer 2 - Medium speed */}
      <svg
        className="absolute bottom-0 w-full wave-animation"
        style={{ animationDuration: "15s", animationDelay: "-5s", opacity: 0.4 }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#2563eb"
          fillOpacity="0.7"
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Wave Layer 3 - Faster */}
      <svg
        className="absolute bottom-0 w-full wave-animation"
        style={{ animationDuration: "10s", animationDelay: "-2s", opacity: 0.5 }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#3b82f6"
          fillOpacity="0.6"
          d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,117.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Wave Layer 4 - Fastest, lightest */}
      <svg
        className="absolute bottom-0 w-full wave-animation"
        style={{ animationDuration: "7s", opacity: 0.6 }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#60a5fa"
          fillOpacity="0.5"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,133.3C960,117,1056,139,1152,154.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  )
}

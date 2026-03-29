const stats = [
  {
    label: "Security",
    value: "Zero-Knowledge",
    sublabel: "End-to-end encrypted",
    color: "violet",
  },
  {
    label: "Type",
    value: "SaaS Platform",
    sublabel: "Subscription model",
    color: "emerald",
  },
  {
    label: "Platforms",
    value: "Web + iOS + Android",
    sublabel: "Cross-platform",
    color: "blue",
  },
  {
    label: "Delivery",
    value: "7 Delivery Rules",
    sublabel: "Conditional logic",
    color: "pink",
  },
];

const colorMap: Record<
  string,
  { bg: string; border: string; label: string }
> = {
  violet: {
    bg: "bg-violet-500/[0.06]",
    border: "border-violet-500/[0.12]",
    label: "text-violet-500",
  },
  emerald: {
    bg: "bg-emerald-500/[0.06]",
    border: "border-emerald-500/[0.12]",
    label: "text-emerald-500",
  },
  blue: {
    bg: "bg-blue-500/[0.06]",
    border: "border-blue-500/[0.12]",
    label: "text-blue-500",
  },
  pink: {
    bg: "bg-pink-500/[0.06]",
    border: "border-pink-500/[0.12]",
    label: "text-pink-500",
  },
};

const techTags = [
  "Next.js",
  "React Native",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "Stripe",
  "Prisma",
  "Redis",
];

export function PlatformBadges() {
  return (
    <div>
      {/* Platform badges row */}
      <div className="flex flex-wrap gap-3 mb-6">
        {/* App Store badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black border border-slate-700 rounded-lg">
          <span className="text-lg"></span>
          <div>
            <div className="text-[8px] text-slate-400">Download on the</div>
            <div className="text-xs font-bold text-white">App Store</div>
          </div>
        </div>

        {/* Google Play badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black border border-slate-700 rounded-lg">
          <span className="text-lg">▶</span>
          <div>
            <div className="text-[8px] text-slate-400">Get it on</div>
            <div className="text-xs font-bold text-white">Google Play</div>
          </div>
        </div>

        {/* Web badge */}
        <a
          href="https://brianni.co"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-lg"
        >
          <span className="text-sm">🌐</span>
          <div>
            <div className="text-[8px] text-slate-400">Visit</div>
            <div className="text-xs font-bold text-violet-400">brianni.co</div>
          </div>
        </a>
      </div>

      {/* Highlight stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {stats.map((stat) => {
          const colors = colorMap[stat.color];
          return (
            <div
              key={stat.label}
              className={`${colors.bg} border ${colors.border} rounded-lg p-3.5 text-center`}
            >
              <div
                className={`text-[10px] ${colors.label} font-semibold uppercase tracking-wider mb-1`}
              >
                {stat.label}
              </div>
              <div className="text-[13px] font-bold text-slate-200">
                {stat.value}
              </div>
              <div className="text-[10px] text-slate-500">{stat.sublabel}</div>
            </div>
          );
        })}
      </div>

      {/* Built with tech strip */}
      <div className="flex flex-wrap gap-1.5 items-center">
        <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mr-1">
          Built with:
        </span>
        {techTags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded text-[10px] text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

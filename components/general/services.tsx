"use client";

import { motion } from "motion/react";

const services = [
  {
    icon: "\uD83C\uDFA8",
    title: "Web Design",
    description:
      "Modern, responsive designs crafted in Figma and built pixel-perfect. Clean UI, intuitive UX, and designs that convert visitors into customers.",
    accent: "pink-400",
    hoverBorder: "hover:border-pink-400/30",
    tags: ["Figma", "UI/UX", "Responsive", "Tailwind CSS"],
  },
  {
    icon: "\uD83C\uDF10",
    title: "Web Applications",
    description:
      "Custom web apps in the framework that fits your needs — React, Next.js, Vue, or WordPress. Fast, scalable, and built to grow with your business.",
    accent: "blue-500",
    hoverBorder: "hover:border-blue-500/30",
    tags: ["Next.js", "React", "Vue.js", "WordPress", "Django"],
  },
  {
    icon: "\uD83D\uDCF1",
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps with React Native and Expo. One codebase, both app stores, native performance.",
    accent: "emerald-500",
    hoverBorder: "hover:border-emerald-500/30",
    tags: ["React Native", "Expo", "iOS & Android"],
  },
  {
    icon: "\u26A1",
    title: "AI-Augmented Development",
    description:
      "I leverage cutting-edge AI tools to ship faster. You get the quality of careful craftsmanship with dramatically shorter timelines.",
    accent: "violet-500",
    hoverBorder: "hover:border-violet-500/30",
    baseBorder: "border-violet-500/15",
    tags: ["Claude AI", "Cursor", "OpenAI Codex", "v0", "Copilot"],
  },
];

const processSteps = [
  {
    name: "Discovery",
    description: "Goals & requirements",
    badge: "\u2713 Client Sign-off",
  },
  {
    name: "Design",
    description: "Figma mockups & UX",
    badge: "\u2713 Client Review",
  },
  {
    name: "Build",
    description: "Development sprints",
    badge: "\u2713 Demo & Feedback",
  },
  {
    name: "Test",
    description: "QA & user testing",
    badge: "\u2713 Client UAT",
  },
  {
    name: "Ship",
    description: "Deploy & launch",
    badge: "\u2713 Final Approval",
  },
];

const accentMap: Record<string, { iconBg: string; tagBg: string; tagText: string }> = {
  "pink-400": {
    iconBg: "bg-pink-400/15",
    tagBg: "bg-pink-400/10",
    tagText: "text-pink-400",
  },
  "blue-500": {
    iconBg: "bg-blue-500/15",
    tagBg: "bg-blue-500/10",
    tagText: "text-blue-500",
  },
  "emerald-500": {
    iconBg: "bg-emerald-500/15",
    tagBg: "bg-emerald-500/10",
    tagText: "text-emerald-500",
  },
  "violet-500": {
    iconBg: "bg-violet-500/15",
    tagBg: "bg-violet-500/10",
    tagText: "text-violet-500",
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#0b1120] px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-2">
            What I Do
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-50 mb-3">
            Design, Build &amp; Ship
          </h2>
          <p className="text-[15px] text-slate-400 max-w-[500px] mx-auto leading-relaxed">
            From Figma mockups to the App Store. I work across frameworks and
            platforms, picking the right tool for your project.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const colors = accentMap[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className={`bg-white/[0.03] border ${service.baseBorder ?? "border-white/[0.06]"} rounded-xl p-6 group transition-all duration-200 hover:scale-[1.02] ${service.hoverBorder}`}
              >
                <div
                  className={`w-10 h-10 ${colors.iconBg} rounded-[10px] flex items-center justify-center mb-4 text-xl`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-slate-50 mb-2">
                  {service.title}
                </h3>
                <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 ${colors.tagBg} rounded text-[10px] ${colors.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Bar */}
        <div className="bg-emerald-500/[0.05] border border-emerald-500/15 rounded-xl p-5 mt-6">
          <p className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider mb-5">
            My Process — You&apos;re involved at every step
          </p>

          {/* Desktop */}
          <div className="hidden md:flex gap-3">
            {processSteps.map((step, i) => (
              <div key={step.name} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.15,
                    ease: "easeOut",
                  }}
                  className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-lg p-3.5 text-center min-w-0 flex-1"
                >
                  <p className="text-[13px] font-bold text-emerald-500 mb-1">
                    {step.name}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-snug mb-2">
                    {step.description}
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 bg-amber-400/10 border border-amber-400/20 rounded text-[9px] text-amber-400 font-semibold">
                    {step.badge}
                  </span>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <span className="hidden md:flex items-center text-slate-700">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-3 -mx-4 px-4">
            {processSteps.map((step) => (
              <div
                key={step.name}
                className="bg-emerald-500/[0.08] border border-emerald-500/20 rounded-lg p-3.5 text-center min-w-[140px] shrink-0 snap-start"
              >
                <p className="text-[13px] font-bold text-emerald-500 mb-1">
                  {step.name}
                </p>
                <p className="text-[10px] text-slate-500 leading-snug mb-2">
                  {step.description}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-amber-400/10 border border-amber-400/20 rounded text-[9px] text-amber-400 font-semibold">
                  {step.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

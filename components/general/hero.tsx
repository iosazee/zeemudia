"use client";

import { motion } from "motion/react";


const skillRows = [
  {
    label: "Design & Frontend",
    pills: [
      { name: "Figma", color: "pink-400" },
      { name: "UI/UX Design", color: "blue-500" },
      { name: "Next.js", color: "emerald-500" },
      { name: "React", color: "emerald-500" },
      { name: "React Native", color: "blue-500" },
      { name: "WordPress", color: "blue-500" },
    ],
  },
  {
    label: "Backend & Infrastructure",
    pills: [
      { name: "Node.js", color: "orange-500" },
      { name: "TypeScript", color: "violet-500" },
      { name: "Django", color: "green-500" },
      { name: "PostgreSQL", color: "pink-500" },
      { name: "AWS", color: "amber-400" },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  "pink-400": {
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
    text: "text-pink-400",
  },
  "blue-500": {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-500",
  },
  "emerald-500": {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-500",
  },
  "teal-400": {
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
    text: "text-teal-400",
  },
  "orange-500": {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    text: "text-orange-500",
  },
  "violet-500": {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-500",
  },
  "green-500": {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    text: "text-green-500",
  },
  "pink-500": {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-500",
  },
  "amber-400": {
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    text: "text-amber-400",
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const fadeInScale = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 py-20 flex items-center overflow-hidden" style={{ backgroundColor: "#000319" }}>
      {/* Grid background from original site */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='100' height='100' fill='none' stroke='white'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Radial gradient mask — fades grid to transparent in center */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#000319",
          maskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
          WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black)",
        }}
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-3xl mx-auto w-full"
      >
        {/* Availability Badge */}
        <motion.div variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <motion.span
              className="w-2 h-2 bg-emerald-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-emerald-500 font-semibold">
              Available for Projects
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInScale}
          className="text-3xl md:text-[42px] font-extrabold tracking-tight leading-[1.1]"
        >
          <span className="text-slate-50">I build websites &amp; apps</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            that grow your business.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-400 leading-relaxed max-w-[540px] mt-4 mb-7"
        >
          Full-stack developer &amp; designer who handles everything from design
          to deployment — so you can focus on running your business. AI-accelerated
          delivery, no corners cut.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 mb-8">
          <motion.a
            href="https://cal.com/zeemudia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg transition-colors text-sm text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Free Discovery Call
          </motion.a>
          <motion.a
            href="#work"
            className="px-7 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition-colors text-sm text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Skill Pill Rows */}
        <motion.div variants={fadeInUp}>
          {skillRows.map((row, rowIndex) => (
            <motion.div
              key={row.label}
              className="mb-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: rowIndex * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold mb-2">
                {row.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {row.pills.map((pill, pillIndex) => {
                  const colors = colorMap[pill.color];
                  return (
                    <motion.span
                      key={pill.name}
                      className={`px-3 py-1 text-[11px] rounded-full ${colors.bg} border ${colors.border} ${colors.text}`}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: rowIndex * 0.1 + pillIndex * 0.04,
                        ease: "easeOut",
                      }}
                    >
                      {pill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div
          variants={fadeInUp}
          className="flex gap-8 mt-10 pt-6 border-t border-white/[0.06]"
        >
          {[
            {
              value: "25+",
              label: "Projects Delivered",
            },
            {
              value: "5+",
              label: "Years Experience",
            },
            {
              value: "100%",
              label: "Client Retention",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.12,
                ease: "easeOut",
              }}
            >
              <div className="text-2xl font-extrabold text-slate-50">
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

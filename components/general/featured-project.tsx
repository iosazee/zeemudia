"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PlatformBadges } from "./platform-badges";

export default function FeaturedProject() {
  return (
    <section className="bg-[#0b1120]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 py-20"
      >
        {/* Section header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-2">
            Featured Project
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-50 mb-2">
            Brianni
          </h2>
          <span className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-[11px] text-violet-400 font-semibold mb-3">
            SaaS Platform
          </span>
          <p className="text-[15px] text-slate-400 max-w-[500px] mx-auto leading-relaxed mb-10">
            A zero-knowledge encrypted storage platform with programmable
            conditional delivery. Designed, built, and shipped end-to-end — web,
            iOS, and Android.
          </p>
        </div>

        {/* Web showcase */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
            <Image
              src="/projects/brianni.png"
              alt="Brianni — Private Storage, Smart Delivery"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          {/* Mobile showcase */}
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden mt-4">
            <Image
              src="/projects/brianni-mobile.png"
              alt="Brianni Mobile — iOS and Android"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="mt-7">
            <PlatformBadges />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

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
          <motion.span
            className="inline-block px-3 py-1 bg-violet-500/10 border border-violet-500/30 rounded-full text-[11px] text-violet-400 font-semibold mb-3"
            animate={{
              boxShadow: [
                "0 0 0px rgba(139, 92, 246, 0)",
                "0 0 8px rgba(139, 92, 246, 0.3)",
                "0 0 0px rgba(139, 92, 246, 0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            SaaS Platform
          </motion.span>
          <p className="text-[15px] text-slate-400 max-w-[500px] mx-auto leading-relaxed mb-10">
            A zero-knowledge encrypted storage platform with programmable
            conditional delivery. Designed, built, and shipped end-to-end — web,
            iOS, and Android.
          </p>
        </div>

        {/* Showcase */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/projects/brianni.png"
              alt="Brianni — Private Storage, Smart Delivery"
              width={900}
              height={500}
              className="w-full h-auto rounded-lg"
              priority
            />
          </motion.div>

          {/* Mobile showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <Image
              src="/projects/brianni-mobile.png"
              alt="Brianni Mobile — iOS and Android"
              width={900}
              height={500}
              className="w-full h-auto rounded-lg mt-4"
            />
          </motion.div>

          <div className="mt-7">
            <PlatformBadges />
          </div>

          <div className="mt-6 text-center">
            <motion.a
              href="https://brianni.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Project →
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

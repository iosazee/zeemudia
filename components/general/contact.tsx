"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-xl mx-auto text-center py-20 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-5">
          <motion.span
            className="w-2 h-2 bg-emerald-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs text-emerald-500 font-semibold">
            Currently accepting projects
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-slate-50 mb-4"
        >
          Let&apos;s build something
          <br />
          <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            great together.
          </span>
        </motion.h2>

        <p className="text-base text-slate-400 leading-relaxed mb-7">
          Have a project in mind? I&apos;d love to hear about it. Get in touch
          and I&apos;ll get back to you within 24 hours.
        </p>

        <div className="flex gap-3 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-lg transition-colors text-[15px]"
            >
              Get in Touch
            </Link>
          </motion.div>
          <motion.a
            href="mailto:zee@zeemudia.com"
            className="px-8 py-3.5 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition-colors text-[15px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            zee@zeemudia.com
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

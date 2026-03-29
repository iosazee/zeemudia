"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-6"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-slate-50">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6"
            >
              <motion.div
                className="text-3xl text-emerald-500 leading-none mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + 0.1,
                  ease: "easeOut",
                }}
              >
                &ldquo;
              </motion.div>
              <p className="text-sm text-slate-300 italic leading-relaxed mb-5">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-[13px] font-bold text-slate-50">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { motion } from "motion/react";
import { FAQs } from "@/lib/data/faqs";

export default function FAQ() {
  return (
    <section className="py-20 bg-[#0b1120]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-2">
            FAQs
          </p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-slate-50">
            Common Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <Accordion.Root type="single" collapsible>
            {FAQs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="border-b border-white/[0.06]"
              >
                <Accordion.Trigger className="flex w-full justify-between items-center py-5 text-left group">
                  <span className="text-[15px] font-semibold text-slate-200">
                    {faq.question}
                  </span>
                  <Plus className="w-[18px] h-[18px] text-emerald-500 shrink-0 group-data-[state=open]:hidden" />
                  <Minus className="w-[18px] h-[18px] text-emerald-500 shrink-0 group-data-[state=closed]:hidden" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="pb-5 text-sm text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </motion.div>
    </section>
  );
}

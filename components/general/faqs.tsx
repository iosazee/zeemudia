import React from "react";
import { RetroGrid } from "../ui/retro-grid";
import { FAQs } from "@/lib/data/faqs";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 bg-slate-950"
    >
      {/* Retro Grid Background */}
      <RetroGrid className="opacity-45" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="relative text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent animate-gradient-x pb-2">
              FAQs
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 rounded-full mt-2" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto px-4 leading-relaxed">
            Common questions about my development process and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl px-6 py-4 group data-[state=open]:bg-white/10"
              >
                <AccordionTrigger className="text-left hover:no-underline group-[[data-state=closed]]:hover:text-white/90">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 text-lg font-medium text-white/80 group-[[data-state=open]]:text-white">
                      {faq.question}
                    </div>
                    <Plus className="w-5 h-5 text-indigo-400 shrink-0 transition-all group-[[data-state=open]]:hidden" />
                    <Minus className="w-5 h-5 text-indigo-400 shrink-0 transition-all hidden group-[[data-state=open]]:block" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </section>
  );
};

export default FAQ;

"use client";

import React, { useEffect, useState } from "react";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { testimonials } from "@/lib/data/testimonials";
import { Spotlight } from "../ui/spotlight";

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Spotlight Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="left-0 top-0 md:-top-24 opacity-20"
          fill="white"
        />
        <Spotlight
          className="right-0 top-48 rotate-180 opacity-20"
          fill="white"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent animate-gradient-x pb-2">
              Client Testimonials
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 rounded-full mt-2" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto px-4 leading-relaxed">
            Hear from satisfied clients
          </p>
        </div>

        <div className="relative mx-auto">
          {isMounted && (
            <AnimatedTestimonials
              testimonials={testimonials}
              autoplay={false}
            />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </section>
  );
};

export default Testimonials;

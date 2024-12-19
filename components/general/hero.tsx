import React from "react";
import { Meteors } from "../ui/meteors";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import ShinyButton from "../ui/shiny-button";
import { Navigation } from "lucide-react";
import ShimmerButton from "../ui/shimmer-button";
import { MessageSquare } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-grid-white/[0.1]" />
      <div className="absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-32 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="relative z-10 space-y-6 mt-16 md:mt-20 lg:mt-0">
              <div className="space-y-6">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <TextGenerateEffect
                    words="Building the future, one pixel at a time. Transforming Ideas into stunning digital experiences.."
                    className="text-[40px] md:text-5xl lg:text-6xl"
                    duration={0.7}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects">
                  <ShinyButton
                    title="View Projects"
                    icon={<Navigation className="w-3 h-3" />}
                    position="right"
                    customBg="bg-gradient-to-r from-emerald-300 to-sky-400"
                    otherClasses="text-gray-900"
                  />
                </a>
                <a href="#contact">
                  <ShimmerButton
                    title="Get in touch"
                    icon={<MessageSquare className="w-3 h-3" />}
                    position="right"
                    customBg="bg-gradient-to-r from-emerald-300 to-sky-400"
                    otherClasses="text-gray-900"
                  />
                </a>
              </div>
            </div>

            {/* Feature card */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-[0.90] rounded-3xl blur-3xl opacity-50" />
              <div className="relative backdrop-blur-sm border border-slate-800 rounded-3xl p-4 md:p-6 bg-slate-900/50">
                <div className="h-8 w-8 rounded-full border flex items-center justify-center mb-4 border-slate-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4 text-slate-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </div>
                <p className="text-indigo-300 font-mono text-sm md:text-base pt-3 border-t border-slate-700/50">
                  Hi, I&apos;m Zee Mudia, full stack developer
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Technical Expertise
                </h2>
                <p className="text-slate-300 mb-4">
                  Creating seamless web experiences with modern technologies and
                  a focus on mobile-first, responsive design.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-800/50 border border-slate-700">
                    <div className="text-xl font-bold text-white mb-1">3+</div>
                    <div className="text-sm text-slate-400">
                      Core Technologies
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-800/50 border border-slate-700">
                    <div className="text-base font-bold text-white mb-1">
                      TypeScript
                    </div>
                    <div className="text-sm text-slate-400">Expertise</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-800/50 border border-slate-700">
                    <div className="text-base font-bold text-white mb-1">
                      Next.js
                    </div>
                    <div className="text-sm text-slate-400">Specialist</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-800/50 border border-slate-700">
                    <div className="text-base font-bold text-white mb-1">
                      React
                    </div>
                    <div className="text-sm text-slate-400">Developer</div>
                  </div>
                </div>
                <Meteors number={30} />
              </div>
            </div>
          </div>
        </div>

        {/* Global meteors effect */}
        <Meteors number={20} className="opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;

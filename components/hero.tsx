import React from "react";
import { Meteors } from "./ui/meteors";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 transform rotate-180 blur-3xl opacity-50" />
      </div>

      {/* Content container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-indigo-400 font-mono text-lg">
                Hi, I'm Osazee Samuel Idemudia
              </h2>
              <h1 className="text-5xl font-bold text-white">
                <span className="block">Full Stack Developer</span>
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Healthcare Background
                </span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-xl">
              Bridging healthcare insights with technical expertise to create
              intuitive, user-centric web solutions. Certified Scrum Master
              specializing in Next.js, React, and TypeScript.
            </p>
            <div className="flex gap-4">
              <a
                href="#portfolio"
                className="px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-slate-700 hover:border-slate-600 text-slate-300 font-medium transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Feature card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-[0.85] rounded-3xl blur-3xl" />
            <div className="relative backdrop-blur-sm border border-slate-800 rounded-3xl p-8 bg-slate-900/50">
              <div className="h-8 w-8 rounded-full border flex items-center justify-center mb-6 border-slate-700">
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Technical Expertise
              </h2>
              <p className="text-slate-300 mb-6">
                Creating seamless web experiences with modern technologies and a
                focus on mobile-first, responsive design.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <div className="text-2xl font-bold text-white mb-1">3+</div>
                  <div className="text-slate-400">Core Technologies</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <div className="text-lg font-bold text-white mb-1">
                    TypeScript
                  </div>
                  <div className="text-slate-400">Expertise</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <div className="text-lg font-bold text-white mb-1">
                    Next.js
                  </div>
                  <div className="text-slate-400">Specialist</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700">
                  <div className="text-lg font-bold text-white mb-1">React</div>
                  <div className="text-slate-400">Developer</div>
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
  );
};

export default HeroSection;

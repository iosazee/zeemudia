import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  Code2,
  Brain,
  Users,
  Sparkles,
  GraduationCap,
  Heart,
  Stethoscope,
} from "lucide-react";
import FlickeringGrid from "../ui/flickering-grid";
import { OrbitingCircles } from "../ui/orbiting-circles";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 md:px-12 lg:px-20">
      <div className="absolute inset-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.2}
          color="rgb(99, 102, 241)"
          maxOpacity={0.25}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="relative text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent animate-gradient-x pb-2">
              About
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 rounded-full mt-2" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto px-4 leading-relaxed">
            Transforming Healthcare insights into digital innovation
          </p>
        </div>

        <BentoGrid>
          <BentoGridItem
            className="md:col-span-5 min-h-[32rem] bg-gradient-to-br from-gray-50/10 to-gray-50/5 hover:from-gray-50/20 hover:to-gray-50/10 group backdrop-blur-sm"
            header={
              <div className="relative h-72 -mx-6 -mt-6 mb-6 overflow-hidden">
                <Image
                  src="/tech.webp"
                  alt="Zee Mudia"
                  className="w-full h-full object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-500"
                  height={1280}
                  width={720}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-red-400" />
                  <span className="text-white/90 font-medium">
                    Code + Healthcare
                  </span>
                </div>
              </div>
            }
            title={
              <div className="flex items-center space-x-3">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  Software Engineer
                </h3>
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
            }
            description={
              <div className="space-y-4 text-xl text-gray-300 leading-relaxed text-justify">
                <p>
                  Hey, I&apos;m Zee Mudia &#8211; a Software Engineer with a
                  unique journey from dentistry to digital innovation. With a
                  decade of experience in healthcare, I&apos;ve brought that
                  same attention to detail into the world of software
                  development.
                </p>
                <p>
                  Armed with certifications from EDx/Trilogy Bootcamp and
                  Meta&apos;s fullstack developer specialization, I bridge the
                  gap between healthcare insights and technological solutions.
                </p>
                <p className="text-indigo-300 font-medium">
                  My philosophy? Excellence is in the details, innovation comes
                  from curiosity, and the best solutions emerge from
                  collaborative minds.
                </p>
              </div>
            }
          />

          <BentoGridItem
            className="md:col-span-3 min-h-[28rem] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 hover:from-indigo-500/20 hover:to-purple-500/20 group relative overflow-hidden"
            header={
              <div className="h-52 relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <OrbitingCircles
                    className="size-[30px] border-none bg-transparent"
                    duration={15}
                    radius={35}
                  >
                    <div className="p-2 rounded-full bg-indigo-500/20 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/30">
                      <Code2 className="w-5 h-5 text-indigo-300 transition-colors duration-300 group-hover:text-indigo-200" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    className="size-[30px] border-none bg-transparent"
                    duration={20}
                    radius={65}
                    delay={8}
                    reverse
                  >
                    <div className="p-2 rounded-full bg-purple-500/20 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/30">
                      <Brain className="w-5 h-5 text-purple-300 transition-colors duration-300 group-hover:text-purple-200" />
                    </div>
                  </OrbitingCircles>

                  <OrbitingCircles
                    className="size-[30px] border-none bg-transparent"
                    duration={25}
                    radius={95}
                    delay={12}
                  >
                    <div className="p-2 rounded-full bg-emerald-500/20 backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500/30">
                      <Stethoscope className="w-5 h-5 text-emerald-300 transition-colors duration-300 group-hover:text-emerald-200" />
                    </div>
                  </OrbitingCircles>
                </div>
              </div>
            }
            title={
              <div className="flex items-center space-x-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Technical Arsenal
                </h3>
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
            }
            description={
              <div className="h-[calc(28rem-44px-120px)] overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-6 text-gray-300">
                  {/* Core Languages */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 sticky top-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm py-2">
                      Core Languages
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-sm hover:bg-indigo-500/30 transition-colors cursor-default">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-sm hover:bg-indigo-500/30 transition-colors cursor-default">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-sm hover:bg-purple-500/30 transition-colors cursor-default">
                        Python
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-sm hover:bg-emerald-500/30 transition-colors cursor-default">
                        Bash
                      </span>
                    </div>
                  </div>

                  {/* Frameworks & Libraries */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 sticky top-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm py-2">
                      Frameworks & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sm hover:bg-blue-500/30 transition-colors cursor-default">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sm hover:bg-blue-500/30 transition-colors cursor-default">
                        Next.js
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-sm hover:bg-green-500/30 transition-colors cursor-default">
                        Node Js
                      </span>
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-sm hover:bg-green-500/30 transition-colors cursor-default">
                        Express
                      </span>
                      <span className="px-3 py-1 rounded-full bg-red-500/20 text-sm hover:bg-red-500/30 transition-colors cursor-default">
                        Django
                      </span>
                      <span className="px-3 py-1 rounded-full bg-red-500/20 text-sm hover:bg-red-500/30 transition-colors cursor-default">
                        Flask
                      </span>
                    </div>
                  </div>

                  {/* DevOps & Tools */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 sticky top-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm py-2">
                      DevOps & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-orange-500/20 text-sm hover:bg-orange-500/30 transition-colors cursor-default">
                        Git
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 text-sm hover:bg-purple-500/30 transition-colors cursor-default">
                        GitHub Actions
                      </span>
                      <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-sm hover:bg-yellow-500/30 transition-colors cursor-default">
                        Linux/VPS
                      </span>
                    </div>
                  </div>

                  {/* Methodologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-2 sticky top-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm py-2">
                      Methodologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sm hover:bg-blue-500/30 transition-colors cursor-default">
                        Agile
                      </span>
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sm hover:bg-blue-500/30 transition-colors cursor-default">
                        Scrum
                      </span>
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sm hover:bg-blue-500/30 transition-colors cursor-default">
                        CI/CD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <BentoGridItem
            className="md:col-span-2 min-h-[28rem] bg-gradient-to-br from-emerald-500/10 to-blue-500/10 hover:from-emerald-500/20 hover:to-blue-500/20 group"
            header={
              <div className="relative h-48 -mx-6 -mt-6 mb-6 flex items-center justify-center bg-gradient-to-br from-emerald-500/5 to-blue-500/5">
                <Users className="w-20 h-20 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            }
            title={
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                Professional Strengths
              </h3>
            }
            description={
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-emerald-500/10 transition-colors">
                  <Brain className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Analytical Problem Solving</h4>
                    <p className="text-sm text-gray-400">
                      Bringing healthcare precision to code
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-emerald-500/10 transition-colors">
                  <Users className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Collaborative Leadership</h4>
                    <p className="text-sm text-gray-400">
                      Building bridges across teams
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-emerald-500/10 transition-colors">
                  <Code2 className="w-5 h-5 text-emerald-400 mt-1" />
                  <div>
                    <h4 className="font-medium">Detail-Oriented Development</h4>
                    <p className="text-sm text-gray-400">
                      Crafting clean, maintainable code
                    </p>
                  </div>
                </div>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { projects } from "@/lib/data/projects";
import Image from "next/image";
import { Code2, Sparkles, ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="relative w-full py-20 md:py-28 lg:py-36">
      <div className="absolute inset-0">
        <SparklesCore
          id="portfolio-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleColor="#888"
          particleDensity={120}
          className="w-full h-full opacity-40"
          speed={0.075}
        />
      </div>

      <div className="relative text-center mb-16 md:mb-20 lg:mb-24 px-4 md:px-6">
        <div className="inline-block">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent animate-gradient-x pb-2">
            Featured Projects
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 rounded-full mt-2" />
        </div>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-8 max-w-2xl mx-auto px-4 leading-relaxed">
          Crafting innovative digital solutions with modern technologies and
          thoughtful design
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project) => (
            <CardContainer
              key={project.id}
              className="w-full"
              containerClassName="!py-6 md:!py-8 lg:!py-10"
            >
              <CardBody className="relative group/card rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 bg-gradient-to-br from-slate-800/90 via-indigo-950/95 to-purple-900/90 backdrop-blur-sm w-full min-h-[550px] md:min-h-[600px] lg:min-h-[650px]">
                <CardItem translateZ="120" className="w-full">
                  <div className="relative px-4 md:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="rounded-xl object-cover w-full aspect-video transform group-hover/card:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </CardItem>

                <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
                  <CardItem translateZ="60">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 group-hover/card:text-white">
                        {project.title}
                      </h3>
                      <Code2 className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform group-hover/card:rotate-12" />
                    </div>
                  </CardItem>

                  <CardItem translateZ="80">
                    <p className="text-sm md:text-base lg:text-lg text-white/70 group-hover/card:text-white/90 leading-relaxed">
                      {project.des}
                    </p>
                  </CardItem>

                  <CardItem translateZ="100" className="mt-auto pt-4 md:pt-6">
                    <div className="flex items-center justify-between flex-wrap gap-4 md:gap-6 lg:gap-8">
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center backdrop-blur-sm bg-white/5 rounded-xl p-1.5 md:p-2 transform hover:scale-110 transition-all duration-300 group-hover/card:bg-white/10"
                          >
                            <Image
                              src={icon}
                              alt="technology"
                              width={24}
                              height={24}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-white/90 hover:text-white transition-all duration-300 text-sm md:text-base group/link shrink-0"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                        <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-indigo-400 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                      </a>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

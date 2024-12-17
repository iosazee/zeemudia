import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { projects } from "@/lib/data/projects";
import Image from "next/image";
import { ExternalLink, Code2, Sparkles, ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="portfolio" className="relative w-full py-16 md:py-24 lg:py-32">
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

      <div className="relative text-center mb-12 md:mb-16 lg:mb-20">
        <div className="inline-block">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-300 bg-clip-text text-transparent animate-gradient-x pb-2">
            Featured Projects
          </h2>
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50 rounded-full mt-2" />
        </div>
        <p className="text-lg md:text-xl text-gray-400 mt-6 max-w-3xl mx-auto px-4 leading-relaxed">
          Crafting innovative digital solutions with modern technologies and
          thoughtful design
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative w-full max-w-[120rem] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <CardContainer
              key={project.id}
              className="w-full"
              containerClassName="!py-10"
            >
              <CardBody className="relative group/card rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm w-full min-h-[600px] md:min-h-[650px]">
                <CardItem translateZ="120" className="w-full">
                  <div className="relative px-6 md:px-8 pt-6 md:pt-8 overflow-hidden rounded-xl">
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

                <div className="p-6 md:p-8 space-y-6">
                  <CardItem translateZ="60">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white/90 group-hover/card:text-white">
                        {project.title}
                      </h3>
                      <Code2 className="w-6 h-6 text-indigo-400 opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform group-hover/card:rotate-12" />
                    </div>
                  </CardItem>

                  <CardItem translateZ="80">
                    <p className="text-justify text-base md:text-lg text-white/70 group-hover/card:text-white/90 leading-relaxed">
                      {project.des}
                    </p>
                  </CardItem>

                  <CardItem translateZ="100" className="mt-auto pt-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-evenly gap-8">
                      <div className="flex flex-wrap gap-3">
                        {project.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="w-10 h-10 flex items-center justify-center backdrop-blur-sm bg-white/5 rounded-xl p-2 transform hover:scale-110 transition-all duration-300 group-hover/card:bg-white/10"
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-white/90 hover:text-white transition-all duration-300 text-base group/link"
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                        <Sparkles className="w-3 h-3 text-indigo-400 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
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

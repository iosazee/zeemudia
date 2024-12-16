import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { projects } from "@/lib/data/projects";
import Image from "next/image";
import { ExternalLink, Code2, Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section id="portfolio" className="relative w-full py-12 md:py-20">
      {/* Sparkles Background */}
      <div className="absolute inset-0">
        <SparklesCore
          id="portfolio-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleColor="#666"
          particleDensity={100}
          className="w-full h-full opacity-50"
          speed={0.1}
        />
      </div>

      {/* Header Container */}
      <div className="relative text-center mb-8 md:mb-12">
        <div className="inline-block px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
            Featured Projects
          </h2>
        </div>
        <p className="text-base md:text-lg text-gray-400 mt-3 md:mt-4 max-w-2xl mx-auto px-4">
          Transforming ideas into exceptional digital experiences
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative w-full max-w-[100rem] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <CardContainer key={project.id} className="w-full">
              <CardBody className="relative group/card rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 bg-gradient-to-br from-slate-800/50 to-black-100 backdrop-blur-sm min-h-[500px] md:min-h-[550px]">
                {/* Image Container with Overlay */}
                <CardItem translateZ="100" className="w-full">
                  <div className="relative px-4 md:px-6 pt-4 md:pt-6 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-xl object-cover w-full aspect-video transform group-hover/card:scale-105 transition-transform duration-500"
                    />
                  </div>
                </CardItem>

                {/* Content Container */}
                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  {/* Title with Icon */}
                  <CardItem translateZ="50">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover/card:text-white">
                        {project.title}
                      </h3>
                      <Code2 className="w-5 h-5 text-indigo-400 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardItem>

                  {/* Description */}
                  <CardItem translateZ="60">
                    <p className="text-sm md:text-base text-white/60 group-hover/card:text-white/80 leading-relaxed">
                      {project.des}
                    </p>
                  </CardItem>

                  {/* Tech Stack and Link Container */}
                  <CardItem translateZ="100" className="mt-auto pt-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                      {/* Tech Stack Icons */}
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center backdrop-blur-sm bg-white/5 rounded-lg p-1.5 transform hover:scale-110 transition-all duration-300 group-hover/card:bg-white/10"
                          >
                            <Image
                              src={icon}
                              alt="technology"
                              width={20}
                              height={20}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Project Link */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-white/80 hover:text-white transition-all duration-300 text-sm whitespace-nowrap group"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                        <Sparkles className="w-3 h-3 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

"use client";

import { projects } from "@/lib/data/projects";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <section className="py-20 bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4"
      >
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-semibold mb-2">
            More Work
          </p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-slate-50">
            Other Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden group hover:scale-[1.02] hover:border-white/[0.12] transition-all duration-200"
            >
              <div
                className={`h-[120px] bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span className="text-2xl font-extrabold text-white/20">
                  {project.title}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-[15px] font-bold text-slate-50 mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-blue-500/10 rounded text-[10px] text-blue-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-500 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

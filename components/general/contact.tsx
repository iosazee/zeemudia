import React from "react";
import ShinyButton from "../ui/shiny-button";
import { ArrowUpRight } from "lucide-react";
import grainImg from "@/public/grain.jpg";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative w-full overflow-hidden py-20 md:py-28"
      >
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400" />
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url(${grainImg.src})`,
              }}
            />

            <div className="relative px-6 md:px-12 py-16 md:py-20">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                <div className="flex-1 md:basis-2/3 text-center md:text-left">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                    Let&apos;s build something amazing together
                  </h2>
                  <p className="text-lg md:text-xl mt-6 text-gray-900 max-w-2xl">
                    Have a project in mind or just want to say hello? I&apos;m
                    always excited to collaborate on innovative ideas or tackle
                    challenging problems.
                  </p>
                </div>

                <div className="flex-1 md:basis-1/3 flex justify-center md:justify-end">
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <ShinyButton
                      title="Contact me"
                      icon={<ArrowUpRight className="w-3 h-3" />}
                      position="right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

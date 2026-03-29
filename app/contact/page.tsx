import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/forms/contact-form";

function ContactPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="relative w-full px-4 md:px-8 lg:px-16 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="relative z-10 text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-50 pb-2">
              Get in Touch
            </h1>
            <div className="h-1 w-48 mx-auto bg-emerald-500/30 rounded-full mt-2" />
            <p className="text-lg md:text-xl text-slate-400 mt-6">
              Have a question or want to work together?
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            {/* Contact Form Section */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-50 mb-4">
                  Send a Message
                </h2>
                <p className="text-slate-400">
                  I&apos;d love to hear from you. Let&apos;s create something
                  amazing together.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Info Section */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 h-full">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-50 mb-4">
                    Let&apos;s Connect
                  </h2>
                  <p className="text-slate-400 mb-6">
                    Feel free to reach out directly through email or social
                    media.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:zee@zeemudia.com?subject=Let's%20Work%20Together"
                      className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-3 rounded-xl bg-emerald-500/10 group-hover/link:bg-emerald-500/20 transition-colors">
                        <Mail className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="text-slate-50 group-hover/link:text-emerald-400 transition-colors">
                          zee@zeemudia.com
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover/link:text-slate-50 ml-auto transform group-hover/link:translate-x-1 transition-all" />
                    </a>

                    <a
                      href="https://github.com/iosazee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 group/link"
                    >
                      <div className="p-3 rounded-xl bg-emerald-500/10 group-hover/link:bg-emerald-500/20 transition-colors">
                        <Image
                          src="/github.webp"
                          alt="Github"
                          width={24}
                          height={24}
                          className="opacity-90 group-hover/link:opacity-100 transition-opacity duration-200 bg-white"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">GitHub</p>
                        <p className="text-slate-50 group-hover/link:text-emerald-400 transition-colors">
                          @iosazee
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover/link:text-slate-50 ml-auto transform group-hover/link:translate-x-1 transition-all" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/zeemudia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 group/link"
                    >
                      <div className="p-3 rounded-xl bg-emerald-500/10 group-hover/link:bg-emerald-500/20 transition-colors">
                        <Image
                          src="/linkedin.svg"
                          alt="LinkedIn"
                          width={24}
                          height={24}
                          className="opacity-90 group-hover/link:opacity-100 transition-opacity duration-200 bg-white"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">LinkedIn</p>
                        <p className="text-slate-50 group-hover/link:text-emerald-400 transition-colors">
                          Zee Mudia
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover/link:text-slate-50 ml-auto transform group-hover/link:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/[0.06]">
                  <h3 className="text-xl font-semibold text-slate-50 mb-4">
                    Looking for Collaboration?
                  </h3>
                  <p className="text-slate-400">
                    I&apos;m always open to discussing new projects, creative
                    ideas, or opportunities to be part of your visions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

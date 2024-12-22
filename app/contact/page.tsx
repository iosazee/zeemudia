import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import { Meteors } from "@/components/ui/meteors";
import StarryBackground from "@/components/ui/stars";

function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Starry Background */}
      <StarryBackground className="z-0" />

      <div className="relative w-full px-4 md:px-8 lg:px-16 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="relative z-10 text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-200 bg-clip-text text-transparent animate-gradient-x pb-2">
              Get in Touch
            </h1>
            <div className="h-1 w-48 mx-auto bg-gradient-to-r from-indigo-400/30 via-purple-400/30 to-indigo-400/30 rounded-full mt-2" />
            <p className="text-lg md:text-xl text-gray-300 mt-6">
              Have a question or want to work together?
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            {/* Contact Form Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 transform scale-[0.95] rounded-3xl blur-xl opacity-50 transition-all duration-300 group-hover:scale-[0.98] group-hover:opacity-70" />
              <div className="relative backdrop-blur-sm border border-white/10 rounded-3xl p-8 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-colors">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Send a Message
                  </h2>
                  <p className="text-gray-300">
                    I&apos;d love to hear from you. Let&apos;s create something
                    amazing together.
                  </p>
                </div>
                <ContactForm />
                <Meteors number={2} />
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-emerald-500/10 transform scale-[0.95] rounded-3xl blur-xl opacity-50 transition-all duration-300 group-hover:scale-[0.98] group-hover:opacity-70" />
              <div className="relative backdrop-blur-sm border border-white/10 rounded-3xl p-8 bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-colors h-full">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Let&apos;s Connect
                    </h2>
                    <p className="text-gray-300 mb-6">
                      Feel free to reach out directly through email or social
                      media.
                    </p>

                    <div className="space-y-4">
                      <a
                        href="mailto:zee@zeemudia.com?subject=Let's%20Work%20Together"
                        className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/link hover:scale-[1.02]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="p-3 rounded-xl bg-indigo-500/10 group-hover/link:bg-indigo-500/20 transition-colors">
                          <Mail className="h-6 w-6 text-indigo-300" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-white group-hover/link:text-indigo-200 transition-colors">
                            zee@zeemudia.com
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover/link:text-white ml-auto transform group-hover/link:translate-x-1 transition-all" />
                      </a>

                      <a
                        href="https://github.com/iosazee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/link hover:scale-[1.02]"
                      >
                        <div className="p-3 rounded-xl bg-purple-500/10 group-hover/link:bg-purple-500/20 transition-colors">
                          <div className="h-6 w-6 bg-white rounded-full opacity-90" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">GitHub</p>
                          <p className="text-white group-hover/link:text-purple-200 transition-colors">
                            @iosazee
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover/link:text-white ml-auto transform group-hover/link:translate-x-1 transition-all" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/zeemudia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group/link hover:scale-[1.02]"
                      >
                        <div className="p-3 rounded-xl bg-blue-500/10 group-hover/link:bg-blue-500/20 transition-colors">
                          <div className="h-6 w-6 bg-white rounded-full opacity-90" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">LinkedIn</p>
                          <p className="text-white group-hover/link:text-blue-200 transition-colors">
                            Zee Mudia
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover/link:text-white ml-auto transform group-hover/link:translate-x-1 transition-all" />
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Looking for Collaboration?
                    </h3>
                    <p className="text-gray-300">
                      I&apos;m always open to discussing new projects, creative
                      ideas, or opportunities to be part of your visions.
                    </p>
                  </div>
                </div>
                <Meteors number={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

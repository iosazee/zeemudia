import React from "react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Github",
    href: "#",
    icon: (
      <Image
        src="/github.webp"
        alt="Github"
        width={20}
        height={20}
        className="opacity-70 group-hover:opacity-100 transition-opacity duration-200 bg-white"
      />
    ),
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: (
      <Image
        src="/linkedin.svg"
        alt="LinkedIn"
        width={20}
        height={20}
        className="opacity-70 group-hover:opacity-100 transition-opacity duration-200 bg-white"
      />
    ),
  },
  {
    title: "Bluesky",
    href: "#",
    icon: (
      <Image
        src="/bsky.svg"
        alt="Bluesky"
        width={20}
        height={20}
        className="opacity-70 group-hover:opacity-100 transition-opacity duration-200 bg-white"
      />
    ),
  },
];

function Footer() {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]" />
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="text-white/90">
            {`© ${new Date().getFullYear()} zeemudia | All Rights Reserved`}
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="group inline-flex items-center text-white/70 hover:text-white transition-colors duration-200"
                aria-label={link.title}
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

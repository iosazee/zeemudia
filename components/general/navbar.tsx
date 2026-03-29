"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-white/[0.06] z-[9999]">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl">
            Zee Mudia
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/contact"
              className="bg-emerald-500 hover:bg-emerald-400 hover:scale-105 transition-all text-white font-semibold text-sm rounded-md px-4 py-1.5"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900/80 backdrop-blur-lg pb-6"
          >
            <div className="flex flex-col gap-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors py-2 text-center text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link
                href="/contact"
                className="bg-emerald-500 hover:bg-emerald-400 hover:scale-105 transition-all text-white font-semibold text-sm rounded-md px-4 py-1.5 text-center mx-auto mt-2"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

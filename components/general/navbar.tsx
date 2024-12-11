"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Single glass effect container */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg" />

      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      {/* Navbar content */}
      <div className="relative h-full">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center w-full">
              <ul className="flex items-center justify-center space-x-12">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-200 hover:text-white transition-colors text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden w-full flex justify-end">
              <button
                className="p-2 text-gray-200 hover:text-white transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <nav className="py-8 min-h-[50vh]">
                <ul className="space-y-6">
                  {navItems.map((item) => (
                    <li key={item.name} className="text-center">
                      <Link
                        href={item.href}
                        className="block text-gray-200 hover:text-white transition-colors py-2 text-xl font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

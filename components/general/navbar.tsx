"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-[9999]">
      {/* Single glass effect container */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg" />

      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      {/* Navbar content */}
      <div className="relative h-full">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="md:w-24 flex items-center pl-2 md:pl-4">
              <Link href="/" className="block">
                <Image
                  src="/zeemudia.svg"
                  alt="Zee Mudia Logo"
                  width={100}
                  height={40}
                  className="w-auto h-8 md:h-10 [filter:invert(92%)_sepia(100%)_saturate(0%)_hue-rotate(30deg)_brightness(116%)_contrast(102%)]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
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
            <div className="md:hidden">
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

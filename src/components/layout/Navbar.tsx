"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }, 
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-100 bg-white backdrop-blur-xl">

      {/* ALIGNMENT WRAPPER ADDED (ONLY CHANGE) */}
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-12 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-sm font-semibold text-emerald-600">
            FS
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a 
            href="/resume/cv.pdf"
            //target="_blank"
            //rel="noopener noreferrer" 
            download="Flemming_Sikali_CV.pdf"
            className="h-11 px-5 rounded-xl bg-black text-white text-sm font-medium flex items-center transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
            > 
              Download CV
            </a>
        </div>

        <button
          className="md:hidden w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center bg-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-5 h-[1.5px] bg-gray-900 rounded-full"></span>
            <span className="block w-5 h-[1.5px] bg-gray-900 rounded-full"></span>
            <span className="block w-5 h-[1.5px] bg-gray-900 rounded-full"></span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white backdrop-blur-xl z-50">
          <nav className="px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-black transition"
              >
                {item.name}
              </Link>
            ))}

            <button className="mt-4 h-12 rounded-xl bg-black text-white text-sm font-medium">
              Let&apos;s Talk
            </button>
          </nav>
        </div>
      )}
    </header> 
  );
}

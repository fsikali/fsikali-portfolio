"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Projects", "Skills", "Experience", "About", "Brand"];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container h-16 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-md flex items-center justify-center font-bold">
            FS
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex justify-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT (DESKTOP CTA) */}
        <div className="hidden md:flex justify-end">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
            Download CV
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-gray-900"></span>
            <span className="block w-5 h-0.5 bg-gray-900"></span>
            <span className="block w-5 h-0.5 bg-gray-900"></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center py-6 gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition"
              >
                {item}
              </Link>
            ))}

            <button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition">
              Let’s Talk →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

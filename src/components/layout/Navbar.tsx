"use client"

import Link from "next/link";
import { Download } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Projects", "Skills", "Services", "Process", "About"];

  return (
    <header className="fixed top-0 w-full bg-white border-b border-slate-200 z-50 px-6">
      <div className="container-a h-16 flex items-center justify-between">
      
        {/* LEFT mx-auto my-6 max-w-7xl rounded-3xl px-6 py-20 */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-100 text-slate-900 rounded-full flex items-center justify-center font-bold">
            FS
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex justify-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-slate-900 font-medium hover:text-slate-600 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT (DESKTOP CTA) */}
        <div className="hidden md:flex justify-end">
          <a 
            href="/cv.pdf" 
            download
            className="cursor-pointer inline-flex items-center gap-2 bg-emerald-100 text-slate-900 font-medium px-4 py-2 rounded-full hover:bg-emerald-300 transition"
          >
            Download CV
            <Download size={17} strokeWidth={2} />
          </a>
        </div>

        {/* Commented out the download CV button for now, can be added back later if needed */}
        {/* <div className="hidden md:flex justify-end">
          <button className="cursor-pointer bg-emerald-100 text-slate-900 font-medium px-4 py-2 rounded-full hover:bg-emerald-300 transition">
            Download CV
          </button>
        </div> */}

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

export function NavbarSkeleton() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-300 rounded-md animate-pulse"></div>
        </div>

        <nav className="hidden md:flex justify-center gap-8 text-sm">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-16 h-4 bg-gray-300 rounded animate-pulse"
            ></div>
          ))}
        </nav>

        <div className="hidden md:flex justify-end">
          <div className="w-24 h-8 bg-gray-300 rounded animate-pulse"></div>
        </div>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-gray-300 animate-pulse"></span>
            <span className="block w-5 h-0.5 bg-gray-300 animate-pulse"></span>
            <span className="block w-5 h-0.5 bg-gray-300 animate-pulse"></span>
          </div>
        </button>
      </div>
    </header>
  );
} 
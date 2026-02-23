"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          FS
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        <button className="border border-primary px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition">
          Download Resume
        </button>
      </nav>
    </header>
  );
}

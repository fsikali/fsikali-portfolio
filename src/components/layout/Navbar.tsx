"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container h-16 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-md flex items-center justify-center font-bold">
            FS
          </div>
  
        </div>

        {/* CENTER */}
        <nav className="flex justify-center gap-8 text-sm">
          {["Home", "Projects", "Skills", "Experience", "About", "Brand"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex justify-end">
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition">
            Let’s Talk →
          </button>
        </div>

      </div>
    </header>
  );
}

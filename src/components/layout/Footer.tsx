import Link from "next/link";
import { Code, Code2Icon, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gray-200 bg-white">
      
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-400/60 to-transparent" />

      <div className="container py-14 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Flemming<span className="text-emerald-500">.dev</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            Building clean, fast, and modern web experiences with Next.js and Tailwind.
            Focused on performance, design, and usability.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="#" className="text-gray-600 hover:text-emerald-500 transition">
              <Code size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-500 transition">
              <Code2Icon size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-500 transition">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-emerald-500 flex items-center gap-1">
                Home <ArrowUpRight size={14} />
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-600 hover:text-emerald-500 flex items-center gap-1">
                Projects <ArrowUpRight size={14} />
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-emerald-500 flex items-center gap-1">
                About <ArrowUpRight size={14} />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-emerald-500 flex items-center gap-1">
                Contact <ArrowUpRight size={14} />
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA / Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Let’s Build Something
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Open for freelance and collaboration opportunities.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="container py-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Flemming Sikali. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
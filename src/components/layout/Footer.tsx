import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="contact"className="relative border-t border-emerald-100/40 bg-[#fcfcfd]">

      {/* top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      {/* ALIGNMENT WRAPPER ADDED (ONLY CHANGE) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="container py-12 flex flex-col items-center text-center">

          {/* brand */}
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">
            FSTechSpace
          </h2>

          <p className="mt-2 text-sm text-gray-500 max-w-md">
            Building fast, modern, and scalable digital experiences with precision and design clarity.
          </p>

          {/* socials */}
          <div className="flex gap-7 mt-7 items-center">

            <a
              href="https://github.com/"
              target="_blank"
              className="text-[#181717] hover:opacity-70 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-[#0A66C2] hover:opacity-70 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              className="text-black hover:opacity-70 transition-all duration-300 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} />
            </a>

            <a
              href="mailto:your@email.com"
              className="text-emerald-600 hover:opacity-70 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

          </div>

        </div>

        {/* bottom bar */}
        <div className="border-t border-emerald-100/30">
          <div className="container py-5 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} FSTechSpace · Built with Next.js & Tailwind
          </div>
        </div>

      </div>
    </footer>
  );
}

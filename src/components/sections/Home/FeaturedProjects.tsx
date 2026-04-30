"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { Icons } from "@/components/icons";

export default function FeaturedProjects() {
  return (
    <section className="container py-20 text-black">
      
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold tracking-tight">
          Featured Projects
        </h2>
        <p className="text-black-400 mt-3">
          Production-grade applications and experiments.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              group bg-white backdrop-blur-sm border border-gray-200
              rounded-2xl p-6 transition-all duration-300
              hover:border-blue-300 hover:-translate-y-1
              hover:shadow-lg hover:shadow-blue-500/10
            "
          >
            {/* TITLE */}
            <h3 className="text-xl font-semibold group-hover:text-blue-900 transition">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-sm mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-900"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GITHUB LINK */}
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 mt-5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-2 py-1 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              <Icons.github size={16} />
              View on GitHub
            </Link>
          </div>
        ))}

      </div>
    </section>
  );
}

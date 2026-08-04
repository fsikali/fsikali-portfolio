import Link from "next/link";
import { projects } from "@/data/projects";
import { Icons } from "@/components/icons";

export default function Projects() {
  return (
    <section className="py-28">

      {/* ALIGNMENT WRAPPER ADDED (ONLY CHANGE) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Featured Projects
          </h2>

          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            A selection of projects focused on performance, scalability, and clean UI systems.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={project.id}
              className="
                group flex flex-col h-full
                bg-white border border-gray-200
                rounded-2xl p-6

                transition-all duration-300
                hover:-translate-y-1
                hover:border-emerald-200
                hover:shadow-lg hover:shadow-emerald-500/5

                animate-fadeIn
              "
              style={{ animationDelay: `${i * 80}ms` }}
            >

              {/* TOP */}
              <div>
                <h3 className="
                  text-xl font-semibold text-gray-900
                  group-hover:text-emerald-700 transition
                ">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-xs font-medium
                      px-2.5 py-1 rounded-full
                      bg-gray-50 text-gray-700
                      border border-gray-200
                      group-hover:border-emerald-100
                      transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="mt-auto pt-6 flex items-center justify-between">

                <Link
                  href={project.github}
                  target="_blank"
                  className="
                    inline-flex items-center gap-2
                    text-sm text-gray-600
                    hover:text-emerald-700
                    transition
                  "
                >
                  <Icons.github size={16} />
                  Code
                </Link>

                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="
                      text-sm px-3 py-1.5 rounded-md
                      bg-black text-white
                      hover:bg-gray-800
                      transition
                    "
                  >
                    Live Demo
                  </Link>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

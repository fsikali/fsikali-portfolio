import Link from "next/link";
import { projects } from "@/data/projects";
import { Icons } from "@/components/icons";

export default function FeaturedProjects() {
  return (
    <section className="my-20 px-6 scroll-mt-24"  id="projects">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          Projects
        </h2>

        <p className="mt-3 text-slate-900 text-sm sm:text-base max-w-md mx-auto">
          A selection of projects focused on performance, scalability, and clean UI systems.
        </p>
      </div> 
      
      <div className="container">
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
                text-xl font-semibold text-slate-900
                group-hover:text-emerald-700 transition
              ">
                {project.title}
              </h3>

              <p className="text-slate-900 text-sm mt-3 leading-relaxed min-h-[60px]">
                {project.description}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-auto pt-6 flex items-center justify-between">

              {/* Live (if exists) */}
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

/*
export default function Skills() {
  return (
    <section id="skills" className="my-8 px-6">
      <div className="container mx-auto px-4">
        {/* HEADER *\/}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Skills
          </h2>

          <p className="mt-3 text-slate-900 text-sm max-w-md mx-auto">
            Here are some of the technologies and tools I have experience with.
          </p>
        </div>

        {/* SKILLS GRID *\/}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "Git",
            "Docker",
            "Jest",
            "Cypress",
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center p-4 bg-white rounded shadow hover:shadow-lg transition"
            >
              <span className="text-slate-900 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
*/ 

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiDocker,
  SiJest,
  SiCypress,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    category: "Programming Language",
    icon: SiJavascript,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "React",
    category: "Frontend Library",
    icon: SiReact,
    color: "text-sky-500",
  },
  {
    name: "Next.js",
    category: "React Framework",
    icon: SiNextdotjs,
    color: "text-slate-900",
  },
  {
    name: "Node.js",
    category: "Runtime Environment",
    icon: SiNodedotjs,
    color: "text-green-600",
  },
  {
    name: "Express",
    category: "Web Framework",
    icon: SiExpress,
    color: "text-slate-700",
  },
  {
    name: "MongoDB",
    category: "NoSQL Database",
    icon: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    icon: SiPostgresql,
    color: "text-blue-700",
  },
  {
    name: "HTML5",
    category: "Markup Language",
    icon: SiHtml5,
    color: "text-orange-600",
  },
  {
    name: "CSS3",
    category: "Styling Language",
    icon: SiCss,
    color: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "Bootstrap",
    category: "CSS Framework",
    icon: SiBootstrap,
    color: "text-purple-600",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: SiGit,
    color: "text-orange-600",
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: SiDocker,
    color: "text-blue-500",
  },
  {
    name: "Jest",
    category: "Testing Framework",
    icon: SiJest,
    color: "text-rose-600",
  },
  {
    name: "Cypress",
    category: "End-to-End Testing",
    icon: SiCypress,
    color: "text-slate-700",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6">
      
        {/* HEADER */}
        <div className="mb-12 text-center sm:mb-12">

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Skills
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
            Technologies and tools I use to build digital products.
          </p>
        </div>

        <div className="container mx-auto rounded-3xl bg-slate-100 px-5 py-16 sm:px-8 sm:py-20">
        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex min-w-0 items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                {/* TECHNOLOGY ICON */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-emerald-50">
                  <Icon
                    aria-hidden="true"
                    className={`h-7 w-7 ${skill.color}`}
                  />
                </div>

                {/* TECHNOLOGY DETAILS */}
                <div className="min-w-0">
                  <h3 className="truncate font-semibold text-slate-900">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    {skill.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

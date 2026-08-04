import { Code2, Server, Layers, Sparkles } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      desc: "Modern UI systems with Next.js, React, and Tailwind CSS.",
    },
    {
      icon: Server,
      title: "Backend Systems",
      desc: "Scalable APIs and architectures using Spring Boot and Node.js.",
    },
    {
      icon: Layers,
      title: "System Design",
      desc: "Designing scalable, maintainable, and modular software systems.",
    },
    {
      icon: Sparkles,
      title: "Performance & UX",
      desc: "Optimized interfaces focused on speed, usability, and clarity.",
    },
  ];

  return (
    <section className="py-28 bg-white">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">

        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          What I Focus On
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          I design and build scalable backend systems, modern frontend interfaces,
          and high-performance web applications engineered for reliability and growth.
        </p>
      </div>

      {/* ALIGNMENT WRAPPER ADDED (ONLY CHANGE) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <div
                key={i}
                className="
                  group p-6 rounded-2xl border border-gray-200 bg-white
                  hover:border-emerald-200
                  hover:shadow-md hover:shadow-emerald-500/5
                  transition-all duration-300
                  animate-fadeIn
                "
                style={{ animationDelay: `${i * 80}ms` }}
              >

                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="p-2 rounded-md bg-gray-50 border border-gray-200 group-hover:border-emerald-200 transition">
                    <Icon size={20} className="text-gray-700 group-hover:text-emerald-600" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition">
                      {skill.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

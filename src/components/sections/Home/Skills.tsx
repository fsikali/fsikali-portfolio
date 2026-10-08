export default function Skills() {
  return (
    <section id="skills" className="my-8 px-6">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Skills
          </h2>

          <p className="mt-3 text-slate-900 text-sm max-w-md mx-auto">
            Here are some of the technologies and tools I have experience with.
          </p>
        </div>

        {/* SKILLS GRID */}
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
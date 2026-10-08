export default function Experience() {
  return (
    <section className="my-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experience cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Software Engineer</h3>
            <p className="text-slate-900 mb-4 font-medium">Company A | Jan 2020 - Present</p>
            <ul className="list-disc list-inside text-slate-900">
              <li>Developed web applications using React and Node.js.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
              <li>Implemented CI/CD pipelines to streamline deployment processes.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Frontend Developer</h3>
            <p className="text-slate-900 mb-4 font-medium">Company B | Jun 2018 - Dec 2019</p>
            <ul className="list-disc list-inside text-slate-900">
              <li>Built responsive user interfaces with HTML, CSS, and JavaScript.</li>
              <li>Optimized web applications for maximum speed and scalability.</li>
              <li>Worked closely with designers to implement UI/UX best practices.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Intern</h3>
            <p className="text-slate-900 mb-4 font-medium">Company C | Jan 2017 - May 2018</p>
            <ul className="list-disc list-inside text-slate-900">
              <li>Assisted in the development of web applications and tools.</li>
              <li>Learned and applied new technologies in a fast-paced environment.</li>
              <li>Contributed to team meetings and code reviews.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 

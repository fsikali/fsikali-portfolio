import Image from "next/image";

export default function Hero() {
  return (
    <section className="container py-20 grid md:grid-cols-2 gap-12 items-center">
      
      {/* LEFT */}
      <div>
        <span className="inline-block bg-emerald-100 text-emerald-600 text-sm px-4 py-2 rounded-full mb-4">
          Hi, I'm Flemming Sikali
        </span>

        <h1 className="text-5xl font-bold leading-tight">
          Building modern <br />
          web <span className="text-emerald-600">applications</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-md">
          I create scalable, fast and user-focused digital products using Next.js and modern tools.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-md hover:bg-emerald-700 transition">
            View Projects
          </button>

          <button className="bg-white border border-gray-200 px-5 py-2 rounded-md hover:bg-gray-100 transition">
            Contact Me
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {["Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm text-gray-700">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE*/}
      <div className="relative">
        <div className="relative w-full h-[420px]rounded-2xl overflow-hidden shadow-xl bg-linear-to-br from-emerald-50 to-white">
          <Image
            src="/images/hero/image.webp"
            alt="Hero Image"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          /> 

          {/* subtle overlay */} 
          <div className="absolute inset-0 bg-white/10" />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative container py-24 grid md:grid-cols-2 gap-12 items-center overflow-hidden">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] 
        [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        [background-size:40px_40px]" />

      {/* LEFT */}
      <div className="animate-fadeIn">

        {/* name */}
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 relative inline-block">
          Flemming Sikali
          <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-emerald-500 origin-left animate-grow"></span>
        </h1>

        {/* role */}
        <div className="mt-3 text-sm text-gray-600">
          Software Engineer · Founder @ FSTechSpace
        </div>

        {/* description */}
        <p className="mt-5 text-gray-600 max-w-md leading-relaxed">
          I build fast, scalable digital products with clean architecture, strong performance, and modern UX.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-7">
          <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
            View Projects
          </button>

          <button className="bg-white border border-gray-200 px-5 py-2 rounded-md hover:bg-gray-50 transition">
            Contact Me
          </button>
        </div>

        {/* tech stack */}
        <div className="flex flex-wrap gap-3 mt-7">
          {["Next.js", "Spring Boot", "PostgreSQL", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm text-gray-700 border border-gray-200 rounded-md bg-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <div className="w-[340px] h-[340px] rounded-full overflow-hidden border border-gray-200 bg-white">
          <Image
            src="/images/hero/image.webp"
            alt="Hero Image"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

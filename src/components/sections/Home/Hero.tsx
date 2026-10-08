import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative container-a grid md:grid-cols-2 gap-12 items-center overflow-hidden my-5">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 -z-10 opacity-[0.04] 
        [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
        [background-size:40px_40px]" />

      {/* LEFT */}
      <div className="animate-fadeIn"> 

        {/* Greet */} 
        <div>
          <button className="bg-emerald-100 px-5 py-2 rounded-full font-medium text-slate-900">
            Hello, I'm
          </button>
        </div>

        <div>
          {/* name */}
          <h1 className="mt-3 text-5xl font-bold leading-tight tracking-tight text-slate-900 relative inline-block">
            Flemming Sikali
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-emerald-500 origin-left animate-grow"></span>
          </h1>

          {/* role */}
          <div className="mt-3 text-sm text-slate-900">
            Software Engineer · Founder @ FSTechSpace
          </div>

          {/* description */}
          <p className="mt-3 text-slate-900 max-w-md leading-relaxed">
            I build digital products through a structured process, from requirements and planning to design, development, testing, deployment, and continuous improvement.
          </p>
        </div>
        

        {/* CTA */}
        <div className="flex gap-4 mt-7">
          <button className="cursor-pointer bg-emerald-400 text-slate-900 font-medium px-5 py-2 rounded-full hover:bg-emerald-300 transition">
            Get in Touch
          </button>
        </div>

        { 
        /*
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
        */}

      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <div className="w-[340px] h-[340px] rounded-full overflow-hidden border border-gray-200 bg-white ">
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

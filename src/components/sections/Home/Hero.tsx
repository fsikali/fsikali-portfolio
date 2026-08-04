import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-20">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* MOBILE IMAGE */}
          <div className="flex justify-center md:hidden mb-2">
            <div className="relative">

              {/* ❌ REMOVED GREEN GLOW DIV */}

              <div className="relative w-62.5 h-62.5 rounded-full overflow-hidden border border-gray-200 bg-white">

                <Image
                  src="/images/hero/image.webp"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  priority
                  className="object-cover w-full h-full"
                  sizes="250px"
                />

              </div>

            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
              Flemming Sikali
            </h1>

            <div className="mt-4 text-gray-600">
              Software Engineer · Founder @ FSTechSpace
            </div>

            <p className="mt-6 text-gray-600 max-w-xl mx-auto md:mx-0">
              I build fast, scalable digital products with clean architecture,
              strong performance, and modern UX.
            </p>
            
            {/*
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              <button className="h-11 px-6 rounded-md bg-black text-white text-sm font-medium">
                View Projects
              </button>

              <button className="h-11 px-6 rounded-md border border-gray-200 bg-white text-sm font-medium">
                Contact Me
              </button>
            </div>
            */}

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
              {["Next.js", "Spring Boot", "PostgreSQL", "TypeScript"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm text-gray-700 border border-gray-200 rounded-md bg-white"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

          </div>

          {/* DESKTOP IMAGE */}
          <div className="hidden md:flex justify-center">
            <div className="relative">

              {/* ❌ REMOVED GREEN GLOW DIV */}

              <div className="relative w-[320px] h-80 lg:w-85 lg:h-85 rounded-full overflow-hidden border border-gray-200 bg-white">

                <Image
                  src="/images/hero/image.webp"
                  alt="Hero Image"
                  width={500}
                  height={500}
                  priority
                  className="object-cover w-full h-full"
                  sizes="340px"
                />

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

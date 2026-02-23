import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-lg text-gray-300">
          Hi, I'm <span className="font-semibold">Flemming Sikali</span>
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Full Stack Developer
        </h1>

        <p className="text-gray-400 text-lg">
          I build scalable web systems and backend APIs
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="#projects"
            className="bg-primary px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            View My Work
          </Link>

          <Link
            href="#contact"
            className="border border-white/30 px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Contact Me
          </Link>
        </div>

        <div className="pt-12 text-gray-400 animate-bounce">
          ↓ Scroll Down
        </div>
      </div>
    </section>
  );
}

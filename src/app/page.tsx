import Hero from "@/components/sections/Home/Hero";
import Projects from "@/components/sections/Home/Projects";
import Skills from "@/components/sections/Home/Skills";
import Services from "@/components/sections/Home/Services";
import Experience from "@/components/sections/Home/Experience";
import Process from "@/components/sections/Home/Process";

export default function HomePage() {
  return (
    <main className="pt-16 flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <Experience />
      <Process />
      
    </main>
  );
}

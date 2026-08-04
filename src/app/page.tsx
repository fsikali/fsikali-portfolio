import Hero from "@/components/sections/Home/Hero";
import Skills from "@/components/sections/Home/Skills";
import Projects from "@/components/sections/Home/Projects";
import Experience from "@/components/sections/Home/Experience";
import About from "@/components/sections/Home/About";

export default function HomePage() {
  return (
    <main className="pt-16 flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
       <section id="home">
         <Hero />
       </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="about">
        <About />
      </section>
      
    </main>
  );
}

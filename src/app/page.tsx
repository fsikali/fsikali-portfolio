import Hero from "@/components/sections/Home/Hero";
import FeaturedProjects from "@/components/sections/Home/FeaturedProjects";
import SkillsPreview from "@/components/sections/Home/SkillsPreview";
import CTA from "@/components/sections/Home/CTA";

export default function HomePage() {
  return (
    <main className="pt-16 flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <CTA />
    </main>
  );
}

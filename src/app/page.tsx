import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/sections/Projects";
import ProcessSection from "@/components/sections/Process"; // Tambahan Baru
import TeamSection from "@/components/sections/TeamSection";
import FinalCTA from "@/components/sections/FinalCTA"; // Tambahan Baru

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <Hero />
      <ProjectGrid />
      <ProcessSection />
      <TeamSection />
      <FinalCTA />
    </main>
  );
}
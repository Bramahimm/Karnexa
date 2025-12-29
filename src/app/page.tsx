// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/sections/Projects";
import TeamSection from "@/components/sections/TeamSection"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <p className="text-white uppercase tracking-widest text-sm mb-2">
                What have we done in
              </p>
              <h3 className="text-5xl md:text-6xl font-bold">KARNEXA</h3>
            </div>
          </div>
          <ProjectGrid />
        </div>
      </section>
      <TeamSection />
    </main>
  );
}
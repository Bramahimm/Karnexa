// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/sections/Projects";
import TeamSection from "@/components/sections/TeamSection"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />

      {/* SINEMATIK TAGLINE */}
      <section className="py-32 px-10 max-w-7xl w-full">
        <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight text-center">
          We dont just dream about the <span className="text-accent-primary italic">future</span>.
          <br />
          We build the <span className="font-bold">Action</span> that gets you there.
        </h2>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <p className="text-accent-primary uppercase tracking-widest text-sm mb-2">
                What have we done in
              </p>
              <h3 className="text-5xl md:text-6xl font-bold">KARNEXA</h3>
            </div>
          </div>
          <ProjectGrid />
        </div>
      </section>

      {/* teamsection */}
      <TeamSection />

      {/* FOOTER */}
      <footer className="h-[50vh] w-full flex items-center justify-center relative overflow-hidden">
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/40 text-sm">© 2025 Karnexa. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
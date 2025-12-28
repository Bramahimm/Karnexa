import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/*hero section yang mau dijadiin 3D*/}
      <Hero />

      {/* Sinematik */}
      <section className="py-32 px-10 max-w-7xl w-full">
        <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
          We dont just dream about the <span className="text-accent-primary italic">future</span>. 
          <br />
          We build the <span className="font-bold">Action</span> that gets you there.
        </h2>
      </section>

      {/* project porfolio kita*/}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-accent-primary uppercase tracking-widest text-sm mb-2">Portfolio</p>
              <h3 className="text-5xl font-bold">KARNEXA</h3>
            </div>
          </div>
          <ProjectGrid />
        </div>
      </section>
      
      {/*footer */}
      <footer className="h-[50vh] flex items-center justify-center">
        <p className="text-white/20 uppercase tracking-tighter text-9xl font-black opacity-10 select-none">ini footer nanti</p>
      </footer>
    </main>
  );
}
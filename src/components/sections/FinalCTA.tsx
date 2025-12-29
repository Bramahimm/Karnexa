"use client";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-60 px-6 text-center overflow-hidden relative">
      <div className="relative z-10">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12">
          Siap untuk <span className="text-karnexa-pink italic">Pesan?</span>
        </h2>
        <MagneticWrapper>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-karnexa-pink hover:text-white transition-all duration-500 text-xl"
          >
            Pesan Sekarang
          </Link>
        </MagneticWrapper>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-white/5 rotate-12 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-white/5 -rotate-12 pointer-events-none" />
    </section>
  );
}
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useUIStore } from "@/store/useUIStore";
import { ArrowDownRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  const setNavVisible = useUIStore((state) => state.setNavVisible);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reset states
      gsap.set(".hero-line", { scaleX: 0 });
      gsap.set(".hero-sub", { opacity: 0, y: 20 });
      gsap.set(".char", { y: 150, rotateX: -90 });
      gsap.set(".hero-cta", { opacity: 0 });

      // SEQUENCE ANIMATION
      const tl = gsap.timeline({
        onComplete: () => setNavVisible(true),
      });

      tl.to(".hero-line", {
        scaleX: 1,
        duration: 1.8,
        ease: "power4.inOut",
      })
        .to(
          ".hero-sub",
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
          },
          "-=1"
        )
        .to(
          ".char",
          {
            y: 0,
            rotateX: 0,
            stagger: 0.03,
            duration: 1.4,
            ease: "expo.out",
          },
          "-=0.8"
        )
        .to(
          ".hero-cta",
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [setNavVisible]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 pb-12 pt-20 md:pt-0" // Tambah pt mobile buat nav space, pb biar CTA ga nempel bawah
    >
      {/* Structural Micro-Detail: Garis horizontal tipis */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-7xl h-[1px] bg-white/10 hero-line origin-center" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center text-center">
        {/* TOP HIERARCHY: Positioning */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 md:mb-12 hero-sub">
          <span className="text-[10px] uppercase tracking-[0.5em] text-karnexa-pink font-bold">
            EST. 2024
          </span>
          <div className="h-[1px] md:h-3 w-12 md:w-[1px] bg-white/20" />{" "}
          {/* Responsif jadi vertikal di md+ */}
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">
            Professional Digital Studio
          </span>
        </div>

        {/* MAIN TITLE: Brand Authority */}
        <h1 className="text-[14vw] md:text-[11vw] lg:text-[8vw] font-black tracking-tighter leading-none uppercase text-white perspective-1000 flex overflow-hidden justify-center">
          {"KARNEXA".split("").map((c, i) => (
            <span key={i} className="char inline-block will-change-transform">
              {c}
            </span>
          ))}
        </h1>

        {/* BOTTOM HIERARCHY: Services & Value */}
        <div className="mt-10 md:mt-12 flex flex-col items-center hero-sub">
          <p className="text-base md:text-lg lg:text-xl font-light text-white/70 max-w-2xl leading-relaxed tracking-tight mb-10 px-4">
            Setiap masalah pasti ada solusinya{" "}
            <span className="text-white font-medium italic">
              Karnexa
            </span>{" "}
            hadir dengan pendekatan rekayasa teknologi dan solusi akademik strategis.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 gap-x-12">
            <div className="flex items-center gap-3">
              <Zap size={14} className="text-karnexa-pink" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono leading-none mb-1">
                  Service 01
                </p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Web & App Dev
                </p>
              </div>
            </div>

            <div className="hidden md:block h-10 w-[1px] bg-white/10" />

            <div className="flex items-center gap-3">
              <ShieldCheck size={14} className="text-karnexa-pink" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-mono leading-none mb-1">
                  Service 02
                </p>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Joki Seluruh Tugas
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Subtle Bottom Right Signal: Hanya muncul di lg+ */}
        <div className="hero-cta absolute bottom-8 md:bottom-10 right-6 md:right-10 hidden lg:flex items-center gap-3 text-white/40">
          <span className="text-[10px] uppercase tracking-widest font-mono italic">
            Next Career. Real Action.
          </span>
          <ArrowDownRight size={14} />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import {
  Code2,
  GraduationCap,
  ShieldCheck,
  Zap,
  Globe,
  BookOpen,
} from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="min-h-screen pt-24 pb-20 px-6 md:pt-40 md:pb-32 md:px-10 max-w-7xl mx-auto">
      {/* SECTION 1: Hero */}
      <section className="mb-24 md:mb-40 relative z-10 flex flex-col items-center text-center">
        <div className="reveal-text mb-6 px-4 py-1 border border-karnexa-magenta rounded-full text-xs tracking-[0.4em] text-white bg-karnexa-pink/5">
          About Karnexa
        </div>
        <h1 className="reveal-text text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8 md:mb-10">
          Jasa Teknologi <br />
          <span className="text-karnexa-pink italic">& Joki</span> <br />
          <span className="text-white">Terpercaya.</span>
        </h1>
        <p className="reveal-text text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl leading-relaxed font-light px-4">
          Kami adalah mesin eksekusi bagi mereka yang tidak punya waktu untuk
          kompromi. Dari membangun infrastruktur digital hingga memastikan
          performa akademik Anda tetap di puncak, KARNEXA hadir untuk hasil
          nyata, bukan sekadar teori.
        </p>
      </section>

      {/* SECTION 2: THE DUAL CORE - Pilar Layanan Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-28 md:mb-40">
        {/* Pilar 1: Digital Solution */}
        <motion.div
          whileHover={{ y: -10 }}
          className="group p-8 sm:p-10 rounded-[2.5rem] bg-white/4 border border-white/10 backdrop-blur-3xl hover:border-karnexa-pink/50 transition-all duration-500">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-karnexa-pink/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Globe className="text-karnexa-pink w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-tighter text-white">
            Digital Solution
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 text-base sm:text-lg">
            Kami membangun masa depan web. Fokus kami adalah pada performa
            ekstrem, keamanan data, dan pengalaman pengguna yang intuitif.
          </p>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <Code2
                className="text-karnexa-pink mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <h4 className="font-bold text-white uppercase text-sm">
                  Web & App Development
                </h4>
                <p className="text-white/40 text-xs sm:text-sm">
                  Membangun SaaS, Landing Page, dan Mobile Apps berbasis
                  ekosistem modern.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Zap className="text-karnexa-pink mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-bold text-white uppercase text-sm">
                  System Optimization
                </h4>
                <p className="text-white/40 text-xs sm:text-sm">
                  Audit performa dan migrasi sistem lama ke infrastruktur yang
                  lebih cepat.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pilar 2: Academic Expert */}
        <motion.div
          whileHover={{ y: -10 }}
          className="group p-8 sm:p-10 rounded-[2.5rem] bg-white/4 border border-white/10 backdrop-blur-3xl hover:border-karnexa-pink/50 transition-all duration-500">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-karnexa-pink/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <GraduationCap className="text-karnexa-pink w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-tighter text-white">
            Academic Expert
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 text-base sm:text-lg">
            Efisiensi akademik tanpa batas. Kami mengelola beban tugas teknis
            dan kompleksitas materi agar Anda bisa fokus pada hal yang lebih
            besar.
          </p>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <BookOpen
                className="text-karnexa-pink mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <h4 className="font-bold text-white uppercase text-sm">
                  Joki Tugas All Subject
                </h4>
                <p className="text-white/40 text-xs sm:text-sm">
                  Pengerjaan tugas akademik lintas subjek dengan jaminan
                  kualitas dan anonimitas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ShieldCheck
                className="text-karnexa-pink mt-1 flex-shrink-0"
                size={20}
              />
              <div>
                <h4 className="font-bold text-white uppercase text-sm">
                  Cepat & Aman
                </h4>
                <p className="text-white/40 text-xs sm:text-sm">
                  Standar keamanan data tinggi dan pengiriman tepat waktu adalah
                  prioritas kami.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SECTION 3: THE PROMISE - Stats */}
      <section className="mb-28 md:mb-40 py-16 sm:py-20 border-y border-white/20 backdrop-blur-md bg-white/1">
        <h2 className="text-center text-xs uppercase tracking-[0.8em] text-white mb-12 sm:mb-16">
          Karnexa Rate
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {[
            { label: "High Precision", value: "80%" },
            { label: "Fast Delivery", value: "24/7" },
            { label: "Secure Data", value: "100%" },
            { label: "Project Done", value: "10+" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 group-hover:text-karnexa-pink transition-colors tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="text-center py-16 sm:py-20 relative">
        <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-10 md:mb-12 px-4">
          Jelajahi Project Kami
        </div>
        <MagneticWrapper className="inline-block">
          <Link
            href="/projects"
            className="px-10 py-5 sm:px-6 sm:py-4 text-base sm:text-lg bg-karnexa-purple text-white hover:bg-karnexa-void hover:text-white rounded-full font-semibold tracking-wide transition-all duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95 block w-fit mx-auto">
            Eksplor Lebih Lanjut
          </Link>
        </MagneticWrapper>
      </section>
    </main>
  );
}

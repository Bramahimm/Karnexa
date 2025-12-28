"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { useUIStore } from "@/store/useUIStore";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});

export default function Hero() {
  const setNavVisible = useUIStore((state) => state.setNavVisible);
  useEffect(() => {
    const chars = gsap.utils.toArray(".char");

    const tl = gsap.timeline();

    tl.fromTo(
      chars,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "expo.out",
        duration: 1.2,
        onUpdate: function () {
          if (this.progress() >= 0.5) {
            setNavVisible(true);
          }
        },
      }
    );
  }, [setNavVisible]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D komponennya */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* cinematic overlay */}
      <div
        className="
        absolute inset-0 z-10 pointer-events-none
        bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]
      "
      />

      {/* isinya */}
      <div className="relative z-20 text-center">
        <h1 className="text-[12vw] font-black tracking-tighter leading-none uppercase drop-shadow-2xl text-white">
          {"KARNEXA".split("").map((c, i) => (
            <span key={i} className="char inline-block">
              {c}
            </span>
          ))}
        </h1>

        <p
          className="
          mt-4 text-lg md:text-2xl font-medium
          tracking-[0.5em] uppercase
          text-white
        ">
          Next Career. Real Action.
        </p>
      </div>
    </section>
  );
}

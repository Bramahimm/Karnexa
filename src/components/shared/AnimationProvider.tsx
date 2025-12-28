"use client";
import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    gsap.defaults({ ease: "power3.out", duration: 0.8 });
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1, smoothWheel: true , touchMultiplier: 1,}}>
      {children}
    </ReactLenis>
  );
}

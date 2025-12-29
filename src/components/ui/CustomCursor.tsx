// src/components/CustomCursor.tsx (atau di mana pun kamu taruh)
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Update posisi langsung tanpa animation/spring → nol delay
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 
                 -translate-x-1/2 -translate-y-1/2   /* agar center ke pointer */ rounded-full border-2 border-accent-primary pointer-events-none z-[9999] hidden md:block"
      style={{ transform: "translate(0px, 0px)" }} 
    />
  );
}

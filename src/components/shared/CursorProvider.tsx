"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

type CursorState = "default" | "active" | "text";

interface CursorContextType {
  setCursorState: (state: CursorState) => void;
}

const CursorContext = createContext<CursorContextType>({
  setCursorState: () => {},
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [state, setState] = useState<CursorState>("default");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Variasi desain kursor
  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "rgba(255, 255, 255, 1)",
      border: "0px solid rgba(255,255,255,0)",
    },
    active: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
    },
    text: {
      width: 2,
      height: 32,
      backgroundColor: "var(--color-karnexa-magenta)",
    },
  };

  return (
    <CursorContext.Provider value={{ setCursorState: setState }}>
      {children}

      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        animate={state}
        variants={variants}
        transition={{ type: "spring", stiffness: 800, damping: 25, mass: 0.4 }}
      />

      {state === "default" && (
        <motion.div
          className="fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none z-[9998] hidden md:block"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
            width: 40,
            height: 40,
          }}
          transition={{ type: "spring", stiffness: 800, damping: 20 }}
        />
      )}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);

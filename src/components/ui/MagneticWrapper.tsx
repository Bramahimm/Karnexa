"use client";

import React, { useRef } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";
import { useCursor } from "@/components/shared/CursorProvider";


export default function MagneticWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { setCursorState } = useCursor();
  const shouldReduceMotion = useReducedMotion();

  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 60) {
      x.set(distanceX * 0.25);
      y.set(distanceY * 0.25);
      setCursorState("active");
    } else {
      reset();
    }
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setCursorState("default");
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}>
      {children}
    </motion.div>
  );
}

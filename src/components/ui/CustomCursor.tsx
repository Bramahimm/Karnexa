"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-primary pointer-events-none z-[9999] hidden md:block"
      animate={{ x: mouse.x - 16, y: mouse.y - 16 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
}

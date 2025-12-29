"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import KarnexaLogo from "@public/KarnexaLogo.webp";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isNavVisible } = useUIStore();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <motion.div
        animate={{ opacity: isNavVisible || pathname !== "/" ? 1 : 0 }}
        className="pointer-events-auto flex items-center gap-5 justify-between px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
        {/* Logo */}
        <MagneticWrapper>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={KarnexaLogo}
              alt="Karnexa Logo"
              width={100}
              height={32}
              className="h-7 sm:h-8 w-auto"
              priority
            />
          </Link>
        </MagneticWrapper>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <MagneticWrapper key={item.path}>
                <Link
                  href={item.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  )}>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                  {item.label}
                </Link>
              </MagneticWrapper>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="sm:hidden text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 sm:hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-lg">
            <div className="flex flex-col divide-y divide-white/10">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.path);

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "px-6 py-4 text-sm font-medium transition",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white"
                    )}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import KarnexaLogo from "@public/KarnexaLogo.webp";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <motion.div
          animate={{ opacity: isNavVisible || pathname !== "/" ? 1 : 0 }}
          className={cn(
            "pointer-events-auto flex items-center justify-between w-full max-w-lg mx-6 px-5 py-3",
            "md:justify-center md:rounded-full md:border md:border-white/10 md:bg-white/5 md:backdrop-blur-md"
          )}>
          {/* Logo - Selalu di kiri di mobile */}
          <MagneticWrapper>
            <Link href="/" className="shrink-0 block">
              <Image
                src={KarnexaLogo}
                alt="Karnexa Logo"
                width={100}
                height={32}
                className="h-7 md:h-8 w-auto object-contain"
                priority
              />
            </Link>
          </MagneticWrapper>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
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
                        transition={{
                          type: "spring",
                          duration: 0.6,
                          bounce: 0.2,
                        }}
                      />
                    )}
                    {item.label}
                  </Link>
                </MagneticWrapper>
              );
            })}
          </div>

          {/* Mobile Burger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu">
            <MagneticWrapper>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </MagneticWrapper>
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-black/70 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-black/90 border-l border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}>
              <div className="p-8 border-b border-white/10">
                <Image
                  src={KarnexaLogo}
                  alt="Karnexa Logo"
                  width={120}
                  height={40}
                  className="h-9 w-auto object-contain"
                  priority
                />
              </div>

              <nav className="flex-1 p-8">
                {NAV_ITEMS.map((item, i) => {
                  const isActive =
                    item.path === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.path);

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}>
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block py-4 text-2xl font-medium transition-colors",
                          isActive
                            ? "text-karnexa-pink"
                            : "text-white/70 hover:text-white"
                        )}>
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

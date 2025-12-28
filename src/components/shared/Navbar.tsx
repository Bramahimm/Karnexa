"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image"; 
import KarnexaLogo from "@public/KarnexaLogo.webp";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { isNavVisible } = useUIStore();

  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
        className={cn(
          "pointer-events-auto flex items-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-white/5",
          "transition-[backdrop-filter] duration-300",
          "md:backdrop-blur-md max-md:backdrop-blur-none"
        )}>
        <Link href="/" className="flex-shrink-0 -ml-2">
          <Image
            src={KarnexaLogo}
            alt="Karnexa Logo"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-karnexa-magenta text-white">
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}

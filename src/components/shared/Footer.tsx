"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const SOCIALS = [
  { label: "Instagram", path: "https://www.instagram.com/karnexaofficial" },
  { label: "TikTok", path: "#" },
  { label: "Lynktree", path: "https://linktr.ee/officialkarnexa" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-transparent pt-20 pb-10 px-6 md:px-10 border-t border-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Identity Section */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="italic text-4xl font-black tracking-tighter uppercase mb-6">
                KARNEXA
              </h2>
              <p className="text-white/50 max-w-sm font-light leading-relaxed italic">
                Membangun ekosistem digital dengan presisi tinggi. Kami mengubah
                ambisi teknis menjadi realitas fungsional.
              </p>
            </div>

            <div className="mt-12 md:mt-0">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-4">
                Current Location
              </span>
              <p className="text-sm font-medium uppercase tracking-widest text-white/80">
                Indonesia — Remote Worldwide
              </p>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-8 font-bold">
              Sitemap
            </span>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-lg text-white/60 hover:text-karnexa-pink transition-colors duration-300 font-medium tracking-tight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end text-left md:text-right">
            <div className="w-full">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-8 font-bold">
                Connect
              </span>
              <div className="flex flex-col gap-4">
                {SOCIALS.map((social) => (
                  <MagneticWrapper key={social.label}>
                    <a
                      href={social.path}
                      className="text-lg text-white/60 hover:text-white transition-colors block">
                      {social.label}
                    </a>
                  </MagneticWrapper>
                ))}
              </div>
            </div>

            <div className="mt-12 w-full">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 block mb-4">
                Inquiries
              </span>
              <a
                href="mailto:officialkarnexa@gmail.com"
                className="text-xl font-bold hover:text-karnexa-pink transition-colors">
                officialkarnexa@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                Systems Online
              </span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
              Local Time:{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
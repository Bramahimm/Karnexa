"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/dataProjects/dataPropject";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="w-full py-32 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: Mirip contoh yang kamu kasih — lebih clean & editorial */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <p className="text-white/60 uppercase tracking-widest text-3xl md:text-4xl mb-4">
              What have we built at
            </p>
            <h2 className="text-6xl md:text-5xl font-black uppercase tracking-tighter leading-[0.85]">
              KARNEXA
            </h2>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Beberapa sistem digital berperforma tinggi yang telah kami wujudkan untuk client.
            </p>
          </div>
        </div>

        {/* GRID: Gambar tidak besar-besar, mirip contoh kamu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <MagneticWrapper key={project.id} strength={0.02} className="w-full">
              <Link href={`/projects/${project.id}`} className="group block">
                <motion.div
                  whileHover={{ scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-video overflow-hidden rounded-3xl bg-white/5 border border-white/10"
                >
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Overlay saat hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-10">
                    <div className="w-full">
                      {/* Tech stack seperti point title kecil di bawah */}
                      <p className="text-white text-xs uppercase tracking-widest mb-3 opacity-90">
                        {project.techStack.join(" • ")}
                      </p>
                      {/* Title project */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <div className="ml-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 origin-right">
                          <ArrowUpRight size={24} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info kecil di luar selalu keliatan — mirip */}
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-karnexa-pink uppercase tracking-widest">
                      CASE_0{index + 1}
                    </span>
                    <div className="h-[1px] w-12 bg-white/20 group-hover:w-20 group-hover:bg-karnexa-pink transition-all duration-500" />
                  </div>
                </motion.div>
              </Link>
            </MagneticWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
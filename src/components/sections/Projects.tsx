"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/dataProjects/dataPropject"; 
import MagneticWrapper from "@/components/ui/MagneticWrapper"; 

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {projects.map((project) => (
        <MagneticWrapper key={project.id} className="w-full">
          <Link href={`/projects/${project.id}`} scroll={true}>
            <motion.div
              whileHover={{ scale: 0.95 }}
              className="group relative aspect-video overflow-hidden rounded-2xl bg-muted">
              <motion.img
                layoutId={`img-${project.id}`}
                src={project.img}
                className="object-cover w-full h-full"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div>
                  <p className="text-accent-primary text-sm uppercase tracking-widest mb-1">
                    {project.techStack.join(" • ")}
                  </p>
                  <h3 className="text-3xl font-light text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </Link>
        </MagneticWrapper>
      ))}
    </div>
  );
}

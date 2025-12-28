"use client";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { getProjectBySlug } from "@/data/dataProjects/dataPropject";
import { notFound } from "next/navigation";

export default function ProjectDetail() {
  const params = useParams();
  const project = getProjectBySlug(params.slug as string);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full aspect-video overflow-hidden rounded-3xl mb-20 shadow-2xl">
          <motion.img
            layoutId={`img-${project.id}`}
            src={project.img}
            alt={project.title}
            className="object-cover w-full h-full"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12 pb-20">
          <div className="md:col-span-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-12"
            >
              {project.description}
            </motion.p>

            {project.url && (
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-karnexa-purple/20 border border-karnexa-purple/50 rounded-full text-white hover:bg-karnexa-purple/30 transition-all"
              >
                Visit Live Site <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
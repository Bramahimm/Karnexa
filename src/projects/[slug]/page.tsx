"use client";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const getProject = (slug: string) => ({
  id: slug,
  title: "HEOC-ProAceh",
  img: "/projectsImages/heocProject.webp",
  description: "Detailed case study content goes here",
});

export default function ProjectDetail() {
  const params = useParams();
  const project = getProject(params.slug as string);

  return (
    <div className="min-h-screen bg-background pt-32 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[21/9] overflow-hidden rounded-3xl mb-20">
          <motion.img
            layoutId={`img-${project.id}`}
            src={project.img}
            className="object-cover w-full h-full"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          <h1 className="text-6xl font-bold mb-8 uppercase tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

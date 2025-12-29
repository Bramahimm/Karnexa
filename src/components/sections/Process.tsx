"use client";
import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Discovery & Strategy",
    desc: "Analisis mendalam terhadap kebutuhan sistem atau parameter akademik Anda.",
  },
  {
    no: "02",
    title: "Technical Engineering",
    desc: "Proses pembangunan infrastruktur kode atau pengerjaan teknis lintas subjek.",
  },
  {
    no: "03",
    title: "Quality Assurance",
    desc: "Pengujian performa ekstrem dan akurasi sebelum produk atau hasil dikirimkan.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-40 px-6 md:px-10 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-1/3 md:sticky md:top-40 h-fit">
          <span className="text-karnexa-pink text-xs uppercase tracking-[0.5em] font-bold">
            Pelajari
          </span>
          <h2 className="text-5xl font-black uppercase tracking-tighter mt-6 leading-none">
            Cara karnexa
            <br /> <span className="text-white/20">Bekerja.</span>
          </h2>
          <p className="mt-8 text-white/50 font-light leading-relaxed">
            Cepat tanpa kompromi. Kami bangun sistem digital yang kuat, performa
            tinggi, dan langsung siap pakai untuk bisnis Anda.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="md:w-2/3 space-y-px bg-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-karnexa-void py-12 px-8 flex flex-col md:flex-row gap-10 hover:bg-white/[0.02] transition-colors group">
              <span className="text-5xl font-black text-white/10 group-hover:text-karnexa-pink transition-colors font-mono">
                {step.no}
              </span>
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

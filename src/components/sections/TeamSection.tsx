"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { dataTeam } from "@/data/dataTeam/dataTeam";

export default function TeamSection() {
  return (
    <section className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 uppercase tracking-tighter"
        >
          Meet Our <span className="italic">Team</span>
        </motion.h2>

        {/* MOBILE & TABLET KECIL → 1 KOLOM */}
        <div className="grid gap-12 md:hidden">
          {dataTeam.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* DESKTOP → 3 + 2 CENTERED */}
        <div className="hidden md:grid md:grid-cols-3 gap-12">
          {/* Baris atas */}
          {dataTeam.slice(0, 3).map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}

          {/* Baris bawah */}
          <div className="col-span-3 flex justify-center gap-12">
            {dataTeam.slice(3, 5).map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                index={i + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group text-center w-full max-w-sm mx-auto"
    >
      <div className="relative overflow-hidden rounded-3xl mb-8 aspect-square">
        <Image
          src={member.photo}
          alt={member.name}
          width={400}
          height={400}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <h4 className="text-2xl font-semibold mb-2">{member.name}</h4>
      <p className="text-white/60 mb-6">{member.role}</p>

      <div className="flex justify-center gap-6">
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors"
        >
          <SiGithub className="w-6 h-6" />
        </a>
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-karnexa-magenta transition-colors"
        >
          <SiInstagram className="w-6 h-6" />
        </a>
      </div>
    </motion.div>
  );
}

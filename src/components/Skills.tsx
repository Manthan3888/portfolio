"use client";

import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaLayerGroup,
  FaBolt,
  FaDatabase,
  FaCloud,
  FaCartShopping,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { skillCategories } from "@/data/portfolio";
import { getLinkedSkills } from "@/lib/skillConnections";
import Reveal, { staggerContainer, staggerItem } from "./ui/Reveal";
import SkillLinkedTag from "./skills/SkillLinkedTag";
import SkillConnectionRail from "./skills/SkillConnectionRail";
import { SkillGraphProvider, useSkillGraph } from "./skills/SkillGraphContext";

const iconMap: Record<string, React.ReactNode> = {
  brain: <FaBrain />,
  stack: <FaLayerGroup />,
  bolt: <FaBolt />,
  database: <FaDatabase />,
  cloud: <FaCloud />,
  cart: <FaCartShopping />,
};

function SkillCard({ cat, index }: { cat: (typeof skillCategories)[number]; index: number }) {
  const { activeSkill } = useSkillGraph();
  const linked = activeSkill ? getLinkedSkills(activeSkill) : [];
  const isHot = Boolean(
    activeSkill &&
      (cat.skills.includes(activeSkill) || cat.skills.some((skill) => linked.includes(skill))),
  );
  const isCold = Boolean(activeSkill) && !isHot;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      variants={staggerItem}
      onMouseMove={onMove}
      data-hover
      className={`card-sheen skill-graph-card group relative h-full rounded-2xl border bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-7 transition-all duration-400 ${
        isHot
          ? "border-accent/35 shadow-[0_24px_60px_-28px_rgba(255,106,43,0.45)] z-[11]"
          : isCold
            ? "border-white/[0.05] opacity-[0.58] saturate-[0.85]"
            : "border-white/[0.08] hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_30px_70px_-25px_rgba(255,106,43,0.45)]"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/25 text-xl text-accent transition-transform duration-500 group-hover:rotate-[15deg] group-hover:scale-110">
          {iconMap[cat.icon]}
        </span>
        <span className="font-code text-xs text-fog/60 group-hover:text-accent transition-opacity group-hover:opacity-0">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-bold text-white group-hover:text-gradient transition-colors">
        {cat.title}
      </h3>
      <p className="mt-1.5 text-[13px] text-fog leading-relaxed">{cat.blurb}</p>

      <div className="relative z-[14] mt-5 flex flex-wrap gap-2">
        {cat.skills.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.035, duration: 0.35 }}
          >
            <SkillLinkedTag skill={s} />
          </motion.div>
        ))}
      </div>

      <FaArrowUpRightFromSquare className="absolute top-6 right-6 h-4 w-4 text-transparent transition-all duration-300 group-hover:text-accent/70 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100" />
    </motion.div>
  );
}

function SkillsContent() {
  const { mapRootRef, setActiveSkill, activeSkill } = useSkillGraph();

  return (
    <section id="skills" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-grid bg-grid-mask-full opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-code text-sm text-accent">02</span>
            <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
            <span className="eyebrow">Core technical stack</span>
          </div>
        </Reveal>
        <div className="mt-5 flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white max-w-2xl">
              A full-stack toolkit, <span className="text-gradient">AI-native by default</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-fog max-w-sm text-sm leading-relaxed">
              From prompt engineering and vector retrieval to SSR frontends and cloud deploys: one engineer across the entire pipeline.
            </p>
          </Reveal>
        </div>

        <div
          ref={mapRootRef}
          className={activeSkill ? "skill-map-active relative overflow-x-clip" : "relative overflow-x-clip"}
          onMouseLeave={(event) => {
            const next = event.relatedTarget;
            if (next instanceof Node && mapRootRef.current?.contains(next)) return;
            setActiveSkill(null);
          }}
        >
          <Reveal delay={0.1}>
            <SkillConnectionRail />
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {skillCategories.map((cat, i) => (
              <SkillCard key={cat.title} cat={cat} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  return (
    <SkillGraphProvider>
      <SkillsContent />
    </SkillGraphProvider>
  );
}

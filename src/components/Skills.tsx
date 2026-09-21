"use client";

import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { getSkillPopoverBrief } from "@/lib/skillRelationCopy";
import Reveal, { staggerContainer, staggerItem } from "./ui/Reveal";
import SkillPopoverTag from "./skills/SkillPopoverTag";
import { SkillStackProvider, useSkillStack } from "./skills/SkillStackContext";

const STACK_SHORT_LABEL: Record<string, string> = {
  "AI / ML & Generative AI": "AI & agents",
  "Full-Stack Development": "Languages & frameworks",
  "Automation & Workflow": "Automation & ops",
  Databases: "Data & messaging",
  "Cloud, DevOps & Tools": "Platform & services",
  "CMS / E-commerce": "CMS & commerce",
};

function StackHoverDetail() {
  const { activeSkill } = useSkillStack();

  return (
    <div className="mt-5 min-h-[7.5rem] sm:mt-6">
      <AnimatePresence mode="wait">
        {activeSkill ? (
          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-white/12 bg-white/[0.03] p-4 backdrop-blur-sm"
          >
            {(() => {
              const detail = getSkillPopoverBrief(activeSkill);
              return (
                <>
                  <p className="font-code text-[10px] uppercase tracking-[0.16em] text-accent">Works with</p>
                  <p className="mt-1 font-display text-lg font-bold leading-snug text-white">{detail.skill}</p>
                  <p className="mt-2 text-xs font-medium leading-snug text-slate-300">{detail.relatedLabel}</p>
                  <p className="mt-2 text-sm leading-relaxed text-fog">{detail.summary}</p>
                </>
              );
            })()}
          </motion.div>
        ) : (
          <motion.p
            key="hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm leading-relaxed text-fog"
          >
            Hover a skill for a short note on what it pairs with and how it ships in production.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function SkillBand({ cat, index }: { cat: (typeof skillCategories)[number]; index: number }) {
  const label = STACK_SHORT_LABEL[cat.title] ?? cat.title;

  return (
    <motion.article
      variants={staggerItem}
      className="border-t border-white/[0.08] py-7 sm:py-9 md:py-10"
    >
      <div className="grid gap-4 sm:grid-cols-[minmax(0,11.5rem)_1fr] sm:gap-6 md:grid-cols-[minmax(0,13.5rem)_1fr] md:gap-10 lg:grid-cols-[minmax(0,15rem)_1fr]">
        <header className="min-w-0">
          <p className="font-code text-[11px] font-medium tracking-[0.24em] text-accent uppercase">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-display text-[0.95rem] font-bold uppercase leading-snug tracking-[0.12em] text-white sm:text-base md:text-lg">
            {label}
          </h3>
          <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-fog sm:text-[13px]">{cat.blurb}</p>
        </header>

        <div className="relative flex min-w-0 flex-wrap content-start gap-2 sm:gap-2.5">
          {cat.skills.map((s) => (
            <SkillPopoverTag key={s} skill={s} variant="stack" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function SkillsContent() {
  const { setActiveSkill } = useSkillStack();
  const skillCount = useMemo(
    () => new Set(skillCategories.flatMap((c) => c.skills)).size,
    [],
  );

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 md:py-32 scroll-mt-24"
      onMouseLeave={() => setActiveSkill(null)}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-mask-full opacity-35" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div className="lg:sticky lg:top-28 lg:pb-8">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-code text-sm text-accent">02</span>
                <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                <span className="eyebrow">Core technical stack</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:mt-9 sm:gap-x-4">
                <h2 className="font-display text-[clamp(2.75rem,10vw,6.25rem)] font-bold uppercase leading-none tracking-tight text-white">
                  STACK
                </h2>
                <span className="font-display text-2xl font-bold tabular-nums leading-none text-accent sm:text-3xl md:text-4xl">
                  {skillCount}
                </span>
              </div>
            </Reveal>

            <StackHoverDetail />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 border-b border-white/[0.08] lg:mt-0"
          >
            {skillCategories.map((cat, i) => (
              <SkillBand key={cat.title} cat={cat} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Skills() {
  return (
    <SkillStackProvider>
      <SkillsContent />
    </SkillStackProvider>
  );
}

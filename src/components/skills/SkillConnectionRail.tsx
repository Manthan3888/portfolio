"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { getLinkedSkills } from "@/lib/skillConnections";
import { useSkillGraph } from "./SkillGraphContext";

export default function SkillConnectionRail() {
  const { activeSkill, setActiveSkill } = useSkillGraph();
  const linked = activeSkill ? getLinkedSkills(activeSkill) : [];

  return (
    <div className="mb-6 min-h-[3.25rem] rounded-2xl border border-white/[0.09] bg-gradient-to-r from-white/[0.04] to-white/[0.02] px-4 py-3 sm:px-5 sm:py-3.5">
      <AnimatePresence mode="wait">
        {activeSkill ? (
          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3"
          >
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-code text-[10px] uppercase tracking-[0.16em] text-accent">Pairs with</span>
              <span className="tag skill-graph-active !transform-none !cursor-default">{activeSkill}</span>
            </div>

            <FaArrowRight className="hidden sm:block text-[10px] text-fog/70 shrink-0" />

            <div className="flex min-w-0 flex-1 flex-wrap gap-1.5">
              {linked.length > 0 ? (
                linked.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onMouseEnter={() => setActiveSkill(skill)}
                    onFocus={() => setActiveSkill(skill)}
                    onClick={() => setActiveSkill(skill)}
                    className="tag skill-graph-linked skill-graph-rail-chip"
                  >
                    {skill}
                  </button>
                ))
              ) : (
                <span className="text-xs text-fog leading-relaxed">
                  Core skill in this stack. Hover another pill to explore paths.
                </span>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-fog italic leading-relaxed"
          >
            Hover any skill pill below to see what it connects with across your stack.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

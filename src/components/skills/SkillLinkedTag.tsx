"use client";

import { motion } from "framer-motion";
import { getLinkedSkills } from "@/lib/skillConnections";
import { useSkillGraph } from "./SkillGraphContext";

type SkillLinkedTagProps = {
  skill: string;
};

export default function SkillLinkedTag({ skill }: SkillLinkedTagProps) {
  const { activeSkill, setActiveSkill } = useSkillGraph();

  const isActive = activeSkill === skill;
  const isLinked = activeSkill ? getLinkedSkills(activeSkill).includes(skill) : false;
  const isIdle = Boolean(activeSkill) && !isActive && !isLinked;
  const isMapMode = Boolean(activeSkill);

  return (
    <motion.button
      type="button"
      layout
      onMouseEnter={() => setActiveSkill(skill)}
      onFocus={() => setActiveSkill(skill)}
      onClick={() => setActiveSkill(isActive ? null : skill)}
      whileHover={!isIdle ? { y: -2 } : undefined}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`tag skill-graph-tag ${isActive ? "skill-graph-active" : ""} ${
        isLinked ? "skill-graph-linked" : ""
      } ${isIdle ? "skill-graph-idle" : ""} ${isMapMode ? "skill-graph-map-mode" : ""}`}
    >
      {isLinked && !isActive ? <span className="skill-graph-link-dot" aria-hidden /> : null}
      {skill}
    </motion.button>
  );
}

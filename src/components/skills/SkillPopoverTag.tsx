"use client";

import { useRef } from "react";
import { useSkillStack } from "./SkillStackContext";

type SkillPopoverTagProps = {
  skill: string;
  variant?: "default" | "stack";
};

export default function SkillPopoverTag({ skill, variant = "default" }: SkillPopoverTagProps) {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { activeSkill, setActiveSkill } = useSkillStack();
  const isActive = variant === "stack" && activeSkill === skill;

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const activate = () => {
    if (variant !== "stack") return;
    clearCloseTimer();
    setActiveSkill(skill);
  };

  const pillClass =
    variant === "stack"
      ? `stack-pill tag transition-colors ${
          isActive
            ? "border-accent/55 bg-accent/12 text-white shadow-[0_0_0_1px_rgba(255,106,43,0.35)]"
            : "hover:border-white/22 hover:bg-white/[0.06] hover:text-white"
        }`
      : "tag transition-colors hover:border-accent/45 hover:text-accent";

  return (
    <div
      className="relative inline-block max-w-full"
      onMouseEnter={variant === "stack" ? activate : undefined}
      onFocus={variant === "stack" ? activate : undefined}
    >
      <button
        type="button"
        aria-pressed={isActive}
        onClick={() => {
          if (variant !== "stack") return;
          setActiveSkill(isActive ? null : skill);
        }}
        className={pillClass}
      >
        {skill}
      </button>
    </div>
  );
}

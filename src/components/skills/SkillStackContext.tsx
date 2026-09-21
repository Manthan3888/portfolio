"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type SkillStackContextValue = {
  activeSkill: string | null;
  setActiveSkill: (skill: string | null) => void;
};

const SkillStackContext = createContext<SkillStackContextValue | null>(null);

export function SkillStackProvider({ children }: { children: ReactNode }) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const value = useMemo(() => ({ activeSkill, setActiveSkill }), [activeSkill]);
  return <SkillStackContext.Provider value={value}>{children}</SkillStackContext.Provider>;
}

export function useSkillStack() {
  const ctx = useContext(SkillStackContext);
  if (!ctx) throw new Error("useSkillStack must be used within SkillStackProvider");
  return ctx;
}

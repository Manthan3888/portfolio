"use client";

import { createContext, useContext, useMemo, useRef, useState, type ReactNode } from "react";

type SkillGraphContextValue = {
  activeSkill: string | null;
  setActiveSkill: (skill: string | null) => void;
  mapRootRef: React.RefObject<HTMLDivElement | null>;
};

const SkillGraphContext = createContext<SkillGraphContextValue | null>(null);

export function SkillGraphProvider({ children }: { children: ReactNode }) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const mapRootRef = useRef<HTMLDivElement | null>(null);

  const value = useMemo(
    () => ({
      activeSkill,
      setActiveSkill,
      mapRootRef,
    }),
    [activeSkill],
  );

  return <SkillGraphContext.Provider value={value}>{children}</SkillGraphContext.Provider>;
}

export function useSkillGraph() {
  const ctx = useContext(SkillGraphContext);
  if (!ctx) throw new Error("useSkillGraph must be used within SkillGraphProvider");
  return ctx;
}

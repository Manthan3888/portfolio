"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <div className={`mb-14 md:mb-16 ${centered ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="font-code text-sm text-accent">{index}</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
          <span className="eyebrow" style={centered ? { paddingLeft: 0 } : undefined}>
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-fog">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

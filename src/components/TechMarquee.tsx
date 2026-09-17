"use client";

import { marqueeTech } from "@/data/portfolio";

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex w-max">
      <div className={`flex items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {marqueeTech.map((tech, i) => (
              <span key={`${dup}-${i}`} className="mx-3 flex items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-code text-sm text-slate-300 transition-colors hover:border-accent/60 hover:text-accent whitespace-nowrap">
                  {tech}
                </span>
                <span className="text-accent/70 text-xs">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="relative border-y border-white/[0.06] bg-ink-900/60 py-8 overflow-hidden marquee-pause">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10"
        style={{ background: "linear-gradient(90deg, #04060d, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10"
        style={{ background: "linear-gradient(270deg, #04060d, transparent)" }}
      />
      <div className="flex flex-col gap-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}

"use client";

import { stats } from "@/data/portfolio";
import Counter from "./ui/Counter";
import Reveal from "./ui/Reveal";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Stats() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-border p-8 sm:p-12">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ice/10 blur-[90px]" />

            <div className="relative mb-10 flex min-w-0 flex-wrap items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 border border-accent/30 text-accent">
                <FaArrowTrendUp />
              </span>
              <div>
                <p className="font-display text-lg font-semibold leading-snug text-white text-balance">Measurable business impact</p>
                <p className="font-code text-xs text-fog mt-1.5">// results shipped to production, not demos</p>
              </div>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div
                    className={`group relative min-w-0 ${
                      i % 2 === 1 ? "sm:border-l sm:border-white/10 sm:pl-6" : ""
                    } ${i !== 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""}`}
                  >
                    <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                      <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-200 leading-snug">{s.label}</p>
                    <p className="text-xs text-fog mt-1">{s.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

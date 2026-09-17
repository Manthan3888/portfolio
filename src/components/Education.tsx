"use client";

import { FaGraduationCap, FaAward, FaCalendarDays } from "react-icons/fa6";
import { education, certifications } from "@/data/portfolio";
import Reveal, { staggerContainer, staggerItem } from "./ui/Reveal";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-code text-sm text-accent">06</span>
            <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
            <span className="eyebrow">Education & credentials</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 mb-14 font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white max-w-2xl">
            Academic foundation & <span className="text-gradient">certifications</span>.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          {/* education */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-5"
          >
            {education.map((ed) => (
              <motion.div
                key={ed.school}
                variants={staggerItem}
                data-hover
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-ice/40 hover:shadow-[0_26px_60px_-28px_rgba(57,224,255,0.45)]"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ice/10 border border-ice/25 text-xl text-ice transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <FaGraduationCap />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-between">
                      <h3 className="font-display text-lg font-bold text-white">{ed.degree}</h3>
                      <span className="inline-flex items-center gap-1.5 font-code text-[11px] text-fog">
                        <FaCalendarDays className="text-[10px]" />
                        {ed.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-ice">{ed.school}</p>
                    <p className="mt-0.5 text-xs text-fog">{ed.field}</p>
                    <span className="mt-3 inline-flex rounded-full bg-mint/10 border border-mint/25 px-3 py-1 text-[11px] font-semibold text-mint">
                      {ed.grade}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* certifications */}
          <Reveal delay={0.12} y={40}>
            <div className="h-full rounded-2xl gradient-border p-7 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 border border-accent/25 text-accent">
                  <FaAward />
                </span>
                <h3 className="font-display text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.55 }}
                    data-hover
                    className="group flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.05]"
                  >
                    <span className="font-code text-xs text-accent/80 pt-0.5">0{i + 1}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-100 group-hover:text-accent transition-colors">
                        {c.title}
                      </p>
                      <p className="text-xs text-fog mt-0.5">{c.issuer}</p>
                      <p className="font-code text-[10px] text-slate-400 mt-1">{c.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-5 text-center">
                <p className="text-sm text-slate-300">
                  Continuously learning — currently deepening <span className="text-accent font-medium">multi-agent systems</span> &
                  production LLM ops.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

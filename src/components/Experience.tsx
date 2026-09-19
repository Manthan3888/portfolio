"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaBriefcase, FaLocationDot, FaHouseLaptop, FaBuilding } from "react-icons/fa6";
import { experience } from "@/data/portfolio";
import Reveal from "./ui/Reveal";

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-code text-sm text-accent">05</span>
                <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                <span className="eyebrow">Career trace</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white max-w-2xl">
                From full-stack features to <span className="text-gradient">autonomous AI systems</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <div className="rounded-2xl glass px-5 py-4">
              <p className="font-display text-2xl font-bold text-gradient">Full Stack → AI/ML</p>
              <p className="text-xs text-fog mt-1">Shipping across the entire pipeline</p>
            </div>
          </Reveal>
        </div>

        <div ref={lineRef} className="relative max-w-4xl">
          {/* track */}
          <div className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px bg-white/10" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[19px] sm:left-[27px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-accent to-ice shadow-[0_0_12px_rgba(255,106,43,0.8)]"
          />

          <div className="space-y-10 md:space-y-14">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${i}`} y={40} delay={i * 0.05}>
                <div className="relative pl-14 sm:pl-20">
                  {/* node */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.2 }}
                    className={`absolute left-0 top-1 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border ${
                      job.current
                        ? "border-accent/50 bg-accent/15 text-accent shadow-[0_0_28px_-6px_rgba(255,106,43,0.7)]"
                        : "border-white/15 bg-ink-700 text-slate-300"
                    }`}
                  >
                    <FaBriefcase className="text-sm sm:text-lg" />
                    {job.current && (
                      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-mint border-2 border-ink-950 animate-pulse-dot" />
                    )}
                  </motion.span>

                  <div
                    data-hover
                    className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-8 transition-all duration-500 hover:border-accent/35 hover:shadow-[0_26px_60px_-28px_rgba(255,106,43,0.5)] hover:-translate-y-1"
                  >
                    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                          {job.role}
                        </h3>
                        <p className="mt-1 flex items-center gap-2 text-accent font-semibold">
                          <FaBuilding className="text-xs" />
                          {job.company}
                        </p>
                      </div>
                      <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 font-code text-[11px] sm:text-xs text-accent whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-fog">
                      <span className="flex items-center gap-1.5">
                        <FaLocationDot /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaHouseLaptop /> {job.mode}
                      </span>
                      {job.current && (
                        <span className="flex items-center gap-1.5 text-mint">
                          <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Current role
                        </span>
                      )}
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {job.bullets.map((b, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -14 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.25 + j * 0.09, duration: 0.5 }}
                          className="relative pl-5 text-[13.5px] sm:text-sm leading-relaxed text-slate-300 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-sm before:bg-accent before:rotate-45"
                        >
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

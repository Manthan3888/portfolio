"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaArrowRight, FaGithub, FaRegCircleCheck } from "react-icons/fa6";
import { projects, profile } from "@/data/portfolio";
import Reveal from "./ui/Reveal";
import ProjectVisual from "./ProjectVisual";

function ProjectRow({ project, flip }: { project: (typeof projects)[number]; flip: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 140, damping: 18 });
  const sry = useSpring(ry, { stiffness: 140, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sry, [-0.5, 0.5], [-6, 6]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px);
    rx.set(py);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      {/* visual */}
      <Reveal
        className={flip ? "lg:order-2" : ""}
        y={48}
        duration={0.9}
      >
        <motion.div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1100 }}
          className="will-change-transform"
        >
          <ProjectVisual project={project} />
        </motion.div>
      </Reveal>

      {/* content */}
      <Reveal delay={0.12} y={40} className={flip ? "lg:order-1" : ""}>
        <div data-hover className="group">
          <div className="flex items-center gap-3">
            <span className="font-code text-sm" style={{ color: project.accent }}>
              {project.index}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-code text-[10px] uppercase tracking-[0.16em] text-fog">
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white">
            {project.name}
            <span className="block text-base sm:text-lg font-medium text-fog mt-1.5 font-body">
              {project.tagline}
            </span>
          </h3>

          <ul className="mt-5 space-y-3">
            {project.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex gap-3 text-[14px] leading-relaxed text-slate-300"
              >
                <FaRegCircleCheck className="mt-1 shrink-0 text-[13px]" style={{ color: project.accent }} />
                {b}
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent"
            >
              <span className="border-b border-white/20 group-hover:border-accent pb-0.5">
                Discuss a build like this
              </span>
              <FaArrowRight className="text-[11px] transition-transform group-hover:translate-x-1.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fog transition-colors hover:text-white"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute top-40 left-1/2 -translate-x-1/2 h-96 w-[60rem] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-code text-sm text-accent">04</span>
                <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                <span className="eyebrow">Selected systems · In production</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white max-w-2xl">
                Projects that do <span className="text-gradient">real work for real businesses</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost whitespace-nowrap">
              <FaGithub /> Follow on GitHub
            </a>
          </Reveal>
        </div>

        <div className="space-y-20 md:space-y-28">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

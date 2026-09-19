"use client";

import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaComments,
  FaDisplay,
  FaChartLine,
  FaMobileScreenButton,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa6";
import { services, profile } from "@/data/portfolio";
import Reveal, { staggerContainer, staggerItem } from "./ui/Reveal";

const iconMap: Record<string, React.ReactNode> = {
  robot: <FaRobot />,
  chat: <FaComments />,
  browser: <FaDisplay />,
  chart: <FaChartLine />,
  phone: <FaMobileScreenButton />,
  cloud: <FaCloud />,
};

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.a
      variants={staggerItem}
      href={`mailto:${profile.email}?subject=${encodeURIComponent(s.subject)}`}
      onMouseMove={onMove}
      data-hover
      className="card-sheen group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_28px_70px_-28px_rgba(255,106,43,0.5)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-code text-sm text-fog/70 group-hover:text-accent transition-colors">
          {s.index}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-700/80 text-lg text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:-rotate-12">
          {iconMap[s.icon]}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-fog flex-1">{s.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {s.points.map((p) => (
          <span key={p} className="rounded-md bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 font-code text-[11px] text-slate-300">
            {p}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        Start a project
        <FaArrowRight className="text-[11px] transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </motion.a>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-code text-sm text-accent">03</span>
                <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                <span className="eyebrow">What I build</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.08] tracking-tight text-white max-w-2xl">
                Services engineered to <span className="text-gradient">ship outcomes</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="text-fog max-w-sm text-sm leading-relaxed">
              Six ways I can plug into your team, from the first scope conversation to production monitoring.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <ServiceCard key={s.index} s={s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaCircleCheck,
  FaCode,
  FaBrain,
  FaRobot,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa6";
import { profile, achievements } from "@/data/portfolio";
import Reveal from "./ui/Reveal";
import { openCalendly } from "@/lib/calendly";

const pillars = [
  { icon: <FaBrain />, label: "Agentic AI · RAG · LLMs" },
  { icon: <FaCode />, label: "Next.js · FastAPI · TypeScript" },
  { icon: <FaRobot />, label: "Automation · Voice AI · n8n" },
  { icon: <FaCloud />, label: "AWS · Vercel · CI/CD" },
];

const facts = [
  { icon: <FaLocationDot />, label: "Location", value: profile.location },
  { icon: <FaEnvelope />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FaPhone />, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
          {/* text */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="font-code text-sm text-accent">01</span>
                <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                <span className="eyebrow">About me</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-[2.65rem] font-bold leading-[1.12] tracking-tight text-white">
                I turn raw AI capability into{" "}
                <span className="text-gradient">shipped, measurable products</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-fog leading-[1.85]">{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 text-fog leading-[1.85]">{profile.summary2}</p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    data-hover
                    className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-sm text-slate-200 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.06] hover:-translate-y-0.5"
                  >
                    <span className="text-accent">{p.icon}</span>
                    {p.label}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-9 flex flex-wrap gap-4">
                <button onClick={openCalendly} className="btn-primary">
                  Work with me
                  <FaArrowRight className="text-xs" />
                </button>
                <a href="#work" className="btn-ghost">
                  See selected projects
                </a>
              </div>
            </Reveal>
          </div>

          {/* card stack */}
          <div className="relative">
            <Reveal delay={0.15} y={48}>
              <div className="relative rounded-3xl gradient-border p-7 sm:p-9">
                <div className="absolute -top-5 left-8 rounded-full bg-gradient-to-r from-accent to-[#c2410c] px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                  Currently shipping
                </div>

                <div className="flex items-center gap-5">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 font-display text-2xl font-bold text-gradient"
                  >
                    MR
                  </motion.div>
                  <div>
                    <p className="font-display text-xl font-bold text-white">Full Stack Developer</p>
                    <p className="text-sm text-accent font-medium">Staycold Solution · Onsite</p>
                    <p className="text-xs text-fog mt-0.5">Surat, Gujarat, India</p>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {facts.map((f) => {
                    const inner = (
                      <div
                        data-hover
                        className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.05] group"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-700 text-accent text-sm">
                          {f.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase tracking-[0.18em] text-fog">{f.label}</p>
                          <p className="text-sm text-slate-100 font-medium truncate group-hover:text-accent transition-colors">
                            {f.value}
                          </p>
                        </div>
                      </div>
                    );
                    return f.href ? (
                      <a key={f.label} href={f.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      <div key={f.label}>{inner}</div>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-xl border border-mint/20 bg-mint/[0.06] p-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-mint mb-2">Key achievements</p>
                  <ul className="space-y-2">
                    {achievements.map((a) => (
                      <li key={a} className="flex gap-2.5 text-[13px] leading-relaxed text-slate-200">
                        <FaCircleCheck className="mt-0.5 shrink-0 text-mint" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <motion.div
              aria-hidden
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 sm:-right-8 rounded-2xl glass px-5 py-4 shadow-2xl"
            >
              <p className="font-display text-2xl font-bold text-gradient-cool">80%</p>
              <p className="text-[11px] text-fog max-w-[140px]">less manual order processing</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

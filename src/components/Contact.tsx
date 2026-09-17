"use client";

import { motion } from "framer-motion";
import {
  FaRegCalendarCheck,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa6";
import { profile } from "@/data/portfolio";
import Reveal from "./ui/Reveal";
import { openCalendly } from "@/lib/calendly";

const contactRows = [
  { icon: <FaEnvelope />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FaPhone />, label: "Phone / WhatsApp", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: <FaLocationDot />, label: "Based in", value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] gradient-border px-6 py-14 sm:p-14 lg:p-20">
            {/* animated backdrop */}
            <div className="absolute inset-0 bg-grid opacity-40" />
            <motion.div
              className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-accent/25 blur-[100px]"
              animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-ice/15 blur-[100px]"
              animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
              transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-code text-sm text-accent">07</span>
                  <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                  <span className="eyebrow">Get in touch</span>
                </div>

                <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.04] tracking-tight text-white">
                  Have an idea worth{" "}
                  <span className="text-gradient">automating</span>?
                </h2>
                <p className="mt-5 max-w-xl text-fog leading-relaxed">
                  Book a free 30-minute call and let&apos;s map the smallest version that proves your AI or
                  full-stack idea works — then ship that. No fluff, no jargon.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <motion.button
                    onClick={openCalendly}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary !px-7 !py-4 !text-base"
                  >
                    <FaRegCalendarCheck />
                    Schedule on Calendly
                    <FaArrowRight className="text-xs" />
                  </motion.button>
                  <a href={`mailto:${profile.email}`} className="btn-ghost !px-7 !py-4 !text-base">
                    <FaPaperPlane className="text-xs" />
                    Email me directly
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                    <FaGithub className="text-lg" />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                    <FaLinkedinIn />
                  </a>
                  <button onClick={openCalendly} aria-label="Book a meeting" className="icon-btn">
                    <FaRegCalendarCheck />
                  </button>
                  <span className="ml-2 inline-flex items-center gap-2 text-xs text-mint">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-mint animate-pulse-dot" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                    </span>
                    Usually replies within a few hours
                  </span>
                </div>
              </div>

              {/* contact card */}
              <Reveal delay={0.15} y={40}>
                <div className="rounded-2xl glass p-7 sm:p-8">
                  <p className="font-code text-xs uppercase tracking-[0.2em] text-fog mb-6">
                    // contact details
                  </p>
                  <div className="space-y-4">
                    {contactRows.map((r) => {
                      const inner = (
                        <div
                          data-hover
                          className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all duration-300 hover:border-accent/45 hover:bg-accent/[0.06] hover:-translate-y-0.5"
                        >
                          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/12 border border-accent/25 text-accent">
                            {r.icon}
                          </span>
                          <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-fog">{r.label}</p>
                            <p className="text-sm font-medium text-slate-100 truncate group-hover:text-accent transition-colors">
                              {r.value}
                            </p>
                          </div>
                        </div>
                      );
                      return r.href ? (
                        <a key={r.label} href={r.href} className="block" target={r.label === "Email" || r.label.startsWith("Phone") ? undefined : "_blank"} rel="noopener noreferrer">
                          {inner}
                        </a>
                      ) : (
                        <div key={r.label}>{inner}</div>
                      );
                    })}
                  </div>

                  <div className="mt-6 rounded-xl border border-mint/20 bg-mint/[0.06] p-4">
            <p className="text-sm font-semibold text-mint">Free 30-minute discovery call</p>
                    <p className="text-xs text-fog mt-1 leading-relaxed">
                      Scope, feasibility and an honest estimate — pick a slot on my Calendly.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

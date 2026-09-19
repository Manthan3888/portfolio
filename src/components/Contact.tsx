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
import ContactForm from "./ContactForm";
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

            <div className="relative grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-14 items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-code text-sm text-accent">07</span>
                  <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
                  <span className="eyebrow">Get in touch</span>
                </div>

                <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.04] tracking-tight text-white">
                  Have an idea worth <span className="text-gradient">automating</span>?
                </h2>
                <p className="mt-5 max-w-xl text-fog leading-relaxed">
                  Book a free 30-minute call and let&apos;s map the smallest version that proves your AI or
                  full-stack idea works, then ship that. No fluff, no jargon.
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

                <div className="mt-10 space-y-3 lg:max-w-md">
                  {contactRows.map((r) =>
                    r.href ? (
                      <a
                        key={r.label}
                        href={r.href}
                        className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-accent"
                      >
                        <span className="text-accent">{r.icon}</span>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-fog w-24 shrink-0">{r.label}</span>
                        <span className="truncate">{r.value}</span>
                      </a>
                    ) : (
                      <div key={r.label} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="text-accent">{r.icon}</span>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-fog w-24 shrink-0">{r.label}</span>
                        <span>{r.value}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <Reveal delay={0.12} y={36}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp, FaRegCalendarCheck, FaHeart } from "react-icons/fa6";
import { navLinks, profile } from "@/data/portfolio";
import { openCalendly } from "@/lib/calendly";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-ink-900/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#c2410c] font-display text-sm font-bold text-white shadow-[0_8px_22px_-8px_rgba(255,106,43,0.8)]">
                MR
              </span>
              <span className="leading-tight">
                <span className="block font-display font-semibold text-white text-base">Manthan Rajani</span>
                <span className="block font-code text-[10px] tracking-[0.22em] uppercase text-fog">
                  AI Full Stack Engineer
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog">
              {profile.tagline} Based in {profile.location}, working with teams worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn !w-10 !h-10">
                <FaGithub className="text-base" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn !w-10 !h-10">
                <FaLinkedinIn className="text-sm" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn !w-10 !h-10">
                <FaEnvelope className="text-sm" />
              </a>
              <button onClick={openCalendly} aria-label="Book a call" className="icon-btn !w-10 !h-10">
                <FaRegCalendarCheck className="text-sm" />
              </button>
            </div>
          </div>

          {/* quick links */}
          <div>
            <p className="font-code text-[11px] uppercase tracking-[0.22em] text-fog mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-accent"
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="font-code text-[11px] uppercase tracking-[0.22em] text-fog mb-5">Direct</p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors break-all">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
                  {profile.phone}
                </a>
              </li>
              <li className="text-fog">{profile.location}</li>
              <li>
                <button
                  onClick={openCalendly}
                  className="mt-1 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition-all hover:bg-accent hover:text-white"
                >
                  <FaRegCalendarCheck className="text-[11px]" />
                  Book a 30-min call
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.07] pt-7">
          <p className="text-xs text-fog">© {new Date().getFullYear()} Manthan Rajani. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-xs text-fog">
            Built with <FaHeart className="text-accent text-[10px]" /> using Next.js, Tailwind CSS &amp; Framer Motion
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-all hover:border-accent hover:text-accent hover:-translate-y-1"
          >
            <FaArrowUp className="text-sm transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaBars, FaXmark, FaRegCalendarCheck } from "react-icons/fa6";
import { navLinks, profile } from "@/data/portfolio";
import { openCalendly } from "@/lib/calendly";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...navLinks.map((l) => l.href.slice(1))];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(`#${id}`);
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-500 ${
              scrolled ? "glass shadow-[0_18px_50px_-20px_rgba(0,0,0,0.8)]" : "bg-transparent border border-transparent"
            }`}
          >
            {/* logo */}
            <a href="#home" className="group flex items-center gap-3" aria-label="Home">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-[#c2410c] font-display text-sm font-bold text-white shadow-[0_8px_22px_-8px_rgba(255,106,43,0.8)]">
                MR
                <span className="absolute inset-0 rounded-xl border border-white/20" />
              </span>
              <span className="hidden sm:block leading-tight">
                <span className="block font-display font-semibold text-white text-[15px]">Manthan Rajani</span>
                <span className="block font-code text-[10px] tracking-[0.22em] uppercase text-fog">
                  AI Full Stack
                </span>
              </span>
            </a>

            {/* desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                    active === link.href ? "text-white" : "text-fog hover:text-white"
                  }`}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="icon-btn !w-10 !h-10 hidden sm:inline-flex"
              >
                <FaGithub className="text-lg" />
              </a>
              <button onClick={openCalendly} className="btn-primary !py-2.5 !px-4 !text-[13px] hidden md:inline-flex">
                <FaRegCalendarCheck className="text-xs" />
                Let&apos;s talk
              </button>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="icon-btn !w-10 !h-10 lg:hidden"
              >
                <FaBars />
              </button>
            </div>
          </div>

          {/* scroll progress */}
          <motion.div
            style={{ scaleX: progress }}
            className="absolute left-4 right-4 sm:left-6 sm:right-6 bottom-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-accent via-[#ffc247] to-ice"
          />
        </div>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-2xl bg-grid" />
            <div className="relative flex h-full flex-col px-7 pt-6 pb-10">
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-white text-lg">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="icon-btn !w-11 !h-11">
                  <FaXmark />
                </button>
              </div>

              <nav className="mt-14 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-baseline gap-4 border-b border-white/[0.07] py-4"
                  >
                    <span className="font-code text-xs text-accent">0{i + 1}</span>
                    <span
                      className={`font-display text-3xl font-semibold transition-colors ${
                        active === link.href ? "text-gradient" : "text-slate-200 group-hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="mt-auto flex flex-col gap-4"
              >
                <button onClick={() => { setOpen(false); setTimeout(openCalendly, 250); }} className="btn-primary justify-center !py-3.5">
                  <FaRegCalendarCheck className="text-sm" />
                  Book a free 30-min call
                </button>
                <div className="flex items-center justify-center gap-6 text-fog text-sm">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
                    <FaGithub /> GitHub
                  </a>
                  <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
                    {profile.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

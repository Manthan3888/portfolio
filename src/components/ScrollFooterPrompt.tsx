"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { openCalendly } from "@/lib/calendly";

const PROMPTS = [
  {
    label: "01 / agents",
    text: "Shipping LLM features users touch daily?",
    shortText: "Ship LLM features to users?",
  },
  {
    label: "02 / stack",
    text: "Need FastAPI to Next.js in one engineer?",
    shortText: "FastAPI to Next.js, one dev?",
  },
  {
    label: "03 / automation",
    text: "Manual ops eating hours every week?",
    shortText: "Manual ops eating your week?",
  },
  {
    label: "04 / launch",
    text: "Prototype works but production does not?",
    shortText: "Stuck before production?",
  },
];

function computeVisible() {
  const hero = document.getElementById("home");
  const footer = document.getElementById("site-footer");
  if (!hero || !footer) return false;

  const heroRect = hero.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();
  const vh = window.innerHeight;

  const heroOnScreen = heroRect.bottom > 64;
  const footerOnScreen = footerRect.top < vh - 12;

  return !heroOnScreen && !footerOnScreen;
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-35" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
    </span>
  );
}

function FloatingActions() {
  return (
    <button
      type="button"
      onClick={openCalendly}
      className="book-now-blink btn-primary shrink-0 whitespace-nowrap !py-2 !px-3 !text-[11px] sm:!text-[13px] sm:!px-3.5"
    >
      <FaRegCalendarCheck className="text-xs" />
      Let&apos;s talk
    </button>
  );
}

export default function ScrollFooterPrompt() {
  const [visible, setVisible] = useState(false);
  const [promptIdx, setPromptIdx] = useState(0);

  const evaluate = useCallback(() => {
    setVisible(computeVisible());
  }, []);

  useEffect(() => {
    evaluate();

    window.addEventListener("app-scroll", evaluate, { passive: true });
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate);

    const hero = document.getElementById("home");
    const footer = document.getElementById("site-footer");
    const observers: IntersectionObserver[] = [];

    if (hero) {
      const heroObserver = new IntersectionObserver(evaluate, {
        threshold: [0, 0.01, 0.1, 0.25, 0.5, 0.75, 1],
      });
      heroObserver.observe(hero);
      observers.push(heroObserver);
    }

    if (footer) {
      const footerObserver = new IntersectionObserver(evaluate, {
        threshold: [0, 0.01, 0.1, 0.25, 0.5],
      });
      footerObserver.observe(footer);
      observers.push(footerObserver);
    }

    return () => {
      window.removeEventListener("app-scroll", evaluate);
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
      observers.forEach((o) => o.disconnect());
    };
  }, [evaluate]);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setInterval(() => {
      setPromptIdx((i) => (i + 1) % PROMPTS.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [visible]);

  const prompt = PROMPTS[promptIdx];

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="scroll-footer-prompt"
          role="region"
          aria-label="Quick conversation prompt"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 z-[45] pointer-events-none flex justify-center px-3 sm:px-4"
          style={{ bottom: "max(0.85rem, env(safe-area-inset-bottom))" }}
        >
          <div className="scroll-prompt-bar pointer-events-auto flex w-[min(calc(100vw-1.25rem),21rem)] sm:w-[min(calc(100vw-1.25rem),24rem)] lg:w-[min(calc(100vw-1.25rem),37rem)] shrink-0 items-center gap-2 rounded-2xl border border-white/12 bg-ink-900/94 px-2.5 py-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md sm:gap-2.5 sm:px-3 sm:py-2.5">
            <LiveDot />
            <div className="min-w-0 flex-1">
              <AnimatePresence mode="wait">
                <motion.p
                  key={promptIdx}
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.25 }}
                  className="whitespace-nowrap text-xs font-medium leading-none text-slate-100 sm:text-[13px] lg:text-[13px]"
                  title={`${prompt.label} ${prompt.text}`}
                >
                  <span className="lg:hidden">{prompt.shortText}</span>
                  <span className="hidden lg:inline">
                    <span className="font-code text-[10px] uppercase tracking-[0.12em] text-accent sm:text-[11px]">
                      {prompt.label}
                    </span>
                    <span className="mx-1.5 text-fog/50">·</span>
                    <span>{prompt.text}</span>
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="ml-auto shrink-0">
              <FloatingActions />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

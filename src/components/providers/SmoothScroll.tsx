"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const HEADER_OFFSET = -76;

function getHashTarget(): HTMLElement | null {
  const hash = window.location.hash;
  if (!hash || hash === "#" || hash === "#home") return null;
  const el = document.querySelector(hash);
  return el instanceof HTMLElement ? el : null;
}

export default function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    const scrollToTop = (immediate = true) => {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate });
    };

    const scrollToHash = (immediate = false) => {
      const target = getHashTarget();
      if (target) {
        lenis.scrollTo(target, { offset: HEADER_OFFSET, immediate, duration: immediate ? 0 : 1.4 });
      } else {
        scrollToTop(immediate);
        if (window.location.hash && window.location.hash !== "#home") {
          window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
        }
      }
    };

    // Hard refresh / first paint: start at hero unless URL has a valid section hash
    scrollToHash(true);

    let rafId = 0;
    const notifyScroll = () => {
      window.dispatchEvent(new Event("app-scroll"));
    };

    lenis.on("scroll", notifyScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleAnchor = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: HEADER_OFFSET, duration: 1.4 });
    };
    document.addEventListener("click", handleAnchor);

    const onHashChange = () => scrollToHash(false);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchor);
      window.removeEventListener("hashchange", onHashChange);
      lenis.off("scroll", notifyScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}

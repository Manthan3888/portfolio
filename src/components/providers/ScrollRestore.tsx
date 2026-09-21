"use client";

import { useEffect } from "react";

/** Runs before Lenis hydrates to avoid restored scroll position on hard refresh. */
export default function ScrollRestore() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;
    const hasSectionHash = hash && hash !== "#" && hash !== "#home";

    if (!hasSectionHash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}

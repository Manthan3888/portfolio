export const CALENDLY_URL = "https://calendly.com/manthanrajani-work/30min";

type CalendlyGlobal = {
  initPopupWidget: (opts: { url: string }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly failed to load"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export function openCalendly() {
  loadCalendly()
    .then(() => {
      window.Calendly?.initPopupWidget({ url: `${CALENDLY_URL}?hide_gdpr_banner=1` });
    })
    .catch(() => {
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    });
}

"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const WHERE_OPTIONS = [
  { value: "freelance", label: "Freelance / contract project" },
  { value: "full-time", label: "Full-time role" },
  { value: "consulting", label: "Consulting / advisory" },
  { value: "partnership", label: "Partnership or co-build" },
  { value: "other", label: "Something else" },
] as const;

type FormState = {
  name: string;
  email: string;
  context: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  context: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok?: boolean; mailto?: string; error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Could not send your message.");
      }

      if (data.mailto) {
        window.location.href = data.mailto;
      }

      setStatus("success");
      setFeedback("Thanks, your message is on its way. I'll reply by email soon.");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Something went wrong. Try again or email me directly.");
    }
  };

  return (
    <div className="rounded-2xl border border-white/[0.1] bg-ink-950/45 p-6 sm:p-8 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="font-code text-sm text-accent">08</span>
        <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
      </div>
      <h3 className="mt-4 font-display text-2xl sm:text-[1.65rem] font-bold tracking-tight text-white">
        Send a message
      </h3>
      <p className="mt-2 text-sm text-fog">Tell me what you&apos;re building. I&apos;ll reply by email.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-7">
        <div className="grid gap-7 sm:grid-cols-2">
          <Field label="Name">
            <input
              required
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              className="form-underline-input"
            />
          </Field>
          <Field label="Email">
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@company.com"
              className="form-underline-input"
            />
          </Field>
        </div>

        <Field label="Where you are">
          <div className="relative">
            <select
              required
              name="context"
              value={form.context}
              onChange={(e) => update("context", e.target.value)}
              className="form-underline-input form-underline-select appearance-none pr-8"
            >
              <option value="" disabled>
                Select one
              </option>
              {WHERE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-fog text-xs">
              ▾
            </span>
          </div>
        </Field>

        <Field label="Message">
          <textarea
            required
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="What are you building, and what do you need help with?"
            className="form-underline-input form-underline-textarea min-h-[7.5rem] resize-y"
          />
        </Field>

        <div className="pt-1">
          <motion.button
            type="submit"
            disabled={status === "loading"}
            whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
            whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            className="btn-primary !rounded-full !px-8 !py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : "Send message"}
            <FaArrowRight className="text-xs" />
          </motion.button>
        </div>

        {feedback ? (
          <p
            role="status"
            className={`text-sm ${status === "success" ? "text-mint" : status === "error" ? "text-red-300" : "text-fog"}`}
          >
            {feedback}
          </p>
        ) : null}
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="font-code text-[10px] uppercase tracking-[0.2em] text-fog">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

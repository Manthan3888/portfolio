"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaFileLines,
  FaHeartPulse,
  FaMobileScreen,
  FaEnvelopeOpenText,
  FaMagnifyingGlass,
  FaCartShopping,
  FaUserShield,
  FaStar,
} from "react-icons/fa6";
import type { Project } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

function CorofyMock({ accent }: { accent: string }) {
  const stages = [
    { icon: <FaMagnifyingGlass />, label: "Discover" },
    { icon: <FaUserShield />, label: "Enrich & Score" },
    { icon: <FaEnvelopeOpenText />, label: "Outreach" },
  ];
  const bars = [42, 68, 55, 84, 72, 96, 64];
  return (
    <div className="relative w-full max-w-[380px] rounded-xl border border-white/10 bg-[#0a1020]/85 p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="font-code text-[10px] text-fog">campaigns/dubai-chemicals</p>
        <span className="rounded-full px-2 py-0.5 text-[9px] font-bold text-[#07110c] bg-mint">LIVE</span>
      </div>

      <div className="mt-3 flex items-center justify-between gap-1">
        {stages.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
              className="flex flex-col items-center gap-1.5"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-[12px]"
                style={{ borderColor: `${accent}55`, color: accent, background: `${accent}14` }}
              >
                {s.icon}
              </span>
              <span className="text-[9px] text-slate-300">{s.label}</span>
            </motion.div>
            {i < stages.length - 1 && (
              <div className="relative mx-1 mb-5 h-[2px] flex-1 rounded bg-white/10 overflow-hidden">
                <motion.span
                  className="absolute inset-y-0 w-6 rounded"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
                  animate={{ x: ["-30px", "60px"] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.03] p-3">
        <div className="flex items-end justify-between gap-1.5 h-20">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0.15 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease }}
              className="flex-1 origin-bottom rounded-t"
              style={{
                height: `${h}%`,
                background: `linear-gradient(180deg, ${accent}, ${accent}44)`,
              }}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between font-code text-[9px] text-fog">
          <span>reply rate +38%</span>
          <span>leads 2,416</span>
        </div>
      </div>
    </div>
  );
}

function RpmMock({ accent }: { accent: string }) {
  const rows = [
    { label: "Policy #", value: "WXC-88421", hit: true },
    { label: "Premium", value: "$12,480/yr", hit: true },
    { label: "Class code", value: "5403 · Mfg", hit: false },
    { label: "Officer", value: "R. Mehta", hit: true },
    { label: "Exclusion", value: "Asbestos liab.", hit: false },
  ];
  return (
    <div className="relative w-full max-w-[380px] rounded-xl border border-white/10 bg-[#0a1020]/85 p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaFileLines style={{ color: accent }} />
          <p className="font-code text-[10px] text-fog">workers-comp_policy.pdf</p>
        </div>
        <span className="rounded-full bg-ice/15 border border-ice/30 px-2 py-0.5 text-[9px] font-bold text-ice">
          98.6% conf
        </span>
      </div>

      <div className="relative mt-3 overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.03]">
        <div className="absolute left-0 right-0 h-[2px] z-10 animate-scan" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, boxShadow: `0 0 12px ${accent}` }} />
        {rows.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
            className="flex items-center justify-between px-3 py-2 text-[11px] odd:bg-white/[0.02]"
          >
            <span className="text-fog">{r.label}</span>
            <span
              className="rounded px-1.5 py-0.5 font-code text-[10px]"
              style={
                r.hit
                  ? { background: `${accent}1f`, color: accent, outline: `1px solid ${accent}55` }
                  : { color: "#cbd5e1" }
              }
            >
              {r.value}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="mt-2.5 font-code text-[9px] text-fog">✓ structured via Pydantic · secured with JWT</p>
    </div>
  );
}

function AllrangeMock({ accent }: { accent: string }) {
  const kits = ["STI", "UTI", "HPV"];
  return (
    <div className="relative w-full max-w-[380px] rounded-xl border border-white/10 bg-[#0a1020]/85 p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaHeartPulse style={{ color: accent }} />
          <p className="font-code text-[10px] text-fog">diagnostic-kits/shop</p>
        </div>
        <span className="relative rounded-full bg-white/[0.06] border border-white/10 p-1.5 text-[10px]">
          <FaCartShopping />
          <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[7px] font-bold text-white" style={{ background: accent }}>
            2
          </span>
        </span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {kits.map((k, i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
            className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-2.5 text-center"
          >
            <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: `${accent}18`, color: accent }}>
              <FaHeartPulse className="text-xs" />
            </div>
            <p className="font-code text-[10px] font-bold text-slate-200">{k} Kit</p>
            <p className="text-[9px] text-fog mt-0.5">${24 + i * 6}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 space-y-1.5">
        <div className="flex items-center gap-2 rounded-md bg-white/[0.03] border border-white/[0.07] px-2.5 py-1.5">
          <div className="h-2 w-2 rounded-sm" style={{ background: accent }} />
          <div className="h-1.5 flex-1 rounded bg-white/10">
            <motion.div className="h-full rounded" style={{ background: accent, width: "82%" }} initial={{ width: 0 }} whileInView={{ width: "82%" }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} />
          </div>
          <span className="text-[8px] text-fog font-code">QR register</span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="rounded-md py-2 text-center text-[10px] font-bold text-[#06120c]"
          style={{ background: "linear-gradient(90deg,#35f0a8,#22c58a)" }}
        >
          Pay with Stripe · Secure checkout
        </motion.div>
      </div>
    </div>
  );
}

function SeniorMock({ accent }: { accent: string }) {
  return (
    <div className="relative w-full max-w-[380px] flex items-center justify-center gap-4">
      {[
        { side: "Client", msgs: ["Browse caregivers", "Book & pay"], reverse: false },
        { side: "Provider", msgs: ["New job request", "Accept · $24/hr"], reverse: true },
      ].map((phone, i) => (
        <motion.div
          key={phone.side}
          initial={{ opacity: 0, y: 30, rotate: i === 0 ? -4 : 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -2 : 2 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.18, duration: 0.7, ease }}
          className="w-[148px] rounded-[1.4rem] border border-white/15 bg-[#0a1020] p-2 shadow-2xl"
        >
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/20" />
          <p className="text-center font-code text-[9px] mb-2" style={{ color: accent }}>
            {phone.side} app
          </p>
          <div className="space-y-1.5">
            {phone.msgs.map((m, j) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2 + j * 0.15 }}
                className="rounded-lg px-2 py-1.5 text-[8.5px] leading-tight"
                style={{
                  background: j % 2 === 0 ? `${accent}22` : "rgba(255,255,255,0.06)",
                  color: j % 2 === 0 ? accent : "#cbd5e1",
                  border: `1px solid ${j % 2 === 0 ? `${accent}44` : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {m}
              </motion.div>
            ))}
            <div className="flex items-center gap-1 pt-1">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
              <span className="h-1 flex-1 rounded bg-white/10" />
              <FaStar className="text-[8px]" style={{ color: accent }} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  rocket: <FaRocket />,
  doc: <FaFileLines />,
  heart: <FaHeartPulse />,
  mobile: <FaMobileScreen />,
};

export default function ProjectVisual({ project }: { project: Project }) {
  const { accent, visual, icon } = project;
  return (
    <div
      className="relative flex aspect-[4/3.4] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.09]"
      style={{
        background: `radial-gradient(circle at 30% 20%, ${accent}22, transparent 60%), radial-gradient(circle at 80% 85%, ${accent}12, transparent 55%), #080d1a`,
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* ghost number */}
      <span
        className="pointer-events-none absolute -top-8 right-2 font-display text-[8rem] font-bold leading-none opacity-[0.08]"
        style={{ color: accent }}
      >
        {project.index}
      </span>

      {/* dashed orbit */}
      <div className="pointer-events-none absolute h-[115%] w-[115%] animate-spin-slow rounded-full border border-dashed" style={{ borderColor: `${accent}22` }} />

      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
      >
        {visual === "corofy" && <CorofyMock accent={accent} />}
        {visual === "rpm" && <RpmMock accent={accent} />}
        {visual === "allrange" && <AllrangeMock accent={accent} />}
        {visual === "senior" && <SeniorMock accent={accent} />}
      </motion.div>

      <span
        className="absolute top-4 left-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg border text-sm"
        style={{ borderColor: `${accent}44`, color: accent, background: `${accent}14` }}
      >
        {iconMap[icon]}
      </span>
    </div>
  );
}

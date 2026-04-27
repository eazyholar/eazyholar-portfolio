"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "I work on frontend development (React/Next.js), Web3 dApp interfaces, Discord bot architecture, UI/UX design, and community management. Both short-term and long-term projects.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope, complexity, and timeline. Small bots or UI components start from $200. Full dApp interfaces or community setups vary. Reach out and I'll give you an honest estimate.",
  },
  {
    q: "How long does a typical project take?",
    a: "A Discord bot takes 3–7 days. A full frontend interface or dApp takes 2–4 weeks. Community setup and strategy is ongoing. I'll give you a clear timeline before we start.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — I work with clients globally. Communication is primarily async via email or Discord, with scheduled calls when needed.",
  },
  {
    q: "Are you available for ongoing support?",
    a: "Absolutely. I offer retainer-based ongoing support for bug fixes, updates, feature additions, and community management. Let's discuss what works best for you.",
  },
  {
    q: "What's the best way to get started?",
    a: "Just send me an email at eazyholar2607@gmail.com or reach out via the contact section below. Tell me about your project and I'll respond within 24 hours.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ maxWidth: 780, margin: "0 auto", padding: "6rem 1.5rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
      >
        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "0.75rem" }}>
          FAQ
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 6vw, 3.2rem)", letterSpacing: "-0.03em", color: "#f0f0f4", lineHeight: 1.1 }}>
          Your Questions, Answered
        </h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            style={{ background: "#111113", border: "1px solid " + (open === i ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.06)"), borderRadius: 14, overflow: "hidden", transition: "border-color .3s" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", background: "none", border: "none", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", cursor: "pointer", textAlign: "left" }}
            >
              <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "#f0f0f4", lineHeight: 1.4 }}>{f.q}</span>
              <span style={{ fontSize: "1.2rem", color: open === i ? "#3b82f6" : "#6b7280", transition: "transform .3s, color .3s", transform: open === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0 }}>+</span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: "0 1.5rem 1.25rem", color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}>
                    {f.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

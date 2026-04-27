"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Eazyholar built our Discord bot from scratch. It handles 3,000+ members, role verification, and onboarding without a single issue. Absolutely solid work.",
    name: "Alex R.",
    role: "Founder, DAC Inception",
    color: "#3b82f6",
  },
  {
    quote: "The DeFi dashboard he shipped was clean, fast, and exactly what we needed. He understood the Web3 context immediately and executed perfectly.",
    name: "Mide T.",
    role: "CTO, ArcPay",
    color: "#06d6a0",
  },
  {
    quote: "His community management strategy doubled our engagement in 6 weeks. He doesn't just manage — he builds systems that run themselves.",
    name: "Sarah K.",
    role: "Community Lead, Web3 DAO",
    color: "#a78bfa",
  },
  {
    quote: "Working with Olanrewaju was seamless. Clear communication, fast delivery, and the frontend quality exceeded our expectations.",
    name: "Tobi A.",
    role: "Product Manager, Fintech Startup",
    color: "#f59e0b",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section id="testimonials" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "0.75rem" }}>
            Social Proof
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 6vw, 3.2rem)", letterSpacing: "-0.03em", color: "#f0f0f4", lineHeight: 1.1 }}>
            What Clients Say
          </h2>
          <p style={{ color: "#9ca3af", marginTop: "0.75rem", fontWeight: 300, fontSize: "0.95rem" }}>
            Helped 10+ teams ship, grow, and scale.
          </p>
        </motion.div>

        {/* Active testimonial */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: "2.5rem", maxWidth: 720, margin: "0 auto 2.5rem", position: "relative" }}
        >
          <div style={{ fontSize: "3rem", color: t.color, opacity: 0.4, fontFamily: "Georgia", lineHeight: 1, marginBottom: "1rem" }}>"</div>
          <p style={{ fontSize: "1.1rem", color: "#e0e0e8", lineHeight: 1.75, fontWeight: 300, marginBottom: "1.75rem", fontStyle: "italic" }}>
            {t.quote}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color + "20", border: "1px solid " + t.color + "40", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: t.color, fontWeight: 700, fontFamily: "var(--font-serif)" }}>
              {t.name[0]}
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#f0f0f4" }}>{t.name}</div>
              <div style={{ fontSize: "0.78rem", color: "#6b7280" }}>{t.role}</div>
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem" }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ width: i === active ? 24 : 8, height: 8, borderRadius: "999px", background: i === active ? "#3b82f6" : "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", transition: "all .3s", padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const contacts = [
    { icon: "📩", label: "eazyholar2607@gmail.com", href: "mailto:eazyholar2607@gmail.com" },
    { icon: "☎️", label: "+2348062215967", href: "tel:+2348062215967" },
  ];

  return (
    <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.25rem 2rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "3rem" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>

          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.4rem, 6vw, 1.8rem)", letterSpacing: "-0.02em", marginBottom: "0.5rem", color: "#f0f0f4" }}>
              Olanrewaju Abdulazeez
            </div>
            <div style={{ color: "#9ca3af", fontSize: "0.9rem", fontWeight: 300, marginBottom: "1.5rem" }}>
              Frontend Dev · Web3 · Bot Architect· Web3 Community Management
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {contacts.map((c) => {
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#9ca3af", textDecoration: "none", fontSize: "0.875rem" }}
                  >
                    <div style={{ width: 32, height: 32, background: "#1a1a1f", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    {c.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(6,214,160,0.1)", border: "1px solid rgba(6,214,160,0.25)", borderRadius: "999px", padding: "0.3rem 0.75rem", fontSize: "0.75rem", color: "#06d6a0", fontWeight: 500, marginBottom: "1rem" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06d6a0", display: "inline-block" }} />
              Available for Work
            </div>
            <div style={{ color: "#9ca3af", fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Open to freelance contracts, Web3 roles and collaborations.
            </div>
            <a
              href="mailto:eazyholar2607@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", padding: "0.7rem 1.4rem", borderRadius: "999px", background: "#3b82f6", color: "#fff", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}
            >
              Send a Message
            </a>
          </div>

        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem", textAlign: "center", color: "#6b7280", fontSize: "0.78rem" }}>
          2025 Olanrewaju Abdulazeez.
        </div>

      </motion.div>
    </section>
  );
}

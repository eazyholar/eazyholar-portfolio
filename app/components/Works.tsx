"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DeFi Dashboard Interface",
    desc: "A responsive, real-time DeFi portfolio tracker with wallet connect, live price feeds, and animated charts built on Next.js.",
    tags: ["Next.js", "ethers.js", "Tailwind"],
    tagColor: "#3b82f6", tagBg: "rgba(59,130,246,0.1)", tagBorder: "rgba(59,130,246,0.2)",
    thumbBg: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#0ea5e9 200%)",
    icon: "⛓", badge: "Web3 dApp",
  },
  {
    title: "Multi-Server Discord Bot",
    desc: "Feature-rich moderation + engagement bot with role gating, onboarding flows, and Web3 wallet verification for NFT communities.",
    tags: ["Discord.js", "Node.js", "Web3"],
    tagColor: "#06d6a0", tagBg: "rgba(6,214,160,0.08)", tagBorder: "rgba(6,214,160,0.2)",
    thumbBg: "linear-gradient(135deg,#0f1a14 0%,#064e3b 60%,#06d6a0 200%)",
    icon: "🤖", badge: "Automation",
  },
  {
    title: "Web3 Community Hub",
    desc: "End-to-end management of a 5,000+ member Web3 community — strategy, governance, events, and automated onboarding.",
    tags: ["Community", "Strategy", "Automation"],
    tagColor: "#a78bfa", tagBg: "rgba(167,139,250,0.08)", tagBorder: "rgba(167,139,250,0.2)",
    thumbBg: "linear-gradient(135deg,#1a0533 0%,#3b0764 60%,#a78bfa 200%)",
    icon: "🌐", badge: "Community",
  },
];

export default function Works() {
  return (
    <section id="works" style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.25rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 8vw, 3rem)", letterSpacing: "-0.03em", marginBottom: "0.5rem", color: "#f0f0f4" }}>
          Selected Works.
        </h2>
        <p style={{ color: "#9ca3af", fontWeight: 300, marginBottom: "1.5rem", fontSize: "1rem" }}>
          A curated selection — more available on request.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            style={{ background: "#1a1a1f", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden", cursor: "pointer" }}
          >
            <div style={{ height: 140, background: p.thumbBg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span style={{ fontSize: "2.5rem", opacity: 0.6 }}>{p.icon}</span>
              <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "999px", padding: "0.25rem 0.65rem", fontSize: "0.7rem", fontWeight: 600, color: "#9ca3af" }}>
                {p.badge}
              </div>
            </div>
            <div style={{ padding: "1.25rem" }}>
              <div style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.35rem", color: "#f0f0f4" }}>{p.title}</div>
              <div style={{ color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1rem" }}>{p.desc}</div>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{ padding: "0.2rem 0.6rem", background: p.tagBg, border: "1px solid " + p.tagBorder, borderRadius: "999px", fontSize: "0.72rem", color: p.tagColor, fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 640px) {
          #works > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 900px) {
          #works > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

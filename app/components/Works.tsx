"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "DeFi Dashboard",
    category: "Web3 dApp",
    tags: ["Next.js", "ethers.js", "Tailwind"],
    desc: "A real-time DeFi portfolio tracker with wallet connect, live price feeds, and animated charts. Designed for clarity and speed.",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #0f172a, #1e3a5f 70%, #0ea5e920)",
    icon: "⛓",
    link: "#",
  },
  {
    name: "Multi-Server Discord Bot",
    category: "Automation",
    tags: ["Discord.js", "Node.js", "Web3"],
    desc: "Feature-rich bot handling moderation, role gating, NFT wallet verification, and automated community onboarding flows.",
    color: "#06d6a0",
    gradient: "linear-gradient(135deg, #0f1a14, #064e3b 70%, #06d6a020)",
    icon: "🤖",
    link: "#",
  },
  {
    name: "Web3 Community Hub",
    category: "Community",
    tags: ["Strategy", "Automation", "Growth"],
    desc: "End-to-end management of a 5,000+ member Web3 community — governance, events, and a fully automated onboarding pipeline.",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #1a0533, #3b0764 70%, #a78bfa20)",
    icon: "🌐",
    link: "#",
  },
  {
    name: "ArcPay Interface",
    category: "Frontend",
    tags: ["React", "TypeScript", "UI/UX"],
    desc: "Clean, conversion-focused payment interface for a USDC payment platform. Built for speed and mobile-first responsiveness.",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #1a1200, #3d2900 70%, #f59e0b20)",
    icon: "💳",
    link: "https://arcpayment.vercel.app/",
  },
];

export default function Works() {
  return (
    <section id="works" style={{ maxWidth: 1100, margin: "0 auto", padding: "6rem 1.5rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: "3.5rem" }}
      >
        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "0.75rem" }}>
          Selected Work
        </p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 6vw, 3.2rem)", letterSpacing: "-0.03em", color: "#f0f0f4", lineHeight: 1.1 }}>
            Completed Projects
          </h2>
          <a href="#contact" style={{ fontSize: "0.85rem", color: "#9ca3af", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "0.1rem", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#f0f0f4")}
            onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
          >
            View all work →
          </a>
        </div>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, overflow: "hidden", transition: "border-color .3s, transform .3s", cursor: "pointer" }}
            whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.12)" }}
          >
            {/* Thumbnail */}
            <div style={{ height: 180, background: p.gradient, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span style={{ fontSize: "3.5rem", opacity: 0.5 }}>{p.icon}</span>
              <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "999px", padding: "0.25rem 0.75rem", fontSize: "0.72rem", fontWeight: 600, color: "#9ca3af" }}>
                {p.category}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#f0f0f4", letterSpacing: "-0.02em" }}>{p.name}</h3>
                <a href={p.link} style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", color: p.color, textDecoration: "none", fontWeight: 600, border: "1px solid " + p.color + "40", borderRadius: "999px", padding: "0.25rem 0.75rem", transition: "background .2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = p.color + "18")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  View Project →
                </a>
              </div>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ padding: "0.2rem 0.65rem", background: p.color + "12", border: "1px solid " + p.color + "30", borderRadius: "999px", fontSize: "0.72rem", color: p.color, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 640px) {
          #works > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

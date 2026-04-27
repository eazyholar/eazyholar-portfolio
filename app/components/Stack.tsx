"use client";
import { motion } from "framer-motion";

const cardStyle = {
  background: "#1a1a1f",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 16,
  padding: "1.5rem",
};

const groups = [
  {
    label: "Core Engineering",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js"],
    color: "#3b82f6", bg: "rgba(59,130,246,0.07)", border: "rgba(59,130,246,0.4)",
    skills: [
      { name: "React / Next.js", pct: 95 },
      { name: "TypeScript", pct: 88 },
      { name: "CSS / Tailwind", pct: 93 },
    ],
  },
  {
    label: "Creative & Design",
    tags: ["Framer Motion", "UI/UX Design", "Figma", "Canva", "Illustrator", "Animation"],
    color: "#a78bfa", bg: "rgba(167,139,250,0.07)", border: "rgba(167,139,250,0.35)",
    skills: [],
  },
  {
    label: "Specialized",
    tags: ["Web3 / Blockchain", "ethers.js", "Solidity Basics", "Discord.js", "Bot Architecture", "REST APIs", "Community Management"],
    color: "#06d6a0", bg: "rgba(6,214,160,0.07)", border: "rgba(6,214,160,0.35)",
    skills: [],
  },
];

export default function Stack() {
  return (
    <section id="stack" style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.25rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 8vw, 3rem)", letterSpacing: "-0.03em", marginBottom: "0.5rem", color: "#f0f0f4" }}>
          The Stack.
        </h2>
        <p style={{ color: "#9ca3af", fontWeight: 300, marginBottom: "2rem", fontSize: "1rem" }}>
          Tools I trust. Grouped by domain.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            style={cardStyle}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.75rem" }}>
              {g.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {g.tags.map((tag) => (
                <span key={tag} style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.35rem 0.85rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 500, border: "1px solid " + g.border, color: g.color, background: g.bg }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: g.color, flexShrink: 0 }} />
                  {tag}
                </span>
              ))}
            </div>
            {g.skills.length > 0 && (
              <div style={{ marginTop: "1.25rem" }}>
                {g.skills.map((s) => (
                  <div key={s.name} style={{ marginBottom: "0.85rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#9ca3af", marginBottom: "0.35rem" }}>
                      <span>{s.name}</span><span>{s.pct}%</span>
                    </div>
                    <div style={{ height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 2, overflow: "hidden" }}>
                      <motion.div
                        style={{ height: "100%", borderRadius: 2, background: "linear-gradient(90deg, #3b82f6, #06d6a0)" }}
                        initial={{ width: 0 }}
                        whileInView={{ width: s.pct + "%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          #stack > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "Frontend Development",
    desc: "Pixel-perfect, performant UIs built with React and Next.js. I turn Figma designs into fast, responsive, and accessible web experiences.",
    color: "#3b82f6",
  },
  {
    icon: "⛓",
    title: "Web3 & Blockchain",
    desc: "dApp interfaces, wallet integrations, smart contract frontends, and token-gated experiences using ethers.js and Web3 tooling.",
    color: "#06d6a0",
  },
  {
    icon: "🤖",
    title: "Bot Architecture",
    desc: "Custom Discord bots with moderation, NFT verification, role automation, onboarding flows, and multi-server management.",
    color: "#a78bfa",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Clean, intuitive interface design. I create wireframes, prototypes, and polished visuals in Figma that users actually enjoy.",
    color: "#f59e0b",
  },
  {
    icon: "🌐",
    title: "Community Management",
    desc: "Strategy, growth, governance, and engagement for Web3 communities. I've managed 5,000+ member ecosystems end-to-end.",
    color: "#ec4899",
  },
  {
    icon: "🔧",
    title: "API & Automation",
    desc: "REST API integrations, webhook pipelines, and automated workflows that save time and eliminate manual processes.",
    color: "#06b6d4",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ maxWidth: 1100, margin: "0 auto", padding: "6rem 1.5rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: "3.5rem", textAlign: "center" }}
      >
        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "0.75rem" }}>
          What I Do
        </p>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 6vw, 3.2rem)", letterSpacing: "-0.03em", color: "#f0f0f4", lineHeight: 1.1, marginBottom: "1rem" }}>
          Services I Offer
        </h2>
        <p style={{ color: "#9ca3af", maxWidth: 500, margin: "0 auto", fontWeight: 300, lineHeight: 1.7, fontSize: "1rem" }}>
          From concept to deployment — I cover the full product lifecycle for Web and Web3.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            style={{ background: "#111113", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start", transition: "border-color .3s, transform .3s" }}
            whileHover={{ borderColor: s.color + "40", y: -2 }}
          >
            <div style={{ width: 48, height: 48, borderRadius: 12, background: s.color + "15", border: "1px solid " + s.color + "30", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>
              {s.icon}
            </div>
            <div>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#f0f0f4", marginBottom: "0.5rem" }}>{s.title}</h3>
              <p style={{ color: "#9ca3af", fontSize: "0.875rem", lineHeight: 1.65, fontWeight: 300 }}>{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 640px) {
          #services > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 900px) {
          #services > div:last-child { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

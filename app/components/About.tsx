"use client";
import { motion } from "framer-motion";

const cardStyle = {
  background: "#1a1a1f",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 16,
  padding: "1.5rem",
  transition: "border-color 0.3s, transform 0.3s",
};

export default function About() {
  return (
    <section
      id="about"
      style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2rem" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 12,
        }}
      >
        {/* Big intro card */}
        <motion.div
          style={{ ...cardStyle, gridColumn: "span 8", padding: "2rem" }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.6rem" }}>
            Who I am
          </p>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.55rem", lineHeight: 1.4, letterSpacing: "-0.02em", color: "#f0f0f4", marginBottom: "1rem" }}>
            I don't just write code — I architect{" "}
            <span style={{ color: "#3b82f6" }}>experiences</span>, automate{" "}
            <span style={{ color: "#06d6a0" }}>pipelines</span>, and bridge communities across{" "}
            <span style={{ color: "#a78bfa" }}>decentralised networks</span>.
          </p>
          <p style={{ color: "#9ca3af", fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.7 }}>
            Based in Nigeria. Building globally. Obsessed with the intersection of great UI and smart infrastructure.
          </p>
        </motion.div>

        {/* Stat cards */}
        {[
          { num: "3+", unit: "yrs", label: "Frontend Engineering", color: "#3b82f6", delay: 0.1 },
          { num: "12+", unit: "", label: "Projects Shipped", color: "#06d6a0", delay: 0.15 },
          { num: "5K+", unit: "", label: "Community Members Managed", color: "#a78bfa", delay: 0.2 },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            style={{ ...cardStyle, gridColumn: "span 4", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: 130 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: stat.delay }}
          >
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "3.5rem", lineHeight: 1, color: stat.color }}>
              {stat.num}
              <span style={{ fontSize: "1rem", color: "#9ca3af", fontFamily: "var(--font-sans)", fontWeight: 300 }}>
                {stat.unit}
              </span>
            </div>
            <div style={{ color: "#9ca3af", fontSize: "0.8rem", marginTop: "0.4rem" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}

        {/* Focus card */}
        <motion.div
          style={{ ...cardStyle, gridColumn: "span 4" }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6b7280", marginBottom: "0.6rem" }}>
            Current Focus
          </p>
          {["Web3 dApp Interfaces", "Automated Discord Bots", "Next.js Full-Stack Apps"].map((item) => (
            <div key={item} style={{ fontSize: "0.95rem", color: "#f0f0f4", fontWeight: 500, marginBottom: "0.35rem" }}>
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
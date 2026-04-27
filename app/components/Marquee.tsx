"use client";

const items = [
  "React", "Next.js", "TypeScript", "Web3 Development", "Discord Bots",
  "Framer Motion", "UI/UX Design", "ethers.js", "Community Management",
  "Tailwind CSS", "API Architecture", "Bot Automation",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "1rem 0", overflow: "hidden" }}>
      <div style={{ display: "flex", animation: "marquee 28s linear infinite", width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "1.5rem", padding: "0 2rem", fontSize: "0.82rem", fontWeight: 500, color: "#6b7280", whiteSpace: "nowrap", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {item}
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#3b82f6", flexShrink: 0, opacity: 0.5 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

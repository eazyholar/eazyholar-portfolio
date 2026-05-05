"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    desc: "Pixel-perfect, performant UIs built with React and Next.js. I turn Figma designs into fast, responsive, and accessible web experiences.",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.08)",
    border: "rgba(97,218,251,0.2)",
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#61DAFB">
        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.127.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.127.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.127-.468a23.307 23.307 0 0 0-1.363-3.578l-.101-.213.101-.213a23.53 23.53 0 0 0 1.363-3.578l.127-.468.472.12c3.518.889 5.536 2.398 5.536 4.139s-2.018 3.25-5.536 4.139l-.472.12zm.45-7.306a24.77 24.77 0 0 1-1.182 3.046 24.95 24.95 0 0 1 1.182 3.046c2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046zM5.487 5.419l-.127-.468C6.502 1.836 8.presumed 0 9.86 0c1.173 0 2.443.625 3.754 1.78l.36.307-.307.36a23.307 23.307 0 0 0-2.21 3.032l-.12.204-.233.032a23.53 23.53 0 0 0-3.84.498l-.468.127-.11-.921zM9.86 1.004c-.957 0-2.01.727-2.987 2.101a24.842 24.842 0 0 1 3.36-.367 24.842 24.842 0 0 1 2.21-2.907C11.395 1.31 10.636 1.004 9.86 1.004zM14.14 22.996c-1.173 0-2.443-.625-3.754-1.78l-.36-.307.307-.36a23.307 23.307 0 0 0 2.21-3.032l.12-.204.233-.032a23.53 23.53 0 0 0 3.84-.498l.468-.127.127.468c1.122 4.115-.273 6.872-2.191 6.872zm2.179-6.478a24.842 24.842 0 0 1-3.36.367 24.842 24.842 0 0 1-2.21 2.907c.048.036.097.07.146.103.957.638 1.817.893 2.577.773.957-.147 1.955-1.004 2.847-2.15zM9.86 22.996c-1.918 0-3.313-2.757-2.191-6.872l.127-.468.468.127a23.53 23.53 0 0 0 3.84.498l.233.032.12.204a23.307 23.307 0 0 0 2.21 3.032l.307.36-.36.307C13.303 22.371 12.033 22.996 10.86 22.996z"/>
      </svg>
    ),
  },
  {
    title: "Web3 & Blockchain",
    desc: "dApp interfaces, wallet integrations, smart contract frontends, and token-gated experiences using ethers.js and Web3 tooling.",
    color: "#627EEA",
    bg: "rgba(98,126,234,0.08)",
    border: "rgba(98,126,234,0.2)",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M16 2L5 17.5l11 6.5 11-6.5L16 2z" fill="#627EEA" opacity="0.6"/>
        <path d="M16 2v15.5l11-.5L16 2z" fill="#627EEA" opacity="0.45"/>
        <path d="M16 24l-11-6.5 11 14 11-14L16 24z" fill="#627EEA"/>
        <path d="M16 24v7.5l11-14L16 24z" fill="#627EEA" opacity="0.6"/>
        <path d="M16 17.5l11-.5-11-15v15.5z" fill="#627EEA" opacity="0.2"/>
        <path d="M5 17l11 .5V2L5 17z" fill="#627EEA" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: "Bot Architecture",
    desc: "Custom Discord bots with moderation, NFT verification, role automation, onboarding flows, and multi-server management.",
    color: "#5865F2",
    bg: "rgba(88,101,242,0.08)",
    border: "rgba(88,101,242,0.2)",
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#5865F2">
        <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Clean, intuitive interface design. I create wireframes, prototypes, and polished visuals in Figma that users actually enjoy.",
    color: "#F24E1E",
    bg: "rgba(242,78,30,0.08)",
    border: "rgba(242,78,30,0.2)",
    logo: (
      <svg viewBox="0 0 38 57" width="22" height="28" fill="none">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    title: "Community Management",
    desc: "Strategy, growth, governance, and engagement for Web3 communities. I've managed 5,000+ member ecosystems end-to-end.",
    color: "#06d6a0",
    bg: "rgba(6,214,160,0.08)",
    border: "rgba(6,214,160,0.2)",
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#06d6a0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "API & Automation",
    desc: "REST API integrations, webhook pipelines, and automated workflows that save time and eliminate manual processes.",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    logo: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#3b82f6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
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

      <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            style={{
              background: "#111113",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              padding: "1.75rem",
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
              transition: "border-color .3s, transform .3s, background .3s",
              cursor: "default",
            }}
            whileHover={{ borderColor: s.border, y: -2, background: s.bg }}
          >
            {/* Real logo icon box */}
            <div style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: s.bg,
              border: "1px solid " + s.border,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "transform .3s",
            }}>
              {s.logo}
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
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 900px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

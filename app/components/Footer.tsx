"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#080809", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* Big CTA block */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "6rem 1.5rem 4rem", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "1rem" }}>
            Let's Work Together
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 7vw, 4.5rem)", letterSpacing: "-0.04em", color: "#f0f0f4", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            Ready to build<br />
            <em style={{ fontStyle: "italic", color: "#06d6a0" }}>something great?</em>
          </h2>
          <p style={{ color: "#9ca3af", fontWeight: 300, fontSize: "1rem", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 2.5rem" }}>
            Whether it's a dApp, a bot, a full frontend, or community strategy — I'm open to new projects and collaborations.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:eazyholar2607@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 1.8rem", borderRadius: "999px", background: "#3b82f6", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3b82f6"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              ✉ Send an Email
            </a>
            <a href="tel:+2348062215967"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 1.8rem", borderRadius: "999px", background: "transparent", color: "#f0f0f4", border: "1px solid rgba(255,255,255,0.12)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              📞 08062215967
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1.75rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "#f0f0f4" }}>
            Ola<span style={{ color: "#3b82f6" }}>.</span>dev
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { label: "Twitter", href: "https://twitter.com/eazyholar", short: "𝕏" },
              { label: "GitHub", href: "https://github.com/eazyholar", short: "GH" },
              { label: "LinkedIn", href: "#", short: "in" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: 700, color: "#9ca3af", textDecoration: "none", transition: "all .2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)"; (e.currentTarget as HTMLElement).style.color = "#3b82f6"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "#9ca3af"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                {s.short}
              </a>
            ))}
          </div>

          <div style={{ color: "#6b7280", fontSize: "0.78rem" }}>
            © Olanrewaju Abdulazeez.
          </div>
        </div>
      </div>
    </footer>
  );
}

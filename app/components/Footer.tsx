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

            {/* Email button */}
            <a
              href="mailto:eazyholar2607@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.9rem 1.8rem", borderRadius: "999px", background: "#3b82f6", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3b82f6"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Send an Email
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/2348062215967"
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.9rem 1.8rem", borderRadius: "999px", background: "#25D366", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1ebe57"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#25D366"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              {/* WhatsApp SVG icon */}
              <svg width="17" height="17" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.361.638 4.573 1.749 6.484L2.667 29.333l7.099-1.716A13.29 13.29 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.003 2.667zm0 2.4c5.99 0 10.93 4.94 10.93 10.933S22 26.933 16.003 26.933a10.9 10.9 0 0 1-5.636-1.566l-.402-.243-4.214 1.018.998-4.075-.265-.418A10.886 10.886 0 0 1 5.07 16c0-5.993 4.94-10.933 10.933-10.933zm-3.e 6.2c-.213 0-.559.08-.852.398-.293.317-1.12 1.094-1.12 2.668s1.147 3.095 1.307 3.31c.16.214 2.24 3.57 5.52 4.862 2.72 1.073 3.28.86 3.87.806.59-.054 1.907-.78 2.174-1.533.267-.753.267-1.4.187-1.533-.08-.133-.293-.213-.614-.373s-1.907-.94-2.2-1.047c-.294-.106-.507-.16-.72.16-.213.32-.827 1.047-.987 1.26-.16.213-.32.24-.614.08-.293-.16-1.24-.457-2.36-1.457-.873-.78-1.46-1.74-1.633-2.034-.173-.293-.018-.452.13-.598.133-.133.293-.347.44-.52.146-.174.2-.294.3-.507.1-.213.053-.4-.027-.56-.08-.16-.7-1.733-.973-2.373-.253-.6-.52-.52-.72-.53-.187-.007-.4-.01-.614-.01z"/>
              </svg>
              WhatsApp Me
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
          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>

            {/* Twitter / X */}
            <a href="https://twitter.com/eazyholar" target="_blank" rel="noreferrer"
              title="Twitter / X"
              style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "#f0f0f4"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "#9ca3af"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/eazyholar" target="_blank" rel="noreferrer"
              title="GitHub"
              style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "#f0f0f4"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "#9ca3af"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://ng.linkedin.com/in/abdulazeez-olanrewaju-8ba81819b" target="_blank" rel="noreferrer"
              title="LinkedIn"
              style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(10,102,194,0.15)"; (e.currentTarget as HTMLElement).style.color = "#0a66c2"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,102,194,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "#9ca3af"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/2348062215967" target="_blank" rel="noreferrer"
              title="WhatsApp"
              style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.12)"; (e.currentTarget as HTMLElement).style.color = "#25D366"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.35)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "#9ca3af"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16.003 2.667C8.639 2.667 2.667 8.638 2.667 16c0 2.361.638 4.573 1.749 6.484L2.667 29.333l7.099-1.716A13.29 13.29 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.003 2.667zm0 2.4c5.99 0 10.93 4.94 10.93 10.933S22 26.933 16.003 26.933a10.9 10.9 0 0 1-5.636-1.566l-.402-.243-4.214 1.018.998-4.075-.265-.418A10.886 10.886 0 0 1 5.07 16c0-5.993 4.94-10.933 10.933-10.933zm-3 6.2c-.213 0-.559.08-.852.398-.293.317-1.12 1.094-1.12 2.668s1.147 3.095 1.307 3.31c.16.214 2.24 3.57 5.52 4.862 2.72 1.073 3.28.86 3.87.806.59-.054 1.907-.78 2.174-1.533.267-.753.267-1.4.187-1.533-.08-.133-.293-.213-.614-.373s-1.907-.94-2.2-1.047c-.294-.106-.507-.16-.72.16-.213.32-.827 1.047-.987 1.26-.16.213-.32.24-.614.08-.293-.16-1.24-.457-2.36-1.457-.873-.78-1.46-1.74-1.633-2.034-.173-.293-.018-.452.13-.598.133-.133.293-.347.44-.52.146-.174.2-.294.3-.507.1-.213.053-.4-.027-.56-.08-.16-.7-1.733-.973-2.373-.253-.6-.52-.52-.72-.53-.187-.007-.4-.01-.614-.01z"/>
              </svg>
            </a>

          </div>

          <div style={{ color: "#6b7280", fontSize: "0.78rem" }}>
            © 2025 Olanrewaju Abdulazeez — All rights reserved
          </div>

        </div>
      </div>
    </footer>
  );
}

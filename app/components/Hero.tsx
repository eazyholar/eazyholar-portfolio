"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>

      {/* Background glow blobs */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.07), transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,214,160,0.06), transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }}>

        {/* Photo — centered on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ position: "relative", width: 180, height: 180 }}>
            {/* Cubic frame layers */}
            <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(59,130,246,0.5)", borderRadius: 20, transform: "translate(10px, 10px)", zIndex: 0 }} />
            <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(6,214,160,0.3)", borderRadius: 20, transform: "translate(-6px, -6px)", zIndex: 0 }} />
            <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 18, overflow: "hidden", border: "1.5px solid rgba(255,255,255,0.1)", zIndex: 1 }}>
              <Image src="/pfp.jpg" alt="Olanrewaju Abdulazeez" width={180} height={180} priority style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }} />
            </div>
            <div style={{ position: "absolute", top: -8, right: -8, width: 16, height: 16, borderRadius: "50%", background: "#06d6a0", border: "2.5px solid #0a0a0b", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: -6, left: -6, width: 10, height: 10, borderRadius: "50%", background: "#3b82f6", border: "2px solid #0a0a0b", zIndex: 2 }} />
          </div>
        </motion.div>

        {/* Text */}
        <div style={{ textAlign: "center" }}>

          {/* Floating availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(6,214,160,0.08)", border: "1px solid rgba(6,214,160,0.2)", borderRadius: "999px", padding: "0.4rem 1rem", fontSize: "0.78rem", color: "#06d6a0", fontWeight: 600, marginBottom: "1.75rem", letterSpacing: "0.03em" }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#06d6a0", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
            Available to take on new projects — Let's talk
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.6rem, 9vw, 5.5rem)", lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: "1.5rem", color: "#f0f0f4" }}
          >
            Your Web{"  "}&{"  "}Web3<br />
            <em style={{ fontStyle: "italic", color: "#3b82f6" }}>Product</em>{" "}Partner.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            style={{ fontSize: "1.05rem", color: "#9ca3af", lineHeight: 1.75, marginBottom: "2.25rem", fontWeight: 300, maxWidth: 560, margin: "0 auto 2.25rem" }}
          >
            A trusted frontend engineer and Web3 builder for startups and communities ready to turn their ideas into polished, high-performance products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: "0.82rem", color: "#6b7280", marginBottom: "2rem", letterSpacing: "0.02em" }}
          >
            Trusted by DAC Inception, ArcPay, Web3 communities and early-stage startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            <a href="#works" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", borderRadius: "999px", background: "#3b82f6", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#2563eb"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="#3b82f6"; (e.currentTarget as HTMLElement).style.transform=""; }}
            >
              View My Work →
            </a>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 1.6rem", borderRadius: "999px", background: "transparent", color: "#f0f0f4", border: "1px solid rgba(255,255,255,0.12)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="transparent"; (e.currentTarget as HTMLElement).style.transform=""; }}
            >
              Let's Chat
            </a>
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          section > div > div:first-child { justify-content: flex-end; }
          section > div {
            grid-template-columns: 1fr 1fr !important;
          }
          section > div > div:last-child { text-align: left !important; }
          section > div > div:last-child > div { margin-left: 0 !important; }
          section > div > div:last-child > div:last-child { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}

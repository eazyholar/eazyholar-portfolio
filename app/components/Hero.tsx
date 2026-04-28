"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "stretch",
      padding: "0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glow */}
      <div style={{ position: "absolute", top: "20%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", right: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,214,160,0.05), transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{
        maxWidth: 1200,
        width: "100%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        alignItems: "stretch",
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
      }}>

        {/* LEFT — Large Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            position: "relative",
            padding: "7rem 2rem 3rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: 440 }}>
            {/* Cubic offset frame */}
            <div style={{
              position: "absolute",
              inset: 0,
              border: "1.5px solid rgba(59,130,246,0.45)",
              borderRadius: 24,
              transform: "translate(12px, 12px)",
              zIndex: 0,
            }} />
            <div style={{
              position: "absolute",
              inset: 0,
              border: "1px solid rgba(6,214,160,0.25)",
              borderRadius: 24,
              transform: "translate(-8px, -8px)",
              zIndex: 0,
            }} />

            {/* Photo card */}
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: 20,
              overflow: "hidden",
              border: "1.5px solid rgba(255,255,255,0.1)",
              background: "#111113",
              zIndex: 1,
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}>
              <Image
                src="/pfp.jpg"
                alt="Olanrewaju Abdulazeez"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              {/* Subtle gradient at bottom */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top, rgba(10,10,11,0.6), transparent)", zIndex: 2 }} />
            </div>

            {/* Corner dots */}
            <div style={{ position: "absolute", top: -10, right: -10, width: 18, height: 18, borderRadius: "50%", background: "#06d6a0", border: "3px solid #0a0a0b", zIndex: 3 }} />
            <div style={{ position: "absolute", bottom: -8, left: -8, width: 12, height: 12, borderRadius: "50%", background: "#3b82f6", border: "2.5px solid #0a0a0b", zIndex: 3 }} />

            {/* Floating name tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                position: "absolute",
                bottom: 24,
                left: 16,
                zIndex: 4,
                background: "rgba(10,10,11,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "0.6rem 1rem",
              }}
            >
              <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#f0f0f4" }}>Olanrewaju Abdulazeez</div>
              <div style={{ fontSize: "0.72rem", color: "#06d6a0", marginTop: "0.1rem" }}>Eazyholar · Mendy</div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "7rem 1.5rem 3rem 2rem",
          }}
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(6,214,160,0.08)", border: "1px solid rgba(6,214,160,0.2)", borderRadius: "999px", padding: "0.4rem 1rem", fontSize: "0.78rem", color: "#06d6a0", fontWeight: 600, marginBottom: "2rem", alignSelf: "flex-start", letterSpacing: "0.02em" }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#06d6a0", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
            Available to take on new projects — Let's talk
          </motion.div>

          {/* Big headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 5.5vw, 5.8rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "#f0f0f4",
              marginBottom: "2rem",
            }}
          >
            Your Web<br />
            {"& "}Web3<br />
            <em style={{ fontStyle: "italic", color: "#3b82f6" }}>Product</em><br />
            Partner.
          </motion.h1>

          {/* Description box — like Victor's card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: "1.25rem 1.5rem",
              marginBottom: "2.25rem",
            }}
          >
            <p style={{ color: "#d0d0d8", fontSize: "0.95rem", lineHeight: 1.75, fontWeight: 300, marginBottom: "0.75rem" }}>
              A trusted frontend engineer and Web3 builder for startups and communities ready to turn their ideas into polished, high-performance products.
            </p>
            <p style={{ color: "#6b7280", fontSize: "0.82rem", lineHeight: 1.6 }}>
              Trusted by DAC Inception, ArcPay, and Web3 communities across Africa and beyond.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <a href="#works"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 1.75rem", borderRadius: "999px", background: "#3b82f6", color: "#fff", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#3b82f6"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              View My Work →
            </a>
            <a href="#contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.85rem 1.75rem", borderRadius: "999px", background: "transparent", color: "#f0f0f4", border: "1px solid rgba(255,255,255,0.12)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "all .2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              Let's Chat
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 767px) {
          section > div {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          section > div > div:first-child {
            padding: 7rem 1.25rem 1rem !important;
          }
          section > div > div:first-child > div {
            max-width: 100% !important;
          }
          section > div > div:first-child > div > div:nth-child(3) {
            aspect-ratio: 4/3 !important;
          }
          section > div > div:last-child {
            padding: 1.5rem 1.25rem 4rem !important;
          }
          section > div > div:last-child > div:nth-child(2) {
            align-self: center !important;
          }
        }
      `}</style>
    </section>
  );
}

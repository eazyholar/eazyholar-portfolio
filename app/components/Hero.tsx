"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "8rem 1.25rem 3rem" }}>
      
      {/* Mobile: stack vertically. Desktop: side by side */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

        {/* Photo — top on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ position: "relative", width: 160, height: 160 }}>
            {/* Cubic frame — offset border effect */}
            <div style={{
              position: "absolute",
              inset: 0,
              border: "2px solid #3b82f6",
              borderRadius: 16,
              transform: "translate(8px, 8px)",
              zIndex: 0,
            }} />
            <div style={{
              position: "absolute",
              inset: 0,
              border: "1px solid rgba(6,214,160,0.4)",
              borderRadius: 16,
              transform: "translate(-4px, -4px)",
              zIndex: 0,
            }} />
            <div style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 14,
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.1)",
              zIndex: 1,
              background: "#1a1a1f",
            }}>
              <Image
                src="/pfp.jpg"
                alt="Olanrewaju Abdulazeez"
                width={160}
                height={160}
                priority
                style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
              />
            </div>
            {/* Corner accent */}
            <div style={{ position: "absolute", top: -6, right: -6, width: 14, height: 14, borderRadius: "50%", background: "#06d6a0", border: "2px solid #0e0e10", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: -6, left: -6, width: 10, height: 10, borderRadius: "50%", background: "#3b82f6", border: "2px solid #0e0e10", zIndex: 2 }} />
          </div>
        </motion.div>

        {/* Text content */}
        <div style={{ textAlign: "center" }}>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "1rem" }}
          >
            Olanrewaju Abdulazeez — Eazyholar / Mendy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 8vw, 4.8rem)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.25rem", color: "#f0f0f4" }}
          >
            Building{" "}
            <em style={{ fontStyle: "italic", color: "#06d6a0" }}>products</em>
            <br />
            at the edge of
            <br />
            Web and Web3.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "1rem", color: "#9ca3af", lineHeight: 1.7, marginBottom: "2rem", fontWeight: 300, maxWidth: 480, margin: "0 auto 2rem" }}
          >
            Frontend engineer, Web3 architect, and bot builder. I craft interfaces people love and systems that run while you sleep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}
          >
            <a
              href="#works"
              style={{ display: "inline-flex", alignItems: "center", padding: "0.7rem 1.4rem", borderRadius: "999px", background: "#3b82f6", color: "#fff", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}
            >
              View Selected Works
            </a>
            <a
              href="#contact"
              style={{ display: "inline-flex", alignItems: "center", padding: "0.7rem 1.4rem", borderRadius: "999px", background: "transparent", color: "#f0f0f4", border: "1px solid rgba(255,255,255,0.12)", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

      </div>

      {/* Desktop layout override */}
      <style>{`
        @media (min-width: 768px) {
          .hero-inner {
            flex-direction: row !important;
            align-items: center !important;
          }
          .hero-photo {
            order: 2;
            flex-shrink: 0;
          }
          .hero-photo > div {
            width: 220px !important;
            height: 220px !important;
          }
          .hero-text {
            order: 1;
            text-align: left !important;
            flex: 1;
          }
          .hero-cta {
            justify-content: flex-start !important;
          }
          .hero-text p:nth-child(3) {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

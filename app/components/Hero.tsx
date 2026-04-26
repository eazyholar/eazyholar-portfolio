"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "10rem 2rem 4rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0 }}
            style={{ fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#3b82f6", marginBottom: "1.25rem" }}
          >
            Olanrewaju Abdulazeez — Eazyholar / Mendy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 4.8rem)", lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: 820, color: "#f0f0f4" }}
          >
            Building{" "}
            <em style={{ fontStyle: "italic", color: "#06d6a0" }}>products</em>
            <br />
            at the edge of
            <br />
            Web and Web3.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: "1.05rem", color: "#9ca3af", maxWidth: 540, lineHeight: 1.7, marginBottom: "2.5rem", fontWeight: 300 }}
          >
            Frontend engineer, Web3 architect, and bot builder. I craft interfaces people love and systems that run while you sleep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="#works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                borderRadius: "999px",
                background: "#3b82f6",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              View Selected Works
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.75rem 1.5rem",
                borderRadius: "999px",
                background: "transparent",
                color: "#f0f0f4",
                border: "1px solid rgba(255,255,255,0.12)",
                fontWeight: 600,
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ position: "relative", width: 220, height: 220 }}
        >
          <Image
            src="/pfp.jpg"
            alt="Olanrewaju Abdulazeez"
            width={220}
            height={220}
            priority
            style={{ borderRadius: "50%", objectFit: "cover", width: "100%", height: "100%", border: "2px solid rgba(255,255,255,0.1)" }}
          />
          <div style={{ position: "absolute", bottom: 8, right: 8, width: 28, height: 28, borderRadius: "50%", background: "#06d6a0", border: "3px solid #0e0e10", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", color: "#0e0e10", fontWeight: 700 }}>
            ✦
          </div>
        </motion.div>

      </div>
    </section>
  );
}

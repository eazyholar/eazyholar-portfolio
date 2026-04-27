"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["works", "services", "testimonials", "contact"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 1.5rem",
        height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backdropFilter: "blur(24px)",
        background: scrolled ? "rgba(10,10,11,0.95)" : "rgba(10,10,11,0.7)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "all 0.3s",
      }}>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "#f0f0f4", letterSpacing: "-0.01em" }}>
          Ola<span style={{ color: "#3b82f6" }}>.</span>dev
        </div>

        <ul className="desk-links" style={{ listStyle: "none", display: "flex", gap: "2.5rem", margin: 0, padding: 0 }}>
          {links.map(l => (
            <li key={l}>
              <a href={"#" + l} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500, textTransform: "capitalize", letterSpacing: "0.02em", transition: "color .2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#f0f0f4")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
              >{l}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div className="avail-pill" style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "rgba(6,214,160,0.08)", border: "1px solid rgba(6,214,160,0.2)", borderRadius: "999px", padding: "0.3rem 0.8rem", fontSize: "0.73rem", color: "#06d6a0", fontWeight: 600, letterSpacing: "0.02em" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06d6a0", display: "inline-block", animation: "pulse-dot 2s infinite" }} />
            Available
          </div>
          <button className="ham-btn" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: "0.25rem" }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: 20, height: 2, background: "#f0f0f4", borderRadius: 2,
                transform: i===0&&menuOpen ? "rotate(45deg) translate(5px,5px)" : i===2&&menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
                opacity: i===1&&menuOpen ? 0 : 1,
                transition: "all 0.25s"
              }} />
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", top: 60, left: 0, right: 0, zIndex: 199, background: "rgba(10,10,11,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "1.25rem 1.5rem 2rem" }}>
          {links.map(l => (
            <a key={l} href={"#" + l} onClick={() => setMenuOpen(false)}
              style={{ display: "block", color: "#9ca3af", textDecoration: "none", fontSize: "1.05rem", fontWeight: 500, textTransform: "capitalize", padding: "0.7rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {l}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ display: "inline-flex", marginTop: "1.25rem", padding: "0.7rem 1.5rem", borderRadius: "999px", background: "#3b82f6", color: "#fff", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none" }}>
            Get in Touch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desk-links { display: none !important; }
          .avail-pill { display: none !important; }
          .ham-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

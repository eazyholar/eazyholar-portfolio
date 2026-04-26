"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["about", "stack", "works", "contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0.9rem 1.25rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        backdropFilter: "blur(20px)",
        background: scrolled ? "rgba(14,14,16,0.95)" : "rgba(14,14,16,0.8)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.3s",
      }}>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#f0f0f4", zIndex: 2 }}>
          Ola<span style={{ color: "#3b82f6" }}>.</span>dev
        </div>

        {/* Desktop nav links */}
        <ul className="desktop-nav" style={{ listStyle: "none", display: "flex", gap: "2rem", margin: 0, padding: 0 }}>
          {links.map((item) => (
            <li key={item}>
              <a href={"#" + item} style={{ color: "#9ca3af", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500, textTransform: "capitalize" }}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop badge */}
        <div className="desktop-badge" style={{ display: "flex", alignItems: "center", gap: "0.4rem", background: "rgba(6,214,160,0.1)", border: "1px solid rgba(6,214,160,0.25)", borderRadius: "999px", padding: "0.3rem 0.75rem", fontSize: "0.75rem", color: "#06d6a0", fontWeight: 500 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06d6a0", display: "inline-block" }} />
          Available for Work
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem", display: "flex", flexDirection: "column", gap: 5, zIndex: 2 }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "#3b82f6" : "#f0f0f4", borderRadius: 2, transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none", transition: "all 0.25s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "transparent" : "#f0f0f4", borderRadius: 2, transition: "all 0.25s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "#3b82f6" : "#f0f0f4", borderRadius: 2, transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none", transition: "all 0.25s" }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 57, left: 0, right: 0, zIndex: 99,
          background: "rgba(14,14,16,0.98)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "1rem 1.25rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "0.25rem",
        }}>
          {links.map((item) => (
            <a
              key={item}
              href={"#" + item}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#9ca3af", textDecoration: "none", fontSize: "1rem", fontWeight: 500, textTransform: "capitalize", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              {item}
            </a>
          ))}
          <div style={{ marginTop: "0.75rem", display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(6,214,160,0.1)", border: "1px solid rgba(6,214,160,0.25)", borderRadius: "999px", padding: "0.4rem 0.9rem", fontSize: "0.8rem", color: "#06d6a0", fontWeight: 500, alignSelf: "flex-start" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06d6a0", display: "inline-block" }} />
            Available for Work
          </div>
        </div>
      )}

      <style>{`
        .hamburger { display: none !important; }
        .desktop-nav { display: flex !important; }
        .desktop-badge { display: flex !important; }

        @media (max-width: 640px) {
          .hamburger { display: flex !important; }
          .desktop-nav { display: none !important; }
          .desktop-badge { display: none !important; }
        }
      `}</style>
    </>
  );
}

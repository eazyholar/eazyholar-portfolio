"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const links = ["about", "stack", "works", "contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(20px)",
    background: scrolled ? "rgba(14,14,16,0.9)" : "rgba(14,14,16,0.75)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    transition: "background 0.3s",
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#f0f0f4" }}>
        Ola<span style={{ color: "#3b82f6" }}>.</span>dev
      </div>

      <ul style={{ listStyle: "none", display: "flex", gap: "2rem", margin: 0, padding: 0 }}>
        {links.map((item) => {
          return (
            <li key={item}>
              <a
                href={"#" + item}
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          background: "rgba(6,214,160,0.1)",
          border: "1px solid rgba(6,214,160,0.25)",
          borderRadius: "999px",
          padding: "0.3rem 0.75rem",
          fontSize: "0.75rem",
          color: "#06d6a0",
          fontWeight: 500,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06d6a0", display: "inline-block" }} />
        Available for Work
      </div>
    </nav>
  );
}

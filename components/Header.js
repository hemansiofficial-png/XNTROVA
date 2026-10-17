"use client";
import { useState, useEffect } from "react";
import { NAV, SITE } from "@/data/content";
export default function Header() {
  const [open, setOpen] = useState(false), [solid, setSolid] = useState(false);
  useEffect(() => { const f = () => setSolid(window.scrollY > 16); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <header className={`hdr ${solid ? "solid" : ""}`}>
      <div className="wrap hdr-in">
        <a href="#top" aria-label="Xntrova home"><img src={SITE.logo} alt="Xntrova" width="150" height="40" className="logo inv" /></a>
        <nav id="nav" className={open ? "open" : ""} aria-label="Main">
          {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="btn btn-sm nav-cta" href="#contact" onClick={() => setOpen(false)}>Free Audit</a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
    </header>
  );
}

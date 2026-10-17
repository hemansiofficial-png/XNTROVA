"use client";
import { useState, useEffect } from "react";
import { REVIEWS } from "@/data/content";
export default function Testimonials() {
  const [i, setI] = useState(0), [paused, setPaused] = useState(false);
  useEffect(() => { if (paused) return; const t = setInterval(() => setI(v => (v + 1) % REVIEWS.length), 6000); return () => clearInterval(t); }, [paused]);
  const [name, role, quote] = REVIEWS[i];
  return (
    <section id="reviews" className="sec" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="wrap narrow">
        <div className="head"><h2>Words from our clients</h2></div>
        <figure className="quote" aria-live="polite" key={i}>
          <blockquote>&ldquo;{quote}&rdquo;</blockquote>
          <figcaption><span className="avatar" aria-hidden="true">{name[0]}</span><strong>{name}</strong>, {role}</figcaption>
        </figure>
        <div className="dots" role="tablist" aria-label="Testimonials">
          {REVIEWS.map((r, k) => <button key={r[0]} role="tab" aria-selected={k === i} aria-label={`Review from ${r[0]}`} className={k === i ? "on" : ""} onClick={() => setI(k)} />)}
        </div>
      </div>
    </section>
  );
}

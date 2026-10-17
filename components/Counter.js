"use client";
import { useEffect, useRef, useState } from "react";
export default function Counter({ to, prefix = "", suffix = "" }) {
  const ref = useRef(null), [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      if (reduce) return setN(to);
      const t0 = performance.now(), step = (t) => { const p = Math.min((t - t0) / 1200, 1); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}

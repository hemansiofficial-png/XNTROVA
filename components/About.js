"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { PILLARS } from "@/data/content";

const FUNNEL = ["Visibility", "Engage", "Convert", "Measure"];

export default function About() {
  const [active, setActive] = useState(0);
  return (
    <section id="about" className="sec about">
      <div className="wrap about-grid">
        <Reveal className="about-visual">
          <div className="panel" role="img" aria-label="Growth chart showing rising results across visibility, engagement, conversion and measurement">
            <div className="panel-top"><span>Growth overview</span><span className="live">● Live</span></div>
            <svg className="chart" viewBox="0 0 400 200" aria-hidden="true">
              <defs><linearGradient id="aboutGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff6a3d" stopOpacity=".45" /><stop offset="1" stopColor="#ff6a3d" stopOpacity="0" /></linearGradient></defs>
              <path d="M0 50H400M0 100H400M0 150H400" stroke="rgba(255,255,255,.1)" />
              <path className="chart-area" d="M8 170C50 165 70 130 110 125S170 110 200 85S270 70 300 45S360 25 392 12L392 200L8 200Z" fill="url(#aboutGrad)" />
              <path className="chart-line" pathLength="1" d="M8 170C50 165 70 130 110 125S170 110 200 85S270 70 300 45S360 25 392 12" />
              <circle className="chart-dot" cx="392" cy="12" r="6" />
            </svg>
            <div className="bars">{FUNNEL.map((f, i) => <div key={f}><i style={{ "--h": `${38 + i * 20}%`, "--d": `${i * 120}ms` }} /><span>{f}</span></div>)}</div>
          </div>
          <div className="chip chip-a"><strong>+250%</strong><span>Organic traffic</span></div>
          <div className="chip chip-b"><strong>500+</strong><span>Happy clients</span></div>
        </Reveal>

        <Reveal className="about-copy">
          <p className="eyebrow">About Xntrova</p>
          <h2>Driven by ideas. <span className="hl">Focused on results.</span></h2>
          <p>We believe great marketing starts with understanding people. We combine creativity with data to build experiences that connect, engage and inspire action.</p>
          <ul className="pillars">
            {PILLARS.map(([t, d], i) => (
              <li key={t} className={i === active ? "on" : ""}>
                <button type="button" aria-expanded={i === active} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
                  <span className="pn">0{i + 1}</span><span>{t}</span>
                </button>
                <div className="pd"><p>{d}</p></div>
              </li>
            ))}
          </ul>
          <a className="btn" href="#contact">Let&rsquo;s grow together</a>
        </Reveal>
      </div>
    </section>
  );
}

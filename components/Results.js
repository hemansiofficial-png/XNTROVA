import Reveal from "./Reveal";
import Counter from "./Counter";
import { STATS, CASES } from "@/data/content";

const svg = (children) => <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>;
const STAT_ICONS = [
  svg(<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>),
  svg(<><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" /></>),
  svg(<><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M21 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8" /></>),
];
// Decorative banner lines (no data implied)
const LINES = [
  "M0 100C40 95 60 70 100 72S160 50 200 40S270 20 300 10",
  "M0 92C30 102 70 60 110 66S170 86 210 46S270 32 300 24",
  "M0 105C50 100 80 85 120 80S180 55 220 50S280 25 300 15",
];

export default function Results() {
  return (
    <section id="results" className="sec results">
      <div className="wrap">
        <Reveal className="head">
          <p className="eyebrow">Our results</p>
          <h2>Results that speak for themselves</h2>
          <p>Performance across the work we deliver for brands in India and beyond.</p>
        </Reveal>

        <div className="rstats">
          {STATS.map(([n, p, s, l], i) => (
            <Reveal className="rstat" key={l} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="ricon">{STAT_ICONS[i]}</span>
              <strong className="rnumber"><Counter to={n} prefix={p} suffix={s} /></strong>
              <span className="rlabel">{l}</span>
              <i className="rbar" aria-hidden="true" />
            </Reveal>
          ))}
        </div>

        <div className="grid g3">
          {CASES.map(([ind, svc, d], i) => (
            <Reveal as="article" className="rcase" key={ind} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className={`rbanner b${i}`}>
                <svg viewBox="0 0 300 120" preserveAspectRatio="none" aria-hidden="true">
                  <path className="rarea" d={`${LINES[i]}L300 120L0 120Z`} />
                  <path className="rline" pathLength="1" d={LINES[i]} />
                </svg>
                <span className="rpill">Case study</span>
                <span className="rnum" aria-hidden="true">0{i + 1}</span>
              </div>
              <div className="rbody">
                <h3>{ind}</h3>
                <p>{d}</p>
                <ul className="chips">{svc.split(" + ").map((c) => <li key={c}>{c}</li>)}</ul>
                <a href="#contact" className="rlink">Discuss a similar project <span aria-hidden="true">→</span></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

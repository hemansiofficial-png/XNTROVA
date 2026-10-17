import Reveal from "./Reveal";
import Counter from "./Counter";
import { STATS, CASES } from "@/data/content";
export default function Results() {
  return (
    <section id="results" className="sec alt">
      <div className="wrap">
        <Reveal className="head"><h2>Results that speak for themselves</h2><p>Performance across the work we deliver for brands in India and beyond.</p></Reveal>
        <div className="stats">{STATS.map(([n, p, s, l]) => <div key={l}><strong><Counter to={n} prefix={p} suffix={s} /></strong><span>{l}</span></div>)}</div>
        <div className="grid g3">
          {CASES.map(([ind, svc, d]) => (
            <Reveal as="article" className="card case" key={ind}>
              <p className="tag">{svc}</p><h3>{ind}</h3><p>{d}</p><a href="#contact" className="more">Discuss a similar project →</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

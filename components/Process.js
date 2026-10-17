import Reveal from "./Reveal";
import { STEPS } from "@/data/content";
export default function Process() {
  return (
    <section id="process" className="sec dark">
      <div className="wrap">
        <Reveal className="head"><h2>How we work</h2><p>A clear, collaborative process from first call to continuous growth.</p></Reveal>
        <ol className="steps">{STEPS.map(([t, d], i) => <Reveal as="li" key={t} style={{ transitionDelay: `${i * 80}ms` }}><span className="dot">{i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</ol>
      </div>
    </section>
  );
}

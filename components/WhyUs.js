import Reveal from "./Reveal";
import { BENEFITS } from "@/data/content";
export default function WhyUs() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal className="head"><h2>Why businesses choose Xntrova</h2><p>We do not rely on guesswork. We rely on transparency, collaboration and continuous improvement.</p></Reveal>
        <div className="grid g4">{BENEFITS.map(([t, d], i) => <Reveal className="benefit" key={t}><span className="num">0{i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { SERVICES } from "@/data/content";
export default function Services() {
  return (
    <section id="services" className="sec">
      <div className="wrap">
        <Reveal className="head"><h2>Digital marketing services for sustainable growth</h2><p>Solutions that unlock long-term growth for your business.</p></Reveal>
        <div className="grid g3">
          {SERVICES.map(([k, t, d, h, img], i) => (
            <Reveal as="article" className="card svc" key={t} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="svc-img"><img src={img} alt={`${t} service`} width="640" height="400" loading="lazy" /></div>
              <span className="tag" aria-hidden="true">{k}</span><h3>{t}</h3><p>{d}</p>
              <a href={h} className="more" aria-label={`Learn more about ${t}`}>Learn more →</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

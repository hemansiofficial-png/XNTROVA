import Reveal from "./Reveal";
import { FAQS } from "@/data/content";

const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };

export default function FAQ() {
  return (
    <section id="faq" className="sec alt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap">
        <Reveal className="head"><h2>Frequently asked questions</h2><p>Quick answers to common questions about working with us.</p></Reveal>
        <div className="faq-list">
          {FAQS.map(([q, a], i) => (
            <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

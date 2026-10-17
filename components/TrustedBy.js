import Reveal from "./Reveal";
import { CLIENT_ROWS } from "@/data/content";

const src = (v, f) => `https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v${v}/xntrova-wp-media/xntrova-wp-media/${f}`;
// Rows 1 and 3 move right, row 2 moves left. Four copies keep the track wider than any screen.
const ROWS = [{ dir: "right", dur: "50s" }, { dir: "left", dur: "42s" }, { dir: "right", dur: "55s" }];

export default function TrustedBy() {
  return (
    <section id="clients" className="sec alt trust">
      <div className="wrap">
        <Reveal className="head"><h2>Trusted by thousands of companies</h2><p>Brands across industries rely on Xntrova to grow their digital presence.</p></Reveal>
      </div>
      <div className="marquees">
        {CLIENT_ROWS.map((logos, r) => (
          <div key={r} className={`marquee ${ROWS[r].dir}`} style={{ "--dur": ROWS[r].dur }}>
            <div className="track">
              {[0, 1, 2, 3].map((c) => (
                <ul key={c} className="copy" aria-hidden={c > 0 ? "true" : undefined} aria-label={c === 0 ? `Client logos, row ${r + 1}` : undefined}>
                  {logos.map(([name, v, f]) => (
                    <li key={name} className="logo-item"><img src={src(v, f)} alt={c === 0 ? name : ""} width="140" height="56" loading="lazy" decoding="async" /></li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

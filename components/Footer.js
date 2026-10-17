import { SITE, SERVICES, NAV } from "@/data/content";
export default function Footer() {
  return (
    <footer className="ftr"><div className="wrap">
      <div className="fgrid">
        <div><img src={SITE.logo} alt="Xntrova" width="140" height="38" loading="lazy" className="logo inv" />
          <p className="m-5">India&rsquo;s premier B2B digital marketing agency, delivering growth-focused solutions for businesses across Delhi and beyond.</p></div>
        <div><h4>Services</h4><ul>{SERVICES.map(s => <li key={s[1]}><a href={s[3]}>{s[1]}</a></li>)}</ul></div>
        <div><h4>Company</h4><ul>{NAV.map(([l, h]) => <li key={h}><a href={h}>{l}</a></li>)}<li><a href="https://www.xntrova.com/careers/">Careers</a></li></ul></div>
        <div><h4>Get in touch</h4><ul><li>{SITE.address}</li><li><a href={`tel:${SITE.tel}`}>{SITE.phone}</a></li><li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li></ul>
          <p className="soc">{SITE.social.map(([n, h]) => <a key={n} href={h} target="_blank" rel="noopener noreferrer">{n}</a>)}</p></div>
      </div>
      <p className="copy">© 2026 Xntrova. All rights reserved. · <a href="https://www.xntrova.com/privacy-policy/">Privacy</a> · <a href="https://www.xntrova.com/terms-and-conditions/">Terms</a></p>
    </div></footer>
  );
}

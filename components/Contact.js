import LeadForm from "./LeadForm";
import { SITE } from "@/data/content";
export default function Contact() {
  return (
    <section id="contact" className="sec alt">
      <div className="wrap split">
        <div>
          <h2>Let&rsquo;s talk about your growth</h2>
          <p>Share a few details and our team will respond shortly with next steps.</p>
          <ul className="contact">
            <li><strong>Phone</strong><a href={`tel:${SITE.tel}`}>{SITE.phone}</a></li>
            <li><strong>Email</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><strong>Office</strong><span>{SITE.address}</span></li>
          </ul>
        </div>
        <LeadForm id="contact-form" />
      </div>
    </section>
  );
}

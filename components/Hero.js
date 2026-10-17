import LeadForm from "./LeadForm";
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-in">
        <div>
          <p className="eyebrow">Digital marketing agency · Delhi NCR</p>
          <h1>Scale your business with a digital marketing agency built for results</h1>
          <p className="lead">Connect with your ideal customers through SEO, paid media, content and web development, backed by creativity and data.</p>
          <div className="row"><a className="btn" href="#contact">Get Free Digital Audit</a><a className="btn ghost" href="#services">Explore Services</a></div>
          <ul className="proof"><li><strong>500+</strong> happy clients</li><li><strong>120+</strong> projects</li><li><strong>+250%</strong> organic traffic</li></ul>
        </div>
        <LeadForm id="hero" compact />
      </div>
    </section>
  );
}

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ  from "@/components/FAQ";
import { SITE } from "@/data/content";

const jsonLd = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Xntrova", url: "https://www.xntrova.com/",
  telephone: SITE.phone, email: SITE.email, address: { "@type": "PostalAddress", streetAddress: "A107, 2nd Floor, Sector 8, Dwarka", addressLocality: "New Delhi", postalCode: "110077", addressCountry: "IN" } };

export default function Home() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <TopBar /><Header /><main>
      <Hero /><Services /><About /><WhyUs /><Process /><Results /><Testimonials /><FAQ /><CTA /><Contact />
    </main><Footer />
    <a className="wa" href={SITE.whatsapp} aria-label="Chat with Xntrova on WhatsApp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
  </>);
}

import Arrow from "./Arrow";
import TextFx from "./TextFx";
export default function Footer() {
    return (<section className="ft" id="contact">
      <TextFx as="h2" className="fth">
        Planning a website or app<br />redesign? <span className="ac">Talk to our UI/UX team.</span>
      </TextFx>
      <p className="ftp">
        Call <a href="tel:+919048100233">+91 90481 00233</a> or message us on{" "}
        <a href="https://wa.me/919048100233" target="_blank" rel="noopener">WhatsApp</a>.
      </p>
      <div className="ftb">
        <a className="ob" href="tel:+919048100233">Book Your Free Consultation <Arrow /></a>
        <a className="wa" href="https://wa.me/919048100233" target="_blank" rel="noopener">Message on WhatsApp</a>
      </div>
    </section>);
}

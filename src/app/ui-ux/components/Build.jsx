"use client";
import Arrow from "./Arrow";
import TextFx from "./TextFx";
import { useReveal } from "../hooks/useReveal";
const WHY = [
    "One team for design, SEO and ads, so your site is built to rank and convert.",
    "Mobile-first design, because many of your visitors arrive on a phone.",
    "Clear communication and prompt support from a team you can reach directly.",
    "Design that fits your brand, backed by our creative and branding team.",
];
export default function Build() {
    const [ref, seen] = useReveal(0.2);
    return (<section className={`sx${seen ? " in" : ""}`} id="build" ref={ref}>
      <div className="sx1">
        <TextFx as="h2" className="sxh">
          A Web Design<br />Company in Kochi<br /><span className="ac">That Also Builds</span>
        </TextFx>
        <div className="sxr">
          <p>
            Many agencies hand over a design file and walk away. We are a web design company in Kochi with our own development team. Your approved design goes straight into WordPress, full-stack or e-commerce development, so nothing gets lost between design and launch. You deal with one team, one timeline and one point of contact.
          </p>
          <div className="tags">
            <span>WordPress Development</span>
            <span>E-commerce Solutions</span>
            <span>Fullstack Development</span>
          </div>
        </div>
      </div>

      <div className="pn">
        <div className="rb" aria-hidden="true">
          <div className="gl g1"><i /></div>
          <div className="gl g2"><i /></div>
          <div className="bw"><i /></div>
          <div className="swp"><i /></div>
        </div>
        <div className="pl">
          <TextFx as="h2" className="pnh">Industries We<br />Design For</TextFx>
          <p>
            Real estate, education, hospitality, healthcare and finance. We design for businesses where trust and clarity decide whether a visitor becomes a customer.
          </p>
        </div>
        <div className="pr">
          <h3>Why Choose Accolades<br />Integrated</h3>
          <ul>
            {WHY.map((w, i) => (<li key={i} style={{ "--d": `${500 + i * 120}ms` }}>{w}</li>))}
          </ul>
          <a className="ob" href="#contact">Get a Free UI/UX Consultation <Arrow /></a>
        </div>
      </div>

      <div className="sv2">
        <TextFx as="h2" className="sxh c">
          Serving Kochi, Kerala,<br />Mumbai <span className="ac">and All of India</span>
        </TextFx>
        <p>
          Real estate, education, hospitality, healthcare and finance. We design for businesses where trust and clarity decide whether a visitor becomes a customer.
        </p>
      </div>
    </section>);
}

"use client";
import { Fragment, useEffect, useRef } from "react";
import { initHero } from "../lib/heroScroll";
/** Headline: each character is its own span so it can be animated by scroll position. */
function Chars({ text }) {
    const words = text.split(" ");
    return (<>
      {words.map((w, wi) => (<Fragment key={wi}>
          <span className="hz" aria-hidden="true">
            {Array.from(w).map((c, i) => (<span className="hk" key={i}>{c}</span>))}
          </span>
          {wi < words.length - 1 && " "}
        </Fragment>))}
    </>);
}
/** Paragraph: each word sits in a mask so it can rise into view. */
function Words({ text }) {
    const words = text.trim().split(/\s+/);
    return (<>
      {words.map((w, i) => (<Fragment key={i}>
          <span className="w" aria-hidden="true"><span>{w}</span></span>
          {i < words.length - 1 && <span className="sp" aria-hidden="true"/>}
        </Fragment>))}
    </>);
}
const H1 = "UI/UX Design Agency in Kochi for Websites & Mobile Apps";
const P1 = "Accolades Integrated, a UI/UX Design Agency in Kochi, designs websites and apps that are easy to use and built to bring in enquiries. We serve businesses across Kerala, Mumbai and other parts of India.";
const H2 = "UI/UX Design Agency in Kochi for Brands That Want Results";
const P2 = "Confusing menus, crowded screens and unclear buttons make simple tasks difficult. A good-looking website is not enough. Visitors leave when they cannot find what they need. As a UI/UX design agency in Kochi, we design the full journey, from the first click to the enquiry form.";
export default function Hero() {
    const pin = useRef(null);
    const vid = useRef(null);
    const rail = useRef(null);
    const cue = useRef(null);
    const b1 = useRef(null);
    const b2 = useRef(null);
    useEffect(() => initHero({
        pin: pin.current, vid: vid.current, rail: rail.current, cue: cue.current,
        b1: b1.current, b2: b2.current,
    }), []);
    return (<section className="pin" id="pin" ref={pin}>
      <div className="stage">
        <video id="vid" ref={vid} muted playsInline preload="auto" aria-hidden="true"/>
        <div className="rail" aria-hidden="true"><i ref={rail}/></div>
        <div className="cue" ref={cue}><span>Scroll</span><b /></div>

        <div className="beat" id="blk1" ref={b1}>
          <h1 aria-label={H1}><Chars text={H1}/></h1>
          <p aria-label={P1}><Words text={P1}/></p>
          <div className="cta blk">
            <a className="btn p" href="#contact">Get a Free UI/UX Consultation</a>
            <a className="btn s" href="#contact">Discuss Your Project</a>
          </div>
        </div>

        <div className="beat" id="blk2" ref={b2}>
          <h2 aria-label={H2}><Chars text={H2}/></h2>
          <p aria-label={P2}><Words text={P2}/></p>
        </div>
      </div>
    </section>);
}

"use client";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import { SERVICES } from "../lib/data";
import { initHelix } from "../lib/helixScene";
// Titles are broken over two lines, as in the design
const TITLE_LINES = [
    ["Website & Landing Page", "UI/UX Design"],
    ["Mobile App", "UI/UX Design"],
    ["UX Research and", "Website Audits"],
    ["Wireframing and", "Prototyping"],
    ["SaaS, Web Application", "and Dashboard Design"],
    ["Website Redesign and", "Usability Improvements"],
];
export default function Services() {
    const track = useRef(null);
    const stage = useRef(null);
    const count = useRef(null);
    useEffect(() => initHelix({ track: track.current, stage: stage.current, count: count.current }, SERVICES), []);
    return (<section className="hx" id="services" aria-label="Our UI/UX Design Services">
      <div className="hx-track" ref={track}>
        <div className="hx-stage" ref={stage}>
          <div className="hx-ui">
            <div className="hx-top">
              <p className="hx-k">Services</p>
              <div className="hx-h" role="heading" aria-level={2}>Our UI/UX Design Services</div>
            </div>
            <div className="hx-copy">
              {SERVICES.map((s, i) => (<div className="hx-item" key={i}>
                  <div className="hx-t">
                    <span className="hx-n">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{TITLE_LINES[i][0]}<br />{TITLE_LINES[i][1]}</h3>
                  </div>
                  <p className="hx-d">{s.desc}</p>
                </div>))}
            </div>
            <div className="hx-bot">
              <span>Scroll to explore</span>
              <span ref={count}>01 / 06</span>
            </div>
          </div>
        </div>
      </div>
      <div className="svc">
        <p>Not sure which service you need?<br />Tell us your goal.</p>
        <a className="ob" href="#contact">Get a Free UI/UX Consultation <Arrow /></a>
      </div>
    </section>);
}

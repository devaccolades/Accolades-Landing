"use client";
import { useState } from "react";
import TextFx from "./TextFx";
import { useReveal } from "../hooks/useReveal";
import { FAQS } from "../lib/faq";
export default function Faq() {
    const [ref, seen] = useReveal(0.15);
    const [open, setOpen] = useState(0); // first answer starts open, like the original
    return (<section className={`fq${seen ? " in" : ""}`} id="faq" ref={ref}>
      <div className="fqL">
        <div>
          <p className="fqk">
            <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1.5c.7 6.2 4.3 9.8 10.5 10.5-6.2.7-9.8 4.3-10.5 10.5C11.3 16.3 7.7 12.7 1.5 12 7.7 11.3 11.3 7.7 12 1.5z" fill="#ffd400"/>
            </svg>{" "}
            FAQ
          </p>
          <TextFx as="h2" className="fqh">
            Frequently Asked<br />Questions <span className="ac">About UI/UX Design in Kochi</span>
          </TextFx>
        </div>
        <p className="fqs">Still have a question?<br />Call or message us.</p>
      </div>

      <div className="fqR">
        {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (<div className={`fi2${isOpen ? " open" : ""}`} style={{ "--d": `${i * 60}ms` }} key={i}>
              <h3>
                <button type="button" id={`fq${i}`} aria-expanded={isOpen} aria-controls={`fa${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                  {f.q}
                  <span className="pm" aria-hidden="true"><i /><i /></span>
                </button>
              </h3>
              <div className="fa" id={`fa${i}`} role="region" aria-labelledby={`fq${i}`}>
                <div><p>{f.a}</p></div>
              </div>
            </div>);
        })}
      </div>
    </section>);
}

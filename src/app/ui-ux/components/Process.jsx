"use client";
import { Fragment, useEffect } from "react";
import Arrow from "./Arrow";
import TextFx from "./TextFx";
import { useReveal } from "../hooks/useReveal";
import { initProcessCurrent } from "../lib/processCurrent";
import { STEP_ICON, TREE_ICON, TREE_PATHS } from "../lib/processPaths";
const STEPS = [
    { t: "Discover", d: "We learn your business, goals and audience." },
    { t: "Research", d: "We review your users, competitors and analytics." },
    { t: "Wireframe", d: "We map the structure and flow of every key page." },
    { t: "Design and Prototype", d: "We create the visuals and a clickable prototype." },
    { t: "Test and Hand Off", d: "We test with real users, refine the design and pass the files to development." },
];
const vars = (o) => o;
export default function Process() {
    const [ref, seen] = useReveal(0.25);
    useEffect(() => (ref.current ? initProcessCurrent(ref.current) : undefined), [ref]);
    return (<section className={`hw${seen ? " in" : ""}`} id="process" ref={ref}>
      <TextFx as="h2" className="hwh">How <span className="ac">We Design</span></TextFx>

      <div className="tree">
        <svg className="hwsvg" viewBox="37.25 0 812.5 232" aria-hidden="true">
          <defs>
            <linearGradient id="hwg" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="231">
              <stop offset="0" stopColor="#d6e9e6"/>
              <stop offset="1" stopColor="#74afb1"/>
            </linearGradient>
          </defs>
          {TREE_PATHS.map((d, i) => (<path key={`p${i}`} className="hwp" style={vars({ "--i": i })} d={d} pathLength={1} fill="none" stroke="url(#hwg)" strokeWidth={1.1}/>))}
          {TREE_PATHS.map((d, i) => (<Fragment key={`c${i}`}>
              <path className="hwc2" d={d} pathLength={1} fill="none" stroke="#ff6200" strokeWidth={4.5} opacity={0}/>
              <path className="hwc1" d={d} pathLength={1} fill="none" stroke="#ff6200" strokeWidth={2} strokeLinecap="round" opacity={0}/>
            </Fragment>))}
          {TREE_PATHS.map((_, i) => (<g className="hwi" opacity={0} key={`i${i}`}>
              <rect x={-12} y={-12} width={24} height={24} rx={6} fill="#ff6200"/>
              <path d={TREE_ICON} fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"/>
            </g>))}
        </svg>

        <ol className="hws">
          {STEPS.map((s, i) => (<li key={i} style={vars({ "--i": i, "--pd": `${(1.5 + i * 0.2).toFixed(2)}s` })}>
              <span className="mi">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d={STEP_ICON} transform="rotate(90 7 7)" stroke="#fff" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <em>{i + 1}.</em>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>))}
        </ol>
      </div>

      <div className="cta2 hwc">
        <p>Ready for step one? We start<br />with a short call.</p>
        <a className="tbtn" href="#contact">Book Free Consultation <Arrow /></a>
      </div>
    </section>);
}

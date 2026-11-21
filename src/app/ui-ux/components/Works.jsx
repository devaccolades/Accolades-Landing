"use client";
import { useEffect, useRef } from "react";
import Arrow from "./Arrow";
import { SHOWCASE_FRAMES, WORKS } from "../lib/data";
import { initScrollShowcase } from "../lib/scrollShowcase";
export default function Works() {
    const section = useRef(null);
    const stage = useRef(null);
    const bg = useRef(null);
    const world = useRef(null);
    const titles = useRef(null);
    const count = useRef(null);
    useEffect(() => initScrollShowcase({
        section: section.current, stage: stage.current, bg: bg.current,
        world: world.current, titlesEl: titles.current, count: count.current,
    }, SHOWCASE_FRAMES), []);
    return (<section className="works" id="works">
      <div className="ss" id="ss" ref={section} aria-label="Selected works" style={{ height: `${(WORKS.length - 1) * 130 + 110}vh` }}>
        <div className="ss-sticky" id="ssStage" ref={stage}>
          <canvas className="ss-bg" ref={bg} aria-hidden="true"/>
          <div className="ss-world" ref={world}>
            {WORKS.map((w, i) => (<div className="ss-plane" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={w.image} alt={`${w.name} – ${w.subtitle}`} decoding="async"/>
              </div>))}
          </div>
          <div className="ss-ui">
            <div className="ss-mid">
              <div className="ss-kicker">Selected works</div>
              <div ref={titles}>
                {WORKS.map((w, i) => (<div className="ss-t" key={i}>
                    <h3>{w.name}</h3>
                    <p>{w.subtitle}</p>
                    <a className="ss-pill" href={w.href}>View project</a>
                  </div>))}
              </div>
            </div>
            <div className="ss-bot">
              <span>Scroll to explore</span>
              <span ref={count}>01 / 06</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tst">
        <blockquote className="quote">
          “They are more than an agency.<br />They are a growth partner.”
        </blockquote>
        <p className="who">POST EDU, Mumbai</p>
        <div className="cta2">
          <p>Want a site like these? Start<br />with a free consultation.</p>
          <a className="tbtn" href="#contact">Discuss Your Projects <Arrow /></a>
        </div>
      </div>
    </section>);
}

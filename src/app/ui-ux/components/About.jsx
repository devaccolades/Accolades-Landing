"use client";
import { useEffect, useRef } from "react";
import TextFx from "./TextFx";
import { SERVICES } from "../lib/data";
import { initFolderScene } from "../lib/folderScene";
export default function About() {
    const sec = useRef(null);
    const scene = useRef(null);
    useEffect(() => {
        const services = document.getElementById("services");
        if (!sec.current || !scene.current || !services)
            return;
        return initFolderScene(sec.current, scene.current, services, SERVICES);
    }, []);
    return (<section className="about" id="about" ref={sec}>
      <div className="t">
        <p className="ak">About Us</p>
        <TextFx as="h2" className="ah">
          UI/UX Design Agency in Kochi <span className="ac">for Brands That Want Results</span>
        </TextFx>
        <p className="al">
          Confusing menus, crowded screens and unclear buttons make simple tasks difficult. A good-looking website is not enough. Visitors leave when they cannot find what they need. As a UI/UX design agency in Kochi, we design the full journey, from the first click to the enquiry form.
        </p>
      </div>
      <div className="ar">
        <p>
          Our approach focuses on understanding your business goals and user needs before shaping the design. Whether you are launching a new website, building a digital product or improving an existing interface, we help turn your ideas into clear and engaging digital experiences.
        </p>
      </div>
      <div className="stats">
        <div><b>2</b>Offices: Kochi<br />&amp; Mumbai</div>
        <div><b>5</b>Steps from discovery<br />to hand-off</div>
        <div><b>1</b>Team for design,<br />SEO &amp; ads</div>
      </div>
      {/* the folder line is drawn on a canvas that initFolderScene adds here */}
      <div className="scene" aria-hidden="true" ref={scene}/>
    </section>);
}

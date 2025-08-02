"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedTitle = ({ text }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current.querySelectorAll("span");

    gsap.from(chars, {
      y: -50,
      opacity: 0,
      rotation: () => gsap.utils.random(-80, 80),
      ease: "back.out(1.7)",
      duration: 1.2,
      stagger: 0.1,
    });
  }, []);

  return (
    <section className="">
      <h1
        className="creative bg-white text-center text-[#3FB4BA] text-[36px] md:text-[50px] lg:text-[64px] font-mont py-5 rounded-[30px] font-bold leading-[100%]"
        ref={titleRef}
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block"
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default AnimatedTitle;

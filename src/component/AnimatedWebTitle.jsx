"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedWebTitle = ({ text }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current.querySelectorAll("span");

    // Clear any previous animation
    gsap.killTweensOf(chars);

    // Animate characters like SplitText
    gsap.from(chars, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4.out",
      stagger: 0.04,
    });
  }, [text]);

  return (
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
  );
};

export default AnimatedWebTitle;

"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedPopTitle = ({ text }) => {
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const chars = titleRef.current.querySelectorAll(".char");

      gsap.from(chars, {
        scale: 0,
        opacity: 0,
        ease: "bounce.out",
        duration: 0.6,
        stagger: 0.06,
      });
    }, titleRef);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <section>
      <h1
        ref={titleRef}
        className="creative bg-white text-center text-[#3FB4BA] text-[36px] md:text-[50px] lg:text-[64px] font-mont py-5 rounded-[30px] font-bold leading-[100%]"
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-[6px]">
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="char inline-block">
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>
    </section>
  );
};

export default AnimatedPopTitle;

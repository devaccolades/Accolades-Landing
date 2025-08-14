


// "use client";
// import React, { useLayoutEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import Hero from "../../../../../public/web/fullstack.jpg";

// export default function FullstackHero() {
//   const titleRef = useRef(null);
//   const imageRef = useRef(null);
//   const textRef = useRef(null);

//   useLayoutEffect(() => {
//     // Keep your original title animation
//     const chars = titleRef.current.querySelectorAll("span span");
//     gsap.killTweensOf(chars);

//     const timeout = setTimeout(() => {
//       gsap.from(chars, {
//         x: 150,
//         opacity: 0,
//         duration: 0.7,
//         ease: "power4.out",
//         stagger: 0.04,
//       });
//     }, 50);

//     // New: animate text card
//     gsap.from(textRef.current, {
//       x: -50,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out",
//       delay: 0.6, // starts after title begins
//     });

//     // New: animate image
//     gsap.from(imageRef.current, {
//       y: 50,
//       opacity: 0,
//       duration: 0.8,
//       ease: "power3.out",
//       delay: 0.8, // slight stagger after text
//     });

//     return () => clearTimeout(timeout);
//   }, []);

//   const title = "Full-Stack Web Development";

//   return (
//     <div className="containers pt-20 pb-10">
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="bg-white rounded-[30px] py-6 px-4">
//           <h1
//             ref={titleRef}
//             className="text-[#3FB4BA] font-mont font-bold text-center leading-[130%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px]"
//           >
//             {title.split(" ").map((word, wordIndex) => (
//               <span
//                 key={wordIndex}
//                 className="inline-block whitespace-nowrap mr-[6px]"
//               >
//                 {word.split("").map((char, charIndex) => (
//                   <span
//                     key={charIndex}
//                     className="inline-block"
//                     style={{ display: "inline-block" }}
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </span>
//             ))}
//           </h1>
//         </div>

//         {/* Content Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-8 mt-10 items-center">
//           {/* Right Image */}
//           <div className="flex justify-center order-1 md:order-2" ref={imageRef}>
//             <Image
//               src={Hero}
//               alt="Web Development Illustration"
//               className="object-contain w-64 md:w-96 lg:w-[500px] h-auto rounded-2xl"
//               priority
//             />
//           </div>

//           {/* Left Text */}
//           <div
//             className="bg-white rounded-2xl shadow-md p-2 md:p-4 order-2 md:order-1"
//             ref={textRef}
//           >
//             <h2 className="text-[20px] lg:text-[30px] xl:text-[40px] leading-[130%] font-bold font-mont text-[#1eb2a6] mb-2">
//               End-to-End Web Development Solutions
//             </h2>
//             <p className="text-gray-700 font-mont text-[12px] lg:text-[14px] xl:text-[16px] leading-[130%]">
//               Scalable, secure, and modern web applications — custom-coded to
//               match your business.
//             </p>
//             <Link href="/contact-us">
//               <button className="mt-4 px-6 py-2 bg-[#4bb9af] text-white rounded-4xl font-mont font-semibold hover:bg-[#17a19b] transition-colors">
//                 Get a Creative Proposal
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "../../../../../public/web/fullstack.jpg";

export default function FullstackHero() {
  const title = "Full-Stack Web Development";

  // Variants for animations
  const titleContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04, // matches your GSAP stagger
      },
    },
  };

  const charVariant = {
    hidden: { x: 150, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
    },
  };

  const imageVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <div className="containers pt-20 pb-10">
      <div className="mx-auto ">
        {/* Header */}
        <div className="bg-white rounded-[30px] py-6 px-4">
          <motion.h1
            className="text-[#3FB4BA] font-mont font-bold text-center leading-[130%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px]"
            variants={titleContainer}
            initial="hidden"
            animate="visible"
          >
            {title.split(" ").map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block whitespace-nowrap mr-[6px]"
              >
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    variants={charVariant}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-8 mt-10 items-center">
          {/* Right Image */}
          <motion.div
            className="flex justify-center order-1 md:order-2"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={Hero}
              alt="Web Development Illustration"
              className="object-contain w-64 md:w-96 lg:w-[500px] h-auto rounded-2xl"
              priority
            />
          </motion.div>

          {/* Left Text */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-2 md:p-4 order-2 md:order-1"
            variants={textVariant}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-[20px] lg:text-[30px] xl:text-[40px] leading-[130%] font-bold font-mont text-[#1eb2a6] mb-2">
              End-to-End Web Development Solutions
            </h2>
            <p className="text-gray-700 font-mont text-[12px] lg:text-[14px] xl:text-[16px] leading-[130%]">
              Scalable, secure, and modern web applications — custom-coded to
              match your business.
            </p>
            <Link href="/contact-us">
              <button className="mt-4 px-6 py-2 bg-[#4bb9af] text-white rounded-4xl font-mont font-semibold hover:bg-[#17a19b] transition-colors">
                Get a Creative Proposal
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

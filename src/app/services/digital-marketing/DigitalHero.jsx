// import React from "react";
// import side from "../../../../public/digital/digi.jpg";
// import Image from "next/image";
// import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";

// const DigitalHero = () => {
//   return (
//     <section className="containers pt-[100px]">

//       <AnimatedPopTitle text={"Digital  Marketing"}/>
//       <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_1fr] py-[5%] items-center gap-5">
//         <div className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2">
//           <h3 className="text-[#3FB4BA] text-[24px] lg:text-[40px] font-bold leading-[120%]">
//             Full-Spectrum Digital Marketing Services: Target. Engage. Convert.
//           </h3>

//           <p className="text-[13px] md:text-[16px]  leading-[156%]">
//             At Accolades Integrated, we harness the power of digital to transform brands and accelerate business growth.
//            Our expert team blends strategy, creativity, and technology to deliver performance-driven digital marketing
//            solutions tailored to your goals. From Google Ads and Meta Campaigns to SEO, content creation, LinkedIn marketing,
//            and analytics—every service is built to boost visibility, engage audiences, and drive measurable results.
//           </p>
//         </div>
//         <div>
//           <Image src={side} alt="side-image" className="w-full h-auto" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DigitalHero;

"use client";

import React from "react";
import side from "../../../../public/digital/digi.jpg";
import Image from "next/image";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";
import { motion } from "framer-motion";

const DigitalHero = () => {
  return (
    <section className="containers pt-[100px]">
      <AnimatedPopTitle text={"Digital  Marketing"} />

      <div className="flex flex-col-reverse md:grid md:grid-cols-[60%_1fr] py-[5%] items-center gap-5">
        {/* Text Section */}
        <motion.div
          className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-[#3FB4BA] text-[24px] lg:text-[40px] font-bold leading-[120%]">
            Full-Spectrum Digital Marketing Services: Target. Engage. Convert.
          </h3>

          <p className="text-[13px] md:text-[16px] leading-[156%]">
            At Accolades Integrated, we harness the power of digital to
            transform brands and accelerate business growth. Our expert team
            blends strategy, creativity, and technology to deliver
            performance-driven digital marketing solutions tailored to your
            goals. From Google Ads and Meta Campaigns to SEO, content creation,
            LinkedIn marketing, and analytics—every service is built to boost
            visibility, engage audiences, and drive measurable results.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={side}
            alt="side-image"
            className="w-full h-auto"
            priority={false}
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalHero;

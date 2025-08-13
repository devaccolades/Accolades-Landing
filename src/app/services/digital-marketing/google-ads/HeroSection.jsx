// import Image from "next/image";
// import React from "react";
// import side from "../../../../../public/google/OBJECTS.png";
// import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";

// const HeroSection = () => {
//   return (
//     <section className="containers pt-[100px]">
      
//       <AnimatedPopTitle text={"Google Ads"} />
//       <div className="flex flex-col-reverse md:grid md:grid-cols-[55%_1fr] py-5 items-center gap-5">
//         <div className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2">
//           <h3 className="text-[16px] lg:text-[20px] leading-[100%] font-normal">
//             OUR COMMUNITY
//           </h3>
//           <h3 className="text-[#3FB4BA] text-[24px] lg:text-[36px] font-bold leading-[100%]">
//             We Are Optimists Who Love To Work Together
//           </h3>
//           <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
//             Google Ad is an online advertising service developed by Google to
//             help marketers contact their likely clients instantly. As we are a
//             precise google Adwords company in kochi, Kerala, and can efficiently
//             deliver a fundamental change in traffic statics and progressively
//             improve business within hours after a Google Ad account is naturally
//             created.
//           </p>
//           <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
//             To naturally obtain an appropriate position in business strategies,
//             it’s mandatory to make use of Google Ads. Just traffic is not the
//             familiar mantra towards a phenomenal success; relevant traffic
//             naturally needs climbing the stairs of considerable success. Now we
//             are the top Google ads partner Kerala. PPC advertising remains
//             comfortably as one such specific mode, through which traffic static
//             can be amended and also increase the considerable number of
//             successful conversions on those official websites which leads to
//             more sales and inquiries.
//           </p>
//           <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
//             Google Certified AddWords partner in Kerala
//           </p>
//         </div>
//         <div>
//           <Image src={side} alt="side-image" className="w-full h-auto" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




"use client";

import Image from "next/image";
import React from "react";
import side from "../../../../../public/google/OBJECTS.png";
import AnimatedPopTitle from "@/component/AnimatedDigitalTitle";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="containers pt-[100px]">
      <AnimatedPopTitle text={"Google Ads"} />

      <div className="flex flex-col-reverse md:grid md:grid-cols-[55%_1fr] py-5 items-center gap-5">

        {/* Text Content - Animate on load */}
        <motion.div
          className="flex flex-col font-mont bg-white p-5 lg:p-8 rounded-[30px] lg:space-y-3 space-y-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[16px] lg:text-[20px] leading-[100%] font-normal">
            OUR COMMUNITY
          </h3>
          <h3 className="text-[#3FB4BA] text-[20px] lg:text-[30px] font-bold leading-[100%]">
            We Are Optimists Who Love To Work Together
          </h3>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            Google Ad is an online advertising service developed by Google to help marketers contact their likely clients instantly...
          </p>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            To naturally obtain an appropriate position in business strategies...
          </p>
          <p className="text-[13px] md:text-[14px] xl:text-[18px] leading-[156%]">
            Google Certified AddWords partner in Kerala
          </p>
        </motion.div>

        {/* Image - Animate on load */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image src={side} alt="side-image" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

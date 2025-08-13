

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import img18 from "../../../../../public/seo/image18.svg";
import img19 from "../../../../../public/seo/image19.svg";
import img20 from "../../../../../public/seo/image20.svg";
import img21 from "../../../../../public/seo/image21.svg";
import img22 from "../../../../../public/seo/image22.svg";
import img23 from "../../../../../public/seo/image23.svg";
import img24 from "../../../../../public/seo/image24.svg";
import img26 from "../../../../../public/seo/image26.svg";
import img27 from "../../../../../public/seo/image27.svg";

const seoSteps = [
  { title: "Website audit", icon: img18 },
  { title: "Off-page optimization", icon: img19 },
  { title: "Keyword Research", icon: img21 },
  { title: "Competitor research", icon: img20 },
  { title: "Google Analytics analysis", icon: img23 },
  { title: "Google Webmaster Tools analysis", icon: img26 },
  { title: "Website redesign", icon: img22 },
  { title: "On-page Optimization", icon: img24 },
  { title: "Link Building", icon: img27 },
];

// Animation variants for container and cards
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section className="lg:pb-12 md:pb-10 pb-8 py-6">
      <div className="containers text-center">
        <motion.h2
          className="font-mont font-bold xl:text-[40px] lg:text-[34px] md:text-[28px] text-[22px] leading-[130%] text-[#3FB4BA] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our SEO Process
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {seoSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-2xl"
            >
              <Image
                src={step.icon}
                alt={step.title}
                className="mb-4 lg:size-[80px] md:size-[70px] size-[60px]"
              />
              <p className="font-mont font-semibold xl:text-[28px] leading-[100%] text-[#2C99B1]">
                {step.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

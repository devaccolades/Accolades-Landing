
"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../../../public/web/abes.png";
import img2 from "../../../../public/web/ablss.png";
import img3 from "../../../../public/web/arc.png";
import img4 from "../../../../public/web/atcc.png";
import img5 from "../../../../public/web/cidb.png";
import img6 from "../../../../public/web/ggc.png";
import img7 from "../../../../public/web/nabuil.png";
import img8 from "../../../../public/web/gtea.png";

const projects = [
  { title: "ABE SERVICES", image: img1, link: "https://abeservices.in/" },
  { title: "ABLS HUMAN RESOURCES", image: img2, link: "https://ablshumanresources.com/" },
  { title: "ALPHA ARC", image: img3, link: "https://alphaarc.in/" },
  { title: "ATC KODANAD", image: img4, link: "https://atckodanad.com/" },
  { title: "CIDBI", image: img5, link: "https://cidbi.com/" },
  { title: "GO GREEN COMPANY", image: img6, link: "https://ggc-travel.com/" },
  { title: "NATIONAL BUILDERS", image: img7, link: "https://nationalbuilders.in/" },
  { title: "GREEN TEA", image: img8, link: "https://greenteahotels.com/" },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WebsiteProjects() {
  return (
    <div
      className="pb-[150px] bg-[#f1f5f5]"
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <div>
        {/* Header Section */}
        <motion.div
          className="containers bg-white rounded-2xl shadow p-4 md:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-[#1eb2a6] mb-1">
            Web Projects
          </h2>
          <p className="text-gray-700 font-mont text-[13px] md:text-[14px] leading-relaxed">
            We craft digital spaces that elevate your brand. From builders and
            education websites to study abroad and many, our work spans diverse
            industries. Each site blends smart design, smooth flow, and solid
            tech. We help brands stand out and grow online with ease.
          </p>
        </motion.div>

        {/* Swiper Section */}
        <div className="mt-16 ml-[5%] lg:ml-[10%]">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 1.5, spaceBetween: 30 },
              1024: { slidesPerView: 2.3, spaceBetween: 50 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex flex-col items-center"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="relative w-full aspect-[3/4] block group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="rounded-md object-contain object-left mb-2"
                      />
                    </motion.div>
                  </a>
                  <h3 className="text-center font-mont text-sm md:text-base font-semibold text-gray-800 mt-4">
                    {project.title}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

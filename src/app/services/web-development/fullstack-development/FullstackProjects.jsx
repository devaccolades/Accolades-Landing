"use client";

import Image from "next/image";
import React from "react";
// import classic from "../../../../../../public/web/classic.png";
// import jugal from "../../../../../public/web/jugal.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import img1 from "../../../../../public/web/abes.png";
import img2 from "../../../../../public/web/ablss.png";
import img3 from "../../../../../public/web/arc.png";
import img4 from "../../../../../public/web/atcc.png";
import img5 from "../../../../../public/web/cidb.png";
import img6 from "../../../../../public/web/ggc.png";
import img7 from "../../../../../public/web/nabuil.png";
import img8 from "../../../../../public/web/gtea.png";

const projects = [
  {
    title: "ABE SERVICES",
    image: img1,
    link: "https://abeservices.in/",
  },

  {
    title: "ALPHA ARC",
    image: img3,
    link: "https://alphaarc.in/",
  },

  {
    title: "CIDBI",
    image: img5,
    link: "https://cidbi.com/",
  },

  // {
  //   title: "NATIONAL BUILDERS",
  //   image: img7,
  //   link: "https://nationalbuilders.in/",
  // },
];

export default function FullstackProjects() {
  return (


    <div
      className="bg-[#f1f5f5] -mb-[100px] pt-4 pb-[150px]"
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <div className="">
       
        <motion.div
          className="bg-white rounded-2xl shadow containers px-4 py-4 md:py-8 mx-3 md:mx-10 lg:mx-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-[#1eb2a6] mb-1 md:mb-4">
           Our Premium Web Projects
          </h2>
          <p className="text-gray-700 font-mont text-[13px] md:text-[14px] leading-relaxed">
            We build full stack websites that are smart, smooth, and secure.
            Each site runs fast and adapts well to any screen. Our code stacks
            scale with ease and handle real-world load. We turn concepts into
            high-performing digital platforms.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 ml-3 md:ml-10 lg:ml-26 xl:ml-38"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{ clickable:true}}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 1.5, spaceBetween: 30 },
              1024: { slidesPerView: 2.3, spaceBetween: 50 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex flex-col items-center pb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="relative w-full aspect-[3/4] block leading-none overflow-hidden text-[0]"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="rounded-md object-contain mb-2"
                    />
                  </a>
                  <h3 className="text-center font-mont text-sm md:text-base font-semibold text-black mt-2">
                    {project.title}
                  </h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>



      </div>


    </div>
  );
}

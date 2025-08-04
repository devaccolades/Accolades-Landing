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

  {
    title: "NATIONAL BUILDERS",
    image: img7,
    link: "https://nationalbuilders.in/",
  },
];

export default function FullstackProjects() {
  return (
   
    // <div className=" min-h-screen pb-4 bg-[#f1f5f5] pt-4 md:pb-16 md:pt-8 ">
     <div
      className="bg-[#f1f5f5] pt-4 pb-[100px]"
      style={{
        background: "linear-gradient(180deg, #F1F1F1 0%, #0199A4 100%)",
      }}
    >
      <div className="">
        <div className="bg-white rounded-2xl shadow containers px-4 py-4 md:py-8 mx-3 md:mx-10 lg:mx-20 ">
          <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-[#1eb2a6] mb-1 md:mb-4">
            Web Projects
          </h2>
          <p className="text-gray-700 font-mont text-[13px] md:text-[14px] leading-relaxed">
            We build full stack websites that are smart, smooth, and secure.
            Each site runs fast and adapts well to any screen. Our code stacks
            scale with ease and handle real-world load. We turn concepts into
            high-performing digital platforms.
          </p>
        </div>

        <div className="mt-10 ml-3 md:ml-10 lg:ml-26 xl:ml-38">
          <Swiper
            modules={[Navigation, Pagination]}
            // spaceBetween={1}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 50,
              },
            }}
          >
            {projects.map((project, index) => (
          
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full aspect-[3/4] block"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fit
                      className="rounded-md object-contain"
                    />
                  </a>
                  <h3 className="text-center font-mont text-sm md:text-base font-semibold text-gray-800 mt-2">
                    {project.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

     
    </div>
  );
}

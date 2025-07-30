"use client";

import Image from "next/image";
import React from "react";
import classic from "../../../../../public/web/classic.png";
import jugal from "../../../../../public/web/jugal.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import img1 from "../../../../../public/web/abe.jpg";
import img2 from "../../../../../public/web/abls.jpg";
import img3 from "../../../../../public/web/alpha.jpg";
import img4 from "../../../../../public/web/atc.jpg";
import img5 from "../../../../../public/web/cidbi.jpg";
import img6 from "../../../../../public/web/ggc.jpg";
import img7 from "../../../../../public/web/na-bu.jpg";
import img8 from "../../../../../public/web/green.jpg";

const projects = [
  {
    title: "ABE SERVICES",
    image: img1,
  },
  
  {
    title: "ALPHA ARC",
    image: img3,
  },
 
  {
    title: "CIDBI",
    image: img5,
  },
 
  {
    title: "NATIONAL BUILDERS",
    image: img7
  },
 
];


export default function FullstackProjects() {
  return (
   
    // <div className=" min-h-screen pb-4 bg-[#f1f5f5] pt-4 md:pb-16 md:pt-12 px-4 md:px-10 lg::px-20">
     <div className=" min-h-screen pb-4 bg-[#f1f5f5] pt-4 md:pb-16 md:pt-8 ">
      <div className="">
        <div className="bg-white rounded-2xl shadow p-4 md:p-8 mx-3 md:mx-10 lg:mx-20 ">

          <h2 className="text-[20px] lg:text-[26px] font-bold font-mont text-[#1eb2a6] mb-1 md:mb-4">Web Projects</h2>
          <p className="text-gray-700 font-mont text-[13px] md:text-[14px] leading-relaxed">
            Accolades is envisioned to cater the newest and finest web development
            solutions to businesses in Kerala. We perceive the worth of your
            investments, which is why our professional web development team is

          </p>
        </div>

        <div className="mt-10 ml-3 md:ml-10 lg:ml-22">
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
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-md shadow-lg object-cover"
                    />
                  </div>
                  <h3 className="text-center font-mont text-sm md:text-base font-semibold text-gray-800 mt-4">
                    {project.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="absolute bottom--1 left-0 w-full h-14 md:h-34 bg-gradient-to-t from-[#3FB4BA]/80 to-[#f1f5f5] pointer-events-none rounded-b-2xl" />
    </div>
  );
}
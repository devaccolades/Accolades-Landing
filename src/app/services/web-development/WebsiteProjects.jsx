"use client";

import Image from "next/image";
import React from "react";
import classic from "../../../../public/web/classic.png";
import jugal from "../../../../public/web/jugal.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "CLASSIC HOMES",
    image: classic,
  },
  {
    title: "JUGALBANDHI",
    image: jugal,
  },
  {
    title: "CLASSIC HOMES",
    image: classic,
  },
  {
    title: "JUGALBANDHI",
    image: jugal,
  },
  {
    title: "CLASSIC HOMES",
    image: classic,
  },
  {
    title: "JUGALBANDHI",
    image: jugal,
  },
  {
    title: "CLASSIC HOMES",
    image: classic,
  },
  {
    title: "JUGALBANDHI",
    image: jugal,
  },
];

export default function WebsiteFeatures() {
  return (
    // <div className="min-h-screen py-12 px-4 md:px-20">
       <div className=" min-h-screen py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow p-8">

            <h2 className="text-2xl font-bold font-mont text-[#1eb2a6] mb-4">Web Projects</h2>
            <p className="text-gray-700 font-mont text-sm leading-relaxed">
              Accolades is envisioned to cater the newest and finest web development
              solutions to businesses in Kerala. We perceive the worth of your
              investments, which is why our professional web development team is
             
            </p>
          </div>

         <div className="mt-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
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
    </div>
  );
}
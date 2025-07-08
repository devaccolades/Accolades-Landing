

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import play from "../../../public/images/play-circle.svg";
import c1 from "../../../public/images/client1.png";
import c2 from "../../../public/images/client2.png";
import national from '../../../public/images/national.png';
import cidbi from '../../../public/images/cidbi.png';

const videotestimonials = [
  { video: "/images/v-video.mp4", client: "Cidbi", video_thumbnail: c2, name: "Arun Menon", position: "Director", video_type: "Corporate Video" },
  { video: "/images/v-video.mp4", client: "Skyline Builders", video_thumbnail: c1, name: "Josbin Itty", position: "Marketing Manager", video_type: "Corporate Video" },
];

const textTestimonials = [
  { client: "Cidbi", logo: cidbi, profile_image: c2, description: "They understood our brand voice perfectly and translated it into a corporate video that still gets compliments a year later", name: "Arun Menon", position: "Director", video_type: "Corporate Video" },
  { client: "Skyline Builders", logo: national, profile_image: c1, description: "They understood our brand voice perfectly and translated it into a corporate video that still gets compliments a year later", name: "Josbin Itty", position: "Marketing Manager", video_type: "Corporate Video" },
];

const WhatOurClientsSay = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const combinedTestimonials = [];
  for (let i = 0; i < videotestimonials.length; i++) {
    combinedTestimonials.push({ type: "video", data: videotestimonials[i] });
    if (textTestimonials[i]) combinedTestimonials.push({ type: "text", data: textTestimonials[i] });
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Image src="/images/sidebar.png" alt="sidebar" width={63} height={63} />
          <p className="text-sm font-medium text-gray-600">Why Accolades</p>
          <Image src="/images/sidebar.png" alt="sidebar" width={63} height={63} className="rotate-180" />
        </div>
        <h2 className=" text-[20px] md:text-[40px] leading-[40px] font-zen md:text-4xl font-semibold">
          What Our Clients <span className="text-teal-600">Say</span>
        </h2>
      </div>

      <Swiper
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{ 768: { slidesPerView: 2.5 }, 1024: { slidesPerView: 3.5 } }}
      >
        {combinedTestimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <div className="relative h-[400px] md:h-[480px] w-[100%] mx-auto rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                {playingIndex === index ? (
                  <video
                    src={item.data.video}
                    controls
                    autoPlay
                    className="w-full h-full object-cover rounded-2xl"
                    onEnded={() => setPlayingIndex(null)}
                  />
                ) : (
                  <>
                    <Image src={item.data.video_thumbnail} alt={item.data.name} fill className="object-cover rounded-2xl" />
                    <Image
                      src={play}
                      alt="Play"
                      width={60}
                      height={60}
                      className="absolute inset-0 m-auto cursor-pointer hover:scale-105 transition"
                      onClick={() => setPlayingIndex(index)}
                    />
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white font-poppins text-xs px-3 py-1 rounded">
                      {item.data.name}<br />
                      <span className="text-[10px] text-gray-300 font-poppins">{item.data.position}</span>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="flex flex-col justify-between bg-[#f0f4f8] w-[100%] mx-auto rounded-2xl overflow-hidden shadow hover:shadow-lg transition h-[400px] md:h-[480px] p-6 text-left">
                <div className="flex items-start ">
                  <Image src={item.data.logo} alt="logo" width={80} height={80} className="object-contain" />
                  
                </div>
                <p className="text-black font-poppins text-[12px] md:text-[16px] leading-[140%]">{item.data.description}</p>
                <div className="flex items-center  gap-3 mt-4">
                  <Image src={item.data.profile_image} alt={item.data.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-poppins font-semibold">{item.data.name}</p>
                    <p className="text-xs font-poppins text-black">{item.data.position} - {item.data.video_type}</p>
                  </div>
                </div>
              </div>
            
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatOurClientsSay;
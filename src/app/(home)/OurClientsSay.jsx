
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
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
  const [progress, setProgress] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);

  const combinedTestimonials = [];
  for (let i = 0; i < videotestimonials.length; i++) {
    combinedTestimonials.push({ type: "video", data: videotestimonials[i] });
    if (textTestimonials[i]) combinedTestimonials.push({ type: "text", data: textTestimonials[i] });
  }

  return (
    <section className=" ml-0 md:ml-20 mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Image src="/images/sidebar.png" alt="sidebar" width={63} height={63} />
          <p className="text-sm font-medium text-gray-600">Testimonials</p>
          <Image src="/images/sidebar.png" alt="sidebar" width={63} height={63} className="rotate-180" />
        </div>
        <h2 className="text-[20px] md:text-[32px] lg:text-[40px] leading-[40px] font-zen md:text-4xl font-semibold">
          What Our Clients <span className="text-teal-600">Say</span>
        </h2>
      </div>

      <Swiper
        onProgress={(swiper, progress) => setProgress(progress)}
        className="pb-14"
        spaceBetween={12}
        slidesPerView={1.2}
        breakpoints={{ 768: { slidesPerView: 2.5 }, 1024: { slidesPerView: 3.5 } }}
        modules={[Pagination]}
        loop={true}
        pagination={{
          clickable: true,
          el: ".progress-bar-testimonial",
          type: "progressbar",
        }}
      >
        {combinedTestimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <div className="relative h-[400px] md:h-[480px] w-full rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                {playingIndex === index ? (
                  <>
                    {/* <video
                      src={item.data.video}
                      controls
                      autoPlay
                      
                      className="w-full h-full object-cover rounded-2xl"
                      onEnded={() => setPlayingIndex(null)}
                    /> */}
                    <video
                      src={item.data.video}
                      autoPlay
                      playsInline
                      controls
                      controlsList="nodownload nofullscreen noremoteplayback"
                      disablePictureInPicture
                      className="w-full h-full object-cover rounded-2xl"
                      onEnded={() => setPlayingIndex(null)}
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={item.data.video_thumbnail}
                      alt={item.data.name}
                      fill
                      className="object-cover rounded-2xl"
                    />
                    <Image
                      src={play}
                      alt="Play"
                      width={60}
                      height={60}
                      className="absolute inset-0 m-auto cursor-pointer hover:scale-105 transition z-20"
                      onClick={() => setPlayingIndex(index)}
                    />
                  </>
                )}

                {/* Bottom gradient shadow overlay */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/90 to-transparent z-10 rounded-b-2xl"></div>

                {/* Text above the gradient for clarity */}
                <div className="absolute bottom-4 left-4 text-white z-20">
                  <p className="font-medium">{item.data.name}</p>
                  <p className="text-sm">{item.data.position}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between bg-[#f0f4f8] w-full rounded-2xl overflow-hidden shadow hover:shadow-lg transition h-[400px] md:h-[480px] p-6 text-left">
                <div className="flex flex-col items-start">
                  <Image src={item.data.logo} alt="logo" width={80} height={80} className="object-contain  h-[80px] w-[80px]" />
                  <p className="text-black font-poppins text-[13px] md:text-[14px] lg:text-[16px] leading-[140%] mt-4">{item.data.description}</p>
                </div>
                {/* <p className="text-black font-poppins text-[12px] md:text-[16px] leading-[140%] mt-4">{item.data.description}</p> */}
                <div className="flex items-center gap-3 mt-4">
                  <Image src={item.data.profile_image} alt={item.data.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-[13px] md:text-[14px] lg:text-[16px] font-poppins font-semibold">{item.data.name}</p>
                    <p className="text-[12px] md:text-[13px] lg:text-[15px] font-poppins text-black">{item.data.position}</p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center mt-6">
        <div className="w-[200px] h-[6px] rounded-full bg-gray-300 overflow-hidden">
          <div
            className="h-full bg-teal-600 transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;

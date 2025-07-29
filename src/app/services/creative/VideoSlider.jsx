"use client";
import React from "react";
import Image from "next/image";
import iphoneFrame from "../../../../public/creative/Iphone 14 - 5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const videos = [
  "/creative/5948118_Smiling_Vertical_Video_720x1280.mp4",
  "/creative/5948118_Smiling_Vertical_Video_720x1280.mp4",
  "/creative/5948118_Smiling_Vertical_Video_720x1280.mp4",
  "/creative/5948118_Smiling_Vertical_Video_720x1280.mp4",
  "/creative/5948118_Smiling_Vertical_Video_720x1280.mp4",
  "/creative/5948118_Smiling_Vertical_Video_720x1280.mp4",
];

const VideoSlider = () => {
  return (
    <section className="w-full py-12 pl-[5%] lg:pl-0">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.3 },
          1280: { slidesPerView: 4.2 },
        }}
        loop
        autoplay={{ delay: 2000 }}
      >
        {videos.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative w-[220px]  md:w-[280px] lg:w-[300px] xl:w-[320px]">
              {/* Video screen inside phone frame */}
              <div
                className="absolute z-0 overflow-hidden rounded-[24px] "
                style={{
                  top: "2%",
                  left: "5%",
                  width: "89%",
                  height: "96%",
                }}
              >
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Phone PNG frame */}
              <Image
                src={iphoneFrame}
                alt="Phone Frame"
                className="w-full h-auto z-10 relative pointer-events-none"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VideoSlider;

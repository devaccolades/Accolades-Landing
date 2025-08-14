"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import iphoneFrame from "../../../../public/creative/Iphone 14 - 5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaPlay, FaPause } from "react-icons/fa";

const videos = [
  {
    video: "/creative/vid1.mp4",
    poster: "/creative/pos1.webp",
  },
  {
    video: "/creative/vid2.mp4",
    poster: "/creative/pos2.webp",
  },
  {
    video: "/creative/vid3.mp4",
    poster: "/creative/pos3.webp",
  },
  {
    video: "/creative/vid4.mp4",
    poster: "/creative/pos4.webp",
  },
  {
    video: "/creative/vid5.mp4",
    poster: "/creative/pos5.webp",
  },
];

const VideoSlider = () => {
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  const togglePlay = (index) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    // Toggle the clicked video
    if (currentVideo.paused) {
      currentVideo.muted = false;
      currentVideo.play();
      setPlayingIndex(index);
      swiperRef.current?.autoplay?.stop();
    } else {
      currentVideo.pause();
      setPlayingIndex(null);
      swiperRef.current?.autoplay?.start();
    }
  };

  return (
    <section className="w-full py-12 pl-[5%] lg:pl-0">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.3 },
          1280: { slidesPerView: 4.2 },
        }}
        autoplay={{ delay: 800, disableOnInteraction: false }}
      >
        {videos.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="relative w-[220px] md:w-[280px] lg:w-[300px] xl:w-[320px]">
              <div
                className="absolute z-0 overflow-hidden rounded-[24px] cursor-pointer group"
                style={{
                  top: "2%",
                  left: "5%",
                  width: "89%",
                  height: "96%",
                }}
                onClick={() => togglePlay(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={src.video}
                  loop
                  muted
                  preload="none"
                  poster={src.poster}
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
                <div className="absolute inset-0 flex items-center justify-center  bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {playingIndex === index ? (
                    <FaPause className="text-white text-3xl" />
                  ) : (
                    <FaPlay className="text-white text-3xl" />
                  )}
                </div>
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

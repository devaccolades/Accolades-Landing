"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import video1 from "../../../public/images/thumbnail.jpg";
import video2 from "../../../public/images/thumbnail.jpg";
import play from "../../../public/images/play-circle.svg";

const works = [
    { 
    src: "/videos/video1.mp4",
    thumbnail: video1,
    client: "Client name here",
    type: "Corporate video"
  },
  { 
    src: "/videos/video1.mp4",
    thumbnail: video2,
    client: "Client name here",
    type: "Corporate video"
  },
    { 
    src: "/videos/video1.mp4",
    thumbnail: video1,
    client: "Client name here",
    type: "Corporate video"
  },
  { 
    src: "/videos/video1.mp4",
    thumbnail: video2,
    client: "Client name here",
    type: "Corporate video"
  },
  { 
    src: "/videos/video1.mp4",
    thumbnail: video1,
    client: "Client name here",
    type: "Corporate video"
  },
  { 
    src: "/videos/video1.mp4",
    thumbnail: video2,
    client: "Client name here",
    type: "Corporate video"
  },
];

const FeaturedWorks = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="py-16 bg-white mx-auto">
      <div className=" mx-auto text-center px-4">
        <h2 className="text-3xl font-zen font-semibold mb-4">
          Featured <span className="text-teal-600">Works</span>
        </h2>
        <p className="font-poppins font-semibold text-[12px] md:text-[14px] leading-[156%] text-black mx-auto lg:mx-[150px] xl:mx-[250px]">
          Explore a selection of our most impactful video projects across formats like ad films, drone reels,
          corporate stories, and more. Each video is crafted to deliver not just visual appeal, but real business
          results—whether it's boosting visibility, engagement, or conversions.
        </p>
      </div>

      <div className="mt-10  mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => setPlayingIndex(index)}
              >
                {playingIndex === index ? (
                  <video
                    src={work.src}
                    controls
                    autoPlay
                    className="object-cover w-full h-full absolute inset-0"
                  />
                ) : (
                  <>
                    <Image
                      src={work.thumbnail}
                      alt={work.client}
                      fill
                      className="object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Play icon in bottom-right */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 opacity-90 group-hover:scale-105 transition">
                      <Image src={play} alt="Play icon" fill className="object-contain" />
                    </div>

                    {/* Text bottom left */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-medium">{work.client}</p>
                      <p className="text-sm">{work.type}</p>
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedWorks;

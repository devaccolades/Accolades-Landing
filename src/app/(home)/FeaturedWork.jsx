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
    src: "/images/video1.mp4",
    thumbnail: video1,
    client: "Client name here",
    type: "Corporate video"
  },
  {
    src: "/images/video1.mp4",
    thumbnail: video2,
    client: "Client name here",
    type: "Corporate video"
  },
  {
    src: "/images/video1.mp4",
    thumbnail: video1,
    client: "Client name here",
    type: "Corporate video"
  },
  {
    src: "/images/video1.mp4",
    thumbnail: video2,
    client: "Client name here",
    type: "Corporate video"
  },
  {
    src: "/images/video1.mp4",
    thumbnail: video1,
    client: "Client name here",
    type: "Corporate video"
  },
  {
    src: "/images/video1.mp4",
    thumbnail: video2,
    client: "Client name here",
    type: "Corporate video"
  },
];

const FeaturedWorks = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className=" py-6 bg-white mx-auto">
      <div className=" mx-auto text-center px-4">
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-zen font-semibold mb-4">
          Featured <span className="text-teal-600">Works</span>
        </h2>
        <p className="font-poppins font-semibold text-[12px] md:text-[14px] leading-[156%] text-black mx-auto lg:mx-[150px] xl:mx-[250px]">
          Explore a selection of our most impactful video projects across formats like ad films, drone reels,
          corporate stories, and more. Each video is crafted to deliver not just visual appeal, but real business
          results—whether it's boosting visibility, engagement, or conversions.
        </p>
      </div>

      <div className="mt-10 ml-0 md:ml-20  mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
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
                  <>
                    {/* <video
                      src={work.src}
                      controls
                      autoPlay
                      className="object-cover w-full h-full absolute inset-0"
                    /> */}
                    <video
                      src={work.src}
                      autoPlay
                      playsInline
                      controls
                      controlsList="nodownload nofullscreen noremoteplayback"
                      disablePictureInPicture
                      className="w-full h-full object-cover rounded-2xl"
                      onEnded={() => setPlayingIndex(null)}
                    />
                    {/* Black gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/0 to-transparent pointer-events-none" />
                    {/* Text bottom left */}
                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <p className="font-medium">{work.client}</p>
                      <p className="text-sm">{work.type}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={work.thumbnail}
                      alt={work.client}
                      fill
                      className="object-cover"
                    />

                    {/* Black gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

                    {/* Play icon in bottom-right */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 opacity-90 group-hover:scale-105 transition z-10">
                      <Image src={play} alt="Play icon" fill className="object-contain" />
                    </div>

                    {/* Text bottom left */}
                    <div className="absolute bottom-4 left-4 text-white z-10">
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

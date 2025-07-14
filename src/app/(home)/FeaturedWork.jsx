"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // ✅ Import motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import play from "../../../public/images/play-circle.svg";
import { BASE_URL } from "../Server";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeaturedWorks = ({ data }) => {
  const works = data.parterVideos;
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="py-6 bg-white mx-auto">
      {/* Title & Subtitle with animation */}
      <motion.div
        className="mx-auto text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-zen font-semibold mb-4">
          Featured <span className="text-teal-600">Works</span>
        </h2>
        <p className="font-poppins font-semibold text-[12px] md:text-[14px] leading-[156%] text-black mx-auto lg:mx-[150px] xl:mx-[250px]">
          {data.mainTitle}
        </p>
      </motion.div>

      {/* Video Cards (animated per card) */}
      <motion.div
        className="mt-10 ml-0 md:ml-20 mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
          className="w-full"
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={cardVariants}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => setPlayingIndex(index)}
              >
                {playingIndex === index ? (
                  <>
                    <video
                      src={BASE_URL + work.video.url}
                      autoPlay
                      playsInline
                      controls
                      controlsList="nodownload nofullscreen noremoteplayback"
                      disablePictureInPicture
                      className="w-full h-full object-cover rounded-2xl"
                      onEnded={() => setPlayingIndex(null)}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/0 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <p className="font-medium">{work.client}</p>
                      <p className="text-sm">{work.type}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={BASE_URL + work.image.url}
                      alt={work.image.id}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 right-4 w-10 h-10 opacity-90 group-hover:scale-105 transition z-10">
                      <Image
                        src={play}
                        alt="Play icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 text-white z-10">
                      <p className="font-medium">{work.clientName}</p>
                      <p className="text-sm">{work.videoType}</p>
                    </div>
                  </>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default FeaturedWorks;

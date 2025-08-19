"use client";
import Button from "@/component/Button";
import React, { useEffect, useRef, useState } from "react";
import phone from "../../../public/images/phone.webp";
import laptop from "../../../public/images/MacBook.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

function VideoServices({ data }) {
  console.log("data", data[0]);
  const [selected, setSelected] = useState(data[0].name);
  const contents = data;

  // Create refs and hover states for all videos
  const videoRefs = useRef({});
  const [hoverStates, setHoverStates] = useState({});

  const handleMouseEnter = (itemName, videoIndex) => {
    setHoverStates((prev) => ({
      ...prev,
      [`${itemName}-${videoIndex}`]: true,
    }));
    const ref = videoRefs.current[`${itemName}-${videoIndex}`];
    if (ref) {
      ref.currentTime = 0;
      ref.play().catch((e) => console.warn("Video play failed:", e));
    }
  };

  const handleMouseLeave = (itemName, videoIndex) => {
    setHoverStates((prev) => ({
      ...prev,
      [`${itemName}-${videoIndex}`]: false,
    }));
    const ref = videoRefs.current[`${itemName}-${videoIndex}`];
    if (ref) {
      ref.pause();
      ref.currentTime = 0;
    }
  };

  return (
    <section className="containers pb-10" id="videoSection">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-[24px] lg:text-[40px] leading-[40px] font-zen mb-[14px] lg:mb-6 font-bold"
      >
        Our Video <span className="text-[#0C7379]">Services</span>
      </motion.p>

      <motion.div
        className="flex gap-[20px] items-center overflow-x-scroll scrollbar-hidden p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {contents.map((item) => (
          <div key={item.name} className="text-center">
            {selected === item.name ? (
              <Button
                content={item.name}
                className="text-[12px] md:text-[13px] lg:text-[14px] px-[7px] py-[5px] md:px-[13px] md:py-[7px] xl:py-[13] xl:px-[17px] whitespace-nowrap"
              />
            ) : (
              <p
                onClick={() => setSelected(item.name)}
                className={`cursor-pointer text-[14px] font-medium whitespace-nowrap ${
                  selected === item ? "text-[#0C7379]" : "text-gray-700"
                }`}
              >
                {item.name}
              </p>
            )}
          </div>
        ))}
      </motion.div>

      <motion.p
        className="mt-[20px] text-[14px] font-medium leading-[156%] max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {" "}
        Our presentation videos are designed to simplify complex ideas and
        deliver polished, professional messages that resonate. Whether it's for
        internal meetings, investor pitches, or client onboarding, these videos
        help build trust and clarity—ultimately supporting better engagement and
        faster decision-making.
      </motion.p>

      <div>
        {contents.map((item) =>
          item.name === selected ? (
            <div key={item.name} className="mt-6 space-y-10">
              {/* Vertical videos (Swiper) */}
              {item.videos && (
                <Swiper
                  spaceBetween={20}
                  slidesPerView={"auto"}
                  className="!px-4 !justify-center"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView:
                        item.videos.some((v) => v.orientation === "vertical") &&
                        !item.videos.some((v) => v.orientation === "horizontal")
                          ? 2
                          : 1.2,
                    },
                    768: {
                      slidesPerView:
                        item.videos.some((v) => v.orientation === "vertical") &&
                        !item.videos.some((v) => v.orientation === "horizontal")
                          ? 2
                          : 1,
                    },
                    1024: {
                      slidesPerView:
                        item.videos.some((v) => v.orientation === "vertical") &&
                        !item.videos.some((v) => v.orientation === "horizontal")
                          ? 3
                          : 1.5,
                    },
                    1280: {
                      slidesPerView:
                        item.videos.some((v) => v.orientation === "vertical") &&
                        !item.videos.some((v) => v.orientation === "horizontal")
                          ? 4
                          : 1.5,
                    },
                    1536: {
                      slidesPerView:
                        item.videos.some((v) => v.orientation === "vertical") &&
                        !item.videos.some((v) => v.orientation === "horizontal")
                          ? 4
                          : 1.5,
                    },
                  }}
                >
                  <AnimatePresence mode="wait">
                    {item.videos.map((vid, index) => {
                      const videoKey = `${item.name}-${index}`;
                      const isHovered = hoverStates[videoKey] || false;
                      const isVertical = vid.orientation === "vertical";

                      return (
                        <motion.div
                          key={videoKey}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.15 }}
                          exit={{ opacity: 0, y: 30 }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <SwiperSlide
                            key={videoKey}
                            className={` ${
                              isVertical
                                ? "w-[255px]"
                                : "md:!w-[734.5px] md:!h-[425px] mt-[20px]"
                            }`}
                          >
                            <div
                              key={videoKey}
                              className="flex flex-col justify-center md:items-center"
                            >
                              <div
                                className={`relative top-0 ${
                                  isVertical
                                    ? "w-[255px] h-[512px]"
                                    : "w-[250px] h-[201px] md:w-[734px] md:h-[420px]"
                                }`}
                              >
                                <div
                                  className={`absolute  inset-0 overflow-hidden ${
                                    isVertical
                                      ? "rounded-[30px] mx-[10px] my-[10px]"
                                      : "-left-[68px] h-[170px] w-[245px]  rounded-[20px] mx-[70px] my-[0px] md:w-[570px] md:h-[425px] md:left-[0px] md:inset-0"
                                  } bg-black`}
                                  onMouseEnter={() =>
                                    handleMouseEnter(item.name, index)
                                  }
                                  onMouseLeave={() =>
                                    handleMouseLeave(item.name, index)
                                  }
                                >
                                  {!isHovered && (
                                    <Image
                                      src={vid.poster}
                                      alt="cover"
                                      fill
                                      className="object-cover transition-opacity duration-300"
                                    />
                                  )}
                                  {isHovered && (
                                    <video
                                      ref={(el) =>
                                        (videoRefs.current[videoKey] = el)
                                      }
                                      src={vid.video}
                                      className="absolute inset-0 w-full h-full object-contain"
                                      playsInline
                                    />
                                  )}
                                </div>
                                <Image
                                  src={isVertical ? phone : laptop}
                                  alt={
                                    isVertical ? "phone frame" : "laptop frame"
                                  }
                                  width={isVertical ? 255 : undefined}
                                  height={isVertical ? 512 : undefined}
                                  className={`absolute top-0 left-0 z-10 pointer-events-none ${
                                    isVertical
                                      ? "w-[255px] h-[512px]"
                                      : "  md:w-[704px] md:h-[425px] w-[250px] h-[180px] object-cover"
                                  }`}
                                />
                              </div>
                              <p className="ml-6 font-semibold text-[16px]">
                                {item.companyName}
                              </p>
                              <p className="ml-6 font-normal text-[16px]">
                                {item.videoType}
                              </p>
                            </div>
                          </SwiperSlide>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </Swiper>
              )}
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}

export default VideoServices;

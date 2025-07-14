"use client";
import Button from "@/component/Button";
import React, { useEffect, useRef, useState } from "react";
import phone from "../../../public/images/phone.png";
import laptop from "../../../public/images/MacBook Pro 14.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function VideoServices({ data }) {
  const [selected, setSelected] = useState(data[0].name);
  const contents = data;

  useEffect(() => {
    console.log("selected", selected, data);
  }, [selected]);

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
    <section className="containers py-10">
      <p className="text-[40px] leading-[40px] font-zen mb-6 font-bold">
        Our Video <span className="text-[#0C7379]">Services</span>
      </p>

      <div className="flex gap-[20px] items-center overflow-x-scroll">
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
      </div>

      <p className="mt-[20px] text-[14px] font-medium leading-[156%] max-w-4xl">
        Our presentation videos are designed to simplify complex ideas and
        deliver polished, professional messages that resonate. Whether it's for
        internal meetings, investor pitches, or client onboarding, these videos
        help build trust and clarity—ultimately supporting better engagement and
        faster decision-making.
      </p>

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
                          : 1
                          ,
                    },
                    1024: {
                      slidesPerView:
                        item.videos.some((v) => v.orientation === "vertical") &&
                        !item.videos.some((v) => v.orientation === "horizontal")
                          ? 2.5
                          : 1.5,
                    },
                    1280: {
                      slidesPerView:
                        item.videos.some((v) => v.orientation === "vertical") &&
                        !item.videos.some((v) => v.orientation === "horizontal")
                          ? 2.5
                          : 1.5,
                    },
                    1536: {
                      slidesPerView:
                        item.videos.some((v) => v.orientation === "vertical") &&
                        !item.videos.some((v) => v.orientation === "horizontal")
                          ? 2.5
                          : 1.5,
                    },
                  }}
                >
                  {item.videos.map((vid, index) => {
                    const videoKey = `${item.name}-${index}`;
                    const isHovered = hoverStates[videoKey] || false;
                    const isVertical = vid.orientation === "vertical";

                    return (
                      <SwiperSlide
                        key={index}
                        className={` ${
                          isVertical
                            ? "w-[255px]"
                            : " h-full w-full md:!w-[734.5px] md:!h-[425px] mt-[20px]"
                        }`}
                      >
                        <div className="flex flex-col justify-center md:items-center">
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
                                  : "-left-[55px] h-[170px] w-[245px]  rounded-[20px] mx-[70px] my-[0px] md:w-[570px] md:h-[425px] md:left-[0px] md:inset-0"
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
                                  muted
                                  playsInline
                                />
                              )}
                            </div>
                            <Image
                              src={isVertical ? phone : laptop}
                              alt={isVertical ? "phone frame" : "laptop frame"}
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
                    );
                  })}
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

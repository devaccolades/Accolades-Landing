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
  // console.log("data", data[0]);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState({});
  const [activeVideoKey, setActiveVideoKey] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const customOrder = [
    "Podcast",
    "Interactive",
    "Presentation Videos",
    "Events",
    "Animations",
    "Motion Graphics",
    "AI",
    "Drone Videos",
    "Corporate Videos"
  ];
  
  const contents = [...data].sort((a, b) => 
    customOrder.indexOf(a.name) - customOrder.indexOf(b.name)
  );

  useEffect(() => {
    if (!selected && contents.length > 0) {
      setSelected(contents[0].name);
      setActiveVideoKey(null);
    }
  }, [contents, selected]);

  const isYouTubeUrl = (url) =>
    typeof url === "string" && /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))/i.test(url);

  const getYouTubeEmbedUrl = (url, autoplay = false) => {
    if (!url || !isYouTubeUrl(url)) return url;

    let videoId = "";
    try {
      const parsed = new URL(url);
      videoId = parsed.searchParams.get("v");
      if (!videoId) {
        const pathMatch = parsed.pathname.match(/\/(?:embed|v|shorts)\/([^/?]+)/);
        if (pathMatch) videoId = pathMatch[1];
      }
    } catch (error) {
      if (typeof url === "string") {
        const fallbackMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^?&"'<>]+)/i);
        if (fallbackMatch) videoId = fallbackMatch[1];
      }
    }

    if (!videoId) return url;

    let embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&controls=0&iv_load_policy=3&cc_load_policy=0&modestbranding=1`;
    if (autoplay) {
      embedUrl += `&autoplay=1&mute=1&playlist=${videoId}&loop=1`;
    }
    return embedUrl;
  };

  const videoRefs = useRef({});

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([key, ref]) => {
      if (!ref) return;
      if (key === activeVideoKey) {
        if (typeof ref.play === "function") {
          ref.currentTime = 0;
          ref.play().catch((e) => console.warn("Video play failed:", e));
        }
      } else {
        if (typeof ref.pause === "function") {
          ref.pause();
          ref.currentTime = 0;
        }
      }
    });
  }, [activeVideoKey]);

  const handlePlayVideo = (videoKey) => {
    setActiveVideoKey(videoKey);
    const ref = videoRefs.current[videoKey];
    if (ref) {
      if (ref.requestFullscreen) {
        ref.requestFullscreen().catch((err) => {
          console.warn("Fullscreen request failed:", err);
        });
      } else if (ref.webkitRequestFullscreen) {
        ref.webkitRequestFullscreen();
      } else if (ref.mozRequestFullScreen) {
        ref.mozRequestFullScreen();
      } else if (ref.msRequestFullscreen) {
        ref.msRequestFullscreen();
      }

      if (typeof ref.play === "function") {
        ref.play().catch((e) => console.warn("Video play failed:", e));
      }
    }
  };

  const handleCategoryChange = (itemName, item) => {
    setSelected(itemName);
    setActiveVideoKey(null);
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
        className="flex gap-[20px] items-center overflow-x-scroll scrollbar-hidden"
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
                onClick={() => handleCategoryChange(item.name, item)}
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
        className="hidden md:flex mt-[20px] text-[14px] font-medium leading-[156%] max-w-4xl"
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
                  className="!justify-center"
                  breakpoints={{
                    0: {
                      slidesPerView: 1.1,
                    },
                    450:{
                      slidesPerView: 1.5,
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
                            onClick={() => handlePlayVideo(videoKey)}
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
                                {/* Loader */}
                                {loading[videoKey] && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin z-50"></div>
                                  </div>
                                )}
                                <div
                                  className={`absolute inset-0 overflow-hidden z-0 ${
                                    isVertical
                                      ? "rounded-[30px] mx-[10px] my-[10px]"
                                      : "-left-[68px] h-[170px] w-[245px] rounded-[20px] mx-[70px] my-[0px] md:w-[570px] md:h-[425px] md:left-[0px] md:inset-0"
                                  } bg-black`}
                                >
                                  {isYouTubeUrl(vid.video) ? (
                                    <iframe
                                      ref={(el) =>
                                        (videoRefs.current[videoKey] = el)
                                      }
                                      src={getYouTubeEmbedUrl(vid.video, videoKey === activeVideoKey)}
                                      title="YouTube video player"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      referrerPolicy="strict-origin-when-cross-origin"
                                      allowFullScreen
                                      className="absolute inset-0 h-full w-full object-fill"
                                      frameBorder="0"
                                    />
                                  ) : (
                                    <video
                                      ref={(el) =>
                                        (videoRefs.current[videoKey] = el)
                                      }
                                      onWaiting={() =>
                                        setLoading((prev) => ({
                                          ...prev,
                                          [videoKey]: true,
                                        }))
                                      }
                                      onCanPlay={() =>
                                        setLoading((prev) => ({
                                          ...prev,
                                          [videoKey]: false,
                                        }))
                                      }
                                      onPlaying={() =>
                                        setLoading((prev) => ({
                                          ...prev,
                                          [videoKey]: false,
                                        }))
                                      }
                                      src={vid.video}
                                      className="absolute inset-0 w-full h-full object-fill"
                                      playsInline
                                      muted
                                      controls
                                      controlsList="noremoteplayback"
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
                                  className={`absolute top-0 left-0 z-20 pointer-events-none ${
                                    isVertical
                                      ? "w-[255px] h-[512px]"
                                      : "  md:w-[704px] md:h-[425px] w-[250px] h-[180px] object-cover"
                                  }`}
                                />
                              </div>
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

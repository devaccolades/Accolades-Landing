"use client";
import Button from "@/component/Button";
import React, { useEffect, useRef, useState } from "react";
import phone from "../../../public/images/phone.png";
import cover1 from "../../../public/images/cover1.png";
import cover2 from "../../../public/images/cover2.png";
import cover3 from "../../../public/images/cover3.png";
import Image from "next/image";

function VideoServices({ data }) {
  console.log("data",data[0])
  const [selected, setSelected] = useState(data[0].companyName);
  const [isHovered, setIsHovered] = useState(false);

  const contents = data;
  useEffect(() => {
    console.log("selected", selected);
  }, [selected]);

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="containers py-10">
      <p className="text-[40px] leading-[40px] font-zen mb-6 font-bold">
        Our Video <span className="text-[#0C7379]">Services</span>
      </p>

      <div className="flex gap-[20px] items-center">
        {contents.map((item) => (
          <div key={item.name} className="text-center">
            {/* Video Item (clickable) */}
            {/* Show Button Only If Selected */}
            {selected === item.name ? (
              <Button
                content={item.name}
                className="px-3 py-2 xl:py-3 xl:px-4"
              />
            ) : (
              <p
                onClick={() => setSelected(item.name)}
                className={`cursor-pointer text-[14px] font-medium ${
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
        deliver polished, professional messages that resonate. Whether it’s for
        internal meetings, investor pitches, or client onboarding, these videos
        help build trust and clarity—ultimately supporting better engagement and
        faster decision-making.
      </p>

      <div>
        {contents.map((item) =>
          item.name === selected ? (
            <div
              key={item.name}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6"
            >
              {item.videos.map((vid, index) => {
                const [hovered, setHovered] = useState(false);
                const ref = useRef(null);

                const onEnter = () => {
                  setHovered(true);
                  if (ref.current) {
                    ref.current.currentTime = 0;
                    requestAnimationFrame(() => {
                      ref.current?.play().catch((e) => {
                        // Optional: log or handle user gesture restriction
                        console.warn("Playback failed", e);
                      });
                    });
                  }
                };

                const onLeave = () => {
                  setHovered(false);
                  if (ref.current) {
                    ref.current.pause();
                    ref.current.currentTime = 0;
                  }
                };

                return (
                  <div key={vid.video}>
                    <div className="relative w-[255px] h-[512px]">
                      <div
                        className="absolute inset-0 overflow-hidden rounded-[30px] mx-[10px] my-[10px] bg-black"
                        onMouseEnter={onEnter}
                        onMouseLeave={onLeave}
                      >
                        {!hovered && (
                          <Image
                            src={vid.poster}
                            alt="cover photo"
                            fill
                            className="object-cover transition-opacity duration-300"
                          />
                        )}
                        {hovered && (
                          <video
                            ref={ref}
                            src={vid.video}
                            className="absolute inset-0 w-full h-full object-contain"
                            muted
                            playsInline
                          />
                        )}
                      </div>

                      {/* Phone overlay */}
                      <Image
                        src={vid.orientation === "vertical" ? phone : ""}
                        alt="phone frame"
                        width={255}
                        height={512}
                        className="w-[255px] h-[512px] absolute top-0 left-0 z-10 pointer-events-none"
                      />
                    </div>
                    <p className="ml-6 font-semibold text-[16px]">
                      {item.companyName}
                    </p>
                    <p className="ml-6 font-normal text-[16px]">
                      {item.videoType}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}

export default VideoServices;

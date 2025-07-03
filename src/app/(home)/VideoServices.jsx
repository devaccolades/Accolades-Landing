"use client";
import Button from "@/component/Button";
import React, { useEffect, useState } from "react";
import phone from "../../../public/images/phone.png";
import Image from "next/image";

function VideoServices() {
  const [selected, setSelected] = useState("Presentation Videos");
  const contents = [
    {
      name: "Presentation Videos",
      videos: [
        {
          orientation: "vertical",
          video: "/videos/pres1.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres2.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres3.mp4",
        },
      ],
    },
    {
      name: "Drone Videos",
      videos: [
        {
          orientation: "vertical",
          video: "/videos/pres1.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres2.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres3.mp4",
        },
      ],
    },
    {
      name: "Corporate Videos",
      videos: [
        {
          orientation: "vertical",
          video: "/videos/pres1.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres2.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres3.mp4",
        },
      ],
    },
    {
      name: "Ad Films",
      videos: [
        {
          orientation: "vertical",
          video: "/videos/pres1.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres2.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres3.mp4",
        },
      ],
    },
    {
      name: "Skits",
      videos: [
        {
          orientation: "vertical",
          video: "/videos/pres1.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres2.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres3.mp4",
        },
      ],
    },
    {
      name: "Motion Graphics",
      videos: [
        {
          orientation: "vertical",
          video: "/videos/pres1.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres2.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres3.mp4",
        },
      ],
    },
    {
      name: "Testimonial Videos",
      videos: [
        {
          orientation: "vertical",
          video: "/videos/pres1.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres2.mp4",
        },
        {
          orientation: "vertical",
          video: "/videos/pres3.mp4",
        },
      ],
    },
  ];

  useEffect(() => {
    console.log("selected", selected);
  }, [selected]);

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
              <Button content={item.name} py={10} px={20} />
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
              {item.videos.map((vid, index) => (
                <div key={vid.video}>
                  <Image src={vid.orientation === "vertical" ? phone : ""} />
                  <video
                    key={index}
                    src={vid.video}
                    controls
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}

export default VideoServices;

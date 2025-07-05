"use client";

import Image from "next/image";
import React, { useState } from "react";

// Example image imports
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
];

const FeaturedWorks = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">
          Featured <span className="text-teal-600">Works</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore a selection of our most impactful video projects across formats like ad films, drone reels,
          corporate stories, and more. Each video is crafted to deliver not just visual appeal, but real business
          results—whether it's boosting visibility, engagement, or conversions.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 px-4">
        {works.map((work, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[300px] md:w-[350px] aspect-[4/3] rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition cursor-pointer"
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
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;

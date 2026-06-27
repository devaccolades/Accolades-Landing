"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Server";

const ScrollingRow = ({ direction = "up", video }) => {
  const [shuffledVideos, setShuffledVideos] = useState([]);

  useEffect(() => {
    function shuffleArray(array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }

    if (video && video.length) {
      setShuffledVideos(shuffleArray(video));
    }
  }, [video]);

  const animationClass =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  const scrollingStyle = {
    animationDuration: "20s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  };

  // Don't render anything on server (initial empty state)
  if (shuffledVideos.length === 0) return null;

  return (
    <div className="overflow-hidden h-full">
      <div
        className={`flex flex-col gap-4 ${animationClass}`}
        style={scrollingStyle}
      >
        {[...shuffledVideos, ...shuffledVideos].map((vid, i) => (
          <video
            key={vid.url + i}
            src={BASE_URL + vid.url}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-[300px] h-full object-cover"
            onClick={(e) => e.preventDefault()}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingRow;

import React from "react";
import { BASE_URL } from "../Server";

const ScrollingRow = ({ direction = "up", video }) => {

  function shuffleArray(array) {
  const newArray = [...array]; // clone the original array to avoid mutating
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

  console.log("that video",video)
  const videos = shuffleArray(video);
  const animationClass =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  const scrollingStyle = {
    animationDuration: "20s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  };

  return (
    <div className="overflow-hidden h-full">
      <div
        className={`flex flex-col gap-4 ${animationClass}`}
        style={scrollingStyle}
      >
        {[...videos, ...videos].map((video, i) => (
          <video
            key={i}
            src={BASE_URL + video.url}
            autoPlay
            loop
            muted
            className="rounded-lg w-[300px] h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingRow;

import React from "react";

const ScrollingRow = ({ direction = "up" }) => {
  const videos = [
    "/videos/video.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
    "/videos/video5.mp4",
    "/videos/video6.mp4",
  ];
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
            src={video}
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

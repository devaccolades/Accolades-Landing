"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// Same phone frame and embed settings as the Video Services section on /video-production.
// Shows the vertical thumbnail first and only loads the YouTube player once someone presses play.
export default function PhoneVideo({ videoId, title, className = "" }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative aspect-[1748/3532] ${className}`}>
      {/* Screen area of phone.webp: 5.4% in from each side, 2.35% from top and bottom */}
      <div className="absolute inset-x-[5.4%] inset-y-[2.35%] overflow-hidden rounded-[9%/4.2%] bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&iv_load_policy=3&cc_load_policy=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`} className="group absolute inset-0 cursor-pointer focus-visible:outline-3 focus-visible:-outline-offset-4 focus-visible:outline-[#ffed00]">
            <Image src={`https://i.ytimg.com/vi/${videoId}/oar2.jpg`} alt="" fill unoptimized className="object-cover" />
            <span aria-hidden="true" className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff0033] text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
              <Play size={26} fill="currentColor" className="ml-1" />
            </span>
          </button>
        )}
      </div>
      <Image src="/images/phone.webp" alt="" width={1748} height={3532} sizes="(max-width: 767px) 70vw, 300px" className="pointer-events-none absolute inset-0 z-10 h-full w-full" />
    </div>
  );
}

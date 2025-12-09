"use client";
import { useState } from "react";
import Image from "next/image";

export default function YoutubeMarketing() {
  const [play, setPlay] = useState(false);

  return (
    <section className="w-full bg-[#F6F6F8] rounded-3xl p-6 md:p-10">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1 rounded-full">
            <span>📺</span>
            <span className="text-sm font-medium">Video Platform</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">YOUTUBE MARKETING</h2>

          <p className="text-gray-600 leading-relaxed">
            YouTube is more than a video platform – it's the world's second-largest
            search engine after Google. Video is the top-performing content on
            social media, so having a strong YouTube presence is key.
          </p>

          {/* Feature Cards */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-red-500 text-white p-3 rounded-xl">
                🎬
              </div>
              <div>
                <h4 className="font-semibold text-lg">Engaging Video Content</h4>
                <p className="text-gray-600 text-sm">
                  Create demos, tutorials, and testimonials that educate and entertain your audience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-red-500 text-white p-3 rounded-xl">
                🔍
              </div>
              <div>
                <h4 className="font-semibold text-lg">SEO Optimized</h4>
                <p className="text-gray-600 text-sm">
                  We optimize titles, descriptions, and tags for search so people discover your videos naturally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — VIDEO PLAYER */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-black">
          {!play ? (
            <>
              {/* Thumbnail */}
              <Image
                src="/your-thumbnail.jpg"  // replace with your image
                alt="Video Thumbnail"
                fill
                className="object-cover"
              />

              {/* Play Button */}
              <button
                onClick={() => setPlay(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white/80 hover:bg-white p-4 rounded-full transition">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </button>
            </>
          ) : (
            // YouTube iframe autoplays
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}

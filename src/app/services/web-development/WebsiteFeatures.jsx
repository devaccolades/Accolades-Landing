"use client";

import Image from "next/image";
import React from "react";
import img from "../../../../public/web/respo.png";

const features = [
  {
    title: "RESPONSIVE WEBSITES",
    content:
      "A good responsive and device optimized website design has all the virtue to accumulate and retain your customers. People assume that a functional and responsive website design predicts the credibility of any business. We make running a responsive website at ease.",
  },
  {
    title: "OPTIMIZED FOR SEO",
    content:
      "We have helped our clients attain the best level of ranking with SEO optimized website design and content convert a lot of guests into customers. The data-driven approach and rock-solid expertise of operating within the identical domain have equipped us with enough wisdom and tactics to guide your business on the road of success.",
  },
  {
    title: "HOSTING AND DOMAIN",
    content:
      "Just having a gorgeous website style isn’t enough to succeed. If your website is continually down, if dozens of pages are bobbing up with 404 errors, or if your website loads slowly thanks to unoptimized pictures, you may lose customers. If you wish your digital front to be profitable, you would like a reliable web hosting service to confirm potential shoppers see what you have got to extend.",
  },
];



export default function WebsiteFeatures() {
  return (
      <div className=" min-h-screen py-12 px-4 md:px-26">
        <div className="bg-white py-1 rounded-2xl">
    <div
      className="bg-cover bg-no-repeat bg-center  rounded-2xl mx-4 my-4 py-12  px-4 md:px-20"
      style={{ backgroundImage: "url(/web/respo.png)" }}
    >
      {/* <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-7xl mx-auto p-6 md:p-10"> */}
        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image on the left */}
          <div className="flex justify-center order-1">
           
          </div>

          {/* Feature Cards on the right (aligned to end) */}
          <div className="flex flex-col gap-6 items-end order-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#e9f5fb] p-5 rounded-lg shadow max-w-md"
              >
                <h3 className="text-lg font-mont font-bold text-[#1eb2a6] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-mont text-gray-700">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
     </div>
  );
}

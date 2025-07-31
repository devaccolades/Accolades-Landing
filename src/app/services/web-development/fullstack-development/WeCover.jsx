"use client";
import React, { useState } from "react";
import Image from "next/image";
import react from "../../../../../public/web/react.png";
import next from "../../../../../public/web/next-js.png";
import postg from "../../../../../public/web/postgres.png";
import py from "../../../../../public/web/python.png";
import mg from "../../../../../public/web/mong.png";
import dj from "../../../../../public/web/dj2.png";
import st from "../../../../../public/web/strapi.png";
import sq from "../../../../../public/web/sql.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Tabs and Technologies Data
const techList = [
    {
        title: "React.js",
        logo: react,
        type: "frontend",
    },
    {
        title: "Next.js",
        logo: next,
        type: "frontend",
    },
    {
        title: "Python",
        logo: py,
        type: "backend",
    },
    {
        title: "Django",
        logo: dj,
        type: "backend",
    },
    {
        title: "Strapi",
        logo: st,
        type: "backend",
    },
    {
        title: "MongoDB",
        logo: mg,
        type: "database",
    },
    {
        title: "PostgreSQL",
        logo: postg,
        type: "database",
    },
    {
        title: "SQLite",
        logo: sq,
        type: "database",
    },
];

const tabs = [
    { label: "Frontend Frameworks", value: "frontend" },
    { label: "Backend Technologies", value: "backend" },
    { label: "Databases", value: "database" },
];

// Why Choose Our Stack Cards
const stackFeatures = [
    {
        icon: "🔗",
        title: "Scalable",
        description: "Designed to grow with traffic",
    },
    {
        icon: "🚀",
        title: "Fast Loading",
        description: "Lazy load, SSR, caching built-in",
    },
    {
        icon: "🔐",
        title: "Secure",
        description: "HTTPS, JWT, OAuth, SQL injection protection",
    },
];

export default function WhatWeCover() {
    const [selectedTab, setSelectedTab] = useState("frontend");

    return (
        <section className=" py-6 px-4 md:px-8 lg:px-20">
            {/* What We Cover Section */}
            <div className="max-w-7xl mx-auto mb-8 bg-white px-2 md:px-4  lg:px-8 py-6 md:py-4  lg:py-8 rounded-2xl shadow-lg">
                <h2 className="text-[20px] md:text-2xl font-bold font-mont text-[#1eb2a6] mb-4 md:mb-6">What We Cover</h2>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto scrollbar-hide">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setSelectedTab(tab.value)}
                            className={`px-4 py-2 rounded-full text-[12px] md:text-[14px] font-mont font-semibold border transition whitespace-nowrap ${selectedTab === tab.value
                                    ? "bg-[#1eb2a6] text-white"
                                    : "text-[#1eb2a6] border-[#1eb2a6]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                

                {/* Tech Logos */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    //   spaceBetween={2}
                    slidesPerView={1.5}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 6 },
                        1024: { slidesPerView: 8 },
                    }}
                    className="mb-6"
                >
                    {techList
                        .filter((item) => item.type === selectedTab)
                        .map((tech, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md h-full">
                                    <Image
                                        src={tech.logo}
                                        alt={tech.title}
                                        width={60}
                                        height={60}
                                        className="mb-2"
                                    />
                                    {/* <span className="text-[#1eb2a6] font-semibold">{tech.title}</span> */}
                                    <span className="text-sm font-mont text-gray-800 font-medium">
                                        {tech.title}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>

                {/* Description */}
                <p className="text-gray-600 font-mont text-[13px] md:text-[14px] leading-relaxed mt-4">
                    We build powerful apps using React.js and Next.js for fast and dynamic frontends. 
                    Our backend stack includes Python and Django, trusted for speed and security. 
                    We work with PostgreSQL and other databases to manage data with ease. Every layer 
                    is built to scale, load fast, and keep your data safe.
                </p>
            </div>

            {/* Why Choose Our Stack */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[20px] md:text-2xl font-mont font-bold text-[#1eb2a6] mb-2 md:mb-6 lg:mb-10">
                    Why Choose Our Stack
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 lg::gap-6">
                    {stackFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 lg:p-6 rounded-2xl shadow-md text-center"
                        >
                            <div className="flex items-center justify-center gap-x-2 mb-2">
        <div className="text-2xl">{feature.icon}</div>
        <h3 className="text-[#1eb2a6] font-mont font-semibold text-[16px] lg:text-lg">
          {feature.title}
        </h3>
      </div>
                            <p className="text-gray-600 font-mont text-[13px] lg:text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

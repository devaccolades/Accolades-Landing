"use client";

import { Megaphone, Search, BarChart3, Share2, FileText } from "lucide-react";
import Image from "next/image";

export default function DigitalMarketingServices() {
    const services = [
        {
            title: "Performance Marketing",
            link: "/services/digital-marketing/performance-marketing",
            tick: "/new-digital/check1.svg",
            description:
                "Performance Marketing runs all spend into measurable outcomes. As a data driven Digital Marketing Agency in Kochi, we run Smart PPC, SEO, SMM etc.",
            icon: <Megaphone size={20} />,
            color: "blue",
            deliver: [
                "PPC Campaign Management",
                "Display Advertising",
                "Video Ad Campaigns",
                "Retargeting & Remarketing",
                "Conversion Rate Optimization",
                "Landing Page Optimization",
            ],
        },
        {
            title: "Search Engine Marketing",
            link: "/services/digital-marketing/search-engine-marketing",
            tick: "/new-digital/check2.svg",
            description:
                "SEM covers customers who search to buy. As a specialist SEM Marketing Agency in Kochi, we use Google Ads and keyword research driven strategies.",
            icon: <Search size={20} />,
            color: "green",
            deliver: [
                "Google Ads Management",
                "Keyword Research & Bidding",
                "Ad Copy & A/B Testing",
                "Shopping Campaigns",
                "Local Search Ads",
                "Performance Tracking",
            ],
        },
        {
            title: "Search Engine Optimization",
            link: "/services/digital-marketing/seo",
            tick: "/new-digital/check3.svg",
            description:
                "As a SEO Marketing Agency in Kochi, we research keywords and do SEO tactics that boost organic traffic.",
            icon: <BarChart3 size={20} />,
            color: "purple",
            deliver: [
                "Technical SEO Audits",
                "On Page Optimization",
                "Link Building Strategy",
                "Local SEO",
                "Content Optimization",
                "Analytics & Reporting",
            ],
        },
        {
            title: "Social Media Marketing",
            link: "/services/digital-marketing/smm",
            tick: "/new-digital/check4.svg",
            description:
                "Social Media Marketing helps brands build presence and leads through Instagram, Facebook, LinkedIn & YouTube.",
            icon: <Share2 size={20} />,
            color: "orange",
            deliver: [
                "Facebook & Instagram Ads",
                "LinkedIn Campaign Management",
                "YouTube Advertising",
                "Social Media Strategy",
                "Community Management",
                "Influencer Partnerships",
            ],
        },
        {
            title: "Content Marketing",
            link: "/services/digital-marketing/content-marketing",
            tick: "/new-digital/check5.svg",
            description:
                "Content builds trust and drives organic traffic using blogs, videos, and social storytelling.",
            icon: <FileText size={20} />,
            color: "indigo",
            deliver: [
                "Content Strategy & Planning",
                "Blog Writing & SEO",
                "Video Content Production",
                "Social Media Content",
                "Email Marketing Campaigns",
                "Content Distribution",
            ],
        },
    ];

    const colorStyles = {
        blue: {
            bg: "bg-[#DBEAFE]",
            border: "border-[#155DFC]",
            btn: "bg-blue-600 hover:bg-blue-700",
            icon: "bg-blue-600",
        },
        green: {
            bg: "bg-[#D0FAE5]",
            border: "border-[#00B747]",
            btn: "bg-green-600 hover:bg-green-700",
            icon: "bg-green-600",
        },
        purple: {
            bg: "bg-[#F3E8FF]",
            border: "border-purple-200",
            btn: "bg-purple-600 hover:bg-purple-700",
            icon: "bg-[#A12FFF]",
        },
        orange: {
            bg: "bg-[#FFEDD4]",
            border: "border-orange-200",
            btn: "bg-orange-600 hover:bg-orange-700",
            icon: "bg-[#F54A00]",
        },
        indigo: {
            bg: "bg-[#E0E7FF]",
            border: "border-[#5D4AF6]",
            btn: "bg-indigo-600 hover:bg-indigo-700",
            icon: "bg-indigo-600",
        },
    };

    return (
        <section className="py-16 px-4 md:px-10 bg-white font-mont">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className=" text-center items-center justify-center mb-12">
                    <h2 className="text-center text-xl lg:text-2xl font-bold">
                        Our Digital Marketing Services — What We Do
                    </h2>
                    <p className="max-w-[690px] mx-auto items-center justify-center text-center mt-2 text-black font-semibold text-[14px] leading-[156%]">
                        We offer end to end digital marketing services for startups,
                        SMEs, and enterprises as a trusted Digital Marketing Agency in Kochi.
                        We integrate these services into a single growth plan and design
                        campaigns that work together.
                    </p>
                </div>

                {/* Service Cards */}
                <div className="space-y-4 lg:space-y-8">
                    {services.map((service, index) => {
                        const styles = colorStyles[service.color];

                        return (
                            <div
                                key={index}
                                className={`border rounded-2xl ${styles.border} overflow-hidden`}
                            >
                                <div className="grid md:grid-cols-2">
                                    {/* LEFT SIDE */}
                                    <div className="p-4 md:p-6 lg:p-8 bg-white">
                                        <div
                                            className={`w-10 h-10 flex items-center justify-center rounded-lg text-white mb-4 ${styles.icon}`}
                                        >
                                            {service.icon}
                                        </div>

                                        <h3 className="text-black font-semibold text-[16px] lg:text-[18px] leading-[18px]">
                                            {service.title}
                                        </h3>

                                        <p className="text-[#484848] text-sm mb-5 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <a
                                            href={service.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button
                                                className={`text-white px-5 py-2 rounded-lg text-sm transition ${styles.btn}`}
                                            >
                                                Get Started →
                                            </button>
                                        </a>
                                    </div>

                                    {/* RIGHT SIDE */}
                                    <div className={`${styles.bg} p-6 md:p-8`}>
                                        <h3 className="text-black font-semibold text-[16px] lg:text-[18px] leading-[18px] mb-2">What We Deliver</h3>

                                        <ul className="space-y-2 text-sm text-[#484848]">
                                            {service.deliver.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <Image
                                                        src={service.tick}
                                                        alt="tick"
                                                        width={16}
                                                        height={16}
                                                        className="mt-[3px]"
                                                    />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
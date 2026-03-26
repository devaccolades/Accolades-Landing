"use client";
import { motion } from "framer-motion"
import React from "react";
import float from "../../../public/home/floating.gif";
import Image from "next/image";
import digital from "../../../public/home/Frame 1171275626.webp";
import creative from "../../../public/home/Vector (1).webp";
import web from "../../../public/home/Frame 1171275625.webp";

const services = [
  {
    title: "Digital Marketing",
    description:
    "As a performance-led Branding Agency In Kochi, we design digital strategies that turn awareness into measurable growth. Our services combine SEO, SEM, performance marketing, social media advertising and content marketing to attract high-intent customers. We are one of the top Branding Companies in Kochi that businesses rely on to increase traffic, improve conversion rates. ",
      // "Grow your brand and achieve measurable results with us. Maximize your ROI with tailored digital marketing services online campaigns that drive impactful results.",

    bgColor: "bg-[#E5EEF0]", // Light blue
    textColor: "text-[#2C99B1]", // Darker blue
    icon: digital,
  },
  {
    title: "Creative Design",
    description:
    "We deliver logo design, visual identity systems, packaging, motion graphics and brand guidelines as a specialised Branding Agency In Kochi, tailored to your market. We focus on storytelling, typography and colour systems that communicate purpose and build emotional connection. Businesses trust us as one of the leading Branding Companies in Kochi to partner with. ",
    // "We provide creative design for social media and digital ads along with graphic designs like brochure, magazine ads to elevate your brand’s online presence.  ",
    
    bgColor: "bg-[#e1d4fa]", // Light Violet
    textColor: "text-[#64489e]", // Dark Violet
    icon: creative,
  },
  {
    title: "Web Development",
    description:
    "We build websites that blend elegant design with robust engineering.  As a trusted Branding Agency In Kochi, our web services include responsive WordPress sites, full-stack development, e-commerce platforms and CMS integrations with mobile-first UX. We also integrate secure payment gateways, analytics and  CRM. Clients choose our team among top Branding Companies in Kochi.",
      // "Get your website developed exactly to fit your business requirements. We build cross-browser compatible and responsive sites with the latest features for optimal performance.",
  
    bgColor: "bg-[#FDEFEF]", // Light pink
    textColor: "text-[#C94A4A]", // Darker red
    icon: web,
  },
];

const OurServices = () => {
  return (
    <>
      <section className="containers flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-10  ">
        <div className="w-full">
          <p className="text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[156%] font-mont font-normal">
           As a leading branding agency in Kochi, we deliver a complete suite of digital marketing solutions, 
           from Google & Meta Ads to web development and SEO. Our goal is to drive growth by crafting 
           personalized strategies for your brand’s success. Being one of the best branding companies in Kochi,
           we build brands that deliver measurable results. Our approach blends creative thinking with data-driven 
           insight. We make sure every step adds value, from defining your brand voice to executing campaigns that 
           convert. Whether you are launching a new business or refreshing an existing one, we create brand systems
            that look great and perform even better. Our services are in three main sections — Digital, Creative, and Web.
             These three zones ensure every brand touch point.
          </p>
        </div>
        <div className="relative w-full">
          <Image src={float} alt="gif" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-[15%]"
            
          >
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            >

            <h3 className="text-[36px] text-[#3F3F3F] font-normal leading-[100%]">
              We are the MARKETERS  {" "}
            </h3>
            <h3 className="text-[#3FB4BA] text-[48px] md:text-[50px] xl:text-[76px] font-semibold leading-[100%]">
              having a Tech
            </h3>
             <h3 className="font-bold text-[36px] md:text-[44px] xl:text-[64px] leading-[100%">
               POWERHOUSE
            </h3>
          </motion.div>
            </div>

        </div>
      </section>
      <section className="containers grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-5 pt-20 pb-10 ">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative p-4 rounded-[30px] text-center shadow-sm ${service.bgColor}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: index * 0.15, // stagger effect
          }}
          viewport={{ once: true }}
          >
            <div className="h-[100px] w-[100px] p-5 absolute -top-[18%] left-1/2 -translate-x-1/2 rounded-full bg-white">
              <Image
                src={service.icon}
                alt="icon"
                className={`h-full w-full object-contain object-center ${service.textColor}`}
              />
            </div>
            <h3
              className={`w-[70%] mx-auto leading-[100%] text-[20px] md:text-[22px] font-bold mb-4 pt-14 ${service.textColor}`}
            >
              {service.title}
            </h3>
            <p className="text-[#333] font-mont text-[14px] leading-[156%]">
              {service.description}
            </p>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default OurServices;

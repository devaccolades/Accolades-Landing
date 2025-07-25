import React from "react";
import float from "../../../public/home/floating.gif";
import Image from "next/image";
import digital from "../../../public/home/Frame 1171275626.svg";
import creative from "../../../public/home/Vector (1).svg";
import web from "../../../public/home/Frame 1171275625.svg";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Get ROI through digital marketing services, drive successful online marketing campaigns with our digital marketing services.",
    bgColor: "bg-[#E5EEF0]", // Light blue
    textColor: "text-[#2C99B1]", // Darker blue
    icon: digital,
  },
  {
    title: "Web Development",
    description:
      "Build fast, responsive websites and web apps tailored to your business goals and user needs.",
    bgColor: "bg-[#FDEFEF]", // Light pink
    textColor: "text-[#C94A4A]", // Darker red
    icon: web,
  },
  {
    title: "Content Creation",
    description:
      "Engage your audience with high-quality content that speaks to your brand and drives results.",
    bgColor: "bg-[#e1d4fa]", // Light Violet
    textColor: "text-[#64489e]", // Dark Violet
    icon: creative,
  },
];

const OurServices = () => {
  return (
    <>
      <section className="containers flex flex-col md:flex-row justify-between items-center gap-10  ">
        <div className="w-full">
          <p className="text-[14px] xl:text-[18px] font-mont font-normal">
            Accolades, the creative hub for digital marketing in Kerala, keenly
            takes care of your diverse internet marketing solutions for your
            business. Our services include Graphics Designing, Content
            Marketing, Google Ads, Meta Ads, Social Media Marketing, Web
            Development and SEO Services. We also undertake other conventional
            advertisements and offline event marketing too. As one of the top
            digital marketing company in Kochi, we help you grow your business
            by driving traffic to your website. Regardless of the business’s
            size we can convert visitors into your potential customers. We
            operate globally while being centralized in Kochi, Kerala and
            regional offices at Mumbai, Bengaluru, Trivandrum and Calicut.
          </p>
        </div>
        <div className="relative w-full">
          <Image src={float} alt="gif" className="w-full" />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-[15%]">
            <h3 className="text-[36px] text-[#3F3F3F] font-normal leading-[100%]">
              What we do{" "}
            </h3>
            <h3 className="text-[#3FB4BA] text-[48px] md:text-[56px] xl:text-[76px] font-semibold leading-[100%]">
              Our
            </h3>
            <h3 className="font-bold text-[48px] md:text-[64px] xl:text-[86px] leading-[100%">
              Services
            </h3>
          </div>
        </div>
      </section>
      <section className="containers grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 pt-20 pb-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-4 rounded-[30px] text-center shadow-sm ${service.bgColor}`}
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
          </div>
        ))}
      </section>
    </>
  );
};

export default OurServices;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ModalServices({ isOpen, onClose }) {
  //   const [isOpen, setIsOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState(0);

  const servicePages = {
    "Digital Marketing": {
      title: "Digital Services",
      href: "/services/digital-marketing",
      services: [
        {
          label: "Performance Marketing",
          href: "/services/digital-marketing/performance-marketing",
        },
        {
          label: "Search Engine Marketing",
          href: "/services/digital-marketing/search-engine-marketing",
        },
        {
          label: "Search Engine Optimization",
          href: "/services/digital-marketing/seo",
        },
        {
          label: "Social Media Marketing",
          href: "/services/digital-marketing/smm",
        },
        {
          label: "Content Marketing",
          href: "/services/digital-marketing/content-marketing",
        },
      ],
    },
    Creative: {
      title: "Creative Services",
      href: "/services/creative",
      services: [
        {
          label: "Graphics & Motion",
          href: "/services/creative/graphics-motion",
        },
        {
          label: "Branding & Packaging",
          href: "/services/creative/branding-packaging",
        },
        {
          label: "Video Production",
          href: "/services/creative/video-productions",
        },
      ],
    },
    "Web Development": {
      title: "Web Services",
      href: "/services/web-development",

      services: [
        {
          label: "FullStack Web Development",
          href: "/services/web-development/fullstack-development",
        },
        {
          label: "WordPress Pages",
          href: "/services/web-development/wordpress",
        },
        {
          label: "Ecommerce Website",
          href: "/services/web-development/ecommerce",
        },
      ],
    },
  };

  const mobileAdds = [
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <div className="relative z-50">
      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className=" h-screen w-full md:w-[45%] xl:w-[35%] bg-white absolute right-0 top-0 z-50 pl-[30px] pt-[64px] md:pl-[30px] lg:pl-[70px] pr-[40px] md:pt-[60px] lg:pt-[107px] pb-[50px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-5 right-5 z-50 text-black">
              <Image
                src={"/home/closing.svg"}
                className="h-[25px] w-[25px]"
                alt="close"
                width={100}
                height={100}
                onClick={onClose}
              />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="">
                <div className="flex gap-2 md:gap-5 justify-between items-center">
                  <Link href="/services">
                    <div className="flex gap-2 md:gap-5">
                      <p className="text-[10px] md:text-[13px] mt-2 md:mt-3">{`00`}</p>
                      <p className="font-monst text-[24px] lg:text-[40px] text-[#0C7379]">
                        Services
                      </p>
                    </div>
                  </Link>
                </div>

                {Object.keys(servicePages).map((services, index) => {
                  const page = servicePages[services];
                  return (
                    <div key={index} className="flex flex-col">
                      <div className="flex gap-2 md:gap-5 justify-between items-center">
                        <Link href={page.href}>
                          <div className="flex gap-2 md:gap-5 items-center cursor-pointer hover:opacity-80 transition">
                            <p className="text-[10px] md:text-[13px] mt-2 md:mt-3">{`0${
                              index + 1
                            }`}</p>
                            <p className="font-monst text-[24px] lg:text-[40px] text-[#0C7379]">
                              {services}
                            </p>
                          </div>
                        </Link>

                        <button>
                          <IoIosArrowDown
                            className={`text-[16px] md:text-[24px] ${
                              openIndex === index ? "rotate-180" : "rotate-0"
                            }`}
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                          />
                        </button>
                      </div>
                      {openIndex === index &&
                        page.services.map((service, index) => (
                          <Link href={service.href} key={index}>
                            <div className="ml-10 h-fit" key={index}>
                              <p className="capitalize text-[16px] lg:text-[20px] leading-[20px] md:leading-[43px] text-[#0C7379]">
                                {service.label}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  );
                })}
                <div className="">
                  <div className="md:hidden flex flex-col  md:gap-5 justify-between items-start">
                    {mobileAdds.map((item, index) => (
                      <Link href={item.href} key={index}>
                        <div className="flex gap-2 md:gap-5 items-center cursor-pointer hover:opacity-80 transition">
                          <p className="text-[10px] md:text-[13px] mt-2 md:mt-3">
                            {`0${index + 4}`}
                          </p>
                          <p className="font-monst text-[24px] lg:text-[40px] text-[#0C7379]">
                            {item.label}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10.84px] font-bold leading-[160%] tracking-[2%]">
                    Accolades Integrated Pvt Ltd
                  </p>
                  <div>
                    <p className="font-normal text-[12px] leading-[120%] tracking-[2%] max-w-[180px]">
                      Rahmath Building, 46/2056 - A, AKG Vayanasala Road,
                      Chakkaraparambu,Vennala, Kochi, Ernakulam, Kerala 682028
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10.84px] font-bold leading-[160%] tracking-[2%]">
                    Contact Us
                  </p>
                  <div className="flex flex-col gap-[5px]">
                    <p className="font-normal text-[12px] leading-[120%] tracking-[2%]">
                      +91 90726 19922, +91 87143 04849
                    </p>
                    <p className="font-normal text-[12px] leading-[120%] tracking-[2%]">
                      mail@accoladesmedia.co.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

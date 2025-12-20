"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/component/Button";
import line from "../../public/Group 1000005896.svg";
import halfLine from "../../public/Arrow 9.svg";
import mail from "../../public/2674096_object_email_web_essential_icon (2) 2.svg";
import call from "../../public/2849835_phone_telephone_cell_call_communication_icon 2.svg";
import insta from "../../public/social/2959748_instagram_photo_share_icon (1) 3.svg";
import x from "../../public/social/11244080_x_twitter_elon musk_twitter new logo_icon 3.svg";
import linkedin from "../../public/social/7156610_linkedin_social_media_icon (4) 3.svg";
import fb from "../../public/social/Group.svg";
import { motion } from "framer-motion";
import logo from "../../public/logos/Accolades_logo_TM-2048x376 2.svg";
import Link from "next/link";
import Modal from "@/component/Modal";

const icons = [
  { icon: x, link: "https://www.instagram.com/accolades_integrated/?hl=en" },
  {
    icon: insta,
    link: "https://www.instagram.com/accolades_integrated/?hl=en",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/company/accoladesintegrated/posts/?feedView=all",
  },
  { icon: fb, link: "https://www.facebook.com/accoladesmc/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <main className="bg-[#E4F2F2] py-6 md:py-10">
      <motion.section
        className="containers"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header Section */}
        <motion.div
          variants={fadeUp}
          className="flex justify-between items-center flex-wrap"
        >
          <div className="font-zen font-bold text-[28px] md:text-[36px] xl:text-[48px] leading-[100%] mb-3">
            <h4>
              Got a story to <span className="text-[#0C7379]">tell?</span>
            </h4>
            <p className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[120%] text-[#0C0902] mt-2">
              Let’s create a video that makes your brand unforgettable.
            </p>
          </div>
          <Button
            onClick={() => setModalOpen(true)}
            content="Book a call with our team"
            className="px-3 py-2 xl:py-3 xl:px-4"
          />
        </motion.div>

        {/* Divider */}
        <motion.div variants={fadeUp}>
          <Image
            src={line}
            alt="divider"
            className="w-full my-5 lg:my-10 object-cover bg-no-repeat"
          />
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-start"
        >
          {/* Left Section */}
          <motion.div
            variants={fadeUp}
            className="font-poppins space-y-2 md:space-y-4"
          >
            <Image src={logo} alt="Accolades Logo" />
            <h5 className="text-[#0C7379] text-[16px] md:text-[20px] font-semibold">
              Accolades Integrated Pvt Ltd
            </h5>
            <p className="text-[#0C0902] text-[15px]">
              Rahmath Building, 46/2056 - A | AKG Vayanasala Road,
              Chakkaraparambu, Kochi, Kerala 682028
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2">
                <Image src={mail} alt="email icon" />
                <p>mail@accoladesintegrated.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={call} alt="phone icon" />
                <p>+91 9048100233</p>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div variants={fadeUp}>
            <h5 className="text-[#0C7379] text-[16px] lg:text-[20px] font-semibold mb-2 md:mb-4">
              Other services
            </h5>
            <div className="flex gap-3 xl:gap-8 mb-6 flex-wrap">
              <ul className="list-disc list-inside text-[#0C0902] text-[14px] lg:text-[16px] font-semibold space-y-1">
                <li>Google Ads</li>
                <li>Search Engine Optimization</li>
                <li>Social Media Marketing</li>
              </ul>
              <ul className="list-disc list-inside text-[#0C0902] text-[14px] lg:text-[16px] font-semibold space-y-1">
                <li>Online Marketing</li>
                <li>Graphic Designing</li>
                <li>Web Development</li>
              </ul>
            </div>
            <Image src={halfLine} alt="divider" className="w-full mb-3" />
            <div className="flex gap-3">
              {icons.map((icon, index) => (
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div
                    key={index}
                    className="bg-[#0C7379] w-[40px] h-[30px] xl:w-[60px] xl:h-[50px] flex items-center justify-center rounded-[16px] xl:rounded-[20px]"
                  >
                    <Image
                      src={icon.icon}
                      alt={`social-${index}`}
                      className="w-[25px] xl:w-[30px] h-auto p-1"
                    />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          data={data}
        />
      </motion.section>
    </main>
  );
};

export default Footer;

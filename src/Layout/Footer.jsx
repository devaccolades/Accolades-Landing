import React from "react";
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

import logo from "../../public/logos/Accolades_logo_TM-2048x376 2.svg";

const icons = [x, insta, linkedin, fb];

const Footer = () => {
  return (
    <main className="bg-[#E4F2F2] py-6 md:py-10">
      <section className="containers">
        {/* Header Section */}
        <div className="flex justify-between items-center flex-wrap ">
          <div className="font-zen font-bold text-[28px] md:text-[36px] xl:text-[48px] leading-[100%] mb-3">
            <h4>
              Got a story to <span className="text-[#0C7379]">tell?</span>
            </h4>
            <p className="font-poppins font-normal text-[14px] lg:text-[16px] leading-[120%] text-[#0C0902] mt-2">
              Let’s create a video that makes your brand unforgettable.
            </p>
          </div>
          <Button
            content="Book a call with our team"
            className="px-3 py-2 xl:py-3 xl:px-4"
          />
        </div>

        {/* Divider */}
        <Image
          src={line}
          alt="divider"
          className="w-full my-5 lg:my-10 object-cover bg-no-repeat"
        />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-start">
          {/* Left Section */}
          <div className="font-poppins space-y-2 md:space-y-4">
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
                <p>mail@accoladesmedia.co.in</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={call} alt="phone icon" />
                <p>+91 9048100233</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h5 className="text-[#0C7379] text-[16px] lg:text-[20px] font-semibold mb-2 md:mb-4">
              Other services
            </h5>

            {/* Services List */}
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

            {/* Divider + Social Icons */}
            <Image src={halfLine} alt="divider" className="w-full mb-3" />
            <div className="flex gap-3">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="bg-[#0C7379] w-[40px] h-[30px] xl:w-[60px] xl:h-[50px] flex items-center justify-center rounded-[16px] xl:rounded-[20px]"
                >
                  <Image
                    src={icon}
                    alt={`social-${index}`}
                    className="w-[25px] xl:w-[30px] h-auto p-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;

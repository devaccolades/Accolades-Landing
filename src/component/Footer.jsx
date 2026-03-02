"use client";

import React from "react";
import Image from "next/image";

import logo from "../../public/accolades_logo1.svg";
// import cover from "../../public/Line 1 (1).svg";
import cover from "../../public/Line 1.webp";
import line from "../../public/Line 1 (3).webp";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative text-[#3C3C3C] pt-12 md:pt-28   overflow-hidden">
      <Image
        src={line}
        alt="mobile-line"
        className="absolute top-0 left-0 w-full h-full object-cover  block md:hidden "
      />
      <Image
        src={cover}
        alt="desktop-cover"
        className="absolute top-0 left-0 w-full h-full object-cover object-top  hidden md:block"
      />

      <div className=" containers relative flex flex-col md:flex-row md:justify-between gap-2 border-b border-gray-300 pb-10 items-center">
        <div className="md:w-[25%] space-y-2 text-center md:text-left">
          <div className="flex justify-center md:justify-start h-[70px] w-auto">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="h-full w-full "
            />
          </div>
          <p className="text-[13px] lg:text-[15px] font-mont leading-relaxed">
            The ultimatum of our work culture is to adequately provide our
            prospective clients with the required service that they promptly
            demand from us.
          </p>
        </div>
        
        <div className="hidden md:flex   md:flex-col lg:flex-row justify-center md:justify-between gap-15 md:gap-1 lg:gap-3 ">
          <div className="md:w-[15%]">
            <h4 className="font-semibold text-teal-700 font-mont mb-3 text-center md:text-left">
              Explore
            </h4>
            <ul className="space-y-2 text-center font-mont md:text-left text-[13px] lg:text-[15px]">
              <li>
                <a href="/" className="hover:text-teal-700 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-teal-700 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-teal-700 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-teal-700 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-teal-700 transition">
                  CaseStudy
                </a>
              </li>
              {/* <li>
                <a href="/blog-top-digital-marketing-companies" className="hover:text-teal-700 transition">
                  Blogs
                </a>
              </li> */}
            </ul>
          </div>

          <div className="md:w-[15%]">
            <h4 className="font-semibold font-mont text-teal-700 mb-3 text-center md:text-left">
              Branches
            </h4>
            <ul className="space-y-2 font-mont text-center md:text-left text-[13px] lg:text-[15px]">
              <li>Calicut</li>
              <li>Trivandrum</li>
              <li>Bengaluru</li>
              <li>Mumbai</li>
            </ul>
          </div>
        </div>

<div className="md:w-[40%] lg:w-[30%]  flex flex-col">
        {/* Address */}
        <div className=" text-center md:text-left">
          <h4 className="font-semibold font-mont text-teal-700 mt-3">
             Corporate Office
          </h4>
          <p className="text-[13px] lg:text-[15px] font-mont leading-relaxed mb-2">
            Accolades Integrated Pvt Ltd -
            Rahmath Building, 46/2056 - A, AKG Vayanasala Road, Chakkaraparambu,
          
            Near Holiday Inn, Kochi, Ernakulam, Kerala 682028
            <br />
             +91 90481 00233
          </p>
        </div>
         <div className=" text-center md:text-left">
          <h4 className="font-semibold font-mont text-teal-700 mt-3">
             Mumbai Office and Development Center
          </h4>
          <p className="text-[13px] lg:text-[15px] font-mont leading-relaxed">
            Accolades Integrated Pvt Ltd -
            301 | 3rd floor | Corporate Corner | Sundar Nagar | Malad West | Mumbai – 400064
            <br />
             +91 90726 19925
          </p>
        </div>
        </div>

        <div className="md:hidden grid grid-cols-2  md:flex-col lg:flex-row justify-center md:justify-between gap-15 md:gap-1 lg:gap-3 ">
          <div className="md:w-[15%]">
            <h4 className="font-semibold text-teal-700 font-mont mb-3 text-center md:text-left">
              Explore
            </h4>
            <ul className="space-y-2 text-center font-mont md:text-left text-[13px] lg:text-[15px]">
              <li>
                <a href="/" className="hover:text-teal-700 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-teal-700 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-teal-700 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-teal-700 transition">
                  Careers
                </a>
              </li>
              {/* <li>
                <a href="/blog-top-digital-marketing-companies" className="hover:text-teal-700 transition">
                  Blogs
                </a>
              </li> */}
            </ul>
          </div>

          <div className="md:w-[15%]">
            <h4 className="font-semibold font-mont text-teal-700 mb-3 text-center md:text-left">
              Branches
            </h4>
            <ul className="space-y-2 font-mont text-center md:text-left text-[13px] lg:text-[15px]">
              <li>Calicut</li>
              <li>Trivandrum</li>
              <li>Bengaluru</li>
              <li>Mumbai</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="containers py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4  px-2 relative">
        <p className="text-sm font-mont text-center md:text-left">
          © 2026 | All Rights Reserved
        </p>

        <p className="text-sm font-mont text-center md:text-left">
          <a
            href="mailto:mail@accoladesintegrated.com"
            className="hover:underline"
          >
            mail@accoladesintegrated.com
          </a>
        </p>

        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/accoladesmc/"
            className="p-2 border rounded-sm hover:bg-gray-100 transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://www.instagram.com/accolades_integrated"
            className="p-2 border rounded-sm hover:bg-gray-100 transition"
          >
            <FaInstagram size={16} />
          </a>
          {/* <a
            href="#"
            className="p-2 border rounded-sm hover:bg-gray-100 transition"
          >
            <FaXTwitter size={16} />
          </a> */}
          <a
            href="https://ca.linkedin.com/company/accoladesintegrated"
            className="p-2 border rounded-sm hover:bg-gray-100 transition"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
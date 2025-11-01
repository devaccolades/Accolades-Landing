"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../public/accolades_logo1.svg";
// import { IoIosArrowDown } from "react-icons/io";

import Link from "next/link";
import GlassSurface from "@/components/GlassSurface";
import ModalServices from "./ModalServices";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  // { label: "Services", href: "/services" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog-top-digital-marketing-companies" },
];

const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Blogs", href: "/blog-top-digital-marketing-companies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
  { label: "Services", href: "/services" },
];

const mobileServicePages = {
  digital: [
    {
      label: "Performance Marketing",
      href: "/services/digital-marketing/performance-marketing",
    },
    {
      label: "Search Engine Optimization",
      href: "/services/digital-marketing/seo",
    },
    {
      label: "Search Engine Marketing",
      href: "/services/digital-marketing/search-engine-marketing",
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
  web: [
    {
      label: "FullStack Web Development",
      href: "/services/web-development/fullstack-development",
    },
    { label: "WordPress Pages", href: "/services/web-development/wordpress" },
    { label: "Ecommerce Website", href: "/services/web-development/ecommerce" },
  ],
  creative: [
    { label: "Graphics & Motion", href: "/services/creative/graphics-motion" },
    {
      label: "Branding & Packaging",
      href: "/services/creative/branding-packaging",
    },
    { label: "Video Production", href: "/services/creative/video-productions" },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeServicePage, setActiveServicePage] = useState(null);
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [borderRadius, setBorderRadius] = useState(0);

  const pathName = usePathname();

  const servicesRef = useRef(null);
  const mainDropdownRef = useRef(null);

  // Service pages data
  const servicePages = {
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

  // Track screen height for responsive design
  useEffect(() => {
    const updateScreenHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    updateScreenHeight();
    window.addEventListener("resize", updateScreenHeight);

    return () => {
      window.removeEventListener("resize", updateScreenHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setActiveServicePage(null);
      }
      if (
        mainDropdownRef.current &&
        !mainDropdownRef.current.contains(event.target)
      ) {
        setIsMainDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [isMenuOpen]);

  const handleServiceHover = (service) => {
    setActiveServicePage(service);
  };

  const handleServiceLeave = () => {
    // Don't immediately close - let the dropdown's mouse leave handle it
  };

  useEffect(() => {
    // Set active based on pathName
    if (pathName === "/") {
      setActive("Home");
    } else if (pathName.includes("/services")) {
      setActive("Services");
    } else if (pathName.includes("/about-us")) {
      setActive("About Us");
    } else if (pathName.includes("/contact-us")) {
      setActive("Contact Us");
    }
  }, []);

  const handleService = (context) => {
    setIsModalOpen(true);
    setActive(context);
  };

  // Determine if it's a short screen (like landscape phones)
  const isShortScreen = screenHeight < 600;
  const isMediumScreen = screenHeight >= 600 && screenHeight < 800;
  const isTallScreen = screenHeight >= 800;

  return (
    <>
      <nav className="hidden lg:block sticky top-[10px] md:top-10 containers z-50">
        <GlassSurface
          width={"100%"}
          height={59}
          borderRadius={16}
          backgroundOpacity={0.1}
          saturation={1}
          borderWidth={0.07}
          brightness={"50%"}
          backgroundOpacity={0.01}
          opacity={0.91}
          blur={"11px"}
          displace={0.5}
          distortionScale={-180}
          redOffset={0}
          greenOffset={0}
          blueOffset={0}
          className="my-custom-class"
        >
          {/* <Link href="/"> */}
            <Image
              src={logo}
              alt="logo"
              height={100}
              width={100}
              priority
              className="h-[28px] w-full object-contain md:w-[205px] md:h-[38px] cursor-pointer"
            />
          {/* </Link> */}
          <div className="hidden lg:flex items-center gap-[40px]">
            <Link href="/">
              <p
                className={`text-[16px] leading-[100%] font-semibold cursor-pointer ${
                  active === "Home" ? "text-[#0C7379]" : ""
                }`}
                onClick={(e) => setActive(e.target.textContent)}
              >
                Home
              </p>
            </Link>
            <p
              className={`text-[16px] leading-[100%] font-semibold cursor-pointer ${
                active === "Services" ? "text-[#0C7379]" : ""
              }`}
              onClick={(e) => handleService(e.target.textContent)}
            >
              Services
            </p>
            <Link href="/about-us">
              <p
                className={`text-[16px] leading-[100%] font-semibold cursor-pointer ${
                  active === "About Us" ? "text-[#0C7379]" : ""
                }`}
                onClick={(e) => setActive(e.target.textContent)}
              >
                About Us
              </p>
            </Link>
            <Link href="/contact-us">
              <p
                className={`text-[16px] leading-[100%] font-semibold cursor-pointer ${
                  active === "Contact Us" ? "text-[#0C7379]" : ""
                }`}
                onClick={(e) => setActive(e.target.textContent)}
              >
                Contact Us
              </p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <button className="bg-[#0C7379] py-[8px] px-[12px] md:py-[10px] md:px-[16px] text-white rounded-[10px] text-[12px] md:text-[16px] font-bold leading-[100%] cursor-pointer">
              WhatsApp now
            </button>
            <div className="md:hidden">
              <Image
                src={"/home/nav.svg"}
                width={100}
                height={100}
                alt="image"
                className="h-[13px] w-[22px]"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </GlassSurface>
      </nav>

      {/* for mobile view */}
      <nav className="lg:hidden sticky top-[10px] md:top-10 containers z-50">
        <GlassSurface
          width={"100%"}
          height={52}
          borderRadius={16}
          backgroundOpacity={0.1}
          saturation={1}
          borderWidth={0.07}
          brightness={"50%"}
          backgroundOpacity={0.01}
          opacity={0.91}
          blur={"11px"}
          displace={0.5}
          distortionScale={-180}
          redOffset={0}
          greenOffset={0}
          blueOffset={0}
          className="my-custom-class"
        >
          {/* <Link href="/"> */}
            <Image
              src={logo}
              alt="logo"
              height={500}
              width={500}
              priority
              className="h-[30px] w-full  md:w-[205px] md:h-[38px] cursor-pointer"
            />
          {/* </Link> */}
          <div className="hidden lg:flex items-center gap-[40px]">
            <Link href="/">
              <p
                className={`text-[16px] leading-[100%] font-semibold cursor-pointer ${
                  active === "Home" ? "text-[#0C7379]" : ""
                }`}
                onClick={(e) => setActive(e.target.textContent)}
              >
                Home
              </p>
            </Link>
            <p
              className={`text-[16px] leading-[100%] font-semibold cursor-pointer ${
                active === "Services" ? "text-[#0C7379]" : ""
              }`}
              onClick={(e) => handleService(e.target.textContent)}
            >
              Services
            </p>
            <Link href="/about-us">
              <p
                className={`text-[16px] leading-[100%] font-semibold cursor-pointer ${
                  active === "About Us" ? "text-[#0C7379]" : ""
                }`}
                onClick={(e) => setActive(e.target.textContent)}
              >
                About Us
              </p>
            </Link>
            <Link href="/contact-us">
              <p
                className={`text-[16px] leading-[100%] font-semibold cursor-pointer ${
                  active === "Contact Us" ? "text-[#0C7379]" : ""
                }`}
                onClick={(e) => setActive(e.target.textContent)}
              >
                Contact Us
              </p>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <button className="">
              <Image
                src={"/home/whatsapp.svg"}
                alt="whatsapp image"
                height={100}
                width={100}
                className="h-[36px] w-[36px]"
              />
            </button>
            <div className="lg:hidden">
              <Image
                src={"/home/nav.svg"}
                width={100}
                height={100}
                alt="image"
                className="h-[13px] w-[22px]"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </GlassSurface>
      </nav>

      {isModalOpen && (
        <ModalServices
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;


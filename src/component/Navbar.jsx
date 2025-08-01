"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../public/accolades_logo.svg";

import {
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
  FaChevronDown,
  FaArrowLeft,
} from "react-icons/fa";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about-us" },
  { label: "Blogs", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
];

const mobileServicePages = {
  digital: [
    {
      label: "Performance Marketing",
      href: "/services/digital-marketing/performance",
    },
    { label: "Google Ads", href: "/services/digital-marketing/google-ads" },
    {
      label: "Search Engine Optimization",
      href: "/services/digital-marketing/seo",
    },
    {
      label: "Social Media Marketing",
      href: "/services/digital-marketing/social-media",
    },
    { label: "Content Marketing", href: "/services/digital-marketing/content" },
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
    { label: "Video Production", href: "/services/creative/video-production" },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeServicePage, setActiveServicePage] = useState(null);
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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
          href: "/services/creative/video-production",
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
        { label: "Google Ads", href: "/services/digital-marketing/google-ads" },
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
          href: "/services/digital/content-marketing",
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

  // Determine if it's a short screen (like landscape phones)
  const isShortScreen = screenHeight < 600;
  const isMediumScreen = screenHeight >= 600 && screenHeight < 800;
  const isTallScreen = screenHeight >= 800;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  cursor-pointer
          ${
            scrolled
              ? "bg-white shadow-md border-b border-gray-200"
              : "bg-transparent"
          }`}
      >
        <header className="containers bg-transparent py-3 flex items-center justify-between relative z-50">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Image
                src={logo}
                alt="Accolades Logo"
                width={100}
                height={100}
                className="w-auto h-[40px] "
              />
            </div>
          </Link>

          {/* Desktop Right Section (768px and above) */}
          <div className="hidden md:flex items-center gap-4 xl:gap-6">
            {/* Let's Talk Button */}
            {/* <button className="border border-[#00777D] text-[#00777D] px-4 xl:px-6 py-2 rounded-full text-sm xl:text-base transition-all duration-300 hover:bg-[#00777D] hover:text-white hover:shadow-lg transform hover:scale-105 whitespace-nowrap">
              Let's Talk
            </button> */}

            {/* Services Icon + Dropdown */}
            {/* Desktop Services Dropdown with Hover-based Two-Level Menu */}
            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setActiveServicePage(null);
              }}
            >
              {/* Main Services Label */}
              <div className="cursor-pointer text-[#00777D] hover:text-[#005a5f] transition-all duration-300 select-none flex items-center gap-2 py-2 px-1 group">
                <span className="text-sm xl:text-base whitespace-nowrap group-hover:font-medium transition-all duration-200">
                  Services
                </span>
                <FaChevronRight className="w-3 h-3 transition-all duration-300 group-hover:scale-110" />
              </div>

              {/* First Level: Main Services Dropdown */}
              <div
                className={`absolute top-[70%] right-0 z-40 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 border-gray-700 min-w-[200px] ${
                  isServicesOpen
                    ? "opacity-100 scale-100 translate-y-1 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {Object.keys(servicePages).map((service, index) => (
                    <Link
                      href={servicePages[service].href}
                      key={service}
                      className="cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 text-[#00777D] hover:text-[#005a5f] px-4 py-3 transition-all duration-300 transform hover:translate-x-2 hover:shadow-sm text-sm border-b border-gray-100 last:border-b-0 flex items-center justify-between group"
                      onMouseEnter={() => setActiveServicePage(service)}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="group-hover:font-medium transition-all duration-200">
                        {service}
                      </span>
                      <FaChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Second Level: Sub-services Dropdown (left side of parent) */}
              {activeServicePage && (
                <div
                  className={`absolute top-[70%] right-[190%] mr-[25px] z-30 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300  min-w-[260px] ${
                    isServicesOpen
                      ? "opacity-100 scale-100 translate-y-1 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-[#00777D] to-[#6DB4BA] text-white">
                    <h3 className="font-semibold text-sm">
                      {servicePages[activeServicePage]?.title}
                    </h3>
                  </div>
                  <div className="py-2">
                    {servicePages[activeServicePage]?.services.map(
                      (item, index) => (
                        <Link href={item.href} key={item.label}>
                          <div
                            className="cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 text-[#00777D] hover:text-[#005a5f] px-4 py-3 transition-all duration-300 transform hover:translate-x-2 hover:shadow-sm text-sm border-b border-gray-100 last:border-b-0 group"
                            style={{ transitionDelay: `${index * 30}ms` }}
                          >
                            <span className="group-hover:font-medium transition-all duration-200">
                              {item.label}
                            </span>
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Menu Icon + Dropdown */}
            <div className="relative" ref={mainDropdownRef}>
              <div
                className="w-8 h-8 xl:w-10 xl:h-10 text-[#00777D] cursor-pointer transition-all duration-300 hover:text-[#005a5f] hover:scale-110 transform flex items-center justify-center hover:bg-gray-100 hover:bg-opacity-50 rounded-full "
                onClick={() => setIsMainDropdownOpen((prev) => !prev)}
              >
                {isMainDropdownOpen ? (
                  <FaTimes className="w-5 h-5 xl:w-6 xl:h-6" />
                ) : (
                  <FaBars className="w-5 h-5 xl:w-6 xl:h-6" />
                )}
              </div>

              <div
                className={`absolute top-full right-0 bg-white shadow-xl rounded-lg overflow-hidden min-w-[140px] transition-all duration-300 transform origin-top-right border-gray-500 ${
                  isMainDropdownOpen
                    ? "opacity-100 scale-100 translate-y-1"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="py-2">
                  {navItems.map((item, index) => (
                    <Link key={item.label} href={item.href}>
                      <div
                        className="cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 text-[#00777D] hover:text-[#005a5f] px-4 py-3 transition-all duration-300 transform hover:translate-x-2 hover:shadow-sm text-sm border-b border-gray-100 last:border-b-0 group"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <span className="group-hover:font-medium transition-all duration-200">
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Section (320px to 767px) - Only Logo and Menu */}
          <div className="md:hidden">
            <div
              className="w-8 h-8 text-[#00777D] cursor-pointer transition-all duration-300 hover:text-[#005a5f] transform hover:scale-110 flex items-center justify-center"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </div>
          </div>
        </header>

        {/* Mobile Full Screen Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#6DB4BA] z-50 md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ height: "100vh", height: "100dvh" }}
        >
          {/* Close Button */}
          <div
            className={`absolute ${
              isShortScreen ? "top-3 right-4" : "top-4 right-6"
            }`}
          >
            <div
              className={`${
                isShortScreen ? "w-7 h-7" : "w-8 h-8"
              } text-white cursor-pointer transition-all duration-300 hover:scale-110 transform flex items-center justify-center hover:bg-white hover:bg-opacity-20 rounded-full`}
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes className={`${isShortScreen ? "w-5 h-5" : "w-6 h-6"}`} />
            </div>
          </div>

          {/* Menu Content - Responsive based on screen height */}
          <div
            className={`flex flex-col items-center h-full px-4 sm:px-8 ${
              isShortScreen
                ? "justify-start pt-16 overflow-y-auto"
                : isMediumScreen
                ? "justify-center py-8"
                : "justify-center"
            }`}
          >
            <nav
              className={`flex flex-col items-center text-white w-full max-w-sm ${
                isShortScreen
                  ? "space-y-2 pb-8"
                  : isMediumScreen
                  ? "space-y-3"
                  : "space-y-4"
              }`}
            >
              {/* Main Menu Items */}
              {/* {["Home", "About", "Blogs", "Careers", "Contact"].map(
                (item, index) => ( */}
              {mobileNavLinks.map((item, index) => (
                <Link key={item.label} href={item.href} passHref>
                  <div
                    key={item}
                    className={`cursor-pointer font-light hover:text-gray-200 transition-all duration-300 transform hover:scale-105 hover:tracking-wide ${
                      isShortScreen
                        ? "text-xl"
                        : isMediumScreen
                        ? "text-2xl"
                        : "text-2xl sm:text-3xl"
                    } ${
                      isMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen
                        ? `${index * 100 + 200}ms`
                        : "0ms",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}

              {/* Digital Marketing with Dropdown */}
              <div className="flex flex-col items-center w-full">
                <div
                  className={`cursor-pointer font-light hover:text-gray-200 transition-all duration-300 transform hover:scale-105 hover:tracking-wide flex items-center gap-3 ${
                    isShortScreen
                      ? "text-xl"
                      : isMediumScreen
                      ? "text-2xl"
                      : "text-2xl sm:text-3xl"
                  } ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? "700ms" : "0ms",
                  }}
                  onClick={() =>
                    setIsMobileServicesOpen((prev) =>
                      prev === "digital" ? null : "digital"
                    )
                  }
                >
                  <span>Digital Marketing</span>
                  <div
                    className={`transition-all duration-300 ${
                      isMobileServicesOpen === "digital"
                        ? "rotate-90 scale-110"
                        : ""
                    }`}
                  >
                    <FaChevronRight
                      className={`${isShortScreen ? "w-3 h-3" : "w-4 h-4"}`}
                    />
                  </div>
                </div>
                <div
                  className={`flex flex-col items-center w-full transition-all duration-500 ${
                    isShortScreen ? "mt-2 space-y-2" : "mt-3 space-y-3"
                  } ${
                    isMobileServicesOpen === "digital"
                      ? "opacity-100 max-h-96 transform translate-y-0"
                      : "opacity-0 max-h-0 overflow-hidden transform -translate-y-4"
                  }`}
                >
                  {/* {[
                    "Performance Marketing",
                    "Google Ads",
                    "Search Engine Optimization",
                    "Social Media Marketing",
                    "Content Marketing",
                  ].map((service, index) => ( */}
                  {mobileServicePages["digital"].map((item, index) => (
                    <Link href={item.href} key={item.label}>
                      <div
                        // key={service}
                        className={`cursor-pointer font-light text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 hover:tracking-wide text-center ${
                          isShortScreen ? "text-base" : "text-lg"
                        }`}
                        style={{
                          transitionDelay: isMobileServicesOpen
                            ? `${index * 100}ms`
                            : "0ms",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <div
                  className={`cursor-pointer font-light hover:text-gray-200 transition-all duration-300 transform hover:scale-105 hover:tracking-wide flex items-center gap-3 ${
                    isShortScreen
                      ? "text-xl"
                      : isMediumScreen
                      ? "text-2xl"
                      : "text-2xl sm:text-3xl"
                  } ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? "1100ms" : "0ms" }}
                  onClick={() =>
                    setIsMobileServicesOpen((prev) =>
                      prev === "web" ? null : "web"
                    )
                  }
                >
                  <span>Web Development</span>
                  <div
                    className={`transition-all duration-300 ${
                      isMobileServicesOpen === "web"
                        ? "rotate-90 scale-110"
                        : ""
                    }`}
                  >
                    <FaChevronRight
                      className={`${isShortScreen ? "w-3 h-3" : "w-4 h-4"}`}
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col items-center w-full transition-all duration-500 ${
                    isShortScreen ? "mt-2 space-y-2" : "mt-3 space-y-3"
                  } ${
                    isMobileServicesOpen === "web"
                      ? "opacity-100 max-h-96 transform translate-y-0"
                      : "opacity-0 max-h-0 overflow-hidden transform -translate-y-4"
                  }`}
                >
                  {/* {[
                    "FullStack Web Development",
                    "WordPress Pages",
                    "Ecommerce Website",
                  ].map((service, index) => ( */}
                  {mobileServicePages["web"].map((item, index) => (
                    <Link href={item.href} key={item.label}>
                      <div
                        // key={service}
                        className={`cursor-pointer font-light text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 hover:tracking-wide text-center ${
                          isShortScreen ? "text-base" : "text-lg"
                        }`}
                        style={{
                          transitionDelay:
                            isMobileServicesOpen === "web"
                              ? `${index * 100}ms`
                              : "0ms",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Creative (Graphics) with Submenu */}
              <div className="flex flex-col items-center w-full">
                <div
                  className={`cursor-pointer font-light hover:text-gray-200 transition-all duration-300 transform hover:scale-105 hover:tracking-wide flex items-center gap-3 ${
                    isShortScreen
                      ? "text-xl"
                      : isMediumScreen
                      ? "text-2xl"
                      : "text-2xl sm:text-3xl"
                  } ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: isMenuOpen ? "1200ms" : "0ms" }}
                  onClick={() =>
                    setIsMobileServicesOpen((prev) =>
                      prev === "creative" ? null : "creative"
                    )
                  }
                >
                  <span>Creative (Graphics)</span>
                  <div
                    className={`transition-all duration-300 ${
                      isMobileServicesOpen === "creative"
                        ? "rotate-90 scale-110"
                        : ""
                    }`}
                  >
                    <FaChevronRight
                      className={`${isShortScreen ? "w-3 h-3" : "w-4 h-4"}`}
                    />
                  </div>
                </div>

                {/* Creative Submenu */}
                <div
                  className={`flex flex-col items-center w-full transition-all duration-500 ${
                    isShortScreen ? "mt-2 space-y-2" : "mt-3 space-y-3"
                  } ${
                    isMobileServicesOpen === "creative"
                      ? "opacity-100 max-h-96 transform translate-y-0"
                      : "opacity-0 max-h-0 overflow-hidden transform -translate-y-4"
                  }`}
                >
                  {/* {[
                    "Graphics & Motion",
                    "Branding & Packaging",
                    "Video Production",
                  ].map((service, index) => ( */}
                  {mobileServicePages["creative"].map((item, index) => (
                    <Link href={item.href} key={item.label}>
                      <div
                        // key={service}
                        className={`cursor-pointer font-light text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 hover:tracking-wide text-center ${
                          isShortScreen ? "text-base" : "text-lg"
                        }`}
                        style={{
                          transitionDelay:
                            isMobileServicesOpen === "creative"
                              ? `${index * 100}ms`
                              : "0ms",
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Let's Talk Button */}
              {/* <div
                className={`transition-all duration-300 transform ${
                  isShortScreen ? "mt-4" : "mt-6"
                } ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? "1000ms" : "0ms",
                }}
              >
                <button
                  className={`border-2 border-white text-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#6DB4BA] transform hover:scale-105 hover:shadow-lg ${
                    isShortScreen ? "px-6 py-2 text-base" : "px-8 py-3 text-lg"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Talk
                </button>
              </div> */}
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

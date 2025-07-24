"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../public/accolades_logo.svg";
import { FaBars, FaTimes, FaChevronRight, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);

  const servicesRef = useRef(null);
  const mainDropdownRef = useRef(null);

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

  // Close dropdowns when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
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

  // Determine if it's a short screen (like landscape phones)
  const isShortScreen = screenHeight < 600;
  const isMediumScreen = screenHeight >= 600 && screenHeight < 800;
  const isTallScreen = screenHeight >= 800;

  return (
    <>
      <header className="containers bg-white py-3 flex items-center justify-between relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            src={logo}
            alt="Accolades Logo"
            width={100}
            height={100}
            className="w-auto h-[40px] "
          />
        </div>

        {/* Desktop Right Section (768px and above) */}
        <div className="hidden md:flex items-center gap-4 xl:gap-6">
          {/* Let's Talk Button */}
          <button className="border border-[#00777D] text-[#00777D] px-4 xl:px-6 py-2 rounded-full text-sm xl:text-base transition-all duration-300 hover:bg-[#00777D] hover:text-white hover:shadow-lg transform hover:scale-105 whitespace-nowrap">
            Let's Talk
          </button>

          {/* Services Icon + Dropdown */}
          <div className="relative" ref={servicesRef}>
            <div
              onClick={() => setIsServicesOpen((prev) => !prev)}
              className="cursor-pointer text-[#00777D] hover:text-[#005a5f] transition-all duration-300 select-none flex items-center gap-2 py-2 px-1"
            >
              <span className="text-sm xl:text-base whitespace-nowrap">
                Services
              </span>
              <div
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-90" : ""
                }`}
              >
                <FaChevronRight className="w-3 h-3" />
              </div>
            </div>

            <div
              className={`absolute top-full right-0 bg-white shadow-xl rounded-lg overflow-hidden min-w-[180px] transition-all duration-300 transform origin-top-right border ${
                isServicesOpen
                  ? "opacity-100 scale-100 translate-y-1"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="py-2">
                {[
                  "Translation",
                  "Localization",
                  "Voice Over",
                  "Subtitling",
                ].map((service, index) => (
                  <div
                    key={service}
                    className="cursor-pointer hover:bg-gray-50 text-[#00777D] hover:text-[#005a5f] px-4 py-3 transition-all duration-200 transform hover:translate-x-1 text-sm border-b border-gray-100 last:border-b-0"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Icon + Dropdown */}
          <div className="relative" ref={mainDropdownRef}>
            <div
              className="w-8 h-8 xl:w-10 xl:h-10 text-[#00777D] cursor-pointer transition-all duration-300 hover:text-[#005a5f] hover:scale-110 transform flex items-center justify-center"
              onClick={() => setIsMainDropdownOpen((prev) => !prev)}
            >
              {isMainDropdownOpen ? (
                <FaTimes className="w-5 h-5 xl:w-6 xl:h-6" />
              ) : (
                <FaBars className="w-5 h-5 xl:w-6 xl:h-6" />
              )}
            </div>

            <div
              className={`absolute top-full right-0 bg-white shadow-xl rounded-lg overflow-hidden min-w-[140px] transition-all duration-300 transform origin-top-right border ${
                isMainDropdownOpen
                  ? "opacity-100 scale-100 translate-y-1"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="py-2">
                {["Home", "About", "Services", "Contact"].map((item, index) => (
                  <div
                    key={item}
                    className="cursor-pointer hover:bg-gray-50 text-[#00777D] hover:text-[#005a5f] px-4 py-3 transition-all duration-200 transform hover:translate-x-1 text-sm border-b border-gray-100 last:border-b-0"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </div>
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
        style={{ height: "100vh", height: "100dvh" }} // Use dynamic viewport height
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
            } text-white cursor-pointer transition-all duration-300 hover:scale-110 transform flex items-center justify-center`}
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
            {["Home", "About", "Blogs", "Careers", "Contact"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`cursor-pointer font-light hover:text-gray-200 transition-all duration-300 transform hover:scale-105 ${
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
                  {item}
                </div>
              )
            )}

            {/* Digital Marketing with Dropdown */}
            <div className="flex flex-col items-center w-full">
              <div
                className={`cursor-pointer font-light hover:text-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${
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
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              >
                <span>Digital Marketing</span>
                <div
                  className={`transition-transform duration-300 ${
                    isMobileServicesOpen ? "rotate-90" : ""
                  }`}
                >
                  <FaChevronRight
                    className={`${isShortScreen ? "w-3 h-3" : "w-4 h-4"}`}
                  />
                </div>
              </div>

              {/* Services Submenu */}
              <div
                className={`flex flex-col items-center w-full transition-all duration-300 ${
                  isShortScreen ? "mt-2 space-y-2" : "mt-3 space-y-3"
                } ${
                  isMobileServicesOpen
                    ? "opacity-100 max-h-96"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {[
                  "SEO",
                  "Social Media Marketing",
                  "PPC Advertising",
                  "Content Marketing",
                ].map((service, index) => (
                  <div
                    key={service}
                    className={`cursor-pointer font-light text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 text-center ${
                      isShortScreen ? "text-base" : "text-lg"
                    }`}
                    style={{
                      transitionDelay: isMobileServicesOpen
                        ? `${index * 100}ms`
                        : "0ms",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            {["Web Development", "Graphic Design"].map((item, index) => (
              <div
                key={item}
                className={`cursor-pointer font-light hover:text-gray-200 transition-all duration-300 transform hover:scale-105 ${
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
                    ? `${(index + 6) * 100 + 200}ms`
                    : "0ms",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </div>
            ))}

            {/* Let's Talk Button */}
            <div
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
                className={`border-2 border-white text-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#6DB4BA] transform hover:scale-105 ${
                  isShortScreen ? "px-6 py-2 text-base" : "px-8 py-3 text-lg"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

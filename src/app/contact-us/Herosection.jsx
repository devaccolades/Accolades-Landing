"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Herosection() {
  return (
    <>
      <section className="relative containers pt-[100px] pb-10 mx-auto  ">
        <div className="bg-white font-mont rounded-2xl shadow-xl p-2 md:p-8 ">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center font-mont font-bold text-[36px] md:text-[50px] lg:text-[64px]  text-[#3FB4BA] mb-4 leading-[100%] "
          >
            Contact
          </motion.h2>
          <div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row md:gap-5 items-center"
          >
            {/* Left Box - Modified for the desired shape */}
            <div className=" flex items-center justify-center ">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative text-white text-[16px] md:text-[22px] lg:text-[24px] xl:text-[36px] font-bold"
              >
                <div className="bg-[#3FB4BA] rounded-t-xl rounded-br-xl p-4 shadow-md">
                  We would love to hear
                </div>

                <div className="bg-[#3FB4BA] rounded-b-xl rounded-tr-xl rounded-tl-none p-4 mt-[-10px] w-fit shadow-md">
                  from you
                </div>
              </motion.div>
            </div>

            {/* Right Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 flex flex-col justify-center text-gray-600 p-4"
            >
              <p className="mb-6 text-[14px] font-mont md:text-[18px]  ">
                Our team is always willing to respond your queries and provide
                the support you need. Whether you have specific queries or need
                general information, we're just a message away. Fill up the form
                below and send. We will get back to you promptly. Connect with
                us today!
              </p>

              {/* Social Icons */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
                  },
                }}
                className="flex gap-4 justify-center md:justify-start"
              >
                <a
                  href="https://www.facebook.com/accoladesmc/"
                  className="bg-white shadow-md rounded-full p-3 text-[#0C7479] hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="#"
                  className="bg-white shadow-md rounded-full p-3 text-[#0C7479] hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out"
                  aria-label="Twitter"
                >
                  <FaXTwitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/accolades_integrated"
                  className="bg-white shadow-md rounded-full p-3 text-[#0C7479] hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://ca.linkedin.com/company/accoladesintegrated"
                  className="bg-white shadow-md rounded-full p-3 text-[#0C7479] hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

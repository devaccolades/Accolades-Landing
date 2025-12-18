"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function LocationDetailCard({ }) {
  // State to manage the currently selected location
  const [activeLocation, setActiveLocation] = useState("Kochi (HQ)");

  // A single object containing all location data
  const locationData = {
    "Kochi (HQ)": {
      locationName: "Kochi",
      address: "Accolades Integrated Pvt Ltd, Rahmath Building, 46/2056 - A, AKG Vayanasala Road, Chakkaraparambu,Vennala, Kochi, Ernakulam, Kerala 682028",
      email: "mail@accoladesmedia.co.in",
      phoneNumbers: ["+91 90481 00233", "+91 90726 19928"],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.338634640268!2d76.31439647589313!3d9.988860973224527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cf7e6baeda3%3A0x1f053eaaf85f927b!2sACCOLADES%20Integrated%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1753441166710!5m2!1sen!2sin",
    },
    Calicut: {
      locationName: "Calicut",
      address: "Accolades Integrated Pvt Ltd Akkai Tower | 59/3785, 2nd Floor | Tali Cross Road | Calicut – 673002",
      email: "mail@accoladesmedia.co.in",
      phoneNumbers: ["+91 9947847237",],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4896.582642652338!2d75.7880639!3d11.2474385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65932cf91c009%3A0xf48916f4d304f205!2sACCOLADES%20Integrated%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1755941788946!5m2!1sen!2sin",
    },
    Trivandrum: {
      locationName: "Trivandrum",
      address: "Accolades Integrated Pvt Ltd 3B, Unity Towers | Chempakassery Nagar Ln | Chempakassery Nagar | opp. M. G.College | Kesavadasapuram | Thiruvananthapuram | Kerala – 695004",
      email: "tvm@accoladesmedia.co.in",
      phoneNumbers:["+91 90726 19922", "+91 87143 04849"],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4937.219307159822!2d76.9370049758851!3d8.531830496571333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b9e8fdcff475%3A0xb4441a3938936e66!2sACCOLADES%20Integrated%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1755941930862!5m2!1sen!2sin",
    },
    Bengaluru: {
      locationName: "Bengaluru",
      address: "Accolades Integrated Pvt Ltd | 5th Floor| ITPL Main Road | Garudachan Palaya | Mahadevapura | Bengaluru – 560 048",
      email: "mail@accoladesmedia.co.in",
      phoneNumbers: ["+91 90726 19922", "+91 87143 04849"],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.0760816731475!2d77.69714717924873!3d12.995034665068514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae110acc03a14f%3A0x90ddf5a37aa1c34a!2s048%2C%20560%2C%20ITPL%20Main%20Rd%2C%20Mahadevapura%20Layout%2C%20RHB%20Colony%2C%20Mahadevapura%2C%20Bengaluru%2C%20Karnataka%20560048!5e1!3m2!1sen!2sin!4v1755942211445!5m2!1sen!2sin",
    },
    Mumbai: {
      locationName: "Mumbai",
      address: "Accolades Integrated Pvt Ltd – 301 | 3rd floor | Corporate Corner | Sundar Nagar | Malad West | Mumbai – 400064",
      email: "mumbai@accoladesmedia.co.in",
      phoneNumbers: ["+91 9048033588",],
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4715.425278398671!2d72.83962167599567!3d19.17707724879009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7fc5db51bbf%3A0xd85e9d4ba277c50a!2sAccolades%20Integrated%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1755942289816!5m2!1sen!2sin",
    },
  };

  // Get the data for the currently active location
  const currentData = locationData[activeLocation];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  // Array of location names for the buttons
  const locations = [
    "Kochi (HQ)",
    "Calicut",
    "Trivandrum",
    "Bengaluru",
    "Mumbai",
  ];

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="relative containers mx-auto py-10">
      <section className="relative mx-auto">
        <div className="py-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-wrap justify-center md:justify-between gap-4 text-[18px] md:text-[24px]"
          >
            {locations.map((loc) => (
              <motion.button
                key={loc}
                onClick={() => setActiveLocation(loc)}
                className={`bg-white text-[#3FB4BA] font-mont font-semibold py-3 px-6 md:px-10 rounded-xl shadow-sm hover:bg-gray-100 transition-colors duration-300 ${activeLocation === loc ? "ring-2 ring-offset-2 ring-[#3FB4BA]" : ""
                  }`}
                variants={itemVariants}
              >
                {loc}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="px-4 py-8 bg-white rounded-2xl shadow-xl"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Text Details */}
          <div className="flex-1 p-4">
            <motion.h3
              variants={itemVariants}
              className="text-4xl font-mont font-extrabold text-[#3FB4BA] mb-6"
            >
              {currentData.locationName}
            </motion.h3>

            {/* Address */}
            <motion.div variants={itemVariants} className="flex items-start mb-4">
              <FaMapMarkerAlt className="text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-mont font-semibold text-lg mb-1">
                  Address
                </p>
                <p className="text-gray-600 font-mont text-base leading-relaxed">
                  {currentData.address}
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="flex items-start mb-4">
              <FaEnvelope className="text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-mont font-semibold text-lg mb-1">
                  Email us at
                </p>
                <a
                  href={`mailto:${currentData.email}`}
                  className="text-gray-600 font-mont text-base hover:text-teal-500 transition-colors duration-200"
                >
                  {currentData.email}
                </a>
              </div>
            </motion.div>

            {/* Phone Numbers */}
            {/* Phone Numbers */}
            <motion.div className="flex items-start" variants={itemVariants}>
              <FaPhone className="text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-mont font-semibold text-lg mb-1">
                  Call us on
                </p>
                <p className="text-gray-600 font-mont text-base">
                  {currentData.phoneNumbers.map((phone, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="hover:text-teal-500 transition-colors duration-200"
                      >
                        {phone}
                      </a>
                      {index < currentData.phoneNumbers.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Map */}
          <div className="flex-1 p-4 flex justify-center items-center">
            <div className="w-full h-80 md:h-full bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              {currentData.mapEmbedUrl ? (
                <iframe
                  src={currentData.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${currentData.locationName}`}
                ></iframe>
              ) : (
                <div className="flex font-mont items-center justify-center h-full text-gray-500">
                  Map not available for this location.
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
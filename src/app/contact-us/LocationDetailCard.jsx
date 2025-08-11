"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function LocationDetailCard({
  locationName,
  address,
  email,
  phoneNumbers,
  mapEmbedUrl,
}) {
  // Parent container animation (stagger children)
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

  // Each item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <section className="relative containers mx-auto  py-10">
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
            <motion.h3 variants={itemVariants} className="text-4xl font-mont font-extrabold text-[#3FB4BA] mb-6">
              {locationName}
            </motion.h3>

            {/* Address */}
            <motion.div variants={itemVariants} className="flex items-start mb-4">
              <FaMapMarkerAlt className="text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-mont font-semibold text-lg mb-1">
                  Address
                </p>
                <p className="text-gray-600  font-mont text-base leading-relaxed">
                  {address}
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
                  href={`mailto:${email}`}
                  className="text-gray-600 font-mont text-base hover:text-teal-500 transition-colors duration-200"
                >
                  {email}
                </a>
              </div>
            </motion.div>

            {/* Phone Numbers */}
            <motion.div className="flex items-start" variants={itemVariants}>
              <FaPhone className="text-teal-500 text-2xl mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-mont font-semibold text-lg mb-1">
                  Call us on
                </p>
                <p className="text-gray-600 font-mont text-base">
                  {phoneNumbers.map((phone, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="hover:text-teal-500 transition-colors duration-200"
                      >
                        {phone}
                      </a>
                      {index < phoneNumbers.length - 1 && " "}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Map */}
          <div className="flex-1 p-4 flex justify-center items-center">
            <div className="w-full h-80 md:h-full bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              {mapEmbedUrl ? (
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }} // Inline style for no border
                  allowFullScreen="" // Allows fullscreen mode
                  loading="lazy" // Lazy load the iframe
                  referrerPolicy="no-referrer-when-downgrade" // Recommended for security
                  title={`Map of ${locationName}`} // Good for accessibility
                ></iframe>
              ) : (
                <div className="flex  font-mont items-center justify-center h-full text-gray-500">
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

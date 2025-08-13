'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Icon from '../../public/video-production/icon.webp'

export default function Card({sectionTitle, videoTypes, showButton = false, buttons = []}) {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  // Section button animation
  const sectionButtonVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Individual card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  // Image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Content animation (text + icon)
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  // Icon animation
  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  // Header buttons animation
  const headerButtonVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="lg:py-10 md:py-8 py-6 bg-white">
      <div className="containers">
        {/* Header Section */}
        <motion.div 
          className="flex items-start justify-between lg:mb-8 md:mb-6 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.h2 
            className="font-mont font-bold xl:text-[40px] lg:text-[32px] md:text-[26px] text-[20px] leading-[130%] text-[#3FB4BA]"
            variants={titleVariants}
          >
            {sectionTitle}
          </motion.h2>

          {/* Header Buttons */}
          {showButton && (
            <motion.div 
              className="flex flex-col gap-3"
              variants={headerButtonVariants}
            >
              {buttons.map((button, index) => (
                <motion.button 
                  key={index}
                  className="bg-[#3FB4BA] text-white px-4 py-2 rounded-lg font-mont font-medium text-sm hover:bg-[#2C99B1] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button}
                </motion.button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Graphics Section */}
        {videoTypes.graphics && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="mb-6" variants={sectionButtonVariants}>
              <button className="bg-[#3FB4BA] text-white px-4 py-2 rounded-lg font-mont font-medium text-sm">
                Graphics
              </button>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-12"
              variants={containerVariants}
            >
              {videoTypes.graphics.map((video, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="rounded-xl overflow-hidden mb-3"
                    variants={imageVariants}
                  >
                    <Image
                      src={video.image}
                      alt={video.title}
                      className="w-full h-36 object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between px-1"
                    variants={contentVariants}
                  >
                    <p className="font-mont font-semibold lg:text-[20px] md:text-[16px] text-[12px] leading-[100%] text-[#2C99B1] w-[50%]">
                      {video.title}
                    </p>
                    <motion.div 
                      className="bg-teal-500 text-white p-1.5 rounded-full"
                      variants={iconVariants}
                    >
                      <Image src={Icon} alt="icon" width={12} height={12} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Motion Design Section */}
        {videoTypes.motionDesign && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="mb-6" variants={sectionButtonVariants}>
              <button className="bg-[#3FB4BA] text-white px-4 py-2 rounded-lg font-mont font-medium text-sm">
                Motion Design
              </button>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
              variants={containerVariants}
            >
              {videoTypes.motionDesign.map((video, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 cursor-pointer"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="rounded-xl overflow-hidden mb-3"
                    variants={imageVariants}
                  >
                    <Image
                      src={video.image}
                      alt={video.title}
                      className="w-full h-36 object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-between px-1"
                    variants={contentVariants}
                  >
                    <p className="font-mont font-semibold lg:text-[20px] md:text-[16px] text-[12px] leading-[100%] text-[#2C99B1] w-[50%]">
                      {video.title}
                    </p>
                    <motion.div 
                      className="bg-teal-500 text-white p-1.5 rounded-full"
                      variants={iconVariants}
                    >
                      <Image src={Icon} alt="icon" width={12} height={12} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Original single array format (for backward compatibility) */}
        {Array.isArray(videoTypes) && (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {videoTypes.map((video, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="rounded-xl overflow-hidden mb-3"
                  variants={imageVariants}
                >
                  <Image
                    src={video.image}
                    alt={video.title}
                    className="w-full h-36 object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between px-1"
                  variants={contentVariants}
                >
                  <p className="font-mont font-semibold lg:text-[20px] md:text-[16px] text-[12px] leading-[100%] text-[#2C99B1] w-[50%]">
                    {video.title}
                  </p>
                  <motion.div 
                    className="bg-teal-500 text-white p-1.5 rounded-full"
                    variants={iconVariants}
                  >
                    <Image src={Icon} alt="icon" width={12} height={12} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
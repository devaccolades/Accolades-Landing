'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import heroImg from "../../../../../public/video-production/heroImg.png";
import AnimatedTitle from "@/component/AnimatedTitle";
import Link from "next/link";

export default function HeroSection() {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  // Content card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      y: 40
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  // Image animation
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 80,
      scale: 0.8,
      rotate: 5
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  // Text elements staggered animation
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Word-by-word animation for description
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  const description = "From product explainers to cinematic brand films — we shoot, edit, and deliver videos your audience will remember.";

  return (
    <>
      <div className="containers pt-[100px]">
        <AnimatedTitle text={"Video Production"} />
      </div>
      
      <section className="lg:py-16 md:py-12 py-6">
        <motion.div 
          className="containers grid md:grid-cols-2 gap-6 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Content Card */}
          <motion.span 
            className="bg-white md:p-8 p-6 rounded-xl shadow-md"
            variants={cardVariants}
          >
            <motion.div
              variants={textContainerVariants}
            >
              {/* Main Title */}
              <motion.h2 
                className="font-mont font-semibold xl:text-[42px] lg:text-[38px] md:text-[32px] text-[26px] leading-[110%] text-[#199eb8] md:mb-4 mb-2"
                variants={textVariants}
              >
                Videos That Captivate, Convert & Communicate
              </motion.h2>

              {/* Description with word-by-word animation */}
              <motion.p 
                className="font-mont font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] leading-[150%] text-[#2B2A29] text-justify flex flex-wrap gap-[3px]"
                variants={textContainerVariants}
              >
                {description.split(" ").map((word, i) => (
                  <motion.span key={i} variants={wordVariants}>
                    {word}
                  </motion.span>
                ))}
              </motion.p>

              {/* Button */}
              <Link href="/contact-us">
                <motion.button 
                  className="font-mont font-semibold lg:text-[14px] text-[12px] leading-[100%] text-[#FFFFFF] bg-[#3FB4BA] px-6 py-3 rounded-[25px] mt-2"
                  variants={buttonVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(63, 180, 186, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Creative Proposal
                </motion.button>
              </Link>
            </motion.div>
          </motion.span>

          {/* Hero Image */}
          <motion.div 
            className="flex justify-center items-center lg:justify-end w-full h-full"
            variants={imageVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Image
                src={heroImg}
                alt="Accolades Graphic"
                className="xl:w-[500px] lg:w-[415px] md:w-[300px] w-full md:h-[250px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";

export const Introduction = () => {
  // Animation Variants
  const videoVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hover: {
      y: -3,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* Video Section - Left Side */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center bg-[var(--light-gray)] md:ml-4"
        initial="hidden"
        animate="visible"
        variants={videoVariants}
      >
        <div className="w-full h-full">
          <video
            className="w-full h-full object-cover"
            loop
            autoPlay
            muted
            style={{ marginLeft: "auto" }} // Align video properly
          >
            <source src="/kalamazoo-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* Content Section - Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <header className="w-full max-w-[700px] text-center md:text-left">
          <motion.h1
            className="text-2xl font-bold text-[var(--orange-color)] md:text-5xl mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            EXCEPTIONAL TEAMS, EXCEPTIONAL OUTCOMES: IT THAT WORKS FOR YOU
          </motion.h1>

          <motion.p
            className="text-lg text-[var(--font-color-light)] mb-8 md:text-xl leading-relaxed"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            Dataprise delivers tailored IT solutions that keep business running
            smoothly. From cybersecurity and cloud to IT consulting and
            management, we provide managed and co-managed IT Services to fit
            your needs.
          </motion.p>

          <motion.button
            className="bg-[var(--orange-color)] hover:bg-[var(--light-orange)] text-white font-medium py-3 px-5 rounded-lg transition-colors"
            variants={buttonVariants}
            whileHover="hover"
          >
            Book a Free Discovery Call
          </motion.button>
        </header>
      </div>
    </div>
  );
};

export default Introduction;

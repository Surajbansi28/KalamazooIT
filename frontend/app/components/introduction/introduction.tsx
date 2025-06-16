"use client";
import React from "react";
import { motion } from "framer-motion";

export const Introduction = () => {
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
    <div className="relative min-h-screen w-full flex items-center justify-start px-6 md:px-20 overflow-hidden">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity- z-0"
        style={{ backgroundImage: `url('/main-bg.jpg')` }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[700px] text-center md:text-left mt-[-40px]">
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
          className="text-lg text-white mb-8 md:text-xl leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          Dataprise delivers tailored IT solutions that keep business running
          smoothly. From cybersecurity and cloud to IT consulting and
          management, we provide managed and co-managed IT Services to fit your
          needs.
        </motion.p>

        <motion.button
          className="bg-[var(--orange-color)] hover:bg-[var(--light-orange)] text-white font-medium py-3 px-5 rounded-lg transition-colors"
          variants={buttonVariants}
          whileHover="hover"
        >
          Book a Free Discovery Call
        </motion.button>
      </div>
    </div>
  );
};

export default Introduction;

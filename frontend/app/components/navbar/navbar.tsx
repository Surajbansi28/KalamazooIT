"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visibleLetters, setVisibleLetters] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const text = "alamazoo IT";

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Infinite Animation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLetters((prev) => (prev + 1) % (text.length + 1));
    }, 250); // Animation speed
    return () => clearInterval(interval);
  }, [text.length]);

  const navLinks = [
    "IT SUPPORT",
    "CLOUD SERVICES & CONTINUITY",
    "PROFESSIONAL IT SERVICES",
    "Contact",
  ];

  // Variants for Framer Motion
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  // Hamburger Animation Variants
  const topBar = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  const middleBar = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomBar = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Animated Text */}
        <Link href="/" className="flex items-center space-x-1 group">
          <motion.div
            className="relative flex items-center group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
          >
            <Image
              src="/Kalamazoo-Logo.jpeg"
              alt="Kalamazoo Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <motion.span
              className="-translate-x-5 font-semibold whitespace-nowrap flex text-lg md:text-xl"
              style={{ color: "var(--orange-color)" }}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index < visibleLetters ? "opacity-100" : "opacity-0"
                  }`}
                  whileHover={{ y: -5, transition: { yoyo: Infinity } }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex flex-col items-center justify-center p-2 w-10 h-10 rounded-lg md:hidden hover:bg-[var(--light-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--light-orange)] transition-all duration-300"
          aria-controls="navbar-cta"
          aria-expanded={isMenuOpen}
        >
          <motion.span
            className="block w-5 h-[2px] bg-[var(--font-color-light)]"
            animate={isMenuOpen ? "open" : "closed"}
            variants={topBar}
          />
          <motion.span
            className="block w-5 h-[2px] bg-[var(--font-color-light)] my-[4px]"
            animate={isMenuOpen ? "open" : "closed"}
            variants={middleBar}
          />
          <motion.span
            className="block w-5 h-[2px] bg-[var(--font-color-light)]"
            animate={isMenuOpen ? "open" : "closed"}
            variants={bottomBar}
          />
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex md:space-x-8 md:order-1">
          {navLinks.map((link, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link
                href="#"
                className="block text-sm md:text-base transition-all duration-300 text-[var(--font-color-light)] hover:text-[var(--light-orange)]"
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Links */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="w-full md:hidden mt-4"
            >
              <ul className="flex flex-col space-y-2 bg-white p-4 rounded-lg shadow-md">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="block text-sm md:text-base text-[var(--font-color-light)] hover:text-[var(--light-orange)]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
                {/* Restore Mobile Login Button */}
                <li>
                  <button
                    type="button"
                    className="w-full text-white bg-[var(--orange-color)] hover:bg-[var(--light-orange)] focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-4 py-2 text-center mt-2"
                  >
                    LOGIN
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Only Login Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden md:flex md:order-2 space-x-3"
        >
          <button
            type="button"
            className="text-white bg-[var(--orange-color)] hover:bg-[var(--light-orange)] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center animate-pulse"
          >
            LOGIN
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

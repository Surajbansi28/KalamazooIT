"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Animated Text */}
        <Link href="/" className="flex items-center space-x-1">
          <div className="relative flex items-center">
            <Image
              src="/Kalamazoo-Logo.jpeg"
              alt="Kalamazoo Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <span
              className="-translate-x-5 font-semibold whitespace-nowrap flex text-lg md:text-xl"
              style={{ color: "var(--orange-color)" }}
            >
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index < visibleLetters ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {char}
                </span>
              ))}
            </span>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-[var(--light-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--light-orange)]"
          aria-controls="navbar-cta"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href="#"
                  className="block py-2 px-3 md:p-0 text-sm md:text-base rounded-sm transition-all duration-300 text-[var(--font-color-light)] hover:text-[var(--light-orange)]"
                >
                  {link}
                </Link>
              </li>
            ))}
            {/* Login Button moved inside dropdown */}
            <li className="mt-2 md:hidden">
              <button
                type="button"
                className="w-full text-white bg-[var(--orange-color)] hover:bg-[var(--light-orange)] focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-4 py-2 text-center"
              >
                LOGIN
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Only Login Button */}
        <div className="hidden md:flex md:order-2 space-x-3">
          <button
            type="button"
            className="text-white bg-[var(--orange-color)] hover:bg-[var(--light-orange)] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

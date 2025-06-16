"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import clients from "@/app/data/clients";
import { motion } from "framer-motion";

// Animation variants
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

export const Clients = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-16 bg-white">
      <div className="text-center px-4 md:px-8 max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl md:text-5xl font-bold text-[var(--font-color-light)]"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          Our <span className="text-[var(--orange-color)]">Clients.</span>
        </motion.h2>
        {/* Stats Section */}
        <div className="mt-20 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-[var(--orange-color)] text-2xl font-semibold">
              10,000+
              <br /> Satisfied Customers
            </h3>
          </div>
          <div>
            <h3 className="text-[var(--orange-color)] text-2xl font-semibold">
              4.85
            </h3>
            <p className="text-sm text-[var(--font-color-light)]">
              Average satisfaction rating amongst all customers.
            </p>
          </div>
          <div>
            <h3 className="text-[var(--orange-color)] text-2xl font-semibold">
              A+
            </h3>
            <p className="text-sm text-[var(--font-color-light)]">
              Cyber Security Rating
            </p>
          </div>
        </div>
        <motion.p
          className="mt-6 text-[var(--font-color-light)] text-base md:text-lg leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          With a focus on a customer centric service, we are committed to
          aligning technology solutions with your business goals. We are a
          strategic and trusted IT partner to over 500 customers through B2B &
          Channel. We deliver our IT solutions to a diverse group of industries
          and markets, including but not limited to, financial, education,
          healthcare, legal, media and insurance sectors.
        </motion.p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="space-x-4 flex">
            {clients.map(({ id, image, alt, url }) => (
              <CarouselItem
                key={id}
                className="basis-2/3 sm:basis-1/2 md:basis-1/3"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-video rounded-md overflow-hidden shadow-md hover:scale-[1.03] transition-transform">
                    <img
                      src={image}
                      alt={alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;

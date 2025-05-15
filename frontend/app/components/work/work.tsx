"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const companies = [
  "/heartland-logo.svg",
  "/ascendium.jpg",
  "/self-funding.png",
  "/wiscosin.png",
  "/Goodwill-Logo-2.svg",
];

export default function AutoScrollCarousel() {
  const plugin = useRef(
    Autoplay({
      delay: 100,
      stopOnInteraction: false,
    })
  );

  return (
    <div className="w-full px-4 py-8 max-w-7xl mx-auto">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          duration: 200, // Smoother transition
          dragFree: true,
        }}
        plugins={[plugin.current]}
        className="w-full overflow-hidden"
      >
        <CarouselContent className="-ml-4">
          {[...companies, ...companies].map((logo, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 pl-4"
              style={{ minWidth: "160px" }} // Consistent minimum width
            >
              <div className="p-1">
                <div className="flex aspect-video items-center justify-center p-4">
                  <Image
                    src={logo}
                    alt="Company logo"
                    width={120} // Reduced size for desktop
                    height={80}
                    className="object-contain w-full h-full transition-all duration-300 hover:scale-105"
                    priority={index < 3} // Lazy load after first few
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

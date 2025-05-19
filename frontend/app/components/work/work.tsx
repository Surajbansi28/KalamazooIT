"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "@/app/data/companies";

export default function Work() {
  const plugin = useRef(
    Autoplay({
      delay: 1800, // Increased delay for slower scroll
      stopOnInteraction: false,
    })
  );

  return (
    <div className="mt- md:mt-10">
      <h1 className="text-2xl font-bold text-center text-[var(--orange-color)] md:text-5xl">
        Trusted by Companies
      </h1>
      <div className="w-full px-4 py-8 max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            duration: 1500, // Slower transition speed
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
                      width={120}
                      height={80}
                      className="object-contain w-full h-full transition-all duration-300 hover:scale-105"
                      priority={index < 3}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

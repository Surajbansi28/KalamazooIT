"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const expertiseData = [
  {
    number: "23",
    text: "Years experience offering managed IT and security solutions",
  },
  { number: "27", text: "Regions supported by our team" },
  { number: "98%", text: "Average customer satisfaction score" },
  { number: "51", text: "Average employee count of our clients" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" }); // Removed 'once: true'

  return (
    <section className="w-full py-20 bg-background">
      <div className="container px-4 mx-auto" ref={ref}>
        <motion.h2
          className="text-2xl font-bold text-center text-[var(--orange-color)] md:text-5xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          You Deserve Expert IT Strategy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.03 }}
              className="h-full"
              onAnimationComplete={() => {
                // Reset animation state when out of view
                if (!isInView) {
                  // Force re-render by toggling visibility
                  setTimeout(() => {}, 0);
                }
              }}
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="h-full flex flex-col items-center justify-center text-center p-6">
                  <CardTitle className="text-5xl font-bold text-[var(--mix-orange)] mb-4">
                    {item.number}
                  </CardTitle>
                  <motion.div
                    className="w-12 h-1 bg-primary rounded-full mb-4"
                    layoutId={`underline-${index}`}
                  />
                  <CardDescription className="text-lg text-[var(--font-color-light)]">
                    {item.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

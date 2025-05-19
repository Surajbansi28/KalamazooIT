"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const expertiseData = [
  {
    number: 23,
    text: "Years experience offering managed IT and security solutions",
  },
  { number: 27, text: "Regions supported by our team" },
  { number: "98%", text: "Average customer satisfaction score" },
  { number: 51, text: "Average employee count of our clients" },
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

const AnimatedCounter = ({
  targetNumber,
  shouldAnimate,
}: {
  targetNumber: number | string;
  shouldAnimate: boolean;
}) => {
  const [count, setCount] = useState(0);
  const isPercentage =
    typeof targetNumber === "string" && targetNumber.includes("%");
  const numericValue = isPercentage
    ? parseInt(targetNumber as string)
    : (targetNumber as number);

  useEffect(() => {
    if (!shouldAnimate || typeof numericValue !== "number") return;

    const duration = 2000; // 2 seconds for the entire animation
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentCount = Math.floor(progress * numericValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [shouldAnimate, numericValue]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-5xl font-bold text-[var(--mix-orange)] mb-4"
    >
      {isPercentage ? `${count}%` : count}
    </motion.span>
  );
};

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

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
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="h-full flex flex-col items-center justify-center text-center p-6">
                  <AnimatedCounter
                    targetNumber={item.number}
                    shouldAnimate={hasAnimated && isInView}
                  />
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

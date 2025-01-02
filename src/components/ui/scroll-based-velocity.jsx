"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

// Utility function to wrap values
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Main VelocityScroll component
export function VelocityScroll({ items, defaultVelocity = 5, className }) {
  function ParallaxText({ children, baseVelocity = 10, className }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && contentRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const contentWidth = contentRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / contentWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <motion.div className={`inline-block ${className}`} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <div
              key={i}
              ref={i === 0 ? contentRef : null}
              className="inline-flex items-center mb-10 space-x-4"
            >
              {children}
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full">
      <ParallaxText baseVelocity={defaultVelocity} className={className}>
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center px-[1.7rem] space-x-2 mr-8"
          >
            <img
              src={item.imageSrc}
              alt={item.text}
              className="w-20 h-20 object-cover rounded-full"
            />
            <span className="text-white">{item.text}</span>
          </div>
        ))}
      </ParallaxText>
      <ParallaxText baseVelocity={-defaultVelocity} className={className}>
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex px-[1.7rem] items-center space-x-2 mr-8"
          >
            <img
              src={item.imageSrc}
              alt={item.text}
              className="w-20 h-20 object-cover rounded-full"
            />
            <span className="text-white">{item.text}</span>
          </div>
        ))}
      </ParallaxText>
    </section>
  );
}

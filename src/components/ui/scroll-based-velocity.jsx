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

// Improved wrap function for smooth transitions
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  const clampedValue = v < min ? max - (min - v) % rangeSize : v;
  return ((clampedValue - min) % rangeSize + rangeSize) % rangeSize + min;
};

export function VelocityScroll({ items, defaultVelocity = 2, className }) {
  function ParallaxText({ children, baseVelocity = 3, className }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 55,
      stiffness: 300,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(3);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && contentRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const contentWidth = contentRef.current.scrollWidth;
          const newRepetitions = Math.max(
            Math.ceil((containerWidth * 2) / contentWidth) + 1,
            3
          );
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();
      const resizeObserver = new ResizeObserver(calculateRepetitions);
      if (containerRef.current) resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      delta = Math.min(delta, 1000);
      const adjustedDelta = delta / 1000;
      
      let moveBy = directionFactor.current * baseVelocity * adjustedDelta;
      moveBy += moveBy * velocityFactor.get();
      
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="w-full overflow-hidden mb-8" ref={containerRef}>
        <motion.div 
          className={`flex whitespace-nowrap ${className}`}
          style={{ x }}
        >
          {Array.from({ length: repetitions }).map((_, i) => (
            <div
              key={i}
              ref={i === 0 ? contentRef : null}
              className="flex-shrink-0 px-4"
            >
              {children}
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full space-y-8">
      <ParallaxText baseVelocity={defaultVelocity} className={className}>
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center space-x-4 mx-4"
          >
            <img
              src={item.imageSrc}
              alt={item.text}
              className="w-24 h-24 object-cover rounded-full"
            />
            <span className="text-white text-xl">{item.text}</span>
          </div>
        ))}
      </ParallaxText>

      <ParallaxText baseVelocity={-defaultVelocity} className={className}>
        {items.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center space-x-4 mx-4"
          >
            <img
              src={item.imageSrc}
              alt={item.text}
              className="w-24 h-24 object-cover rounded-full"
            />
            <span className="text-white text-lg">{item.text}</span>
          </div>
        ))}
      </ParallaxText>
    </section>
  );
}
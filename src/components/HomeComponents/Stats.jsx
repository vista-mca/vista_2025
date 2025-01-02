import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, label: "Footfalls" },
  { value: 100, label: "Participants" },
  { value: 10, label: "Events" },
  { value: 200, label: "Colleges" },
];

export default function StatsCountdown() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const getStats = async () => {
      const snap = await getDocs(collection(db, "stats"));
      snap.forEach((doc) => {
        stats[0].value = Number(doc.data().footFall);
        stats[1].value = Number(doc.data().participant);
        stats[3].value = Number(doc.data().colleges);
      });
      stats.forEach((stat, index) => {
        const increment = stat.value / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          if (currentStep === steps) {
            clearInterval(timer);
            return;
          }

          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(
              Math.round(increment * currentStep),
              stat.value
            );
            return newCounts;
          });

          currentStep++;
        }, stepDuration);
      });
    };

    getStats();

  }, [isVisible]);

  return (
    <div className="flex my-4 items-center justify-center bg-transparent p-4">
      <div className="relative flex items-center max-w-6xl">
        {/* Background Circles */}
        {/* <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[#ff5b84] to-[#eb3461] blur-2xl opacity-30 z-0" />
        <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-[#426cf8] to-[#3ebdf0] blur-2xl opacity-30 z-0" /> */}

        {/* Glassmorphism Effect Container */}
        <div
          ref={containerRef}
          // className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-white border-opacity-20 rounded-2xl z-10"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4 ">
            Vista Live Stats
          </h2>
          <div className="flex text-center items-center ">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-3 md:px-7 ${
                  index !== stats.length - 1 ? "border-r border-gray-300" : ""
                }`}
              >
                <div className="bg-clip-text text-transparent bg-[linear-gradient(to_right_top,_#ff8364,_#f16e86,_#cf68a2,_#9c6ab1,_#5f6caf)] text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold  mb-2">
                  {counts[index]}
                </div>
                <div className="text-[#ce76d6] text-sm font-bold sm:text-base md:text-lg ">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

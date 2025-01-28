"use client";

import AnimatedBanner from "@/components/AnimatedBanner";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "QalaInnovate - (Hackathon)",
    date: "22 Feb 2025 (Day 1)",
    time: "9:00AM - 5:00PM",
    description:
      "At QalaInnovate, team up to build creative, real-world solutions in an intense and innovative coding marathon.",
    type: "IT",
  },
  {
    id: 2,
    title: "FrameFusion (Short Film Making)",
    date: "22 Feb 2025 (Day 1)",
    time: "9:00AM - 5:00PM",
    description:
      "In FrameFusion, let your creativity shine by crafting compelling short films that inspire, entertain, and tell powerful stories.",
    type: "IT",
  },
  {
    id: 3,
    title: "CodeCraft Battle (Programming)",
    date: "22 Feb 2025 (Day 1)",
    time: "10:00AM - 1:00PM",
    description:
      "CodeCraft Battle challenges you to solve complex programming problems against the clock while competing with top coders.",
    type: "IT",
  },
  {
    id: 4,
    title: "QalaKriti (UI Designing)",
    date: "23 Feb 2025 (Day 2)",
    time: "9:00AM - 5:00AM",
    description:
      "QalaKriti invites you to design visually stunning and user-friendly interfaces that leave a lasting impression.",
    type: "IT",
  },
  {
    id: 5,
    title: "Art Of Debug (Debugging)",
    date: "23 Feb 2025 (Day 2)",
    time: "10:00AM - 1:00PM",
    description:
      "Art of Debug tests your problem-solving prowess as you hunt and fix tricky bugs in this exciting debugging challenge.",
    type: "IT",
  },
  {
    id: 6,
    title: "QalaMind Quest (Aptitude Test)",
    date: "23 Feb 2025 (Day 1)",
    time: "1:00AM - 5:00PM",
    description:
      "QalaMind Quest pushes your logic and reasoning skills with puzzles and challenges designed to test your analytical abilities.",
    type: "IT",
  },
];

export default function TechnicalEvent() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#2c60b9] h-[4.2rem]"></div>
      <AnimatedBanner
        text="Technical Events"
        bgColor="bg-[#2c60b9]"
        textColor="text-white"
      />
      <div className="min-h-screen bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Event Timeline
        </motion.h1>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5 }}
          />

          <div className="relative">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`mb-12 flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 border-4 border-gray-950 relative z-10 mx-4 md:mx-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <motion.div
                    className="absolute -inset-2 rounded-full bg-blue-500/20 blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </motion.div>

                <motion.div
                  className={`w-full md:w-5/12 p-4 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors duration-300
                  backdrop-blur-sm relative overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300" />
                    </div>

                    <motion.h3
                      className="text-blue-500 text-xl font-bold mb-2 relative z-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      {event.title}
                    </motion.h3>
                    <p className="text-[#FF7EE2] font-medium mb-2 relative z-10">
                      Date: {event.date}
                    </p>
                    <p className="text-yellow-400 font-medium mb-2 relative z-10">
                      Time: {event.time}
                    </p>
                    <p className="text-gray-300 relative z-10 group-hover:text-white transition-colors duration-300">
                      {event.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

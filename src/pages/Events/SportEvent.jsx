"use client";

import AnimatedBanner from "@/components/AnimatedBanner";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "CODEUNVEIL (IT)",
    time: "8:00AM - 9:15AM",
    description:
      "Embark on a journey of knowledge and discovery with our IT Quiz, where curiosity meets technology at the IT Tech Fest event.",
    type: "IT",
  },
  {
    id: 2,
    title: "CARROM(Duo) (NON-IT)",
    time: "8:00AM - 9:50AM",
    description:
      "Strike for victory in electrifying carrom battles. Join us at the IT Event TECHBIT 4.0 for exciting matches and become the carrom champion",
    type: "NON-IT",
  },
  {
    id: 3,
    title: "CODECLASH (IT)",
    time: "9:30AM - 10:30AM",
    description:
      "Engage in epic coding duels at CodeWar, where programmers clash in strategic challenges. Join us at the IT Event TECHBIT 4.0 to test your skills and dominate the code arena!",
    type: "IT",
  },
  {
    id: 4,
    title: "CHESS (NON-IT)",
    time: "10:00AM - 11:50AM",
    description:
      "Strategize, attack, triumph. Immerse yourself in riveting chess battles at the IT Event TECHBIT 4.0, where minds clash and only the savviest prevail",
    type: "NON-IT",
  },
];

export default function SportEvent() {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[#2c60b9] h-[4.2rem]"></div>
      <AnimatedBanner
        text="Sports Events"
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

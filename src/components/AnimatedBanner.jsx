'use client'

import { motion } from "framer-motion"

const AnimatedBanner = ({ text, bgColor = "bg-purple-600", textColor = "text-white" }) => {
  return (
    <motion.div 
      className={`w-full ${bgColor} overflow-hidden`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16 relative">
        <motion.h1 
          className={`text-4xl md:text-6xl font-bold ${textColor} text-center relative z-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {text}
        </motion.h1>
        
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  )
}

export default AnimatedBanner


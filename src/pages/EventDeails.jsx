"use client";

import { motion } from "framer-motion";
import { Terminal, Clock, Users, MapPin, ChevronRight } from "lucide-react";

export default function EventDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <motion.div
        className="relative h-[500px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-gray-950/90" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Code Unveil
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Unveil the Hidden Output in the Ultimate Code Hunt!
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-3 bg-blue-600 rounded-full font-semibold text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-xl" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-blue-500">Description</h2>
            </div>
            <motion.div
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-300 leading-relaxed">
                Welcome to the intriguing realm of the "Output Detective"
                Competition – a challenge that will put your coding acumen and
                analytical skills to the test! Prepare to dive deep into the
                world of pseudocode, algorithms, and hidden program outputs as
                you embark on a captivating journey of code exploration.
              </p>
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <ChevronRight className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-purple-500">
                Rules and Regulation
              </h2>
            </div>
            <motion.div
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm space-y-4"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="pl-4 border-l-2 border-purple-500"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-300">
                  In output detective the participants will be given a problem
                  sheet on computer screen.
                </p>
              </motion.div>
              <motion.div
                className="pl-4 border-l-2 border-purple-500"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-300">
                  This she t will contain 20 Programming related questions with
                  4 MCQ / MSQ (msq -&gt multiple solution question/ mcq -&gt
                  multiple choice question) option with each question & you have
                  to tick the correct option.
                </p>
              </motion.div>
              <motion.div
                className="pl-4 border-l-2 border-purple-500"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-300">
                  Programming Language Consists : C/C++/Java/Python.
                </p>
              </motion.div>
              <motion.div
                className="pl-4 border-l-2 border-purple-500"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-300">
                  Further rules & regulations and judging criteria will be
                  explained on the spot.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-blue-500">
                  Participants
                </h2>
              </div>
              <motion.div
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="space-y-2 text-gray-300">
                  <li>• It is a solo game.</li>
                  <li>• Total 25 participants.</li>
                </ul>
              </motion.div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-500" />
                <h2 className="text-2xl font-bold text-purple-500">
                  Time Limit
                </h2>
              </div>
              <motion.div
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-300">Round 1 : 25 mins</p>
              </motion.div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-blue-500">Venue</h2>
              </div>
              <motion.div
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-300">
                  401(a) : Tolani College of Commerce
                </p>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}

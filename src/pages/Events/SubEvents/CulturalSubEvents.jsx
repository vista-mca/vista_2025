"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Trophy,
} from "lucide-react";
import { useParams } from "react-router-dom";

export default function CulturalSubEvents() {
  const { eventName } = useParams();
  let data = {};
  if (eventName === "singing") {
    data = {
      title: "Singing",
      summary: "🎤🎶 Showcase your voice and talent. 🎤🎶",
      description:
        "Let your voice be the melody that captivates hearts! Whether you sing soulful ballads, high-energy pop, or classical tunes, this stage is yours to shine. Showcase your vocal skills, express emotions through music, and leave the audience mesmerized with your performance.",
      banner: "singing.jpg",
      rules: [
        "General rules are applicable.",
        "2 student participant is permitted per contingent.",
        "Background music is allowed.",
        "Instruments are allowed if played by the participant or one accompaniment.",
        "Hindi, Marathi, English songs are permissible.",
        "Time limit: Min 2 & Max 3 minutes.",
        "Vulgar words, offensive gestures or any kind of misbehaviour shall lead to negative marking or even disqualification.",
        "Participants must carry the soft copy of their background music in their mobiles and must notify the event head at least 2 days prior to the event.",
        "Judge's decision will be final.",
      ],
      participant: ["N/A"],
      time: ["N/A"],
      price: ["N/A"],
      venue: "TIMSCDR",
    };
  } else if (eventName === "rap") {
    data = {
      title: "Rap (Elimination)",
      summary: "🎙️🔥 Battle with words and rhythm. 🎙️🔥",
      description:
        "Are you ready to drop some bars? Step into the world of rhythm and wordplay, where creativity meets confidence. Compete in an intense lyrical showdown, impress the judges with your flow and punchlines, and battle your way to the finals. Only the best will move forward!",
      banner: "rap.jpg",
      rules: [
        "2 student participants are permitted per contingent.",
        "The rap can be in Hindi, English, or Marathi.",
        "Time limit: Min 2 & Max 3 minutes.",
        "Rappers can bring their own beatboxer if they want.",
        "Vulgar words, offensive gestures, and language can lead to reduction in points and even disqualification.",
        "Participants must carry the soft copy of their background music in their mobiles and must notify the event head at least 2 days prior to the event.",
        "Judge's decision will be final.",
      ],
      participant: ["N/A"],
      time: ["N/A"],
      price: ["N/A"],
      venue: "TIMSCDR",
    };
  } else if (eventName === "solodance") {
    data = {
      title: "Solo Dance",
      summary: "💃🎵 Express emotions through dance. 💃🎵",
      description:
        "Dance like no one’s watching—except everyone will be! Whether it’s classical, hip-hop, contemporary, or freestyle, bring your energy and passion to the stage. Express emotions through movement, stun the audience with your rhythm, and own the dance floor with an electrifying performance.",
      banner: "solodance.jpg",
      rules: [
        "Theme: Open.",
        "2 student participant is permitted per contingent.",
        "Participant must bring their own props if needed.",
        "Time limit: For each performance 5 mins.",
        "Participant must carry the soft copy of their background music in their mobiles and must notify the event head at least 2 days prior to the event.",
        "Any sort of vulgarity, profanity and obscenity will lead to negative marking and even disqualification.",
        "Judge's decision will be final.",
      ],
      participant: ["N/A"],
      time: ["N/A"],
      price: ["N/A"],
      venue: "TIMSCDR",
    };
  } else if (eventName === "groupdance") {
    data = {
      title: "Group Dance",
      summary: "🕺💫 Synchronize and groove together. 🕺💫",
      description:
        "When dance meets teamwork, magic happens! Put together a powerhouse performance with your group, blending style, coordination, and creativity. Whether it's Bollywood, hip-hop, contemporary, or fusion, deliver a jaw-dropping performance that leaves the audience cheering for more!",
      banner: "groupdance.jpg",
      rules: [
        "Theme: Open.",
        "2 student participant is permitted per contingent.",
        "Participant must bring their own props if needed.",
        "Time limit: For each performance 5 mins.",
        "Participant must carry the soft copy of their background music in their mobiles and must notify the event head at least 2 days prior to the event.",
        "Any sort of vulgarity, profanity and obscenity will lead to negative marking and even disqualification.",
        "Judge's decision will be final.",
      ],
      participant: ["N/A"],
      time: ["N/A"],
      price: ["N/A"],
      venue: "TIMSCDR",
    };
  } else if (eventName === "fashionshow") {
    data = {
      title: "Fashion Show",
      summary: "👗✨ Walk the runway in style. 👗✨",
      description:
        "Style, elegance, and confidence—this is your chance to shine on the runway! Showcase the latest trends, express your fashion statement, and own the stage with your charisma. Whether bold or classic, this event is all about expressing yourself through fashion.",
      banner: "fashion.jpg",
      rules: [
        "Theme: Open.",
        "1 team is permitted per contingent.",
        "A team of 8-10 students from the same college.",
        "Use of props is allowed.",
        "They are expected to report an hour in advance.",
        "They must carry the soft copy of the background music in their mobiles and must notify the event head at least 2 days prior to the event.",
        "Time limit: For each performance will be 10 minutes.",
        "No obscene language or unethical practices must be done during the course of the event.",
        "Any form of such vulgarity found will lead to debarring the participant from the event.",
        "Judge's decision will be final.",
      ],
      participant: ["N/A"],
      time: ["N/A"],
      price: ["N/A"],
      venue: "TIMSCDR",
    };
  } else if (eventName === "mrmsvista") {
    data = {
      title: "Mr/Ms Vista",
      summary: "👑🎖️ Compete for charm and elegance. 👑🎖️",
      description:
        "A search for the most charismatic and talented personalities of Vista Fest! Participants will be judged on confidence, intelligence, talent, and their ability to leave a lasting impression. Prove you have what it takes to be crowned Mr. or Ms. Vista!",
      banner: "mrmsvista.jpg",
      rules: [
        "1 participant is permitted per contingent. [A girl & a boy]",
        "1st round: Walk and personality round.",
        "2nd round: Talent round [1-2 mins].",
        "3rd round: Q/A round.",
        "Elimination will be done after every round.",
        "Any form of vulgarity & foul language will lead to disqualification.",
        "Track MP3 file should be submitted to the event head at least 2 days prior to the event.",
        "Judge's decision will be final.",
      ],
      participant: ["N/A"],
      time: ["N/A"],
      price: ["N/A"],
      venue: "TIMSCDR",
    };
  }

  console.log(eventName);
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <motion.div
        className="relative h-[500px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1920')] bg-cover bg-center">
          <div
            style={{ backgroundImage: `url('/banner/${data.banner}')` }}
            className="absolute inset-0 bg-cover bg-top  opacity-30"
          />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {data.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {data.summary}
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
                {data.description}
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
              {data.rules.map((element, index) => (
                <motion.div
                  key={index}
                  className="pl-4 border-l-2 border-purple-500"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-gray-300">{element}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <div className="grid md:grid-cols-4 gap-8">
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
                  {data.participant.map((element, index) => (
                    <li key={index}>• {element}</li>
                  ))}
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
                {data.time.map((element, index) => (
                  <p key={index} className="text-gray-300">
                    {element}
                  </p>
                ))}
              </motion.div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-yellow-500">Price</h2>
              </div>
              <motion.div
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {data.price.map((element, index) => (
                  <p key={index} className="text-gray-300">
                    {element}
                  </p>
                ))}
              </motion.div>
            </motion.section>
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-green-500" />
                <h2 className="text-2xl font-bold text-green-500">Venue</h2>
              </div>
              <motion.div
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-gray-300">{data.venue}</p>
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}

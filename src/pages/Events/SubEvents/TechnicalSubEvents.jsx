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

export default function TechnicalSubEvents() {
  const { eventName } = useParams();
  let data = {};
  if (eventName === "qalainnovate") {
    data = {
      title: "QalaInnovate",
      summary: " 💻🚀 Code, innovate, and solve real-world problems. 💻🚀",
      description:
        "Step into the world of innovation and creativity with QalaInnovate! This high-energy hackathon is your chance to turn big ideas into reality. Collaborate, code, and craft solutions to real-world problems while competing against the brightest minds in tech.",
      banner:"hackathon.jpg",  
      rules: [
        "Group participation of min 3 and max 5 members in each group.",
        "The participants have to bring their own system.",
        "The problem statement will be given on the event day.",
        "The timing will be from morning 9 to evening 5.",
        "There will be top 3 cash prizes.",
        "Registration amount ₹500 per team.",
        "Judge’s and event heads’ decisions will be considered final.",
      ],
      participant: ["It is a group game.", "3 to 5 member per group."],
      time: ["Coding : 9:00AM - 3:00PM", "Result : 3:00PM - 5:00PM"],
      price: [
        "🥇1st prize:- ₹3,000",
        "🥈2nd prize:- ₹1,800",
        "🥉3rd prize:- ₹1,200",
      ],
      venue: "Venue Will Be Revealed Soon",
    };
  } else if (eventName === "framefusion") {
    data = {
      title: "Frame Fusion",
      summary: "🎬🎥 Create impactful films with creativity. 🎬🎥",
      description:
        "Unleash your storytelling power with FrameFusion! Whether it’s drama, comedy, or a thriller, this event challenges you to create impactful short films that inspire and entertain. Lights, camera, creativity!",
      banner:"shortfilm.jpg",
      rules: [
        "The participants have to make a short video about Vista and its events of about 30-60 seconds.",
        "The content has to be original.",
        "Best video will be uploaded on Vista’s Instagram handle.",
        "Registration amount ₹50.",
        "Judge’s and event heads’ decisions will be considered final.",
      ],
      participant: ["It is a solo game.", "Total 25 participants."],
      time: ["Coding : 9:00AM - 3:00PM", "Result : 3:00PM - 5:00PM"],
      price: ["🥇1st prize:- ₹500"],
      venue: "Venue Will Be Revealed Soon",
    };
  } else if (eventName === "codecraft") {
    data = {
      title: "CodeCraft Battle",
      summary: "⚔️👨‍💻 Solve coding challenges, compete, and win. ⚔️👨‍💻",
      description:
        "Test your logic, speed, and coding skills in the ultimate programming showdown! CodeCraft Battle is designed for competitive programmers who thrive on solving challenging problems under pressure. Are you ready to claim the champion’s spot?",
      banner:"coding.jpg",
      rules: [
        "Solo participation will be allowed.",
        "There will be 3 rounds: 1st round will be elimination round. Participants clearing the 1st round will proceed to the 2nd round which is the qualifying round. Finally, the participants clearing the 2nd round will proceed to the final round.",
        "Time limit will be 45 mins. The participant will be given 10 minutes for 1st question, 15 minutes for the 2nd and 20 minutes for the 3rd.",
        "Programming languages: C/C++, Java, Python.",
        "The winner will be finalised on the basis of code efficiency and the time taken to solve the question.",
        "Registration amount ₹50.",
        "Judge’s and event heads’ decisions will be considered final.",
      ],
      participant: ["It is a solo game.", "Total 25 participants."],
      time: ["Coding : 10:00AM - 12:00PM", "Result : 12:00PM - 1:00PM"],
      price: ["🥇1st prize:- ₹800", "🥈2nd prize:- ₹500"],
      venue: "Venue Will Be Revealed Soon",
    };
  } else if (eventName === "qalakriti") {
    data = {
      title: "QalaKriti",
      summary: "🎨🖥️ Design stunning, user-friendly digital interfaces. 🎨🖥️",
      description:
        "Transform ideas into visually stunning and user-friendly designs with QalaKriti! Show off your design skills as you craft interfaces that are not just functional but also a delight to experience. It's your canvas—let your imagination run wild!",
      banner:"web.jpg",
      rules: [
        "Participants have to design a website having more than 1 webpage.",
        "Use of frameworks like Figma, React, Angular, jQuery are allowed.",
        "Problem statement will be given on event day.",
        "Registration amount ₹50.",
        "Judge’s and event heads’ decisions will be considered final.",
      ],
      participant: ["It is a solo game.", "Total 25 participants."],
      time: ["Coding : 9:00AM - 3:00PM", "Result : 3:00PM - 5:00PM"],
      price: ["🥇1st prize:- ₹800", "🥈2nd prize:- ₹300"],
      venue: "Venue Will Be Revealed Soon",
    };
  } else if (eventName === "artofdebug") {
    data = {
      title: "Art Of Debug",
      summary: "🐞🔍 Find and fix tricky bugs fast. 🐞🔍",
      description:
        "Embrace the challenge of hunting down elusive bugs and fixing them like a pro! Art of Debug is where your problem-solving skills meet your coding expertise. Can you crack the code and debug your way to victory?",
      banner:"debug.jpg",
      rules: [
        "Solo participation will be allowed.",
        "There will be 2 rounds: 1st round will be elimination round. Finally, the participants clearing the 1st round will proceed to the final round.",
        "Registration amount ₹50.",
        "Judge’s and event heads’ decisions will be considered final.",
      ],
      participant: ["It is a solo game.", "Total 25 participants."],
      time: ["Coding : 10:00AM - 12:00PM", "Result : 12:00PM - 1:00PM"],
      price: ["🥇1st prize:- ₹600", "🥈2nd prize:- ₹300"],
      venue: "Venue Will Be Revealed Soon",
    };
  } else if (eventName === "qalamindquest") {
    data = {
      title: "QalaMind Quest",
      summary: "🧠🤔 Solve logical puzzles and test reasoning. 🧠🤔",
      description:
        "Push your mental boundaries and showcase your analytical prowess in QalaMind Quest! From logical puzzles to mathematical challenges, this aptitude test will determine who’s got the sharpest mind in the game.",
      banner:"quiz.jpg",
      rules: [
        "The quiz will be on an online quiz platform.",
        "There will be 3 rounds.",
        "Quiz will be on Coding, Logical and Reasoning, and Quantitative.",
        "Registration amount ₹50.",
        "Judges' and event heads' decisions will be considered final.",
      ],
      participant: ["It is a solo game.", "Total 25 participants."],
      time: ["Coding : 1:00AM - 3:00PM", "Result : 3:00PM - 5:00PM"],
      price: ["🥇1st prize:- ₹500", "🥈2nd prize:- ₹300", "🥉3rd prize:- ₹200"],
      venue: "Venue Will Be Revealed Soon",
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
          <div style={{backgroundImage: `url('/banner/${data.banner}')` }} className="absolute inset-0 bg-cover bg-center  opacity-30" />
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

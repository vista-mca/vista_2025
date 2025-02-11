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
import chess from "/banner/chess.jpg";
import carrom from "/banner/carrom.jpg";
import tabletennis from "/banner/tabletennis.jpg";

export default function SportsSubEvents() {
  const { eventName } = useParams();
  let data = {};
  if (eventName === "chess") {
    data = {
      title: "Chess",
      summary: "♟️ Test your strategy and skill! ♟️",
      description:
        "Challenge your mind and outthink your opponent in a battle of wits. Plan your moves, anticipate your rival's strategy, and checkmate your way to victory in this intense chess showdown!",
      banner: "chess.jpg",
      rules: [
        "Objective: The game is won by either checkmating the opponent’s king or by forcing a resignation.",
        "Time Control: Players have a set time limit of 10 minutes each.",
        "Gameplay:",
        "1. Each player moves one piece at a time, except for the Knight, which can jump over other pieces.",
        "2. Pawns move forward one square at a time but capture diagonally.",
        "3. Castling is allowed under specific conditions.",
        "Registration amount: ₹50.",
      ],
      participant: ["Individual"],
      time: ["10:00AM - 5:00PM"],
      price: ["500 Rs."],
      venue: "TIMSCDR",
    };
  } else if (eventName === "carrom") {
    data = {
      title: "Carrom",
      summary: "🎯 Aim, strike, and pocket to win! 🎯",
      description:
        "Show off your precision and strategy in this classic board game. Pot all your pieces before your opponent and claim victory in this fast-paced, skill-based competition!",
      banner: "carrom.jpg",
      rules: [
        "Objective: The goal is to pot your own set of pieces (either white or black) before the opponent, followed by the queen.",
        "Board Setup: The game is played on a square board with 9 carrom men (pieces) for each player (white and black) and 1 red queen.",
        "Gameplay:",
        "1. Players take turns to strike with a striker using their fingers to hit the pieces.",
        "2. A piece is potted when it is sent into one of the corner pockets.",
        "3. The queen must be potted, and then followed by a valid piece (white/black) to win.",
        "Registration amount: ₹100 (Team of 2).",
      ],
      participant: ["Team of 2"],
      time: ["10:00AM - 5:00PM"],
      price: ["500 Rs."],
      venue: "TIMSCDR",
    };
  } else if (eventName === "tabletennis") {
    data = {
      title: "Table Tennis",
      summary: "🏓 Fast-paced rallies and thrilling smashes! 🏓",
      description:
        "Test your reflexes and agility in an intense table tennis match! Serve, rally, and smash your way to the top in this high-energy game of skill and speed.",
      banner: "tabletennis.jpg",
      rules: [
        "Objective: The objective of the game is to score points by making the ball bounce twice on the opponent’s side of the table.",
        "Gameplay:",
        "1. The ball must be served from behind the end line, and it must bounce once on the server's side and once on the receiver’s side.",
        "2. Players alternate hits. The ball must pass over the net after being struck.",
        "3. A point is awarded if the opponent fails to return the ball or commits a fault.",
        "Winning Conditions: Matches will be played to 11 points, and a player must win by 2 points.",
        "Registration amount: ₹50",
      ],
      participant: ["Individual"],
      time: ["10:00AM - 5:00PM"],
      price: ["500 Rs."],
      venue: "TIMSCDR",
    };
  } else if (eventName === "tugofwar") {
    data = {
      title: "Tug of War",
      summary: "💪 Pull with all your might! 💪",
      description:
        "Gather your strength and teamwork in this ultimate test of power! Work together, hold your ground, and pull your way to victory against the opposing team.",
      banner: "tugofwar.jpg",
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
      participant: ["Team of 8-10"],
      time: ["N/A"],
      price: ["N/A"],
      venue: "Venue Will Be Revealed Soon",
    };
  }

  //    else if (eventName === "tugofwar") {
  //     data = {
  //       title: "Tug of War",
  //       summary: "💪🏽🔥 Strength, teamwork, and ultimate power—pull to win! 💪🏽🔥",
  //       description:
  //         "Gather your team and prepare for an epic battle of strength and endurance! Coordination, resilience, and determination will decide who emerges victorious in this ultimate test of teamwork.",
  //       banner: "tugofwar.jpg",
  //       rules: [
  //         "Theme: Open.",
  //         "1 team is permitted per contingent.",
  //         "A team of 8-10 students from the same college.",
  //         "Use of props is allowed.",
  //         "They are expected to report an hour in advance.",
  //         "They must carry the soft copy of the background music in their mobiles and must notify the event head at least 2 days prior to the event.",
  //         "Time limit: For each performance will be 10 minutes.",
  //         "No obscene language or unethical practices must be done during the course of the event.",
  //         "Any form of such vulgarity found will lead to debarring the participant from the event.",
  //         "Judge's decision will be final.",
  //       ],
  //       participant: ["N/A"],
  //       time: ["N/A"],
  //       price: ["N/A"],
  //       venue: "TIMSCDR",
  //     };
  //   }

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

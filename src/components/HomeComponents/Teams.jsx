import { motion } from "framer-motion";
import "../../css/button1.css";
import "../../index.css";
import premImg from "../../assets/team/prem.jpg";
import shurtiImg from "../../assets/team/shruti.jpg";
import vijetaImg from "../../assets/team/vijeta.jpg";
import adityaImg from "../../assets/team/aditya.jpg";
import alpeshImg from "../../assets/team/alpesh.jpg";
import faizanImg from "../../assets/team/faizan.jpg";
import sujataImg from "../../assets/team/sujata.jpg";
import aliImg from "../../assets/team/ali.jpg";
import adnanImg from "../../assets/team/adnan.jpg";
import priyanshuImg from "../../assets/team/priyanshu.jpg";
import alishaImg from "../../assets/team/alisha.jpg";
import sakshiImg from "../../assets/team/sakshi.jpg";
import ayushImg from "../../assets/team/ayush.jpg";
import omkarImg from "../../assets/team/omkar.jpg";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const Teams = () => {
  const coreMembers = [
    {
      id: 1,
      name: "Prem Sahu",
      role: "President",
      image: premImg,
      linkedin: "https://www.linkedin.com/in/premsahudeveloper/",
      instagram: "https://www.instagram.com/premsxhu/",
      youtube: "",
      website: "",
    },
    {
      id: 2,
      name: "Shruti Prajapati",
      role: "Vice President",
      image: shurtiImg,
      linkedin: "https://www.linkedin.com/in/shrutii-prajapatii-499a75314/",
      instagram: "https://www.instagram.com/__shruutzz__/",
      youtube: "",
      website: "",
    },
    {
      id: 3,
      name: "Aditya Patil",
      role: "Event Co-ordinator",
      image: adityaImg,
      linkedin: "",
      instagram: "https://www.instagram.com/8unnyyy.who/",
      youtube: "",
      website: "",
    },
    {
      id: 4,
      name: "Vijeta Yadav",
      role: "Event Co-ordinator",
      image: vijetaImg,
      linkedin: "https://www.linkedin.com/in/vijeta-yadav-980028330/",
      instagram: "https://www.instagram.com/whoisvijeta_._/",
      youtube: "",
      website: "",
    },
  ];
  const teamMembers = [
    {
      id: 1,
      name: "Alpesh Saxena",
      role: "Public Relation Officer",
      image: alpeshImg,
      instagram: "",
      linkedin: "https://www.linkedin.com/in/alpeshsaxena/",
      youtube: "",
      website: "https://www.anon.org.in/",
    },
    {
      id: 7,
      name: "Priyanshu Chouhan",
      role: "Public Relation Officer",
      image: priyanshuImg,
      instagram: "https://www.instagram.com/thepriynshuchouhn",
      linkedin: "https://www.linkedin.com/in/priynshuchouhn/",
      youtube: "",
      website: "",
    },
    {
      id: 2,
      name: "Faizan Talikot",
      role: "General Secretary",
      image: faizanImg,
      instagram: "https://www.instagram.com/__faizzann__02",
      linkedin: "https://www.linkedin.com/in/faizan-talikot/",
      youtube: "",
      website: "",
    },
    {
      id: 3,
      name: "Sujata Prasad",
      role: "Technical Head",
      image: sujataImg,
      instagram: "https://www.instagram.com/sujataprasad01",
      linkedin: "https://www.linkedin.com/in/sujata-prasad/",
      youtube: "",
      website: "",
    },
    {
      id: 4,
      name: "Ayush Tiwari",
      role: "Cultural Head",
      image: ayushImg,
      instagram: "https://www.instagram.com/alishk_08",
      instagram: "https://www.instagram.com/hey.ayussh",
      linkedin: "https://www.linkedin.com/in/ayush-tiwari-151866225",
      website: "",
    },
    {
      id: 5,
      name: "Adnan Shaikh",
      role: "Sport Head",
      image: adnanImg,
      instagram: "https://www.instagram.com/adnannshaikh9",
      linkedin: "https://www.linkedin.com/in/adnan-shaikh-289ab5234/",
      youtube: "",
      website: "",
    },
    {
      id: 6,
      name: "Alisha Malik",
      role: "Sponsor Head",
      image: alishaImg,
      instagram: "https://www.instagram.com/liisshhha/",
      linkedin: "https://www.linkedin.com/in/alisha-malik-a3808a330",
      youtube: "",
      website: "",
    },
    {
      id: 7,
      name: "Sakshi Singh",
      role: "Creative Head",
      image: sakshiImg,
      instagram: "https://www.instagram.com/sakshiisinghh_/",
      linkedin: "https://www.linkedin.com/in/sakshi-singh-4b7964237",
      youtube: "",
      website: "",
    },
    {
      id: 8,
      name: "Omkar Prajapati",
      role: "Web Developer",
      image: omkarImg,
      instagram: "https://www.instagram.com/omkar.devx/",
      linkedin: "https://www.linkedin.com/in/omkardevx/",
      youtube: "",
      website: "https://commercewale.in/",
    },
  ];
  return (
    <div id="teams-section" className="my-[3rem]">
      <div>
        <h1 className="text-[#007bff] text-center font-bold text-5xl my-[2rem]">
          Our Team 🙋🏻
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"></div>
        <div className="flex flex-wrap my-8 justify-center gap-6">
          {coreMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="w-44 h-full bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <Avatar className="w-24 h-24 mb-4 ring-2 ring-gray-800 group-hover:ring-purple-500/50 transition-all duration-300">
                      <AvatarImage
                        className="object-cover"
                        src={member.image}
                        alt={member.name}
                      />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <motion.h3
                    className="text-sm font-semibold text-white mb-1 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-gray-400 text-xs group-hover:text-purple-300 transition-colors duration-300">
                    {member.role}
                  </p>
                  <div className="flex justify-center pt-4">
                    {member.linkedin && (
                      <a
                        className="z-[100]"
                        href={member.linkedin}
                        target="_blank"
                      >
                        <FaLinkedinIn
                          color="#0072b1"
                          size={"1.5rem"}
                          style={{
                            cursor: "pointer",
                            marginLeft: ".5rem",
                            marginRight: ".5rem",
                          }}
                          className="hover-icon"
                        />
                      </a>
                    )}
                    {member.website && (
                      <a
                        className="z-[100]"
                        href={member.website}
                        target="_blank"
                      >
                        <CiGlobe
                          color="#0072b1"
                          size={"1.5rem"}
                          style={{
                            cursor: "pointer",
                            marginLeft: ".5rem",
                            marginRight: ".5rem",
                          }}
                          className="hover-icon"
                        />
                      </a>
                    )}

                    {member.instagram && (
                      <a
                        className="z-[100]"
                        href={member.instagram}
                        target="_blank"
                      >
                        <FaInstagram
                          color="#d62976 "
                          size={"1.5rem"}
                          style={{
                            cursor: "pointer",
                            marginLeft: ".5rem",
                            marginRight: ".5rem",
                          }}
                          className="hover-icon"
                        />
                      </a>
                    )}
                    {member.youtube && (
                      <a
                        className="z-[100]"
                        href={member.youtube}
                        target="_blank"
                      >
                        <FaYoutube
                          color="#f70000"
                          size={"1.5rem"}
                          style={{
                            cursor: "pointer",
                            marginLeft: ".5rem",
                            marginRight: ".5rem",
                          }}
                          className="hover-icon"
                        />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap my-8 justify-center gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="w-44 h-full bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardContent className="flex flex-col items-center p-6 relative overflow-hidden group h-full">
                  <div className="absolute h-full inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <Avatar className="w-24 h-24  mb-4 ring-2 ring-gray-800 group-hover:ring-purple-500/50 transition-all duration-300">
                      <AvatarImage
                        className="object-cover"
                        src={member.image}
                        alt={member.name}
                      />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <motion.h3
                    className="text-sm text-center font-medium text-white mb-1 relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-xs text-center text-gray-400 group-hover:text-purple-300 transition-colors duration-300">
                    {member.role}
                  </p>
                  <div className="flex justify-center pt-4">
                    {member.linkedin && (
                      <a
                        className="z-[100]"
                        href={member.linkedin}
                        target="_blank"
                      >
                        <FaLinkedinIn
                          color="#0072b1"
                          size={"1.5rem"}
                          style={{
                            cursor: "pointer",
                            marginLeft: ".5rem",
                            marginRight: ".5rem",
                          }}
                          className="hover-icon"
                        />
                      </a>
                    )}
                    {member.website && (
                      <a
                        className="z-[100]"
                        href={member.website}
                        target="_blank"
                      >
                        <CiGlobe
                          color="#0072b1"
                          size={"1.5rem"}
                          style={{
                            cursor: "pointer",
                            marginLeft: ".5rem",
                            marginRight: ".5rem",
                          }}
                          className="hover-icon"
                        />
                      </a>
                    )}

                    {member.instagram && (
                      <a
                        className="z-[100]"
                        href={member.instagram}
                        target="_blank"
                      >
                        <FaInstagram
                          color="#d62976 "
                          size={"1.5rem"}
                          style={{
                            cursor: "pointer",
                            marginLeft: ".5rem",
                            marginRight: ".5rem",
                          }}
                          className="hover-icon"
                        />
                      </a>
                    )}
                    {member.youtube && (
                      <a
                        className="z-[100]"
                        href={member.youtube}
                        target="_blank"
                      >
                        <FaYoutube
                          color="#f70000"
                          size={"1.5rem"}
                          style={{
                            cursor: "pointer",
                            marginLeft: ".5rem",
                            marginRight: ".5rem",
                          }}
                          className="hover-icon"
                        />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-[2rem]">
        <a href="/teams">
          <button className="button1">View All</button>
        </a>
      </div>
    </div>
  );
};

export default Teams;

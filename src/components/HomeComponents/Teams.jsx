import { motion } from "framer-motion";
import "../../css/button1.css";
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
import omkarImg from "../../assets/team/omkar.jpg";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const Teams = () => {
  const coreMembers = [
    {
      id: 1,
      name: "Prem Sahu",
      role: "President",
      image: premImg,
    },
    {
      id: 2,
      name: "Shruti Prajapati",
      role: "Vice President",
      image: shurtiImg,
    },
    {
      id: 3,
      name: "Vijeta Yadav",
      role: "Event Co-ordinator",
      image: vijetaImg,
    },
    {
      id: 4,
      name: "Aditya Patil",
      role: "Event Co-ordinator",
      image: adityaImg,
    },
  ];
  const teamMembers = [
    {
      id: 1,
      name: "Alpesh Saxena",
      role: "Public Relation Officer",
      image: alpeshImg,
    },
    {
      id: 7,
      name: "Priyanshu Chouhan",
      role: "Public Relation Officer",
      image: priyanshuImg,
    },
    {
      id: 2,
      name: "Faizan Talikot",
      role: "General Secretary",
      image: faizanImg,
    },
    {
      id: 3,
      name: "Sujata Prasad",
      role: "Technical Head",
      image: sujataImg,
    },
    {
      id: 4,
      name: "Ali Shaikh",
      role: "Cultural Head",
      image: aliImg,
    },
    {
      id: 5,
      name: "Adnan Shaikh",
      role: "Sport Head",
      image: adnanImg,
    },
    {
      id: 8,
      name: "Alisha Malik",
      role: "Sponsor Head",
      image: alishaImg,
    },
    {
      id: 6,
      name: "Aditya Patil",
      role: "Digital Head",
      image: adityaImg,
    },
    {
      id: 9,
      name: "Sakshi Singh",
      role: "Creative Head",
      image: sakshiImg,
    },
    {
      id: 10,
      name: "Omkar Prajapati",
      role: "Developer",
      image: omkarImg,
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

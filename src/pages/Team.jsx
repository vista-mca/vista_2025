"use client";
import AnimatedBanner from "@/components/AnimatedBanner";
import Navbar from "@/components/Navbar";
import premImg from "../assets/team/prem.jpg";
import shurtiImg from "../assets/team/shruti.jpg";
import vijetaImg from "../assets/team/vijeta.jpg";
import adityaImg from "../assets/team/aditya.jpg";
import alpeshImg from "../assets/team/alpesh.jpg";
import faizanImg from "../assets/team/faizan.jpg";
import sujataImg from "../assets/team/sujata.jpg";
import aliImg from "../assets/team/ali.jpg";
import adnanImg from "../assets/team/adnan.jpg";
import priyanshuImg from "../assets/team/priyanshu.jpg";
import alishaImg from "../assets/team/alisha.jpg";
import sakshiImg from "../assets/team/sakshi.jpg";
import omkarImg from "../assets/team/omkar.jpg";
import TeamCard from "@/components/TeamCard";

const coreMembers = [
  {
    id: 1,
    name: "Prem Sahu",
    role: "President",
    image: premImg,
    linkedin: "https://www.linkedin.com/in/premsahudeveloper/",
    instagram: "https://www.instagram.com/premsxhu/",
  },
  {
    id: 2,
    name: "Shruti Prajapati",
    role: "Vice President",
    image: shurtiImg,
    linkedin: "https://www.linkedin.com/in/shrutii-prajapatii-499a75314/",
    instagram: "https://www.instagram.com/__shruutzz__/",
  },
  {
    id: 4,
    name: "Aditya Patil",
    role: "Event Co-ordinator",
    image: adityaImg,
    linkedin: "",
    instagram: "https://www.instagram.com/8unnyyy.who/",
  },
  {
    id: 3,
    name: "Vijeta Yadav",
    role: "Event Co-ordinator",
    image: vijetaImg,
    linkedin: "https://www.linkedin.com/in/vijeta-yadav-980028330/",
    instagram: "https://www.instagram.com/whoisvijeta_._/",
  },
];
const teamMembers = [
  {
    id: 1,
    name: "Alpesh Saxena",
    role: "Public Relation Officer",
    image: alpeshImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 7,
    name: "Priyanshu Chouhan",
    role: "Public Relation Officer",
    image: priyanshuImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 2,
    name: "Faizan Talikot",
    role: "General Secretary",
    image: faizanImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 3,
    name: "Sujata Prasad",
    role: "Technical Head",
    image: sujataImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 4,
    name: "Ali Shaikh",
    role: "Cultural Head",
    image: aliImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 5,
    name: "Adnan Shaikh",
    role: "Sport Head",
    image: adnanImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 8,
    name: "Alisha Malik",
    role: "Sponsor Head",
    image: alishaImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 6,
    name: "Aditya Patil",
    role: "Digital Head",
    image: adityaImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 9,
    name: "Sakshi Singh",
    role: "Creative Head",
    image: sakshiImg,
    linkedin: "",
    instagram: "",
  },
  {
    id: 10,
    name: "Priyanshu Chouhan",
    role: "Web Developer",
    image: priyanshuImg,
    linkedin: "",
    instagram: "",
  },
];

export default function Team() {
  return (
    <div>
      <Navbar />
      <section className="w-full py-8 bg-gray-950">
        <div className="w-full bg-[#070F2B] h-[4.2rem]"></div>
        <AnimatedBanner
          text="Our Team"
          bgColor="bg-[#070F2B]"
          textColor="text-white"
        />

        <div className="px-4 md:px-6">
          <div className="flex flex-wrap my-8 justify-center gap-6">
            {coreMembers.map(
              ({ id, name, role, linkedin, instagram, image }) => (
                <TeamCard
                  key={id}
                  img={image}
                  name={name}
                  position={role}
                  linkedin={linkedin}
                  instagram={instagram}
                />
              )
            )}
            {/* <TeamCard
              img={shurtiImg}
              name={"Shruti Prajapati"}
              position={"Vice Chairperson"}
              linkedin={
                "https://www.linkedin.com/in/shrutii-prajapatii-499a75314/"
              }
              instagram={"https://www.instagram.com/__shruutzz__/"}
            />
            <TeamCard
              img={vijetaImg}
              name={" Vijeta Yadav"}
              position={"Event Co-ordinator"}
              linkedin={"https://www.linkedin.com/in/vijeta-yadav-980028330/"}
              instagram={"https://www.instagram.com/whoisvijeta_._/"}
            />
            <TeamCard
              img={adityaImg}
              name={"Aditya Patil"}
              position={"Event Co-ordinator"}
              linkedin={"void"}
              instagram={"https://www.instagram.com/8unnyyy.who/"}
            /> */}
          </div>
          <div className="flex flex-wrap my-8 justify-center gap-6">
            {teamMembers.map(
              ({ id, name, role, linkedin, instagram, image }) => (
                <TeamCard
                  key={id}
                  img={image}
                  name={name}
                  position={role}
                  linkedin={linkedin}
                  instagram={instagram}
                />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

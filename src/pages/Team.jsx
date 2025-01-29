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
    name: "Ali Shaikh",
    role: "Cultural Head",
    image: aliImg,
    instagram: "https://www.instagram.com/alishk_08",
    linkedin: "https://www.linkedin.com/in/ali-shaikh-09ba6329b/",
    youtube: "https://youtube.com/@alishk3750?si=4yMJ8CtB-H8ZRmQm",
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
              ({
                id,
                name,
                role,
                linkedin,
                instagram,
                image,
                website,
                youtube,
              }) => (
                <TeamCard
                  key={id}
                  img={image}
                  name={name}
                  position={role}
                  linkedin={linkedin}
                  instagram={instagram}
                  website={website}
                  youtube={youtube}
                />
              )
            )}
          </div>
          <div className="flex flex-wrap my-8 justify-center gap-6">
            {teamMembers.map(
              ({
                id,
                name,
                role,
                linkedin,
                instagram,
                website,
                youtube,
                image,
              }) => (
                <TeamCard
                  key={id}
                  img={image}
                  name={name}
                  position={role}
                  linkedin={linkedin}
                  instagram={instagram}
                  website={website}
                  youtube={youtube}
                />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

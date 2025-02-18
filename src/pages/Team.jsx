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
import amitImg from "../assets/team/amit.jpg";
import ayushImg from "../assets/team/ayush.jpg";
import omkarImg from "../assets/team/omkar.jpg";
import TeamCard from "@/components/TeamCard";

import tushar1Img from "../assets/team/tushar.jpg";
import tushar2Img from "../assets/team/tushar.png";
import pranaliImg from "../assets/team/pranali.png";
import akashImg from "../assets/team/akash.jpg";
import ashishImg from "../assets/team/ashish.png";
import gauravImg from "../assets/team/gaurav.png";
import ajayImg from "../assets/team/ajay.png";
import karanrajImg from "../assets/team/karanraj.png";
import kamleshImg from "../assets/team/kamlesh.png";
import vaishnaviImg from "../assets/team/vaishnavi.png";
import teenaImg from "../assets/team/teena.png";
import vaishaliImg from "../assets/team/vaishali.png";
import omImg from "../assets/team/om.png";
import mukendraImg from "../assets/team/mukendra.png";
import ankurImg from "../assets/team/ankur.png";
import swapnilImg from "../assets/team/swapnil.png";
import priyankaImg from "../assets/team/priyanka.jpg";
import sankalpImg from "../assets/team/sankalp.png";
import sureshImg from "../assets/team/suresh.png";
const chairMembers = [
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
const coreMembers = [
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
    name: "Amit Tiwari",
    role: "Logistic Head",
    image: amitImg,
    instagram: "https://www.instagram.com/amittiwari__18/",
    linkedin: "https://www.linkedin.com/in/amit-tiwari-63a43134a/",
    youtube: "",
    website: "",
  },
  {
    id: 8,
    name: "Sakshi Singh",
    role: "Creative Head",
    image: sakshiImg,
    instagram: "https://www.instagram.com/sakshiisinghh_/",
    linkedin: "https://www.linkedin.com/in/sakshi-singh-4b7964237",
    youtube: "",
    website: "",
  },
  {
    id: 9,
    name: "Omkar Prajapati",
    role: "Web Developer",
    image: omkarImg,
    instagram: "https://www.instagram.com/omkar.devx/",
    linkedin: "https://www.linkedin.com/in/omkardevx/",
    youtube: "",
    website: "https://commercewale.in/",
  },
];
const teamMembers = [
  {
    id: 1,
    name: "Priyanka Gond",
    role: "Incharge of UI/UX",
    image: priyankaImg,
    linkedin:
      "https://www.linkedin.com/in/priyanka-gond-562400285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/priyankagond_?igsh=MThlemZ6ZGljbThydw==",
    youtube: "",
    website: "",
  },
  {
    id: 2,
    name: "Swapnil Borkar",
    role: "Incharge of Chess",
    image: swapnilImg,
    linkedin:
      "https://www.linkedin.com/in/ashish-jha-838a96270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/ashish1106_?igsh=ZHpnazF0cmpseTlt",
    youtube: "",
    website: "",
  },
  {
    id: 3,
    name: "Pranali Patel",
    role: "Incharge of Quiz",
    image: pranaliImg,
    linkedin: "https://www.linkedin.com/in/pranali-parate-239029330",
    instagram: "https://www.instagram.com/pranali0104?igsh=cDM2NmRta2N0ODk1",
    youtube: "",
    website: "",
  },
  {
    id: 4,
    name: "Sankalp",
    role: "Incharge of Table Tennis",
    image: sankalpImg,
    linkedin: "",
    instagram: "https://www.instagram.com/snkalp_singh/",
    youtube: "",
    website: "",
  },
  {
    id: 6,
    name: "Teena Thomas",
    role: "Incharge of Fashion Show",
    image: teenaImg,
    linkedin: "www.linkedin.com/in/teena-thomas9",
    instagram: "https://www.instagram.com/teenathomass_9/",
    youtube: "",
    website: "",
  },
  {
    id: 7,
    name: "Suresh Choudhary",
    role: "Incharge of Tug of War",
    image: sureshImg,
    linkedin: "www.linkedin.com/in/Sureshsirvis",
    instagram: "https://www.instagram.com/Sureshsirvisc/",
    youtube: "",
    website: "",
  },
  {
    id: 8,
    name: "Tushar Suthar",
    role: "Incharge of BGMI",
    image: tushar1Img,
    linkedin: "https://www.linkedin.com/in/tusharsuthar0511",
    instagram:
      "https://www.instagram.com/tushar._.suthar?igsh=OTdqYjVvaW1mbGEy&utm_source=qr",
    youtube: "",
    website: "",
  },
  {
    id: 9,
    name: "Ashish Jha",
    role: "Incharge of Table Tennis",
    image: ashishImg,
    linkedin:
      "https://www.linkedin.com/in/ashish-jha-838a96270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/ashish1106_?igsh=ZHpnazF0cmpseTlt",
    youtube: "",
    website: "",
  },
  {
    id: 10,
    name: "Kamlesh Kanojia",
    role: "Incharge of Rap",
    image: kamleshImg,
    linkedin: "",
    instagram: "",
    youtube: "",
    website: "",
  },
  {
    id: 11,
    name: "Vaishali Singh",
    role: "Incharge of Fashion Show",
    image: vaishaliImg,
    linkedin: "",
    instagram: "https://www.instagram.com/rajputani_065",
    youtube: "",
    website: "",
  },
  {
    id: 12,
    name: "Om Shashank Patkar ",
    role: "Incharge of Tug Of War",
    image: omImg,
    linkedin: "https://www.linkedin.com/in/om-patkar",
    instagram: "https://www.instagram.com/ompatkar_?igsh=OGZnaTI0ZjRma2Nk",
    youtube: "",
    website: "",
  },
  {
    id: 13,
    name: "Mukendra Jaiswar  ",
    role: "Incharge of Hackathon",
    image: mukendraImg,
    linkedin:
      "https://www.linkedin.com/in/mukendra-jaiswar-311687226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:
      "https://www.instagram.com/mukendra_amj?igsh=MXE4dG13YmxhZHVqOA==",
    youtube: "",
    website: "",
  },
  {
    id: 14,
    name: "Tushar Shukla",
    role: "Incharge of Tug Of War",
    image: tushar2Img,
    linkedin: "",
    instagram:
      "https://www.instagram.com/imtusharshukla?utm_source=qr&igsh=MTNvZm9jcnVodmtmbg==",
    youtube: "",
    website: "",
  },
  {
    id: 15,
    name: "Ankur Das",
    role: "Incharge of Short Film",
    image: ankurImg,
    linkedin: "https://www.linkedin.com/in/ankur-das-b71769248",
    instagram: "https://www.instagram.com/_ghost_hunter18",
    youtube: "",
    website: "",
  },
  {
    id: 16,
    name: "Anish Pandkar",
    role: "Incharge of Carrom",
    image: ashishImg,
    linkedin: "",
    instagram: "https://www.instagram.com/_anishpandkar_?igsh=Z3J1ZzZqNHRzNmV0",
    youtube: "",
    website: "",
  },
  {
    id: 17,
    name: "Vaishnavi Mandlik",
    role: "Incharge of CP",
    image: vaishnaviImg,
    linkedin:
      "https://www.linkedin.com/in/vaishnavi-mandlik-9917241b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/_vaisshhh?igsh=cGlwb2h0M2M1cnEw",
    youtube: "",
    website: "",
  },
];
export default function Team() {
  return (
    <div>
      <Navbar />
      <section className="w-full py-8 bg-gray-950">
        <div className="w-full bg-[#070F2B] h-[2rem]"></div>
        <AnimatedBanner
          text="Our Team"
          bgColor="bg-[#070F2B]"
          textColor="text-white"
        />

        <div className="px-4 md:px-6">
          <div className="flex flex-wrap my-8 justify-center gap-6">
            {chairMembers.map(
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
            {coreMembers.map(
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

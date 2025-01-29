import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import s1 from "../../assets/sponsors/s1.jpeg";
import s2 from "../../assets/sponsors/s2.jpeg";
import s3 from "../../assets/sponsors/s3.jpeg";
import s4 from "../../assets/sponsors/s4.jpeg";
import s6 from "../../assets/sponsors/s6.png";
import s7 from "../../assets/sponsors/s7.png";

const items = [
  {
    text: "Rawstract",
    imageSrc: s1,
  },
  {
    text: "Le Black",
    imageSrc: s2,
  },
  {
    text: "Spade Culture",
    imageSrc: s3,
  },
  {
    text: "UnStop",
    imageSrc: s4,
  },
  {
    text: "FastUp",
    imageSrc: s6,
  },
  {
    text: "Rabiya Kitchen",
    imageSrc: s7,
  },
  {
    text: "Rawstract",
    imageSrc: s1,
  },
  {
    text: "Le Black",
    imageSrc: s2,
  },
  {
    text: "Spade Culture",
    imageSrc: s3,
  },
  {
    text: "UnStop",
    imageSrc: s4,
  },
  {
    text: "FastUp",
    imageSrc: s6,
  },
  {
    text: "Rabiya Kitchen",
    imageSrc: s7,
  },
];

function Sponsors() {
  return (
    <div id="sponsors-section" className="App">
      <h1 className="text-5xl text-[#007bff] font-bold text-center my-[3rem]">
        Sponsors Spotlight 🤝
      </h1>
      <VelocityScroll
        items={items}
        defaultVelocity={5}
        className="text-xl font-semibold"
      />
    </div>
  );
}

export default Sponsors;

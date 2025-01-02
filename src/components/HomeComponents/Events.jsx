import EventCard from "../EventCard";
import img2 from "../../assets/sports.jpeg";
import img1 from "../../assets/tech.jpg";
import img3 from "../../assets/cultural.jpg";
import img4 from "../../assets/esports.webp";
const Events = () => {
  const ITtext =
    "Unleash innovation and tech brilliance! Join us for hackathons, coding challenges, and games that shape the future of technology.";
  const SportsText =
    "Fuel your passion for the game! Compete, connect, and conquer in thrilling sports challenges that bring teams together.";
  const CuturalText =
    "Celebrate art, music, and traditions! Dive into vibrant cultural showcases that inspire creativity and unity.";
  return (
    <div id="events-section" className="my-[5rem] flex flex-col items-center">
      <div>
        <h2 className="text-[#007bff] my-[3rem] text-center font-bold text-5xl">
          Events 🚀
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
        <EventCard
          eventName={"Tech Events"}
          img={img1}
          text={ITtext}
          link={"/events/technicals"}
        />
      
        <EventCard
          eventName={"Cultural Events"}
          img={img3}
          text={CuturalText}
          link={"/events/culturals"}
        />
        <EventCard
          eventName={"Sports Events"}
          img={img2}
          text={SportsText}
          link={"/events/sports"}
        />
        <EventCard
          eventName={"E-Sports Events"}
          img={img4}
          text={CuturalText}
          link={"/events/culturals"}
        />
      </div>
    </div>
  );
};

export default Events;

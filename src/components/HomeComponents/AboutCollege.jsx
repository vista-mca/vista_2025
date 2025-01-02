import ImageCarousel from "../ImageCarousel";
const images = [
  "/vista23/college1.jpg",
  "/vista23/college2.jpg",
  "/vista23/college3.png",
];
const AboutCollege = () => {
  return (
    <div className="my-[2rem] md:my-[5rem]">
      <div className="flex gap-[2rem] md:gap-0 flex-col md:flex-row  w-full justify-evenly">
        <div className="text-white px-5 md:w-[35rem]">
          <div>
            <h2 className="text-4xl text-[#007bff] font-bold">
              About College🏢
            </h2>
          </div>
          <div className="my-[2rem]">
            <p className="md:text-lg">
              Thakur Institute of Management Studies, Career Development &
              Research (TIMSCDR), an autonomous and linguistic minority
              institute, proudly presents Qala-Inno-Vista 2025—a dynamic fusion
              of technical brilliance, cultural expression, and sporting
              enthusiasm
            </p>
          </div>
        </div>
        <ImageCarousel images={images} />
      </div>
    </div>
  );
};

export default AboutCollege;

import ImageCarousel from "../ImageCarousel";
const images = [
  "/vista23/image1.jpg",
  "/vista23/image2.jpg",
  "/vista23/image3.jpg",
  "/vista23/image4.jpg",
  "/vista23/image5.jpg",
  "/vista23/image6.jpg",
];
const AboutUs = () => {
  return (
    <div id="about-us-section" className="my-[2rem] md:my-[5rem]">
      <div className="flex gap-[2rem] md:gap-0 flex-col md:flex-row  w-full justify-evenly">
        <ImageCarousel images={images} />
        <div className="text-white px-5 md:w-[35rem]">
          <div>
            <h2 className="text-4xl text-[#007bff] font-bold">
              About Us - QalaInnoVista📜
            </h2>
          </div>
          <div className="my-[1rem]">
            <p className="md:text-lg mb-3">
              As the 20th edition of TIMSCDR&apos;s prestigious intercollegiate
              festival, Qala-Inno-Vista 2025 builds on the remarkable legacy of
              past editions like VISTA 2024, renowned for its vibrant energy,
              creativity, and collaboration. This milestone event promises to be
              a grand celebration of talent, innovation, and teamwork.
            </p>
            <p className="md:text-sm">
              Qala-Inno-Vista is a celebration of creativity, innovation, and vision, encapsulated in its very name:<br/>
              <span className="italic font-semibold text-[#007bff]">Qala: </span>Drawing inspiration from the term &quot;Kala,&quot; which means &quot;art,&quot; this element reflects the artistic flair of the event, showcasing creativity and cultural heritage at its core.
              <br/><span className="italic font-semibold text-[#007bff]">Inno: </span>Short for &quot;innovation,&quot; it highlights the technological spirit of the event, focusing on forward-thinking ideas, groundbreaking solutions, and the drive to shape the future.
              <br/><span className="italic font-semibold text-[#007bff]">Vista:</span> Representing perspective and vision, this component symbolizes a broad view of what lies ahead in the realms of technology, culture, and human potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

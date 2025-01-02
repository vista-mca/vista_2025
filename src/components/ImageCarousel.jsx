import React, { useState, useEffect } from "react";

const AboutUs = ({ images }) => {
  // const images = [
  //   "/vista23/image1.jpg",
  //   "/vista23/image2.jpg",
  //   "/vista23/image3.jpg",
  //   "/vista23/image4.jpg",
  //   "/vista23/image5.jpg",
  //   "/vista23/image6.jpg",
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex m-auto md:m-0 w-[20rem] md:w-[30rem] overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500  ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[13rem] md:h-[18rem] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

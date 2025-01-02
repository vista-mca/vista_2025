import React from "react";
import { Link } from "react-router-dom";

const LocationSection = () => {
  return (
    <div className="my-[3rem] text-white">
      <div>
        <h1 className="font-bold my-[3rem] text-[#007bff] text-center text-5xl ">
          Venue 🗺️
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        <div className="flex px-6 flex-col gap-8">
          {/* <div>
            <h3 className="font-bold text-[#007bff] text-2xl">
              College Name: 🏫
            </h3>
            </div> */}
          <div>
            <h3 className="font-bold text-[#007bff] text-2xl">
              Address: <span>📍</span>
            </h3>
            <Link target="_blank" to={"https://maps.app.goo.gl/jTFy2XRDah2BLyBn8"}>
            <p className="text-xl md:w-[32rem] font-bold">
            Thakur Institute of Management Studies, Career Development &
            Research
            </p>
              <p className="md:w-[32rem]">
                Gate No 4, Thakur Educational Campus, Thakur MCA, Thakur Rd,
                Thakur Village, Kandivali East, Mumbai, Maharashtra 400101
              </p>
            </Link>
          </div>
        </div>
        <div className="responsive-map  rounded-3xl overflow-hidden ">
          <iframe
            // className="h-full w-full left-0 top-0 absolute"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.749696799743!2d72.87162677520861!3d19.20613188202547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70c257276b9%3A0x15ee980e87a0bb9f!2sTIMSCDR%20-%20Thakur%20Institute%20of%20Management%20Studies%2C%20Career%20Development%20%26%20Research!5e0!3m2!1sen!2sin!4v1733965729190!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;

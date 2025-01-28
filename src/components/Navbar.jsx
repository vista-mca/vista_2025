/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import { useState, forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/logo.png";


const Navbar = forwardRef((props, _ref) => {
  const [isVisible] = useState(true);
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => setToggle(true);
  const handleClose = () => setToggle(false);
  const handleSmoothScroll = (e, targetId, offset = 0) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <nav
        className={` text-xl text-white fixed font-bold z-40 w-full  h-[4rem] flex justify-around items-center backdrop-blur-[8px] backdrop-saturate-[1.72] md:bg-[rgba(17,25,40,0.2)] transition-transform duration-300 ${
          isVisible ? "transform-none" : "-translate-y-full"
        }`}
      >
        <div className="z-10 animate px-5 md:px-10">
          <a href="/">
          <img src={logo} alt="" className="w-12 md:w-12 h-full" />
          </a>
        </div>

        <ul className="gap-8 items-center hidden md:flex relative">
          <li className="animate menu-item hover:cursor-pointer hover:text-[#007bff]">
            <a
              href="#about-us-section"
              onClick={(e) => handleSmoothScroll(e, "about-us-section", 80)}
            >
              About
            </a>
          </li>
          <li className="animate menu-item hover:cursor-pointer hover:text-[#007bff]">
            <a
              href="#events-section"
              onClick={(e) => handleSmoothScroll(e, "events-section", 80)}
            >
              Events
            </a>
          </li>
          <li className="animate menu-item hover:cursor-pointer hover:text-[#007bff]">
            <a
              href="#teams-section"
              onClick={(e) => handleSmoothScroll(e, "teams-section", 80)}
            >
              Team
            </a>
          </li>
          <li className="animate menu-item hover:cursor-pointer hover:text-[#007bff]">
            <a
              href="#sponsors-section"
              onClick={(e) => handleSmoothScroll(e, "sponsors-section", 80)}
            >
              Sponsors
            </a>
          </li>
          <div className="absolute bottom-0 h-[2px] bg-purple-500 transition-all duration-300 ease-in-out"></div>
        </ul>

        <div className="z-50 animate px-10 hidden md:block hover:text-[#007bff]">
          <a
            href="#contact-section"
            onClick={(e) => handleSmoothScroll(e, "contact-section", 80)}
          >
            Contact Us
          </a>
        </div>

        <div
          className="animate z-10 md:hidden cursor-pointer"
          onClick={handleOpen}
        >
          <IoIosMenu size={26} />
        </div>
      </nav>

      <ul
        className={`z-40 sidebar-a text-3xl font-bold fixed bottom-0 flex flex-col gap-10 items-center justify-center w-full bg-black/30 text-white top-0 left-0 md:hidden -translate-x-full transition backdrop-blur-md ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute top-6 right-6 cursor-pointer"
          onClick={handleClose}
        >
          <IoClose size={48} />
        </div>
        <li className="sidebar-d hover:cursor-pointer hover:text-blue-500">
          <a
            href="#about-us-section"
            onClick={(e) => handleSmoothScroll(e, "about-us-section", 80)}
          >
            About
          </a>
        </li>
        <li className="sidebar-d hover:cursor-pointer hover:text-blue-500">
          <a
            href="#events-section"
            onClick={(e) => handleSmoothScroll(e, "events-section", 80)}
          >
            Event
          </a>
        </li>
        <li className="sidebar-d hover:cursor-pointer hover:text-blue-500">
          <a
            href="#teams-section"
            onClick={(e) => handleSmoothScroll(e, "teams-section", 80)}
          >
            Team
          </a>
        </li>
        <li className="sidebar-d hover:cursor-pointer hover:text-blue-500">
          <a
            href="#sponsors-section"
            onClick={(e) => handleSmoothScroll(e, "sponsors-section", 80)}
          >
            Sponsors
          </a>
        </li>
        <li className="sidebar-d hover:cursor-pointer hover:text-blue-500">
          <a
            href="#contact-section"
            onClick={(e) => handleSmoothScroll(e, "contact-section", 80)}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
});

export default Navbar;

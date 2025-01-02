import { useEffect } from "react";
import Countdown from "../components/HomeComponents/Countdown";
import Stats from "../components/HomeComponents/Stats";
import AboutUs from "@/components/HomeComponents/AboutUs";
import AboutCollege from "@/components/HomeComponents/AboutCollege";
import ParticipateColleges from "@/components/HomeComponents/ParticipateColleges";
import Events from "@/components/HomeComponents/Events";
import Teams from "@/components/HomeComponents/Teams";
import GuestOfHonour from "@/components/HomeComponents/GuestOfHonour";
import Sponsors from "@/components/HomeComponents/Sponsors";
import ContactUs from "@/components/HomeComponents/ContactUs";
import LocationSection from "@/components/HomeComponents/LocationSection";
import FAQ from "@/components/HomeComponents/FAQ";
import Footer from "@/components/Footer";
import "../css/animated-button.css";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/HomeComponents/Hero";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="loader"></div>
        <Hero />
        <Countdown />
        <Stats />
        <AboutUs />
        <AboutCollege />
        <ParticipateColleges />
        <Events />
        <Sponsors />
        <GuestOfHonour />
        <Teams />
        <FAQ />
        <ContactUs />
        <LocationSection />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Home;

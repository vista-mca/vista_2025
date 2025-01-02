import heroVideo from "../../assets/hero-video.webm";
// import logo from "../../assets/logo.png";
const Hero = () => {
  return (
    <div className="relative text-white">
      <div className="bg-[#1c1c1c] md:hidden h-[4rem] "></div>
      <video autoPlay muted loop playsInline className="w-full">
        {/* <source src="hero-video.mp4" type="video/mp4" /> */}
        <source src={heroVideo} type="video/webm" />
        <p>Your browser doesn&apos;t support HTML5 video. Here is a <a href="hero-video.mp4">link to the video</a> instead.</p>
      </video>
    </div>
  );
};

export default Hero;

import heroVideo from "../../assets/hero-video.webm";
const Hero = () => {
  return (
    <div className="relative text-white">
      <div className="bg-[#1c1c1c] md:hidden h-[4rem] "></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full md:h-screen   md:object-cover"
      >
        <source src={heroVideo} type="video/webm" />
        <p>
          Your browser doesn&apos;t support HTML5 video. Here is a
          <a href="hero-video.mp4">link to the video</a> instead.
        </p>
      </video>
    </div>
  );
};

export default Hero;

import Marquee from "../ui/marquee";
import s1 from "../../assets/sponsors/s1.jpeg";
import s2 from "../../assets/sponsors/s2.jpeg";
import s3 from "../../assets/sponsors/s3.jpeg";
import s4 from "../../assets/sponsors/s4.jpeg";

const OurSponsorsLst = [
  {
    name: "Rawstract",
    img: s1,
  },
  {
    name: "Le black",
    img: s2,
  },
  {
    name: "Spade Cultural",
    img: s3,
  },
  {
    name: "Unstop",
    img: s4,
  },
];

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

function OurSponsors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-2 text-white">
      <div className="-order-first md:order-first col-span-2 w-full flex items-center justify-center h-full mb-8">
        <div className="text-center w-full md:w-2/3">
          <p className="text-2xl md:text-3xl font-semibold mb-3 md:mb-6">
            Join Our Esteemed Sponsors
          </p>
          <p className="text-lg md:text-xl italic mb-2 animation">
            Be Recognized Among Industry Leaders at{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
              QalaInnoVista
            </span>
            .
          </p>
          <p className="mb-4 animation">
            Partner with us and showcase your brand alongside some of the most
            prestigious names in the industry. At QalaInnoVista, our sponsors
            play a pivotal role in making innovation and inspiration possible.
          </p>
          {/* <p className='mb-4 text-sm'>Join this elite list of changemakers and leave a lasting impact on the next generation of tech leaders.</p> */}

          <a
            href="#contact-section"
            onClick={(e) => handleSmoothScroll(e, "contact-section", 80)}
          >
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg" />
              <div className="px-8 py-2  bg-gray-700 rounded-[6px]  relative group transition duration-200 text-white hover:text-white hover:bg-transparent">
                Be a Sponsor
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="hidden mb-8 relative md:flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg  px-20">
        <div className="animation flex flex-row gap-12 [perspective:300px]">
          <Marquee
            className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
            vertical
            reverse
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
            }}
          >
            {OurSponsorsLst.map((data, idx) => (
              <img
                key={idx}
                src={data.img}
                alt={data.name}
                className="mx-auto aspect-square h-full w-full cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
              />
            ))}
          </Marquee>
          <Marquee
            className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
            vertical
            style={{
              transform:
                "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
            }}
          >
            {OurSponsorsLst.map((data, idx) => (
              <img
                key={idx}
                src={data.img}
                alt={data.name}
                width={400}
                height={600}
                className="mx-auto aspect-square h-full w-full cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
              />
            ))}
          </Marquee>
        </div>

        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
      </div>
      <div className="md:hidden relative flex h-72 w-full flex-row items-center justify-center overflow-hidden rounded-lg md:shadow-xl gap-12 px-5">
        {/* <Marquee vertical pauseOnHover className="[--duration:20s]">
                    {OurSponsorsLst.map((data, idx) => (
                        <img
                            key={idx}
                            src={data.img}
                            alt={data.name}
                            className="mx-auto h-full w-full cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
                        />
                    ))}
                </Marquee>
                <Marquee vertical reverse pauseOnHover className="[--duration:20s]">
                    {OurSponsorsLst.map((data, idx) => (
                        <img
                            key={idx}
                            src={data.img}
                            alt={data.name}
                            className="mx-auto h-full w-full cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
                        />
                    ))}
                </Marquee> */}
        <Marquee
          className="w-1/3 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          reverse
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {OurSponsorsLst.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto aspect-square h-full w-full cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
        <Marquee
          className="w-1/3 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {OurSponsorsLst.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              width={400}
              height={600}
              className="mx-auto aspect-square h-full w-full cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
      </div>
    </div>
  );
}

export default OurSponsors;

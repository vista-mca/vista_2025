import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

const TeamCard = ({
  img,
  name,
  position,
  linkedin,
  instagram,
  website,
  youtube,
}) => {
  return (
    <div className="w-auto md:w-[16rem]">
      <div className="bg-gradient-to-tr from-[#00ff75] to-[#3700ff]  rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]">
        <div className="bg-[#1a1a1a] p-6 rounded-lg transition-all duration-200 hover:scale-[0.98] hover:rounded-lg flex flex-col gap-3 items-center">
          <div className="mb-2 md:mb-4">
            <img
              className="w-24 h-24 md:w-[11rem] md:h-[11rem] object-cover rounded-full"
              src={img}
              alt="Team member"
            />
          </div>
          <div className="text-white text-base md:text-lg font-medium">
            {name}
          </div>
          <div className="text-gray-400 text-sm md:text-base">{position}</div>
          <div className="mt-2 flex gap-5">
            <div className="flex justify-center pt-4">
              {linkedin && (
                <a className="z-[100]" href={linkedin} target="_blank">
                  <FaLinkedinIn
                    color="#0072b1"
                    size={"1.5rem"}
                    style={{
                      cursor: "pointer",
                      marginLeft: ".5rem",
                      marginRight: ".5rem",
                    }}
                    className="hover-icon"
                  />
                </a>
              )}
              {website && (
                <a className="z-[100]" href={website} target="_blank">
                  <CiGlobe
                    color="#0072b1"
                    size={"1.5rem"}
                    style={{
                      cursor: "pointer",
                      marginLeft: ".5rem",
                      marginRight: ".5rem",
                    }}
                    className="hover-icon"
                  />
                </a>
              )}

              {instagram && (
                <a className="z-[100]" href={instagram} target="_blank">
                  <FaInstagram
                    color="#d62976 "
                    size={"1.5rem"}
                    style={{
                      cursor: "pointer",
                      marginLeft: ".5rem",
                      marginRight: ".5rem",
                    }}
                    className="hover-icon"
                  />
                </a>
              )}
              {youtube && (
                <a className="z-[100]" href={youtube} target="_blank">
                  <FaYoutube
                    color="#f70000"
                    size={"1.5rem"}
                    style={{
                      cursor: "pointer",
                      marginLeft: ".5rem",
                      marginRight: ".5rem",
                    }}
                    className="hover-icon"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

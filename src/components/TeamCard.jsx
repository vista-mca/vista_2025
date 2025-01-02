// import img from "../assets/team/prem.jpg";
const TeamCard = ({ img, name, position, linkedin, instagram }) => {
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
          <div className="text-white text-base md:text-lg font-medium">{name}</div>
          <div className="text-gray-400 text-sm md:text-base">{position}</div>
          <div className="mt-2 flex gap-5">
            <div>
              <button className="w-[35px] h-[35px] flex items-center justify-center bg-transparent relative rounded-lg cursor-pointer transition-all duration-300 group hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                <a target="_blank" href={linkedin}>
                  <span className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-sm rounded-[10px] transition-all duration-300 border border-[rgba(156,156,156,0.466)] group-hover:bg-[rgba(156,156,156,0.466)]">
                    <svg
                      className="w-6 h-6 fill-white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                </a>
                <span className="absolute inset-0 bg-[#0077b5] rounded-[9px] -z-10 transition-all duration-300 group-hover:rotate-[35deg] group-hover:origin-bottom"></span>
              </button>
            </div>
            <div>
              <button className="w-[35px] h-[35px] flex items-center justify-center bg-transparent relative rounded-lg cursor-pointer transition-all duration-300 group">
                <a target="_blank" href={instagram}>
                  <span className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-sm rounded-[10px] transition-all duration-300 border border-[rgba(156,156,156,0.466)] group-hover:bg-[rgba(156,156,156,0.466)]">
                    <svg
                      fill="white"
                      className="w-6 h-6"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </a>
                <span className="absolute inset-0 bg-gradient-to-tr from-[#f09433]  to-[#bc1888] rounded-[9px] -z-10 transition-all duration-300 group-hover:rotate-[35deg] group-hover:origin-bottom"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

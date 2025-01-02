
const EventCard = ({ eventName, img, text, link }) => {
  return (
    <div className="group relative rounded-lg my-1 w-auto md:w-[15rem] h-full transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-xl hover:shadow-slate-500/50">
      <div className="relative overflow-hidden rounded-lg bg-[#2a2a2a] h-full shadow-sm border border-slate-700 transform transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]">
        <div className="m-2.5 overflow-hidden rounded-md h-40 md:h-[13.5rem] flex justify-center items-center">
          <img
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            src={img}
            alt="profile-picture"
          />
        </div>

        <div className="px-2 text-center">
          <h4 className="mb-1 text-xl font-semibold text-[#007bff]">
            {eventName}
          </h4>
          <p className=" text-sm text-slate-300  font-light">
            {text}
          </p>
        </div>

       <div className="flex justify-center p-6 pt-2 gap-7">
          <a href={link}>
            <button className="w-[8.5rem] group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-1 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20">
              <span className="text-lgtext-[#007bff]">View More</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;


import { useEffect, useState } from "react";

const targetDate = new Date("2025-02-20T00:00:00");
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex my-4 items-center justify-center bg-transparent  p-4">
      <div className="relative w-full max-w-xl">
        {/* Background Circles */}
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#ff5b84] to-[#eb3461]  opacity-50 z-0" />
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#426cf8] to-[#3ebdf0]  opacity-50 z-0" />

        {/* Glassmorphism Effect Container */}
        <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 sm:p-8 md:p-[0.7rem] lg:p-[0.7rem] shadow-xl border border-white border-opacity-10 rounded-lg z-10">
          {/* <h3 className="text-white text-center font-bold my-2">Comming Soon...</h3> */}
          <div className="text-white flex gap-12 justify-center text-center">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MIN", value: timeLeft.minutes },
              { label: "SEC", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="flex  flex-col items-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

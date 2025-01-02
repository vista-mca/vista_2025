import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import images from "../../assets/college-icon.jpeg";
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: images,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: images,
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images,
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: images,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "border-2 border-white",
        "relative cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex hover:scale-110 transition flex-row items-center gap-4">
        <img
          className="rounded-full object-cover w-[4.5rem] h-[4.5rem] md:w-[6rem] md:h-[6rem]"
          alt=""
          src={img}
        />
      </div>
    </figure>
  );
};

export default function ParticipateColleges() {
  return (
    <div>
      <h2 className="text-[#007bff] text-center text-5xl font-bold my-[1rem]">
        Participating Colleges 🏫
      </h2>
      <div className="relative my-16 flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-transparent ">
        <Marquee pauseOnHover className="[--duration:10s] ">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[3rem] md:w-[6rem] bg-gradient-to-r from-[#1c1c1c] dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[3rem] md:w-[6rem] bg-gradient-to-l from-[#1c1c1c] dark:from-background"></div>
      </div>
    </div>
  );
}

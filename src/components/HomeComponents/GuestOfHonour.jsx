import { cn } from "@/lib/utils"; // Make sure this utility is available in your project
import Marquee from "@/components/ui/marquee";
// import images from "../assets/college-icon.jpeg";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

// const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, username }) => {
  return (
    <figure
      className={cn(
        "relative w-64  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex px-4 hover:scale-110 transition rounded-xl backdrop-blur-sm bg-slate-600/20 py-3 border-black  flex-row  items-center gap-5">
        <img className="rounded-full w-[5rem] h-[5rem]" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            Name
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export default function GuestOfHonour() {
  return (
    <div className="my-[3rem]">
      <h2 className="text-5xl text-[#007bff] font-bold text-center my-[2rem]">
        Guest of Honours 👨🏻‍💼
      </h2>
      <div className="relative bg-[#1c1c1c] flex w-full flex-col items-center justify-center overflow-hidden rounded-lg   ">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[3rem] md:w-[6rem] bg-gradient-to-r from-[#1c1c1c] dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[3rem] md:w-[6rem] bg-gradient-to-l from-[#1c1c1c] dark:from-background"></div>
      </div>
    </div>
  );
}

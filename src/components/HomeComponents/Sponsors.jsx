import React from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
const items = [
  {
    text: "React",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    text: "Vue",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
  },
  {
    text: "Angular",
    imageSrc: "https://angular.io/assets/images/logos/angular/angular.svg",
  },
  {
    text: "Svelte",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
  },
  {
    text: "React",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    text: "Vue",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
  },
  {
    text: "Angular",
    imageSrc: "https://angular.io/assets/images/logos/angular/angular.svg",
  },
  {
    text: "Svelte",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
  },
];

function Sponsors() {
  return (
    <div id="sponsors-section" className="App">
      <h1 className="text-5xl text-[#007bff] font-bold text-center my-[3rem]">
        Sponsors Spotlight 🤝
      </h1>
      <VelocityScroll
        items={items}
        defaultVelocity={5}
        className="text-xl font-semibold"
      />
    </div>
  );
}

export default Sponsors;

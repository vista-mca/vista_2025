import React from "react";
import "../../index.css"

const Brochure = () => {
  return (
    <div>
      <h1 className="text-[#007bff] my-[1rem] text-center font-bold text-5xl">
        Download Brochure
      </h1>
      <div class="button-brochure">
        <a
          href="https://drive.google.com/file/d/1ilR52pvppPP9kBkWftUpPg4J8m--9KGb/view?pli=1"
          target="_blank"
        >
          <button class="button-85" role="button">
            Download Brochure
          </button>
        </a>
      </div>
    </div>
  );
};

export default Brochure;

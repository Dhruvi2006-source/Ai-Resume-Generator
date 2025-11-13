import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-linear-to-r from-violet-500 to-purple-400 text-white font-medium">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left gap-3 px-4 md:px-14 py-3 text-sm md:text-base">
        {/* Text Section */}
        <p className="max-w-[300px] sm:max-w-none">
          Craft your perfect resume in minutes — powered by AI, designed by you.
        </p>

        {/* Button Section */}
        <a
          href="#"
          className="flex items-center justify-center gap-1 px-4 py-2 rounded-lg text-violet-600 bg-violet-50 hover:bg-slate-100 transition active:scale-95 w-fit"
        >
          Explore now
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.91797 7H11.0846"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 2.9165L11.0833 6.99984L7 11.0832"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Banner;

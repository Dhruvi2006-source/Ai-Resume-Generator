import React from "react";

const Recommendation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-50">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-center">
        Satisfied Users
      </h2>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-xs sm:max-w-md mb-5 text-sm sm:text-base">
        Thousands of professionals trust ResuForge to create impactful resumes
        in minutes. Our AI-powered builder helps you craft a professional,
        visually stunning resume that stands out from the crowd.
      </p>

      {/* Avatars and rating */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        {/* Avatars */}
        <div className="flex -space-x-3">
          {[
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            "https://randomuser.me/api/portraits/men/75.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`user-${index}`}
              className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-white hover:-translate-y-1 transition z-${
                index + 1
              }`}
            />
          ))}
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FACC15"
                stroke="#FACC15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
            ))}
            <span className="text-gray-600 font-medium text-sm sm:text-base ml-1">
              5.0
            </span>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Trusted by{" "}
            <span className="font-medium text-gray-800">100,000+</span> users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative font-[Poppins] w-full flex flex-col items-center text-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Background SVG */}
      <svg
        className="absolute -z-10 top-0 left-0 w-full h-[50vh] sm:h-[590px] md:h-[876px] lg:h-[45vw] xl:h-[45vw] object-cover"
        viewBox="0 0 1440 676"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect
          x="-92"
          y="-948"
          width="1624"
          height="1624"
          rx="812"
          fill="url(#a)"
        />
        <defs>
          <radialGradient
            id="a"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 428 292) scale(812)"
          >
            <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
            <stop offset="1" stopColor="#372AAC" />
          </radialGradient>
        </defs>
      </svg>

      {/* Navbar */}
      <nav className="z-50 w-full flex items-center justify-between py-1">
        <a href="/" className="text-xl sm:text-2xl font-bold">
          ResuForge
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm sm:text-base">
          <Link to="/layout" className="hover:text-indigo-600 transition">
            Dashboard
          </Link>
          <a href="#resources" className="hover:text-indigo-600 transition">
            Resources
          </a>
          <a href="#stories" className="hover:text-indigo-600 transition">
            Stories
          </a>
          <a href="#pricing" className="hover:text-indigo-600 transition">
            Pricing
          </a>
        </div>

        <div className="hidden md:flex gap-2 sm:gap-3">
          <Link to="/signup">
            <button className="px-3 sm:px-5 py-1 sm:py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-xs sm:text-sm">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="px-3 sm:px-5 py-1 sm:py-2 border border-slate-400 rounded-md text-xs sm:text-sm hover:bg-slate-200 transition">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 rounded hover:bg-slate-100 active:scale-95 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex flex-col items-center justify-center gap-4 text-white px-4 sm:px-6">
          <Link
            to="/layout"
            onClick={() => setMenuOpen(false)}
            className="text-lg sm:text-xl"
          >
            Dashboard
          </Link>
          <a
            href="#resources"
            onClick={() => setMenuOpen(false)}
            className="text-lg sm:text-xl"
          >
            Resources
          </a>
          <a
            href="#stories"
            onClick={() => setMenuOpen(false)}
            className="text-lg sm:text-xl"
          >
            Stories
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="text-lg sm:text-xl"
          >
            Pricing
          </a>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 w-full sm:w-auto">
            <Link to="/signup">
              <button className="w-full sm:w-40 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full sm:w-40 px-4 py-2 border border-slate-400 rounded-md hover:bg-slate-200 transition text-black">
                Login
              </button>
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 bg-white text-black rounded-full p-2 active:scale-95 transition"
          >
            ✕
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="mt-1 mb-10 sm:mt-20 flex flex-col items-center text-center w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]">
        <div className="flex items-center gap-1 sm:gap-2 border border-slate-400 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm bg-white/50">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
          <span>Try for free</span>
        </div>

        <h1 className="mt-3 sm:mt-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug max-w-full">
          Next-Gen Resume Builder for Ambitious Professionals.
        </h1>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-700 max-w-full">
          Crafted with precision. Powered by AI. Designed for your success.
        </p>

        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center w-full sm:w-auto">
          <Link to="/layout" className="w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 sm:px-3 py-2 sm:py-2 w-fit sm:w-3xs active:scale-95 transition">
              Get Started
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

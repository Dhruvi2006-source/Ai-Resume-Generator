import React, { useState } from "react";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="flex flex-col items-center text-black relative font-[Poppins] px-4 sm:px-6">
      {/* Background SVG */}
      <svg
        className="absolute -z-10 w-full h-[600px] md:h-[676px] top-0 object-cover"
        viewBox="0 0 1440 676"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
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
            gradientTransform="rotate(90 428 292)scale(812)"
          >
            <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
            <stop offset="1" stopColor="#372AAC" />
          </radialGradient>
        </defs>
      </svg>

      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-3 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 backdrop-blur">
        <a href="/" className="text-2xl sm:text-3xl font-bold">
          ResuForge
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
          <a href="#products" className="hover:text-indigo-600 transition">
            Products
          </a>
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

        <div className="hidden md:flex gap-3">
          <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md text-sm">
            Sign Up
          </button>
          <button className="hover:bg-slate-200 transition px-5 py-2 border border-slate-400 rounded-md text-sm">
            Login
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
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
            className="lucide lucide-menu"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex flex-col items-center justify-center gap-6 text-lg text-white">
          <a href="#products" onClick={() => setMenuOpen(false)}>
            Products
          </a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>
            Stories
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 bg-white text-black rounded-full p-2 active:scale-90 transition"
          >
            ✕
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="mt-20 sm:mt-28 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 border border-slate-400 rounded-full px-3 py-1 text-xs sm:text-sm text-slate-700 bg-white/50">
          <div className="size-2.5 bg-green-500 rounded-full"></div>
          <span>Try for free</span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-5xl font-semibold leading-snug max-w-xs sm:max-w-2xl text-gray-900">
          Next-Gen Resume Builder for Ambitious Professionals.
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-sm sm:max-w-lg">
          Crafted with precision. Powered by AI. Designed for your success.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-fit">
          <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 sm:px-8 py-2.5 sm:h-11 w-full sm:w-auto active:scale-95 transition">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

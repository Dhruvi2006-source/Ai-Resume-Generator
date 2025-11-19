import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = { name: "Dhruvi" };
  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-linear-to-r from-indigo-400 to-violet-500 transition-all">
      <div className=" flex gap-20 justify-between">
        {/* LEFT — LOGO (Always visible) */}
        <a href="/" className="text-white text-2xl sm:text-3xl font-bold">
          ResuForge
        </a>

        {/* DESKTOP NAV */}
        <div className="text-white md:flex hidden items-center text-xl">
          <Link to="/" className="hover:text-white/70 transition">
            Home
          </Link>
        </div>
      </div>

      {/* RIGHT — USERNAME + LOGOUT (Desktop Only) */}
      <div className="flex items-center gap-6 text-white">
        {/* Username hidden on mobile */}
        <div className="username font-medium hidden md:block">
          Hii, {user?.name}
        </div>

        <Link to="/">
          <button className="bg-white text-gray-700 md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full">
            Logout
          </button>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-btn inline-block md:hidden active:scale-90 transition ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="#fff"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
          mobile-menu 
          absolute top-[70px] left-0 w-full 
          bg-white/10 
          backdrop-blur-lg 
          p-6 
          md:hidden 
          shadow-xl 
          border-t border-white/20
        "
        >
          {/* USERNAME inside menu */}
          <div className="text-gray-950 text-lg font-medium mb-4">
            Hii, Dhruvi
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4 text-gray-950 text-lg">
            <Link to="/" className="hover:text-white/70 transition">
              Home
            </Link>
          </div>

          {/* Mobile Logout Button */}
          <Link to="/#">
            <button className="bg-white text-gray-900 mt-6 inline text-sm hover:opacity-90 active:scale-95 transition-all w-full h-11 rounded-full">
              Logout
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

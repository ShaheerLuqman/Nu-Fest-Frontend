import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"; // Inside your Navbar
import Marquee from "react-fast-marquee";

const Navbar = ({ setSearchQuery, allow }) => {
  const [isBottomMenuOpen, setIsBottomMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full top-0 z-100 bg-white shadow rounded-b-xl">
      {/* Top Menu */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center w-full">
          <Link to="/">
            {" "}
            <img
              // src="../../NU"
              src="../NU-FEST.png"
              alt="NUFEST LOGO"
              className="h-[12vh] w-[10vw] object-contain"
            />
          </Link>
        </div>

        {/* central Menu */}
        <div className="mx-auto flex items-center justify-between p-4 ">
          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-6 font-serif text-lg">
            <Link
              to="/"
              className={`p-2 bg-opacity-90 rounded-xl font-semibold px-4 ${
                location.pathname === "/" ? "second" : "first"
              } hover:text-orange-600 duration-150 no-underline`}
            >
              HOME
            </Link>
            <Link
              to="/competitions"
              className={`p-2 bg-opacity-90 rounded-xl font-semibold px-4 ${
                location.pathname === "/competitions" ? "second" : "first"
              } hover:text-orange-600 duration-150 no-underline`}
            >
              COMPETITIONS
            </Link>
            {/* <Link
              to="/events"
              className={`p-2 bg-opacity-90 rounded-xl font-semibold px-4 ${
                location.pathname === "/events" ? "second" : "first"
              } hover:text-orange-600 duration-150 no-underline`}
            >
              EVENTS
            </Link> */}
            <Link
              to="/stall"
              className={`p-2 bg-opacity-90 rounded-xl font-semibold px-4 ${
                location.pathname === "/stall" ? "second" : "first"
              } hover:text-orange-600 duration-150 no-underline`}
            >
              STALL
            </Link>
          </nav>
        </div>

        <div className="mx-auto flex items-center justify-end p-4 "></div>

        {/* Mobile Bottom Menu Toggle */}
        <button
          className="sm:hidden flex flex-col gap-1.5"
          onClick={() => setIsBottomMenuOpen(!isBottomMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-second"></span>
          <span className="block w-6 h-0.5 bg-second"></span>
          <span className="block w-6 h-0.5 bg-second"></span>
        </button>
      </div>

      {/* Mobile Bottom Menu */}
      {isBottomMenuOpen && (
        <div className=" bg-white shadow-md transition-all duration-300 ease-in-out font-serif">
          <nav className=" flex flex-col items-center gap-y-3 font-serif text-lg">
            <Link
              to="/"
              onClick={() => setIsBottomMenuOpen(false)}
              className={`p-2 bg-opacity-90 rounded-xl font-semibold px-4 ${
                location.pathname === "/" ? "second" : "first"
              } hover:text-orange-600 duration-150 no-underline`}
            >
              HOME
            </Link>
            <Link
              to="/competitions"
              onClick={() => setIsBottomMenuOpen(false)}
              className={`p-2 bg-opacity-90 rounded-xl font-semibold px-4 ${
                location.pathname === "/competitions" ? "second" : "first"
              } hover:text-orange-600 duration-150 no-underline`}
            >
              COMPETITIONS
            </Link>
            {/* <Link
              onClick={() => setIsBottomMenuOpen(false)}
              to="/events"
              className={`p-2 bg-opacity-90 rounded-xl font-semibold px-4 ${
                location.pathname === "/events" ? "second" : "first"
              } hover:text-orange-600 duration-150 no-underline`}
            >
              EVENTS
            </Link> */}
            <Link
              to="/stall"
              onClick={() => setIsBottomMenuOpen(false)}
              className={`p-2 bg-opacity-90 rounded-xl font-semibold px-4 mb-4 ${
                location.pathname === "/stall" ? "second" : "first"
              } hover:text-orange-600 duration-150 no-underline`}
            >
              STALL
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

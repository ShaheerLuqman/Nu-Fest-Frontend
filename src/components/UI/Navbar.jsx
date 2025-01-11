import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ setSearchQuery }) => {
  const [isBottomMenuOpen, setIsBottomMenuOpen] = useState(false);

  return (
    <header className="w-full top-0 z-50">
      {/* Top Menu */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center w-full">
          <Link to="/">
            {" "}
            <img
              // src="../../NU"
              src="../NU-FEST.png"
              alt="FarFits Logo"
              className="h-20 w-auto object-contain w-20"
            />
          </Link>

          {/* <a className="text-2xl font-bold text-gray-800 font-serif"> */}
          {/* NUFEST */}
          {/* </a> */}
        </div>

        {/* central Menu */}
        <div className="mx-auto flex items-center justify-between p-4 ">
          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-6 font-serif text-lg">
            <Link
              to="/"
              className=" p-2 bg-opacity-90 text-white bg-[#f9a123] rounded-xl hover:text-[#f9a123] hover:bg-white duration-150 font-semibold px-4"
            >
              HOME
            </Link>
            <Link
              to="/competitions"
              className=" p-2 bg-opacity-90 text-white bg-[#f9a123] rounded-xl hover:text-[#f9a123] hover:bg-white duration-150 font-semibold px-4"
            >
              COMPETITIONS
            </Link>
            <Link
              to="/events"
              className=" p-2 bg-opacity-90 text-white bg-[#f9a123] rounded-xl hover:text-[#f9a123] hover:bg-white duration-150 font-semibold px-4"
            >
              EVENTS
            </Link>
          </nav>
        </div>

        <div className="mx-auto flex items-center justify-end p-4 "></div>

        {/* Social Media Icons */}
        {/* <div className="hidden sm:flex size-5 items-center gap-3 text-gray-700">
          <a
            href="https://www.facebook.com/share/15AsteycCJ/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-blue-500"
          >
            <i className="fa-brands fa-facebook  text-[#f9a123] h-[20px] w-[20px]  bg-opacity-90 text-white  rounded-xl hover:text-[#f9a123] hover:bg-white duration-150 font-semibold px-4"></i>
          </a>
          <a
            href="https://www.instagram.com/farfits.pk?igsh=MXhnZG80cTlmY2t6Zg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer border p-2 border-[#f9a123] bg-opacity-90 text-white bg-[#f9a123] rounded-xl hover:text-[#f9a123] hover:bg-white duration-150 font-semibold px-4"
          >
            <i className="fa-brands fa-instagram "></i>
          </a>
        </div> */}

        {/* Mobile Bottom Menu Toggle */}
        <button
          className="sm:hidden flex flex-col gap-1.5"
          onClick={() => setIsBottomMenuOpen(!isBottomMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* Mobile Bottom Menu */}
      {isBottomMenuOpen && (
        <div className="sm:hidden bg-white shadow-md transition-all duration-300 ease-in-out font-serif">
          <nav className="flex flex-col gap-2 p-4 text-gray-700">
            <Link to="/" className="hover:text-orange-500 text-lg p-4">
              Home
            </Link>
            <Link
              to="/competitions"
              className="hover:text-orange-500 text-lg p-4"
            >
              Competitions
            </Link>
            <Link to="/events" className="hover:text-orange-500 text-lg p-4">
              Events
            </Link>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 text-gray-700">
              <a
                href="https://www.facebook.com/share/15AsteycCJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-orange-500"
              >
                <i className="fa-brands fa-facebook fa-2x p-4"></i>
              </a>
              <a
                href="https://www.instagram.com/farfits.pk?igsh=MXhnZG80cTlmY2t6Zg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-orange-500"
              >
                <i className="fa-brands fa-instagram fa-2x p-4"></i>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

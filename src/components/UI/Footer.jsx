import React from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import HelpIcon from "@mui/icons-material/Help";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <footer className="bg-second opacity-95 pb-3 pt-10">
      <div className="container mx-auto  px-6">
        {/* Title Section */}
        <div className="text-center text-white font-extrabold flex flex-col w-full justify-center items-center gap-4">
          <h2 className="drop-shadow-md first text-4xl sm:text-5xl lg:text-6xl">
            SOCIAL EVENT YET TO BE REVEALED
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl">STAY TUNED</h3>
        </div>

        {/* Location | Contacts | Socials */}
        <div className="mt-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-sm max-w-4xl mx-auto">
            {/* Location */}
            <div className="flex justify-center flex-col">
              <a
                href="https://maps.app.goo.gl/pfWWMtpggvajarKn6"
                className="flex items-center gap-2 flex flex-col text-white no-underline  transition-colors"
                style={{ textDecoration: "none" }}
              >
                <i className="fa-solid fa-location-dot fa-xl hover:text-orange-200"></i>
                <span className="mt-2">FAST NUCES, Karachi</span>
              </a>
            </div>

            {/* Contacts */}

            <div className="flex justify-center">
              <ul className="list-none space-y-2 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <LocalPhoneIcon className="hover:text-orange-200" />
                  <span>0331-6103011</span>
                </li>
                <li className="flex items-center gap-2">
                  <HelpIcon className="hover:text-orange-200" />
                  <span>1234-567890</span>
                </li>
                <li className="flex items-center gap-2">
                  <AttachEmailIcon className="hover:text-orange-200" />
                  <span>1234-567890</span>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex justify-center items-center sm:flex-row lg:flex-col gap-4">
              <a
                href="https://www.facebook.com/share/15AsteycCJ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white hover:text-orange-200 transition-colors"
              >
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/farfits.pk?igsh=MXhnZG80cTlmY2t6Zg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white hover:text-orange-200 transition-colors"
              >
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-2 border-t border-gray-500"></div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-100 text-xs sm:text-sm">
          <p>NUFEST 2025 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

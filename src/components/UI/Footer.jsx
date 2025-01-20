import React from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import HelpIcon from "@mui/icons-material/Help";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { motion } from "framer-motion";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      // className="bg-second opacity-95 pb-3 pt-10"
      className="bottom-0 left-0 w-full bg-second  opacity-95 pb-3 pt-10"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={footerVariants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6 w-full">
        {/* Title Section */}
        <div className="text-center text-white font-extrabold flex flex-col w-full justify-center items-center gap-4">
          <h2 className="drop-shadow-md first text-4xl sm:text-5xl lg:text-6xl">
            SOCIAL EVENT YET TO BE REVEALED
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl">STAY TUNED</h3>
        </div>

        {/* Separator */}
        <div className=" border-t border-gray-500 my-4"></div>

        {/* Headings Row */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-sm max-w-4xl mx-auto mt-5">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold underline">LOCATION</h3>
          </div>
          <div className="flex items-center justify-center">
            <h3 className="text-lg font-bold underline">SOCIALS</h3>
          </div>
          <div className="flex items-center justify-center">
            <h3 className="text-lg font-bold underline">CONTACTS</h3>
          </div>
        </div>

        {/* Location | Contacts | Socials Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-sm max-w-4xl mx-auto mt-5">
          {/* Location Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-xl font-semibold mb-4 md:hidden underline">
              Location
            </h4>
            <div className="flex flex-col items-center">
              <a
                href="https://maps.app.goo.gl/pfWWMtpggvajarKn6"
                className="text-white hover:text-orange-200 transition-colors flex flex-col"
                style={{ textDecoration: "none" }}
              >
                <i className="fa-solid fa-location-dot fa-xl hover:text-orange-200 mb-4"></i>
                <span>
                  FAST NUCES, Karachi
                  <br />
                  St-4, Sector 17-D, NH 5, Karachi, Karachi City, Sindh
                </span>
              </a>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-xl font-semibold mb-4 md:hidden underline">
              Contacts
            </h4>
            <ul className="list-none space-y-2 text-sm sm:text-base flex flex-col items-center">
              <li className="flex items-center gap-2">
                <LocalPhoneIcon className="hover:text-orange-200" />
                <span>+92 331 2317830</span>
              </li>
              <li className="flex items-center gap-2">
                <LocalPhoneIcon className="hover:text-orange-200" />
                <span>+92 348 0379466</span>
              </li>
              <li className="flex items-center gap-2">
                <MailOutlineIcon className="hover:text-orange-200" />
                <span>nufest.nuces@nu.edu.pk</span>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-xl font-semibold mb-4 md:hidden underline">
              Socials
            </h4>
            <div className="flex md:flex-col sm:flex-row md:gap-y-4 gap-x-4 items-center mb-4">
              <a
                href="https://www.facebook.com/NUFESTV2"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white hover:text-orange-200 transition-colors flex items-center text-sm sm:text-base"
              >
                <i className="fa-brands fa-facebook fa-2x"></i>
                <span className="ml-2">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/nu__fest/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white hover:text-orange-200 transition-colors flex items-center text-sm sm:text-base"
              >
                <i className="fa-brands fa-instagram fa-2x"></i>
                <span className="ml-2">Instagram</span>
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
    </motion.footer>
  );
};

export default Footer;

import { useContext, useEffect, useState } from "react";
import EventsContainer from "../components/UI/EventsContainer.jsx";
import SlidingCardContainer from "../components/UI/SlidingCardContainer.jsx";
import SponsorCarousel from "../components/UI/SponsorCarousel.jsx";
import Logo from "../components/UI/Logo.jsx";
import DataContext from "../context/createContext.js";
import Marquee from "react-fast-marquee";

function Home() {
  const { competitions } = useContext(DataContext);
  const { events } = useContext(DataContext);

  const sponsors = [
    {
      name: "Sponsor 1",
      image:
        "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
    },
    {
      name: "Sponsor 2",
      image:
        "https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg",
    },
    {
      name: "Sponsor 3",
      image:
        "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
    },
    {
      name: "Sponsor 4",
      image:
        "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
    },
  ];

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check localStorage for the splash screen flag
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      // If flag exists, skip the splash screen
      setShowSplash(false);
    } else {
      // If flag doesn't exist, show the splash screen
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("hasSeenSplash", "true"); // Set the flag in localStorage
      }, 3000);

      // Cleanup timeout on component unmount
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* {showSplash ? (
        <div className="relative splash-screen">
          <img
            alt="Logo"
            src="../logo.svg"
            className="z-0 absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ) : ( */}
      <div className="homepage">
        <div className="bg-first second">
          <Marquee>
            <span className="second text-lg tracking-widest">
              ENTRANCE FEES APPLY FOR NON-REGISTERED ATTENDEES.
            </span>
          </Marquee>
        </div>

        <div className="z-0 my-16">
          <Logo />
        </div>
        <div className="flex justify-center items-center w-full">
          <h2 className="second font-semibold mt-4 text-2xl">
            FEATURED COMPETITIONS
          </h2>
        </div>
        <SlidingCardContainer competitions={competitions} />
      </div>
      {/* )
      } */}
    </>
  );
}

export default Home;

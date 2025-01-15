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
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      setShowSplash(false);
    } else {
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("hasSeenSplash", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div className="homepage">
        <div className="z-0 my-16 flex justify-center">
          <img
            alt="Logo"
            src="https://i.ibb.co/DD9m7Fj/Logo.png"
            className="w-40 h-auto sm:w-60 md:w-80"
            style={{ background: "none" }}
          />
        </div>
        <div className="flex flex-col md:flex-row w-full justify-around items-center  mt-8 px-4">
          <div className="text-center md:text-left md:ml-8">
            <h2 className="text-3xl text-center md:text-5xl lg:text-6xl font-bold second">
              PAST
            </h2>
            <h2 className="text-3xl md:text-5xl text-center lg:text-6xl font-bold second">
              GLIMPSES
            </h2>
          </div>

          <div className="w-full md:w-2/3 lg:w-1/2 mt-8 md:mt-0">
            <EventsContainer events={events} />
          </div>
        </div>

        <div className="my-24"> </div>

        <div className="flex flex-col items-center w-full px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center second">
            FEATURED COMPETITIONS
          </h2>
          <div className="w-full mt-8">
            <SlidingCardContainer competitions={competitions} />
          </div>
        </div>

        <div className="my-10"></div>

        {/* <div className="w-full mt-8 px-4">
          <SponsorCarousel sponsors={sponsors} />
        </div> */}
      </div>
    </>
  );
}

export default Home;

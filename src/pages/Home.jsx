import { useContext, useEffect, useState } from "react";
import EventsContainer from "../components/UI/EventsContainer.jsx";
import SlidingCardContainer from "../components/UI/SlidingCardContainer.jsx";
import SponsorCarousel from "../components/UI/SponsorCarousel.jsx";
import Logo from "../components/UI/Logo.jsx";
import DataContext from "../context/createContext.js";

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

  const SplashFalse = () => {
    setShowSplash(false);
  };

  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer) && SplashFalse();
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="splash-screen">
          <img
            alt="Logo"
            src="../NU-FEST.png"
            className="logo w-[100%] object-cover "
          />
          {}
        </div>
      ) : (
        <div className="homepage">
          {/* <Navbar /> */}
          <div className=" my-16">
            <Logo />
          </div>
          <div className="flex justify-center items-center w-full">
            <h2 className="second font-semibold mt-4 text-2xl">
              FEATURED COMPETITIONS
            </h2>
          </div>
          <SlidingCardContainer competitions={competitions} />
          {/* <div className="flex justify-center items-center w-full">
            <h2 className=" mt-4 text-2xl second font-semibold">EXPERIENCES</h2>
          </div> */}
          {/* <EventsContainer events={events} /> */}

          {/* <CardDetails /> */}
          {/* <div className="my-10"> </div>
          <SponsorCarousel sponsors={sponsors} />
        </div> */}
      )}
    </>
  );
}

export default Home;

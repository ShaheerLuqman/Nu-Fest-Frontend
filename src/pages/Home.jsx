import { useContext, useEffect, useState } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
// import "./App.css";
// import EventCard from "../UI/EventCard.jsx";
import EventsContainer from "../components/UI/EventsContainer.jsx";
import Mainbody from "../components/UI/MainShopBody.jsx";
import Navbar from "../components/UI/Navbar.jsx";
import SlidingCardContainer from "../components/UI/SlidingCardContainer.jsx";
import SponsorCarousel from "../components/UI/SponsorCarousel.jsx";
import CardDetails from "../components/UI/CardDetailsPage.jsx";
import Logo from "../components/UI/Logo.jsx";
import DataContext from "../context/createContext.js";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const {competitions, events} = useContext(DataContext);
  
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
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="splash-screen">
          <img
            alt="Logo"
            src="../NU-FEST.png"
            className="logo w-[80%] object-contain"
          />
        </div>
      ) : (
        <div className="homepage">
          {/* <Navbar /> */}
          <div className=" my-16">
            <Logo />
          </div>
          <div className="flex justify-center items-center w-full">
            <h2 className="text-gray-800  mt-4 text-2xl">
              FEATURED COMPETITIONS
            </h2>
          </div>
          <SlidingCardContainer competitions={competitions} />
          <div className="flex justify-center items-center w-full">
            <h2 className=" mt-4 text-2xl text-gray-800">EXPERIENCES</h2>
          </div>
          <EventsContainer events={events} />

          {/* <Mainbody searchQuery={searchQuery} /> */}
          {/* <CardDetails /> */}
          <SponsorCarousel sponsors={sponsors} />
        </div>
      )}
    </>
  );
}

export default Home;

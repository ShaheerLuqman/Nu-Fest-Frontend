import { useContext, useEffect, useState } from "react";
import EventsContainer from "../components/UI/EventsContainer.jsx";
import SlidingCardContainer from "../components/UI/SlidingCardContainer.jsx";
import Logo from "../components/UI/Logo.jsx";
import DataContext from "../context/createContext.js";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function Home() {
  const { competitions } = useContext(DataContext);
  const { events } = useContext(DataContext);

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

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="homepage">
      <Marquee className="z-10 text-2xl flex justify-around text-center first bg-second" speed={75}>
        <div className="flex items-center">
          <span className="text-white">SPECIAL COLAB</span>
          <span className="mx-4"> </span>
          <span className="first">NUFEST x NUST</span>
          <span className="mx-4"> </span>
          <span className="text-white">FORMULA 1 SIMULATION</span>
          
          <span className="mx-4"> </span>

        </div>
      </Marquee>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="z-0 my-16 flex justify-center"
      >
        <img
          alt="Logo"
          src="https://i.ibb.co/DD9m7Fj/Logo.png"
          className="w-40 h-auto sm:w-60 md:w-80"
          style={{ background: "none" }}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="flex flex-col items-center w-full px-4 my-24"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center second">
          FEATURED COMPETITIONS
        </h2>
        <div className="w-full mt-8">
          <SlidingCardContainer competitions={competitions} />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="flex flex-col md:flex-row w-full mb-10 justify-around items-center mt-8 px-4"
      >
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
      </motion.div>
      
    </div>
  );
}

export default Home;

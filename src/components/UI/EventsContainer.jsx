import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const SlidingEventContainer = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through the events
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [events.length]);

  const handleNavigation = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? events.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }
  };

  if (!events.length) return null; // Handle case where no events are available

  const currentEvent = events[currentIndex];

  return (
    <div className="relative flex justify-center items-center bg-transparent">
      <div className="w-full max-w-4xl h-[50vh] md:h-[55vh] lg:h-[60vh] flex items-center bg-transparent justify-center relative px-4">
        {/* Event Image */}
        <img
          src={currentEvent?.image_url || "/default-event.jpg"}
          alt={currentEvent?.event_name}
          className="w-full h-full object-fit md:object-fit rounded-lg"
        />

        {/* Navigation Buttons */}
        <button
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2 md:p-3 hover:bg-black/60"
          onClick={() => handleNavigation("left")}
        >
          <AiOutlineArrowLeft size={24} />
        </button>
        <button
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2 md:p-3 hover:bg-black/60"
          onClick={() => handleNavigation("right")}
        >
          <AiOutlineArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SlidingEventContainer;

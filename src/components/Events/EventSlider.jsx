import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "@mui/material";

const EventSlider = ({ events }) => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [events]);

  const handleNavigation = (direction) => {
    if (direction === "left") {
      setFeaturedIndex((prevIndex) =>
        prevIndex === 0 ? events.length - 1 : prevIndex - 1
      );
    } else {
      setFeaturedIndex((prevIndex) => (prevIndex + 1) % events.length);
    }
  };

  if (events.length === 0) return null;

  return (
    <div className="relative bg-gray-100">
      <div className="w-full h-96 relative">
        <img
          src={events[featuredIndex]?.imageurl || "/default-event.jpg"}
          alt={events[featuredIndex]?.event_name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-4xl font-bold">{events[featuredIndex]?.event_name}</h2>
          
          <p className="text-xl mt-2">{events[featuredIndex]?.description}</p>
          {/* <Button
            className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
            href={`/events/${events[featuredIndex]?.id}`}
          >
            Learn More
          </Button> */}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-3 hover:bg-black/60"
        onClick={() => handleNavigation("left")}
      >
        <AiOutlineArrowLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-3 hover:bg-black/60"
        onClick={() => handleNavigation("right")}
      >
        <AiOutlineArrowRight size={24} />
      </button>
    </div>
  );
};

export default EventSlider;

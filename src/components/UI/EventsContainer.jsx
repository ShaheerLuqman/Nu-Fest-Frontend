import React, { useEffect, useRef } from "react";
import EventCard from "./EventCard.jsx";
import { Link } from "react-router-dom";

const SlidingEventContainer = ({ events }) => {
  const containerRef = useRef(null);

  // Scroll handler
  const scrollContainer = (direction) => {
    const cardWidth = containerRef.current.firstChild.offsetWidth + 16; // Card width + margin
    if (direction === "left") {
      if (containerRef.current.scrollLeft === 0) {
        containerRef.current.scrollBy({
          left: containerRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    } else {
      if (
        containerRef.current.scrollLeft + containerRef.current.clientWidth >=
        containerRef.current.scrollWidth
      ) {
        containerRef.current.scrollBy({
          left: -containerRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        containerRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollContainer("left");
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-[80%] lg:max-w-screen-lg  md:max-w-[90%] mx-auto flex items-center justify-center">
      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex overflow-hidden space-x-4 xl:p-4 md:p-[0.35rem] w-full"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            className="shrink-0 w-full md:w-[30%] lg:w-[30%] xl:w-[32%] mmd:w-[300px] transition duration-300 flex justify-between"
          >
            <Link
              to={`/${event.event_name}/register`}
              state={{ entityType: "event", entityObject: event }}
            >
              <EventCard event={event} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingEventContainer;

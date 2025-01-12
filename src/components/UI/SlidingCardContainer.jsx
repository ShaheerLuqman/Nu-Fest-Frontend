import React, { useRef, useEffect, useState } from "react";
import CompetitionCard from "../Competitions/CompetitionCard.jsx";

const SlidingCardContainer = ({ competitions }) => {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Calculate card width dynamically after the component mounts
  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.firstChild;
      setCardWidth(firstCard ? firstCard.offsetWidth + 16 : 0); // Add margin if present
    }
  }, [competitions]); // Recalculate when competitions change

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      if (direction === "left") {
        if (containerRef.current.scrollLeft === 0) {
          containerRef.current.scrollBy({
            left: containerRef.current.scrollWidth,
            behavior: "smooth",
          });
        } else {
          containerRef.current.scrollBy({
            left: -cardWidth,
            behavior: "smooth",
          });
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
          containerRef.current.scrollBy({
            left: cardWidth,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <div className="relative max-w-[90%] md:max-w-[90%] lg:max-w-screen-lg mx-auto flex justify-center">
      {/* Left Arrow */}
      <button
        onClick={() => scrollContainer("left")}
        className="absolute left-0 top-1/2 transform text-white -translate-y-1/2 bg-first hover:bg-orange-600 rounded-full p-2 shadow-md z-10"
      >
        ◀
      </button>

      {/* Cards Container */}
      <div
        ref={containerRef}
        className="flex overflow-hidden space-x-4 p-4 w-full"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {competitions.map((competition, index) => (
          <div key={index} className="shrink-0 w-[325px] lg:w-[325px]">
            <CompetitionCard competition={competition} />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scrollContainer("right")}
        className="absolute right-0 top-1/2 transform text-white -translate-y-1/2 bg-[#f9a123] hover:bg-orange-600 rounded-full p-2 shadow-md z-10"
      >
        ▶
      </button>
    </div>
  );
};

export default SlidingCardContainer;

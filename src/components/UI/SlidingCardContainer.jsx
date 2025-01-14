import React, { useRef, useEffect, useState } from "react";
import CompetitionCard from "../Competitions/CompetitionCard.jsx";
import PropTypes from "prop-types";

const SlidingCardContainer = ({ competitions }) => {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.firstChild;
      setCardWidth(firstCard ? firstCard.offsetWidth + 16 : 0); // Add margin if present
    }
  }, [competitions]);

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

  console.log(competitions); // Add this log to check the data structure

  return (
    <div className="relative max-w-[90%] md:max-w-[90%] lg:max-w-screen-lg mx-auto flex justify-center">
      <button
        onClick={() => scrollContainer("left")}
        className="absolute left-0 top-1/2 transform text-white -translate-y-1/2 bg-first hover:bg-orange-600 rounded-full p-2 shadow-md z-10"
      >
        ◀
      </button>

      <div
        ref={containerRef}
        className="flex overflow-hidden space-x-4 p-4 w-full"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {/* Safeguard: Only map if competitions is an array */}
        {Array.isArray(competitions) && competitions.length > 0 ? (
          competitions.map((competition) => (
            <div
              key={competition.id}
              className="shrink-0 w-[325px] lg:w-[325px]"
            >
              <CompetitionCard competition={competition} />
            </div>
          ))
        ) : (
          <div>No competitions available.</div>
        )}
      </div>

      <button
        onClick={() => scrollContainer("right")}
        className="absolute right-0 top-1/2 transform text-white -translate-y-1/2 bg-[#f9a123] hover:bg-orange-600 rounded-full p-2 shadow-md z-10"
      >
        ▶
      </button>
    </div>
  );
};

SlidingCardContainer.propTypes = {
  competitions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      competition_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      number_of_teams: PropTypes.number.isRequired,
      category_name: PropTypes.string.isRequired,
      imageurl: PropTypes.string.isRequired,
      maxplayersperteam: PropTypes.number.isRequired,
      minplayersperteam: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SlidingCardContainer;

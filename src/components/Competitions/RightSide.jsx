import React, { useEffect } from "react";
import CompetitionCard from "./CompetitionCard.jsx";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

const RightSide = ({ selectedCategory, catName, filteredCompetitions }) => {
    useEffect(() => {
      // console.log("filteredCompetitions =", filteredCompetitions);
      // console.log("selectedCategory =", selectedCategory);
    }, [filteredCompetitions]);
  
  return (
    // <SearchBar/>
    <motion.div
      className="w-5/6 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {selectedCategory ? (
        <>
          <h2 className="text-3xl font-bold mb-6 text-center">
            {catName} Competitions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredCompetitions.map((competition,index) => (

              <CompetitionCard key={index} competition={competition} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-xl text-gray-500"></div>
      )}
    </motion.div>
  );
};

export default RightSide;

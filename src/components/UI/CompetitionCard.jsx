import React from "react";
import { Link } from "react-router-dom";

const CompetitionCard = ({ competition }) => {
  const dateOptions = { month: "long", day: "numeric" };
  const formattedDate = new Date(competition.date).toLocaleDateString(
    "en-US",
    dateOptions
  );

  return (
    <div className="max-w-xs h-[300px] mx-auto bg-white shadow-md rounded-lg border border-orange-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div className="flex flex-col justify-around flex-grow">
        <h3 className="text-xl font-bold text-[#f9a123] text-center">
          {competition.competition_name}
        </h3>
        <p className="text-sm text-gray-500 mt-2 text-center flex-grow-0">
          {competition.description}
        </p>
      </div>
      <div className="mt-4 flex flex-col justify-between items-center">
        <span className="text-sm pb-2 font-medium text-[#f9a123]">
          {formattedDate}
        </span>
        <Link
          to={`/${competition.competition_name}/register`}
          state={{ entityType: "competition", entityObject: competition }}
        >
          <button className="text-sm bg-[#f9a123] text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompetitionCard;

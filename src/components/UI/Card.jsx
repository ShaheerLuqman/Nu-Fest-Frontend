import React from "react";

const Card = ({ card }) => {
  const { number_of_teams, date, description, competition_name } = card;

  return (
    <div
      className="p-3 rounded-lg bg-second opacity-95 hover:shadow-xl border border-gray-300 transform hover:scale-105 transition-transform duration-300 ease-in-out sm:max-h-[30rem] lg:max-h-[35rem]"
      style={{
        aspectRatio: "1",
      }}
    >
      {/* Image Section */}
      <div className="text-white font-semibold flex text-4xl items-center justify-center">
        {competition_name}
      </div>

      

      {/* Details Section */}
      <div className="p-2 text-white font-semibold flex text-4xl justify-center items-center bottom-0 absolute">
       
        {number_of_teams}

        
      </div>
    </div>
  );
};

export default Card;

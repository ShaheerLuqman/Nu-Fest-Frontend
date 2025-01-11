import React from "react";

const Card = ({ card }) => {
  const { number_of_teams, date, description, competition_name } = card;

  return (
    <div
      className="p-3 rounded-lg bg-[#f9a123] opacity-95 hover:shadow-xl border border-gray-300 transform hover:scale-105 transition-transform duration-300 ease-in-out sm:max-h-[30rem] lg:max-h-[35rem]"
      style={{
        aspectRatio: "1",
      }}
    >
      {/* Image Section */}
      <div className="text-white font-semibold flex text-4xl items-center justify-center">
        {competition_name}
      </div>

      {/* <div className="h-[85%] w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-md relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-fit transition-transform duration-300"
        />
        {stock <= 0 && (
          <div className="absolute inset-0 bg-gray-400 bg-opacity-75 flex items-center justify-center">
            <span className="text-lg font-bold text-white">SEATS FULL</span>
          </div>
        )} */}
      {/* </div> */}

      {/* Details Section */}
      <div className="p-2 text-white font-semibold flex text-4xl justify-center items-center bottom-0 absolute">
        {/* Name and Stock */}
        {/* <div className="flex 
        justify-center items-center">
          <span className="text-lg font-bold text-white">{name}</span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-md ${
              number_of_teams > 0
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {number_of_teams > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div> */}
        {/* <div></div> */}
        {number_of_teams}

        {/* Price */}
        {/* <div className="mt-1 flex justify-center items-center">
          <span className="text-lg font-bold text-white">Rs {}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Card;

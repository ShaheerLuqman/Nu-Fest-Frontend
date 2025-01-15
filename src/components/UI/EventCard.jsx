import React from "react";

const EventCard = ({ event }) => {
  const { event_name, imageurl } = event;

  return (
    <div
      className="max-w-md h-[30vh] bg-white shadow-md rounded-lg border border-orange-200 p-2 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center"
      style={{
        aspectRatio: "1",
      }}
    >
      {/* Image Section */}
      <div className="h-[85%] w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-md">
        <img
          src={event.image_url}
          alt={event_name}
          className="w-full h-full object-fit transition-transform duration-300"
        />
      </div>

      {/* Name Section */}
      <div className="mt-3 px-3 pb-3">
        <div className="flex justify-center items-center flex-wrap">
          <span className="text-lg font-bold first">{event_name}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

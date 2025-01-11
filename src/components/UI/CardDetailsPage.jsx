import React from "react";

const CardDetails = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row items-start gap-8 p-6 border border-gray-300 rounded-lg xl:max-w-[80%]">
        {/* Left Section: Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            width={""}
            src="https://via.placeholder.com/400x400"
            alt="Bento Cake Decoration"
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Right Section: Details */}
        <div className="flex flex-col gap-4 w-full">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500">
            Home / Experiences / Bento Cake Decoration
          </nav>

          {/* Title and Price */}
          <div>
            <h1 className="text-2xl font-bold text-black">
              Bento Cake Decoration
            </h1>
            <p className="text-xl font-semibold text-black">Rs 2,500</p>
          </div>

          {/* Description */}
          <p className="text-gray-700">
            Unleash your creativity with our Bento Cake experience! Decorate
            your own mini cake with colorful frosting and fun designs—a perfect
            blend of art and sweetness for everyone to enjoy!
          </p>

          {/* Availability */}
          <p className="text-red-500 font-medium">Out of stock</p>

          {/* Category */}
          <p className="text-sm text-gray-600">
            <span className="font-medium">Category:</span> Experiences
          </p>

          {/* Rules/Guidelines */}
          <div className="border-t border-gray-300 pt-4">
            <h2 className="text-lg font-semibold">Rules/Guidelines</h2>
            <p className="text-gray-700">01 Day Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

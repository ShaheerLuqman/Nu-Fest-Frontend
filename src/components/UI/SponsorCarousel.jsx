import React from "react";
import Marquee from "react-fast-marquee";

const SponsorCarousel = ({ sponsors }) => {
  // Duplicate the sponsors array to create seamless looping
  const sponsorList = [...sponsors, ...sponsors];

  return (
    <div className="w-full bottom-0 my-4  bg-transparent py-4 rounded-md ">
      <Marquee speed={50} gradient={false}>
        <div className="flex items-center space-x-8 justify-center">
          {sponsorList.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.image}
              alt={`Sponsor-${index}`}
              className="rounded-lg shadow-md "
              style={{
                width: "12.5rem",
                height: "20vh",
                margin: "1rem 2rem",
                gap: "8rem",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SponsorCarousel;

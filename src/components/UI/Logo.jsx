import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center z-0 relative items-center h-[35vh] w-full -z-1 ">
      <img
        alt="Logo"
        src="../logo.svg"
        className="z-0 object-contain max-h-full"
      />
    </div>
  );
};

export default Logo;

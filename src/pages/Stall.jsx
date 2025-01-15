import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Stall = () => {
  return (
    <div className="p-8 w-full justify-center">
      <div className="flex justify-center">
        <a>
          <img
            src="https://i.ibb.co/rwn4Wjr/473248644-1114516587035940-3795224815249972118-n-1.jpg"
            alt="Stall Image"
            border="0"
          />
        </a>
      </div>
      <a
        className="flex justify-center mt-10"
        href="https://forms.gle/JTgBAm1ihRgZoHoZ8"
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white", // Orange background
            color: "#f9a123", // White text
            "&:hover": {
              backgroundColor: "#f9a123",
              color: "white", // Darker orange on hover
            },
            fontWeight: "600",
            borderRadius: "0.5rem",
            fontBold: "true",
            fontSize: "1.5rem",
          }}
        >
          REGISTER YOUR STALL
        </Button>
      </a>
    </div>
  );
};

export default Stall;

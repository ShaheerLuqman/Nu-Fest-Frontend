import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CompetitionDetailsModal from "../Competitions/CompetitionDetailsModal.jsx";
import { useState } from "react";
const CompetitionCard = ({ competition }) => {
  const dateOptions = { month: "long", day: "numeric" };
  const formattedDate = new Date(competition.date).toLocaleDateString(
    "en-US",
    dateOptions
  );
  const [open, setOpen] = useState(false); // Modal state

  // Function to open the modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="max-w-xs h-[300px] mx-auto bg-white shadow-md rounded-lg border border-orange-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <div className="flex flex-col justify-around flex-grow">
        <div className="flex justify-center">
          <img src=`${competition.imageurl}` alt="" />
        </div>
        {/* <h3 className="text-xl font-bold first text-center">
          {competition.competition_name}
        </h3> */}
        <p className="text-sm text-gray-500 mt-2 text-center flex-grow-0">
          {competition.description}
        </p>
      </div>
      <div className="mt-4 flex flex-col justify-between items-center">
        <span className="text-sm pb-2 font-medium first">{formattedDate}</span>
        {/* <Link
          to={`/${competition.competition_name}/register`}
          state={{ entityType: "competition", entityObject: competition }}
        > */}
        <div className="mt-5 flex justify-center ">
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
            }}
            onClick={handleClickOpen} // Open modal on button click
          >
            VIEW DETAILS
          </Button>
        </div>
        {/* </Link> */}
      </div>
      <CompetitionDetailsModal
        competition={competition}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default CompetitionCard;

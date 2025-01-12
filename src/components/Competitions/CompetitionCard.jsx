import React, { useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion"; // Importing framer-motion
import CompetitionDetailsModal from "./CompetitionDetailsModal.jsx"; // Importing the modal component

const CompetitionCard = ({ competition }) => {
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
    <>
      <motion.div
        className="bg-white shadow-lg drop-shadow rounded-lg w-full p-4 sm:p-6 flex flex-col justify-between" // Adjusted padding for smaller screens
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-full">
          <img
            src={competition.imageurl}
            alt="Competition"
            className="rounded-2xl w-full h-40 sm:h-48 object-fill" // Adjusted image size for mobile view
          />
        </div>

        <div className="w-full flex justify-center flex-col lg:mt-3 sm:mt-2">
          <h3 className="text-lg sm:text-xl font-semibold text-center mt-2 second">
            {competition.competition_name}
          </h3>
        </div>

        {/* Align the button at the bottom of the card */}
        <div className="mt-2 sm:mt-5 flex justify-center ">
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
      </motion.div>

      {/* Pass competition data to the modal and control its visibility */}
      <CompetitionDetailsModal
        competition={competition}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default CompetitionCard;

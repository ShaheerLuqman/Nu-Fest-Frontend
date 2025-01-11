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
        className="bg-white shadow-lg rounded-lg w-full p-6 flex flex-col justify-between "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-full flex justify-center align-top flex-col">
          <h3 className="text-xl font-semibold flex align-top justify-center">
            {competition.competition_name}
          </h3>
          {/* <p className="mt-2 text-gray-500">
            Date: {new Date(competition.date).toLocaleDateString()}
          </p> */}
        </div>

        {/* Align the button at the bottom of the card */}
        <div className="mt-5 flex justify-center ">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "orange", // Orange background
              color: "white", // White text
              "&:hover": {
                backgroundColor: "darkorange", // Darker orange on hover
              },
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

import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { motion } from "framer-motion"; // For animations
import { AiOutlineCloseCircle } from "react-icons/ai"; // Close icon
import { Link } from "react-router-dom";

const CompetitionDetailsModal = ({ competition, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      {/* Header Section with Icon and Title */}
      <DialogTitle className="flex items-center w-full">
        <div className="space-y-2 w-full flex justify-center">
          <h2 className="font-bold text-orange-300 text-3xl">
            {competition.competition_name}
          </h2>
        </div>
        <div className="flex items-center justify-end">
          <Button
            onClick={onClose}
            sx={{
              color: "gray",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <AiOutlineCloseCircle size={24} />
          </Button>
        </div>
      </DialogTitle>

      {/* Content Section with Motion Animation */}
      <DialogContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-gray-700"
        >
          {/* Date Section */}
          <div className="space-y-2">
            <p className="text-2xl font-bold text-orange-300">DATE</p>
            <p className="text-xl">
              {new Date(competition.date).toLocaleDateString()}
            </p>
          </div>

          {/* Location Section */}
          <div className="space-y-2">
            <p className="text-2xl font-bold text-orange-300">LOCATION</p>
            <p className="text-xl">{competition.location || "FAST NUCES"}</p>
          </div>

          {/* Description Section */}
          <div className="space-y-2">
            <p className="text-2xl font-bold text-orange-300">DESCRIPTION</p>
            <p className="text-xl">
              {competition.description || "No description available."}
            </p>
          </div>
        </motion.div>
      </DialogContent>

      {/* Actions with Styled Buttons */}
      <DialogActions sx={{ justifyContent: "center" }}>
        {/* Register Now Button on the Left and Centered */}
        {/* <Link
          to={`/${competition.competition_name}/register`}
          state={{ entityType: "competition", entityObject: competition }}
          className="hover:bg-[darkorange] bg-[orange] rounded-2xl transition duration-300 opacity-90 items-center flex justify-center text-white px-4 py-[0.4rem] font-bold w-[12vw] ml-auto "
        >
          REGISTER
        </Link> */}
        <Link
          to={`/${competition.competition_name}/register`}
          state={{ entityType: "competition", entityObject: competition }}
        >
          <button className="hover:bg-[darkorange] bg-[orange] rounded-2xl transition duration-300 opacity-90 items-center flex justify-center text-white px-4 py-[0.4rem] font-bold w-[12vw] ml-auto ">
            REGISTER
          </button>
        </Link>
        {/* Close Button on the Right */}
        <Button
          onClick={onClose}
          sx={{
            backgroundColor: "orange",
            color: "white",
            "&:hover": {
              backgroundColor: "darkorange",
            },
            borderRadius: "15px",
            fontWeight: "bold",
            width: "12vw", // Fixed width for consistency
            marginLeft: "auto", // Push to the right
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompetitionDetailsModal;

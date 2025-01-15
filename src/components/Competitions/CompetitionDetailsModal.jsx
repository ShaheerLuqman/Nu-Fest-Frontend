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
        <div className="space-y-2 w-full flex justify-center items-center">
          <h2 className="font-bold text-3xl second text-center">
            {competition.competition_name}
          </h2>
          <Button
            onClick={onClose}
            sx={{
              color: "gray",
              "&:hover": {
                backgroundColor: "transparent",
              },
              position: "absolute",
              right: "10px",
              top: "10px",
            }}
          >
            <AiOutlineCloseCircle size={24} className="cursor-pointer" />
          </Button>
        </div>
      </DialogTitle>

      {/* Content Section with Motion Animation and Image */}
      <DialogContent className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full sm:w-1/2"
        >
          <img
            src={competition.imageurl}
            alt={competition.competition_name}
            className="rounded-lg w-full object-cover"
          />
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col justify-center"
        >
          <div className="space-y-6 text-gray-700 w-full">
            {/* Location Section */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col justify-center text-center">
                <p className="text-2xl font-bold">PRICE</p>
                <p className="text-xl">{competition.price}</p>
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-2xl font-bold">MIN</p>
                <p className="text-xl">{competition.minplayersperteam}</p>
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-2xl font-bold">MAX</p>
                <p className="text-xl">{competition.maxplayersperteam}</p>
              </div>
            </div>

            {/* Register Button Section */}
            <div className="flex justify-center mt-6">
              <Link
                to={`/${competition.competition_name}/register`}
                state={{ entityType: "competition", entityObject: competition }}
              >
                <button className="hover:bg-orange-600 bg-first rounded-2xl transition duration-300 opacity-90 items-center flex justify-center text-white py-2 font-bold w-[150px] min-w-[150px] px-4">
                  REGISTER
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </DialogContent>

      {/* Actions with Styled Buttons */}
      <DialogActions sx={{ justifyContent: "center" }}>
        {/* Removed Register Now Button */}
        {/* Removed Close Button */}
      </DialogActions>
    </Dialog>
  );
};

export default CompetitionDetailsModal;

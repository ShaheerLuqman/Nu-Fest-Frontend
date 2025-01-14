import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const EventDetailsModal = ({ event, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      {/* Header Section with Icon and Title */}
      <DialogTitle className="flex items-center justify-center bg-first text-white p-4 ">
        <h2 className="text-3xl flex justify-center w-full font-semibold">
          {event.event_name}
        </h2>
        <Button
          onClick={onClose}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          className="absolute right-4"
        >
          <AiOutlineCloseCircle size={24} />
        </Button>
      </DialogTitle>

      {/* Content Section */}
      <DialogContent className="p-6 space-y-6">
        <img
          src={event.imageurl || "/default-event.jpg"}
          alt={event.event_name}
          className="w-full h-48 hover:scale-105 transition duration-300 object-cover rounded-md"
        />
        <div className="space-y-4 w-full">
          <p className="text-2xl font-semibold flex justify-center items-center first">
            Description
          </p>
          <p className="flex justify-center items-center">
            {event.description || "No description available"}
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex-1 bg-gray-100 p-4 rounded-lg flex flex-col justify-center items-center">
            <p className="text-lg font-semibold second">Date</p>

            <p className="text-2xl font-bold first">
              {new Date(event.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex-1 bg-gray-100 p-4 rounded-lg flex flex-col justify-center items-center">
            <p className="text-lg font-semibold second">Tickets Remaining</p>
            <p className="text-3xl font-bold first">
              {event.no_of_tickets - event.current_rows || 0}
            </p>
          </div>
        </div>
      </DialogContent>

      {/* Actions */}
      <DialogActions>
        <Link
          to={`/${event.event_name}/register`}
          state={{ entityType: "event", entityObject: event }}
        >
          <button className="hover:bg-orange-600 first rounded-2xl transition duration-300 items-center flex justify-center text-white px-4 py-[0.4rem] font-bold w-[12vw] ml-auto ">
            REGISTER
          </button>
        </Link>
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
            width: "12vw", 
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventDetailsModal;

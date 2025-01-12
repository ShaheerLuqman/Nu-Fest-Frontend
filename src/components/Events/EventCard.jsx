import React, { useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import EventDetailsModal from "./EventDetailsModal.jsx";

const EventCard = ({ event }) => {
  const remainingTickets = Math.max(
    event.no_of_tickets - event.current_rows,
    0
  );
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
      >
        <img
          src={event.imageurl || "/default-event.jpg"}
          alt={event.event_name}
          className="w-full max-w-xs h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-semibold first mb-4">
          {event.event_name}
        </h3>
        <div className="text-lg font-semibold first mb-6 first">
          <span className="text-3xl font-bold text-orange-500">
            {remainingTickets || 0}
          </span>
          <br /> Left
        </div>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#F39E60",
            color: "white",
            "&:hover": {
              backgroundColor: "#41444B",
            },
          }}
          onClick={handleClickOpen}
        >
          View Details
        </Button>
      </motion.div>
      <EventDetailsModal event={event} open={open} onClose={handleClose} />
    </>
  );
};

export default EventCard;

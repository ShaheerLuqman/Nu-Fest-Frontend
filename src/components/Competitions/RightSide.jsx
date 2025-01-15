import React, { useEffect, useState } from "react";
import CompetitionCard from "./CompetitionCard.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const RightSide = ({
  selectedCategory,
  catName,
  filteredCompetitions,
  selectedImage,
  categories,
  onCategoryClick,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoryMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoryMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (categoryName) => {
    onCategoryClick(categoryName);
    handleCategoryMenuClose();
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <motion.div
      className="w-full p-4 md:w-5/6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sm:hidden mb-6 w-full flex justify-center items-center">
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            backgroundColor: "white",
            color: "#f9a123",
            "&:hover": {
              backgroundColor: "#f9a123",
              color: "white",
            },
            fontWeight: "600",
          }}
        >
          CATEGORIES
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.id}
              onClick={() => handleCategorySelect(category.name)}
              style={{
                fullWidth: "100%",
                color: "#f9a123",
              }}
            >
              {category.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
      {selectedCategory ? (
        <>
          <div className="flex justify-center items-center mb-6">
            <img
              src={`${selectedImage}`}
              alt={`${catName}`}
              className="md:w-[60%] sm:w-[75%] md:mb-4 sm:h-48 md:h-72 object-fill rounded-2xl shadow-lg"
            />
          </div>

          {/* Grid of Competitions with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredCompetitions.map((competition) => (
                <motion.div
                  key={competition.id} // Ensure each card has a unique key
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <CompetitionCard competition={competition} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </>
      ) : (
        <div className="text-center text-lg md:text-xl text-gray-500">
          No competitions to display.
        </div>
      )}
    </motion.div>
  );
};

export default RightSide;

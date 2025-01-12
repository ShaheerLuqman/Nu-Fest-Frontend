import React, { useEffect, useState } from "react";
import CompetitionCard from "./CompetitionCard.jsx";
import { motion } from "framer-motion";
// import { Menu, Button, MenuItem } from "@mui/material";
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
  useEffect(() => {}, [filteredCompetitions]);
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
  // const [anchorEl, setAnchorEl] =
  //   (React.useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <motion.div
      className="w-full p-4 md:w-5/6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="sm:hidden mb-6 w-full">
        <Button
          aria-controls="category-menu"
          aria-haspopup="true"
          onClick={handleCategoryMenuOpen}
          fullWidth
          variant="contained"
          sx={{
            color: "#f9a123",
            background: "transparent",
            fontWeight: "600",
          }}
        >
          CATEGORIES
        </Button>
        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCategoryMenuClose}
          fullWidth
          style={{
            fullWidth: "100%",
            color: "#f9a123",
          }}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.id}
              onClick={() => handleCategorySelect(category.name)}
              fullWidth
              style={{
                fullWidth: "100%",
                color: "#f9a123",
              }}
            >
              {category.name}
            </MenuItem>
          ))}
        </Menu>
      </div> */}
      <div className="sm:hidden mb-6 w-full flex justify-center items-center">
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          // variant="contained"
          sx={{
            backgroundColor: "white", // Orange background
            color: "#f9a123", // White text
            "&:hover": {
              backgroundColor: "#f9a123",
              color: "white",
              width: "35vw", // Full width on mobile
              // Darker orange on hover
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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
          {/* </Menu> */}
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
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

          {/* Grid of Competitions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCompetitions.map((competition, index) => (
              <CompetitionCard key={index} competition={competition} />
            ))}
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

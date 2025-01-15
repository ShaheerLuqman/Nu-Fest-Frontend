import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const LeftSide = ({ categories, onCategoryClick, catName }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    // console.log(categories);
  }, []);

  return (
    <>
      {/* Desktop View */}
      <motion.div
        key={123124}
        className="hidden md:block w-1/6 p-4 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl second font-bold mb-6 text-center">
          Categories
        </h1>
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={
              catName === category.name
                ? "second p-3 rounded-lg w-full font-semibold transition duration-300"
                : "first p-3 rounded-lg w-full  font-semibold transition duration-300"
            }
            onClick={() => onCategoryClick(category.name)}
            whileHover={{ scale: 1.05 }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Mobile View */}
      {/* <div className="md:hidden">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <motion.div
            className="w-64 p-4 space-y-6"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold mb-6 text-center">Categories</h1>

            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={
                  catName === category.name
                    ? "second p-3 rounded-lg w-full  transition duration-300"
                    : "first p-3 rounded-lg w-full  transition duration-300"
                }
                onClick={() => {
                  onCategoryClick(category.name);
                  setDrawerOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </Drawer>
      </div> */}
    </>
  );
};

export default LeftSide;

import React from "react";
import { TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <div className="w-full">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        className="bg-gray-300 text-white"
      />
    </div>
  );
};

export default SearchBar;

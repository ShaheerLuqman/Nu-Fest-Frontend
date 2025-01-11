import React from "react";
import { TextField } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <div className="flex items-center justify-center">
        <TextField
          variant="outlined"
          placeholder="Search events..."
          className="w-full md:w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: <AiOutlineSearch size={24} />,
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;

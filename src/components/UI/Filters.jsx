import React, { useEffect, useState } from "react";
import PriceSlider from "./PriceSlider.jsx";

//style={{border: '2px solid black'}}
const Filters = (props) => {
  
  const {isFiltersOpen, setIsFiltersOpen,
    setSelectedPriceRange, selectedPriceRange
  } = props;
  
  const [TempSearchQuery, TempSetSearchQuery] = useState("");

  const handleInputChange = (e) => {
    TempSetSearchQuery(e.target.value);
  };

  // Handle search action
  const handleSearch = () => {
    if (TempSearchQuery.trim() !== "") {
      setSearchQuery(TempSearchQuery);
      TempSetSearchQuery("");
    } else {
      setSearchQuery("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  useEffect(() =>{
    setIsFiltersOpen(false);
  }, [])

  

  return (
    <>
      

      {/* Desktop Navigation Menu */}
      <div
        className="hidden lg:block max-h-screen min-w-[20%] max-w-[30%] fixed right-0 bg-white shadow-lg h-5/6 "
      >
        <div className="p-4">
          
          <p className="text-md text-black p-4 pb-2 text-2xl font-semibold">
            Filters
          </p>
          <div className="mx-4">
            {/* Search Bar */}
            
            <div className="hidden sm:flex flex-1 my-10 max-w-md">
            <input
                type="text"
                value={TempSearchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Search for products..."
                className="w-full border rounded-l-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button onClick={handleSearch} className="bg-black text-white px-4 rounded-r-lg">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            </div>
            
            <PriceSlider setSelectedPriceRange={setSelectedPriceRange} selectedPriceRange={selectedPriceRange}/>
            
            {/* categories */}
            <h2 className="text-md text-black p-4 pb-2 text-xl font-semibold">
            Categories
            </h2>
            <p className="text-md text-black p-4 pb-2 text-lg font-semibold">
            Competitions
            </p>
            <p className="text-md text-black p-4 pb-2 text-lg font-semibold">
            Events
            </p>

                

          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`max-h-screen min-w-48 max-w-[20%] fixed right-0 bg-white shadow-lg h-5/6 overflow-scroll z-50
          transition-transform duration-300 ease-in-out
         ${isFiltersOpen ? "transform translate-x-0" : "transform translate-x-full"}`}
        
      >
        <div className="p-4">
          {/* <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Home / Collections / END OF SEASON SALE
          </h2> */}
          <p className="text-md text-black p-4 pb-2 text-lg font-semibold">
            Filters
          </p>
          <div className="mx-4">
            <h2 className="text-lg font-semibold mb-8 pt-4w">Price</h2>
            <PriceSlider setSelectedPriceRange={setSelectedPriceRange} selectedPriceRange={selectedPriceRange}/>
          </div>

        </div>
      </div>

    </>
  );
};

export default Filters;

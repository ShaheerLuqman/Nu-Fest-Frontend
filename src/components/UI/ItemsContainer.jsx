import React, { useContext, useEffect, useState } from "react";
import Card from "./Card.jsx";
//import itemContext from '../../context/createContext.js';
import { Link } from "react-router-dom";

const ItemsContainer = ({
  category,
  isFiltersOpen,
  setIsFiltersOpen,
  selectedPriceRange,
  searchQuery,
  items,
}) => {
  //const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;
  //const { getItems, itemsLoading } = useContext(itemContext);

  // Toggle filter menu
  const toggleMenu = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const totalPages = 2;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="px-2 lg:max-w-[70%] xl:max-w-[75%] 2xl:max-w-[80%]">
      {/* Pagination Info */}
      <div className="mb-4 p-2 bg-gray-100 second border border-gray-300 rounded shadow-sm flex justify-between items-center">
        <button
          className="lg:hidden bg-black text-white px-4 py-1 rounded"
          onClick={toggleMenu}
        >
          Apply Filters
        </button>
        <p className="text-center">
          Showing page <span className="font-semibold">{currentPage}</span> of{" "}
          <span className="font-semibold">{totalPages}</span>
        </p>
      </div>

      {/* Items Grid */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <a key={item.id} to={`/shop/item/${item.name}`} state={{ item }}>
            <Card key={item.id} card={item} />
          </a>
        ))}
      </div>
      {/* )} */}

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center w-full">
        <ul className="flex space-x-2">
          {[...Array(totalPages).keys()].map((page) => (
            <li key={page + 1}>
              <button
                onClick={() => handlePageChange(page + 1)}
                className={`py-1 px-3 rounded ${
                  currentPage === page + 1
                    ? "bg-first text-white"
                    : "bg-gray-200"
                }`}
              >
                {page + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemsContainer;

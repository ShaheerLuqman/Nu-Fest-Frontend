import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filters from "./Filters.jsx";
import Itemscontainer from "./ItemsContainer.jsx";
import DataContext from "../../context/createContext.js";

const Mainbody = ({ searchQuery }) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  const { category } = useParams();
  const { competitions, events, competitionsLoading, error } =
    useContext(DataContext);

  useEffect(() => {
    console.log("competitions = ", competitions);
    console.log("events = ", events);
  }, [competitions, events]);

  const testData = [
    {
      name: "Nike Air Max",
      image:
        "https://farm9.staticflickr.com/8505/8441256181_4e98d8bff5_z_d.jpg",
      price: 9999,
      stock: 5,
    },
    {
      name: "Adidas ",
      image:
        "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
      price: 8999,
      stock: 0,
    },
    {
      name: "Puma Shoes",
      image:
        "https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg",
      price: 5999,
      stock: 10,
    },
    {
      name: "Nike Air Max 2 ",
      image:
        "https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpgmg",
      price: 9999,
      stock: 5,
    },
    {
      name: "Adidas 2",
      image:
        "https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg",
      price: 8999,
      stock: 0,
    },
  ];

  return (
    <div className="w-full min-h-screen pt-2">
      <Filters
        isFiltersOpen={isFiltersOpen}
        setIsFiltersOpen={setIsFiltersOpen}
        setSelectedPriceRange={setSelectedPriceRange}
        selectedPriceRange={selectedPriceRange}
      />

      <Itemscontainer
        searchQuery={searchQuery}
        category={category}
        isFiltersOpen={isFiltersOpen}
        setIsFiltersOpen={setIsFiltersOpen}
        selectedPriceRange={selectedPriceRange}
        items={testData}
      />
    </div>
  );
};

export default Mainbody;

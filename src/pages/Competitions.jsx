import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/UI/Navbar.jsx";
import LeftSide from "../components/Competitions/LeftSide.jsx";
import RightSide from "../components/Competitions/RightSide.jsx";
import DataContext from "../context/createContext.js";

const Competitions = () => {
  
    const categories = [
      'ALL',
      'Sports',
      'Art & Craft',
      'Coding',
      'Music',
      'Dance',
      'Gaming',
      'Literature',
      'Photography',
      'Robotics',
      'Experiences',
    ].map((name, index) => ({ id: index, name }));
    
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [catName, setcatName] = useState("ALL");
  const {competitions} = useContext(DataContext);
  const [filteredCompetitions, setFilteredCompetitions] = useState(competitions);

  useEffect(()=>{
    setFilteredCompetitions(competitions);
  },[competitions])

  // // Get today's date and set it to midnight for comparison
  // const today = new Date();
  // today.setHours(0, 0, 0, 0); // Set time to 00:00:00 for exact comparison

  // // Fetch all competitions and filter out past competitions
  // const fetchAllCompetitions = async () => {
  //   const response = await fetch(
  //     `${import.meta.env.VITE_BASEURL}/competitions/getcompetitions`
  //   );
  //   setcatName("All");
  //   if (response.ok) {
  //     const data = await response.json();
  //     const upcomingCompetitions = data.filter((competition) => {
  //       const competitionDate = new Date(competition.date);
  //       return competitionDate >= today; // Only keep competitions after today
  //     });
  //     setSelectedCategory(upcomingCompetitions); // Set the filtered competitions
  //   } else {
  //     console.log("Failed to fetch competitions");
  //   }
  // };

  //const handleCategoryClick = async (categoryName) => {
    //console.log(categoryName)

    
    // const encodedCategoryName = encodeURIComponent(categoryName);
    // if (categoryName === "ANY") {
    //   const response = await fetch(
    //     `${import.meta.env.VITE_BASEURL}/competitions/getcompetitions`
    //   );
    //   if (response.ok) {
    //     const data = await response.json();
    //     const upcomingCompetitions = data.filter((competition) => {
    //       const competitionDate = new Date(competition.date);
    //       return competitionDate >= today; // Only keep competitions after today
    //     });
    //     setSelectedCategory(upcomingCompetitions); // Set the filtered competitions
    //   } else {
    //     console.log("Failed to fetch competitions");
    //   }
    // } else {
    //   const response = await fetch(
    //     `${
    //       import.meta.env.VITE_BASEURL
    //     }/categories/getcategoryname?name=${encodedCategoryName}`
    //   );
    //   setcatName(categoryName);
    //   if (response.ok) {
    //     const data = await response.json();
    //     const upcomingCompetitions = data.filter((competition) => {
    //       const competitionDate = new Date(competition.date);
    //       return competitionDate >= today; // Only keep competitions after today
    //     });
    //     setSelectedCategory(upcomingCompetitions); // Set the filtered competitions
    //   } else {
    //     console.log("Failed to fetch category data");
    //   }
    // }
  //};

  const handleCategoryClick = (categoryName) => {
    setcatName(categoryName); // Update the selected category name
  
    if (categoryName === "ALL") {
      // Show all competitions if "ALL" is clicked
      setFilteredCompetitions(competitions);
      setcatName(categoryName)
    } else {
      // Filter competitions based on the category
      const filtered = competitions.filter(
        (competition) => competition.category_name === categoryName
      );
      setFilteredCompetitions(filtered);
      setcatName(categoryName)
    }
  };
  

  return (
    <div className="w-full">
      {/* <Navbar /> */}
      <div className="flex">
        {/* Left Side Component */}
        <LeftSide
          categories={categories}
          onCategoryClick={handleCategoryClick}
          catName={catName}
        />

        {/* Horizontal Separator */}
        <div className="w-px bg-gray-300 my-4"></div>

        {/* Right Side Component */}
        <RightSide selectedCategory={catName}  catName={catName} filteredCompetitions={filteredCompetitions}/>
      </div>
    </div>
  );
};

export default Competitions;

import { useContext, useEffect, useState } from "react";
import LeftSide from "../components/Competitions/LeftSide.jsx";
import RightSide from "../components/Competitions/RightSide.jsx";
import DataContext from "../context/createContext.js";

const Competitions = () => {
  const imageUrls = [
    "../all.svg",
    "https://i.imgur.com/LZK8IxO.png",
    "https://i.imgur.com/0swKNbC.png",
    "https://i.imgur.com/9kAuDYv.png",
    "https://i.imgur.com/WBLtVDe.png",
    "https://i.imgur.com/f9Tm6V0.png",
    "https://i.imgur.com/TdLnEse.png",
  ];

  const categories = [
    "All",
    "Esports",
    "Sports",
    "Extracurricular",
    "Demanding",
    "Digital",
    "Literary",
  ].map((name, index) => ({
    id: index,
    name,
    imageUrl: imageUrls[index],
  }));

  const [catName, setcatName] = useState("All");
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);
  const { competitions } = useContext(DataContext);
  const [filteredCompetitions, setFilteredCompetitions] =
    useState(competitions);

  useEffect(() => {
    setFilteredCompetitions(competitions);
  }, [competitions]);

  const handleCategoryClick = (categoryName) => {
    setcatName(categoryName);

    const category = categories.find((cat) => cat.name === categoryName);
    setSelectedImage(category.imageUrl || imageUrls[0]);

    if (categoryName === "All") {
      setFilteredCompetitions(competitions);
    } else {
      const filtered = competitions.filter(
        (competition) => competition.category_name === categoryName
      );
      setFilteredCompetitions(filtered);
      console.log(filtered);
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
        <RightSide
          selectedCategory={catName}
          catName={catName}
          filteredCompetitions={filteredCompetitions}
          selectedImage={selectedImage}
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
      </div>
    </div>
  );
};

export default Competitions;

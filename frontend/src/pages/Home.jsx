import React from "react";
import SearchBar from "../components/Searchbar";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";
import heroPic from "../assets/hero.jpg.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Image Section */}
      <div className="relative mb-8">
        <img
          src={heroPic} // Replace with your hero image URL
          alt="Delicious Food"
          className="w-full h-60 rounded-lg shadow-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded">
            Discover exclusive deals on your favorite fast foods
          </h1>
        </div>
      </div>

      <SearchBar />
      <CategoryFilter />
      <MenuCard />
    </>
  );
};

export default Home;

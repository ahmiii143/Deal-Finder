import React from "react";
import FullMenu from "../components/FullMenu";

// Sample data of restaurant names
const restaurantNames = ["BRIM", "KFC", "DOMINOS"];

const ResturantMenus = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        All Restaurant Menus
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurantNames.map((restaurantName) => (
          <div
            key={restaurantName}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-blue-500 dark:bg-blue-600">
              <h2 className="text-2xl font-bold text-white">
                {restaurantName}
              </h2>
            </div>
            <FullMenu restaurantName={restaurantName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResturantMenus;

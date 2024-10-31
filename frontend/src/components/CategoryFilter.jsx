import React from "react";
import { Link } from "react-router-dom";

const CategoryFilter = () => {
  const categories = ["Deals Under 500", "Burger", "Pizza", "Late Night Deals"];

  return (
    <div className="mb-8">
      <div className="flex  justify-between items-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600">
            <Link
              to="/dealspage"
              className="flex items-center justify-center h-full w-full">
              {category}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

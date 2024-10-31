import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiClock, FiMapPin, FiTag } from "react-icons/fi";

// Sample mock data
const mockDeals = {
  "late-night": [
    {
      id: 1,
      title: "Midnight Pizza Special",
      restaurant: "Pizza Palace",
      price: "$9.99",
      time: "11 PM - 2 AM",
      location: "123 Night St",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Late Night Burger Combo",
      restaurant: "Burger Joint",
      price: "$7.99",
      time: "10 PM - 3 AM",
      location: "456 Owl Ave",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Insomniac's Taco Platter",
      restaurant: "Taco Town",
      price: "$11.99",
      time: "12 AM - 4 AM",
      location: "789 Moonlight Blvd",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  burger: [
    {
      id: 4,
      title: "Classic Cheeseburger",
      restaurant: "Burger Bliss",
      price: "$5.99",
      time: "All Day",
      location: "321 Patty Lane",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Veggie Burger Delight",
      restaurant: "Green Bites",
      price: "$6.99",
      time: "11 AM - 9 PM",
      location: "654 Veggie St",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Gourmet Bacon Burger",
      restaurant: "Fancy Flips",
      price: "$8.99",
      time: "12 PM - 10 PM",
      location: "987 Gourmet Ave",
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
};

const DealsPage = () => {
  const { category } = useParams();
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    if (category && mockDeals[category]) {
      setDeals(mockDeals[category]);
    } else {
      setDeals([]); // Set empty if category doesn't exist in mock data
    }
  }, [category]);

  // Handle the display of category name safely
  const categoryTitle = category ? category.replace("-", " ") : "No Category";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white capitalize">
        {categoryTitle} Deals
      </h1>

      {deals.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No deals found for this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {deal.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {deal.restaurant}
                </p>
                <div className="flex items-center mb-2">
                  <FiTag className="text-blue-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-200 font-bold">
                    {deal.price}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <FiClock className="text-blue-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {deal.time}
                  </span>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="text-blue-500 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {deal.location}
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out">
                  View Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DealsPage;

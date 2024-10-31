import React from "react";

// Sample data to simulate a restaurant menu
const sampleMenu = {
  BRIM: [
    { id: 1, name: "Classic Burger", price: "$5.99" },
    { id: 2, name: "Cheese Fries", price: "$2.99" },
    { id: 3, name: "Milkshake", price: "$3.49" },
  ],
  KFC: [
    { id: 1, name: "Chicken Bucket", price: "$12.99" },
    { id: 2, name: "Popcorn Chicken", price: "$4.99" },
    { id: 3, name: "Mashed Potatoes", price: "$2.49" },
  ],
  DOMINOS: [
    { id: 1, name: "Pepperoni Pizza", price: "$8.99" },
    { id: 2, name: "Garlic Bread", price: "$3.99" },
    { id: 3, name: "Coca-Cola", price: "$1.50" },
  ],
};

const FullMenu = ({ restaurantName }) => {
  const menuItems = sampleMenu[restaurantName] || [];

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{restaurantName}'s Full Menu</h2>
      {menuItems.length > 0 ? (
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between bg-white dark:bg-gray-900 p-2 rounded-lg shadow-md">
              <span>{item.name}</span>
              <span className="font-bold">{item.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No menu items available.</p>
      )}
    </div>
  );
};

export default FullMenu;

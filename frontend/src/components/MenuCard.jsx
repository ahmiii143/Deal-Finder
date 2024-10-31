// import React, { useState } from "react";
// import { FiChevronRight } from "react-icons/fi";
// import FullMenu from "./FullMenu"; // Import the FullMenu component
// import brim from "../assets/brim.png";
// import KababjeesFriedChicken from "../assets/Kababjees Fried Chicken.webp";

// const MenuCard = () => {
//   // Sample data to simulate future API response
//   const sampleRestaurants = [
//     {
//       id: 1,
//       name: "BRIM",
//       image: brim, // Placeholder image
//     },
//     {
//       id: 2,
//       name: "Kababjees Fried Chicken",
//       image: KababjeesFriedChicken,
//     },
//     {
//       id: 3,
//       name: "DOMINOS",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 4,
//       name: "KFC",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 5,
//       name: "Jhoony Jugnu",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 6,
//       name: "CHEEZIOUS",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   const viewFullMenu = (restaurantName) => {
//     setSelectedRestaurant(restaurantName); // Update state with the selected restaurant
//   };

//   const closeFullMenu = () => {
//     setSelectedRestaurant(null); // Reset the state to close the FullMenu view
//   };

//   return (
//     <div>
//       {selectedRestaurant ? (
//         <div>
//           <button
//             onClick={closeFullMenu}
//             className="text-blue-500 hover:text-blue-700 mb-4">
//             &larr; Back to Restaurants
//           </button>
//           <FullMenu restaurantName={selectedRestaurant} />
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {sampleRestaurants.map((restaurant) => (
//             <div
//               key={restaurant.id}
//               className="aspect-square flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
//               {/* Restaurant Image */}
//               <img
//                 src={restaurant.image}
//                 alt={restaurant.name}
//                 className="w-full h-2/3 object-cover rounded-t-lg"
//               />
//               {/* Restaurant Name and View Menu Button */}
//               <div className="flex flex-col items-center p-2 w-full">
//                 <span className="text-xl font-bold">{restaurant.name}</span>
//                 <button
//                   onClick={() => viewFullMenu(restaurant.name)}
//                   className="flex items-center text-blue-500 hover:text-blue-700 mt-2">
//                   View Menu <FiChevronRight className="ml-1" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuCard;

// import React, { useState } from "react";
// import { FiChevronRight } from "react-icons/fi";
// import FullMenu from "./FullMenu"; // Import the FullMenu component
// import brim from "../assets/brim.png";
// import KababjeesFriedChicken from "../assets/Kababjees Fried Chicken.webp";

// const MenuCard = () => {
//   // Sample data to simulate future API response
//   const sampleRestaurants = [
//     {
//       id: 1,
//       name: "BRIM",
//       image: brim, // Placeholder image
//     },
//     {
//       id: 2,
//       name: "Kababjees Fried Chicken",
//       image: KababjeesFriedChicken,
//     },
//     {
//       id: 3,
//       name: "DOMINOS",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 4,
//       name: "KFC",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 5,
//       name: "Jhoony Jugnu",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       id: 6,
//       name: "CHEEZIOUS",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   const viewFullMenu = (restaurantName) => {
//     setSelectedRestaurant(restaurantName); // Update state with the selected restaurant
//   };

//   const closeFullMenu = () => {
//     setSelectedRestaurant(null); // Reset the state to close the FullMenu view
//   };

//   return (
//     <div>
//       {selectedRestaurant ? (
//         <div>
//           <button
//             onClick={closeFullMenu}
//             className="text-blue-500 hover:text-blue-700 mb-4">
//             &larr; Back to Restaurants
//           </button>
//           <FullMenu restaurantName={selectedRestaurant} />
//         </div>
//       ) : (
//         <div className="flex justify-between gap-4">
//           {sampleRestaurants.slice(0, 2).map((restaurant) => (
//             <div
//               key={restaurant.id}
//               className="w-80 h-56 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
//               {/* Restaurant Image */}
//               <img
//                 src={restaurant.image}
//                 alt={restaurant.name}
//                 className="w-full h-2/3 object-cover rounded-t-lg"
//               />
//               {/* Restaurant Name and View Menu Button */}
//               <div className="flex flex-col items-center p-2 w-full">
//                 <span className="text-sm font-bold">{restaurant.name}</span>
//                 <button
//                   onClick={() => viewFullMenu(restaurant.name)}
//                   className="flex items-center text-blue-500 hover:text-blue-700 mt-1 text-sm">
//                   View Menu <FiChevronRight className="ml-1" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuCard;

import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import FullMenu from "./FullMenu"; // Import the FullMenu component
import brim from "../assets/brim.png";
import KababjeesFriedChicken from "../assets/Kababjees Fried Chicken.webp";

const MenuCard = () => {
  // Sample data to simulate future API response
  const sampleRestaurants = [
    {
      id: 1,
      name: "BRIM",
      image: brim, // Placeholder image
    },
    {
      id: 2,
      name: "Kababjees Fried Chicken",
      image: KababjeesFriedChicken,
    },
    {
      id: 3,
      name: "DOMINOS",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "KFC",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Jhoony Jugnu",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "CHEEZIOUS",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const viewFullMenu = (restaurantName) => {
    setSelectedRestaurant(restaurantName); // Update state with the selected restaurant
  };

  const closeFullMenu = () => {
    setSelectedRestaurant(null); // Reset the state to close the FullMenu view
  };

  return (
    <div>
      {selectedRestaurant ? (
        <div>
          <button
            onClick={closeFullMenu}
            className="text-blue-500 hover:text-blue-700 mb-4">
            &larr; Back to Restaurants
          </button>
          <FullMenu restaurantName={selectedRestaurant} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {/* // <div className="flex justify-between gap-4"> */}
          {sampleRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="w-80 h-56 flex flex-col items-end justify-center bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              {/* Restaurant Image */}
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              {/* Restaurant Name and View Menu Button */}
              <div className="flex flex-col items-center p-2 w-full">
                <span className="text-sm font-bold">{restaurant.name}</span>
                <button
                  onClick={() => viewFullMenu(restaurant.name)}
                  className="flex items-center text-blue-500 hover:text-blue-700 mt-1 text-sm">
                  View Menu <FiChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCard;

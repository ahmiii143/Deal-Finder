import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold  text-blue-500 dark:text-blue-400 ">
            DealFinder
          </Link>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mr-2 sm:mr-0">
              {darkMode ? (
                <FiSun className="text-yellow-400 text-xl" />
              ) : (
                <FiMoon className="text-gray-600 text-xl" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 sm:hidden">
              {isMenuOpen ? (
                <FiX className="text-gray-600 dark:text-gray-300 text-xl" />
              ) : (
                <FiMenu className="text-gray-600 dark:text-gray-300 text-xl" />
              )}
            </button>
          </div>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:block mt-4 sm:mt-0`}>
          <ul className="flex mt-6 justify-between items-center flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <li>
              <Link
                to="/"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={closeMenu}>
                Find Deal
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={closeMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={closeMenu}>
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="/becameamember"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={closeMenu}>
                Become a member
              </Link>
            </li>
            <li>
              <Link
                to="/resturantmenus"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={closeMenu}>
                Resturant Menus
              </Link>
            </li>
            <li>
              <Link
                to="/dealspage"
                className="block hover:text-blue-500 dark:hover:text-blue-400"
                onClick={closeMenu}>
                Deals Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

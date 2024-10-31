import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BecameAMember from "./pages/BecameAMember";
import ResturantMenus from "./pages/ResturantMenus";
import Footer from "./components/Footer";
import DealsPage from "./pages/DealsPage";
const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              {/* Use the new HomePage component */}
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/becameamember" element={<BecameAMember />} />
              <Route path="/resturantmenus" element={<ResturantMenus />} />
              <Route path="/dealspage" element={<DealsPage />} />
            </Routes>
          </main>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

import { Resturant } from "../models/resturant.model.js";
import { Menu } from "../models/menus.model.js";

// 1. Add a New Restaurant
export const addResturant = async (req, res) => {
  try {
    const { name, address, googleMapsLink, phone, website } = req.body;

    // Create a new restaurant
    const newResturant = new Resturant({
      name,
      location: { address, googleMapsLink },
      contact: { phone, website },
    });

    const savedResturant = await newResturant.save();
    res.status(201).json(savedResturant);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding Resturant", error: error.message });
  }
};

// 2. Add Menu to a Specific Restaurant
export const addMenuToResturant = async (req, res) => {
  try {
    const { resturantId } = req.params;
    const { name, description, category, images } = req.body;

    // Check if restaurant exists
    const resturant = await Resturant.findById(resturantId);
    if (!resturant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Create a new menu item
    const newMenu = new Menu({ name, description, category, images });

    const savedMenu = await newMenu.save();

    // Update restaurant with new menu
    resturant.menus = resturant.menus || [];
    resturant.menus.push(savedMenu._id);
    await resturant.save();

    res
      .status(201)
      .json({ message: "Menu added to resturant", menu: savedMenu });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding menu", error: error.message });
  }
};

// 3. Get All Restaurants
export const getResturant = async (req, res) => {
  try {
    const resturant = await Resturant.find();
    res.status(200).json(resturant);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching resturant", error: error.message });
  }
};

// 4. Get a Specific Restaurant with Menu
export const getResturantWithMenu = async (req, res) => {
  try {
    const { resturantId } = req.params;
    const resturant = await Resturant.findById(resturantId).populate("menus");

    if (!resturant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json(resturant);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching restaurant", error: error.message });
  }
};

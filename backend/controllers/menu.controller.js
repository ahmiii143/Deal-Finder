import { Menu } from "../models/menus.model.js";

// Add a menu item for a restaurant
export const uploadMenu = async (req, res) => {
  const { name, description, category } = req.body;

  try {
    const newMenu = new Menu({
      name,
      description,
      category,
      images: req.files.map((file) => file.path), // Assuming multer for image upload
    });

    await newMenu.save();
    res
      .status(201)
      .json({ message: "Menu item added successfully", Menu: newMenu });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

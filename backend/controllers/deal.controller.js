import { Deals } from "../models/deals.model.js";
import { User } from "../models/user.model.js";
import { Menu } from "../models/menus.model.js";
import { Resturant } from "../models/resturant.model.js";
import { uploadMultipleFiles } from "../utils/fileUploadUtil.js";
import mongoose from "mongoose";

export const createDeal = [
  uploadMultipleFiles("images", 5), // Middleware to handle file uploads
  async (req, res) => {
    const { title, description, price, discount, menuItem, restaurant } =
      req.body;
    const userId = req.user?.id;

    try {
      // Check if userId is valid
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }

      // Handle the case where no files are uploaded
      const imagePaths = req.files ? req.files.map((file) => file.path) : [];

      // 1. Find or create Menu Item
      let menuItemId;
      if (mongoose.Types.ObjectId.isValid(menuItem)) {
        menuItemId = menuItem;
      } else if (typeof menuItem === "string" && menuItem.trim()) {
        const existingMenuItem = await Menu.findOne({ name: menuItem });
        if (existingMenuItem) {
          menuItemId = existingMenuItem._id;
        } else {
          const newMenuItem = await Menu.create({ name: menuItem });
          menuItemId = newMenuItem._id;
        }
      }

      // 2. Find or create Restaurant
      let restaurantId;
      if (mongoose.Types.ObjectId.isValid(restaurant)) {
        restaurantId = restaurant;
      } else if (typeof restaurant === "string" && restaurant.trim()) {
        const existingRestaurant = await Resturant.findOne({
          name: restaurant,
        });
        if (existingRestaurant) {
          restaurantId = existingRestaurant._id;
        } else {
          const newRestaurant = await Resturant.create({ name: restaurant });
          restaurantId = newRestaurant._id;
        }
      }

      // 3. Create the new Deal
      const newDeal = new Deals({
        title,
        description,
        price,
        discount,
        menuItem: menuItemId,
        restaurant: restaurantId,
        user: userId,
        images: imagePaths,
      });

      await newDeal.save();

      // 4. Update the user's dealsPosted
      await User.findByIdAndUpdate(userId, {
        $push: { "contributions.dealsPosted": newDeal._id },
      });

      res
        .status(201)
        .json({ message: "Deal uploaded successfully", deal: newDeal });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating deal", error: error.message });
    }
  },
];

export const getDeals = async (req, res) => {
  try {
    // Optional: Implement pagination (e.g., page, limit)
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 deals per page
    const skip = (page - 1) * limit;

    // Fetch deals with optional filtering, sorting, and pagination
    const deals = await Deals.find()
      .populate("menuItem", "name description category images")
      .populate("restaurant", "name location contact")
      .populate("user", "username email")
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip(skip) // Pagination: skip previous pages
      .limit(limit); // Limit the number of results

    // Get total count for pagination
    const totalDeals = await Deals.countDocuments();

    // Return the deals along with pagination info
    res.status(200).json({
      message: "Deals fetched successfully",
      data: deals,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalDeals / limit),
        totalDeals,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching deals", error: error.message });
  }
};

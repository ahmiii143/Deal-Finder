import express from "express";
import {
  addResturant,
  addMenuToResturant,
  getResturant,
  getResturantWithMenu,
} from "../controllers/resturant.controller.js";

const router = express.Router();

// Add a new restaurant
router.post("/add", addResturant);

// Add a menu to a specific restaurant
router.post("/:restaurantId/menu", addMenuToResturant);

// Get all restaurants
router.get("/", getResturant);

// Get a specific restaurant with menu
router.get("/:restaurantId", getResturantWithMenu);

export default router;

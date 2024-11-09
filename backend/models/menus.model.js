import mongoose, { Schema } from "mongoose";
const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // E.g., Burger, Pizza
    description: { type: String },
    category: {
      type: String,
      enum: ["Burgers", "Pizza", "Drinks", "Sides", "Desserts"],
    },
    images: [{ type: String }],
  },
  { timestamps: true }
);
export const Menu = mongoose.model("Menu", menuSchema);

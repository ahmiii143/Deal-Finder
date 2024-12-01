import mongoose, { Schema } from "mongoose";
const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    category: {
      type: String,
    },
    images: [{ type: String }], // Multiple images for menu items
  },
  { timestamps: true }
);
export const Menu = mongoose.model("Menu", menuSchema);

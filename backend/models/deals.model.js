import mongoose, { Schema } from "mongoose";
const dealsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    images: [{ type: String }], // Array for multiple image URLs
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resturant",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    votes: {
      upvotes: { type: Number, default: 0 },
      downvotes: { type: Number, default: 0 },
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    validUntil: { type: Date }, // Optional expiration date
  },
  { timestamps: true }
);
export const Deals = mongoose.model("Deals", dealsSchema);

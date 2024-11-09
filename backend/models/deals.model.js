import mongoose, { Schema } from "mongoose";
const dealsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 }, // Optional discount
    images: [{ type: String }], // Array for multiple image URLs
    menuItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MenuItem",
      required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // User who uploaded the deal
    votes: {
      upvotes: { type: Number, default: 0 },
      downvotes: { type: Number, default: 0 },
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], // References to comments
    status: { type: String, enum: ["active", "inactive"], default: "active" }, // Status for active/inactive deals
    validUntil: { type: Date }, // Optional end date if deals are time-sensitive
  },
  { timestamps: true }
);
export const Deals = mongoose.model("Deals", dealsSchema);

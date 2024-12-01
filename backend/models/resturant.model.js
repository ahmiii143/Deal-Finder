import mongoose, { Schema } from "mongoose";
const resturantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: {
      address: { type: String },
      googleMapsLink: { type: String },
    },
    contact: {
      phone: { type: String },
      website: { type: String },
    },
  },
  { timestamps: true }
);

export const Resturant = mongoose.model("Resturant", resturantSchema);

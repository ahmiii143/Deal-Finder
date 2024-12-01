import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    points: { type: Number, default: 0 }, // Points earned from contributions
    contributions: {
      dealsPosted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Deal" }],
      commentsPosted: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
      ],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

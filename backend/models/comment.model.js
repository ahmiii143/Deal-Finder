import mongoose, { Schema } from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    deal: { type: mongoose.Schema.Types.ObjectId, ref: "Deal", required: true },
    content: { type: String, required: true },
    votes: {
      upvotes: { type: Number, default: 0 },
      downvotes: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);
export const Comment = mongoose.model("Comment", commentSchema);

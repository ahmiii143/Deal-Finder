import { Comment } from "../models/comment.model.js";
import { Deal } from "../models/deals.model.js";
import { User } from "../models/user.model.js";

// Add a comment to a deal
export const addComment = async (req, res) => {
  const { dealId, content } = req.body;
  const userId = req.user.id;

  try {
    const newComment = new Comment({
      user: userId,
      deal: dealId,
      content,
    });

    await newComment.save();

    // Add comment to the deal
    await Deal.findByIdAndUpdate(dealId, {
      $push: { comments: newComment._id },
    });

    // Add comment to user's contributions
    await User.findByIdAndUpdate(userId, {
      $push: { "contributions.commentsPosted": newComment._id },
    });

    res
      .status(201)
      .json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

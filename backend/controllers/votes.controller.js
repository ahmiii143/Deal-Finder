import { Deals } from "../models/deals.model.js";

// Upvote a deal
export const upvoteDeal = async (req, res) => {
  const { dealId } = req.body;
  const userId = req.user?.id;

  try {
    const deal = await Deals.findById(dealId);
    if (!deal) return res.status(404).json({ message: "Deal not found" });

    // Increment the upvotes count
    deal.votes.upvotes += 1;

    // Save the updated deal
    await deal.save();
    res.status(200).json({ message: "Upvoted successfully", deal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Downvote a deal
export const downvoteDeal = async (req, res) => {
  const { dealId } = req.body;
  const userId = req.user.id;

  try {
    const deal = await Deals.findById(dealId);
    if (!deal) return res.status(404).json({ message: "Deal not found" });

    // Increment the downvotes count
    deal.votes.downvotes += 1;

    // Save the updated deal
    await deal.save();
    res.status(200).json({ message: "Downvoted successfully", deal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

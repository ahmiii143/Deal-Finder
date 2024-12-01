import express from "express";
import {
  addComment,
  getCommentsForDeal,
} from "../controllers/deal.controller.js";

const router = express.Router();

// Comment-related routes
router.post("/add/:dealId", addComment);
router.get("/:dealId", getCommentsForDeal);

export default router;

import express from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upvoteDeal, downvoteDeal } from "../controllers/votes.controller.js";

const router = express.Router();

// User-related routes
router.post("/register", registerUser);
router.post("/upvote/:dealId", upvoteDeal);
router.post("/downvote/:dealId", downvoteDeal);

export default router;

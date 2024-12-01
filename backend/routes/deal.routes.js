import express from "express";
import { createDeal, getDeals } from "../controllers/deal.controller.js";
import { uploadMultipleFiles } from "../utils/fileUploadUtil.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// Deal-related routes
router.post(
  "/create",
  uploadMultipleFiles("images", 5),
  authMiddleware,
  createDeal
);
router.get("/getAllDeals", getDeals);

export default router;

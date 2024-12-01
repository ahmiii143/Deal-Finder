import express from "express";
import { uploadMenu } from "../controllers/menu.controller.js";
import { uploadMultipleFiles } from "../utils/fileUploadUtil.js";

const router = express.Router();

// Menu-related routes
router.post("/add", uploadMultipleFiles("images", 5), uploadMenu);

export default router;

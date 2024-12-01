import express from "express";
import { uploadMultipleFiles } from "../utils/fileUploadUtil.js";

const router = express.Router();

// General file upload route
router.post("/upload", uploadMultipleFiles("images", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  const fileUrls = req.files.map((file) => file.path);
  res
    .status(200)
    .json({ message: "Files uploaded successfully", files: fileUrls });
});

export default router;

import multer from "multer";
import path from "path";

// Set up multer storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Destination folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

// File filter for images only
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);
  if (extname && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"));
  }
};

// Initialize multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter,
});

// Utility function for multiple file uploads
export const uploadMultipleFiles = (fieldName, maxCount = 5) => {
  return (req, res, next) => {
    const uploadHandler = upload.array(fieldName, maxCount);

    uploadHandler(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
      } else if (err) {
        return res.status(500).json({ message: err.message });
      }

      // Ensure `req.files` is always defined
      if (!req.files) {
        req.files = [];
      }

      next();
    });
  };
};

// Utility function for single file upload
export const uploadSingleFile = (fieldName) => {
  return (req, res, next) => {
    const uploadHandler = upload.single(fieldName);

    uploadHandler(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
      } else if (err) {
        return res.status(500).json({ message: err.message });
      }
      next();
    });
  };
};

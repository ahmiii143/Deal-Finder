import express from "express";
import cors from "cors";
import connectToDatabase from "./utils/dbConnection.js";
import userRoutes from "./routes/user.routes.js";
import dealRoutes from "./routes/deal.routes.js";
import commentRoutes from "./routes/deal.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import restaurantRoutes from "./routes/resturant.routes.js";
import uploadRoutes from "./routes/upload.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Serve static files (for uploaded images)
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/uploads", uploadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

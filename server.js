import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js"; // Adjust path as needed
import itemRoutes from "../routes/itemRoutes.js"; // Adjust path as needed
import authRoutes from "../routes/authRoutes.js"; // Adjust path as needed
import attendance from "../routes/attendance.js"; // Adjust path as needed
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Static file serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/items", itemRoutes);
app.use("/api/attendance", attendance);
app.use("/api/auth", authRoutes);

// Export the app to be used by Vercel
export default (req, res) => {
  app(req, res);
};

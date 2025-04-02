import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import attendance from "./routes/attendance.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
// app.use("/uploads", express.static(path.resolve("uploads"))); 

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/items", itemRoutes);
app.use("/api/attendance", attendance);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

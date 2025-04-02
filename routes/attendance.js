import express from "express";
import { deleteItem, getItems, updateItem } from "../controllers/attendanceControler.js";

const router = express.Router();

router.get("/", getItems);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
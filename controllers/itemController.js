import Item from "../models/Item.js";
import multer from "multer";
import path from "path";

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage }).single("image");

// Create Item
export const createItem = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) return res.status(400).json({ error: err.message });

      const newItem = new Item({
        ...req.body,
        image: req.file ? `/uploads/${req.file.filename}` : null, // Use null instead of empty string
      });

      await newItem.save();
      res.status(201).json(newItem);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Items
export const getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// Update Item
export const updateItem = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) return res.status(400).json({ error: err.message });

      const updatedData = { ...req.body };
      if (req.file) updatedData.image = `/uploads/${req.file.filename}`;

      const updatedItem = await Item.findByIdAndUpdate(req.params.id, updatedData, { new: true });
      res.json(updatedItem);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Item
export const deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};

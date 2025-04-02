import Attendance from "../models/Attendance.js";


export const getItems = async (req, res) => {
  const items = await Attendance.find();
  res.json(items);
};


export const addItem = async (req, res) => {
  const {firstName,lastName,age,time,date } = req.body;
  const newItem = new Attendance({ firstName,lastName,age,time,date });
  await newItem.save();
  res.json(newItem);
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const { firstName,lastName,age,time,date } = req.body;
  const updatedItem = await Attendance.findByIdAndUpdate(id, { firstName,lastName,age,time,date }, { new: true });
  res.json(updatedItem);
};

export const deleteItem = async (req, res) => {
  await Attendance.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};

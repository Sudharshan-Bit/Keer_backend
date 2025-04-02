import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  firstName: String,
  lastName: String,
  age: Number,
  department: String,
  phoneNumber: String,
  image: String
});

const Item = mongoose.model("Item", ItemSchema);
export default Item;

import mongoose from "mongoose";

const InventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const InventoryItem = mongoose.model("InventoryItem", InventoryItemSchema);

export default InventoryItem;

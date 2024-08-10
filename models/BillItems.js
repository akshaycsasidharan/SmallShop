import mongoose from "mongoose";

const billSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  items: [
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InventoryItem",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
});

const Bill = mongoose.model("Bill", billSchema);
export default Bill;

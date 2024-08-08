// import mongoose from "mongoose";

// const BillItemSchema = new mongoose.Schema({
//   item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
//   quantity: { type: Number, required: true },
// });

// const BillItem = mongoose.model("BillItem", BillItemSchema);

// export default BillItem;



import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true }
});

const Bill = mongoose.model('Bill', billSchema);
export default Bill;

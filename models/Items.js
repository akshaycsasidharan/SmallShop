import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BillItem', required: true }],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Bill = mongoose.model('Bill', billSchema);
export default Bill;

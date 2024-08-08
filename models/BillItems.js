import mongoose from "mongoose";

const BillItemSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true }
})


const BillItem = mongoose.model('BillItem',BillItemSchema);

export default BillItem;

import Bill from "../models/BillItems.js";
import InventoryItem from "../models/InventoryItems.js";


export const createBill = async (req, res) => {
  try {
    const { items } = req.body;
    let totalAmount = 0;

    for (const item of items) {
      const itemData = await InventoryItem.findById(item.itemId);
      if (!itemData) {
        return res.status(404).json({ message: "Item not found" });
      }
      totalAmount += itemData.price * item.quantity;
      itemData.quantity -= item.quantity;
      await itemData.save();
    }


    const bill = new Bill({ ...req.body, totalAmount });
    await bill.save();
    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getBills = async (req, res) => {
    try {
      const bills = await Bill.find().populate('items.itemId');
      res.status(200).json(bills);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
  export const getBill = async (req, res) => {
    try {
      const { id } = req.params;
      const bill = await Bill.findById(id).populate('items.itemId');
      if (!bill) {
        return res.status(404).json({ message: "Bill not found" });
      }
      res.status(200).json(bill);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
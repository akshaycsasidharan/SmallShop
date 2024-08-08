import InventoryItem from "../models/InventoryItems.js";

export const addItem = async (req, res) => {
  try {
    const newItem = new InventoryItem(req.body);
    await newItem.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItems = async (req, res) => {
  try {
    const getitem = await InventoryItem.find();
    res.status(200).json(getitem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const { id } = req.params;

    const getitem = await InventoryItem.findById(id);

    if (!getitem) {
      res.status(404).json({ message: "item not found" });
    }
    res.status(200).json(getitem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedItem = await InventoryItem.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateItem) {
      return res.status(404).json({ message: "item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteditem = await InventoryItem.findByIdAndDelete(id, req.body);

    if (!deleteditem) {
      return res.status(404).json({ message: "item not found" });
    }

    res.status(200).json({ message: "item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

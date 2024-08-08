import express from "express";

import { addItem, getItems, getItem, updateItem, deleteItem} from "../controllers/ItemController.js";

const router = express.Router();

router.post("/items", addItem);

router.get("/items", getItems);

router.get("/items:id",getItem);

router.put("/items/:id",updateItem);

router.delete("/items/:id",deleteItem);

export default router;

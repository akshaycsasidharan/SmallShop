import express from "express";
import {
  createBill,
  getBills,
  getBill,
} from "../controllers/BillController.js";

const router = express.Router();

router.post("/", createBill);

router.get("/", getBills);

router.get("/:id", getBill);

export default router;

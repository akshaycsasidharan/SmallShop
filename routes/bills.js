import express from "express";
import{
    billItems

} from "../controllers/BillController.js";

const router = express.Router;

router.get("/billitems",billItems);

export default router;
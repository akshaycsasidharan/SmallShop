import mongoose from "mongoose";
import Bill from "../models/BillItems";

export const billItems = async(req,res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

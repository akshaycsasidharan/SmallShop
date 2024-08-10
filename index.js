import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import dotenv from "dotenv";
import itemsRoute from "./routes/items.js";
import billsRoute from "./routes/bills.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/items", itemsRoute);
app.use("/api/bills", billsRoute);

const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log("connection failed:", error);
  });

app.listen(8080, () => {
  console.log("server is running on http://localhost/8080");
});

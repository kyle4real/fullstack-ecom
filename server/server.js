import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import express from "express";
import cors from "cors";
import morgan from "morgan";

import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";

import connectDB from "./config/db.js";
connectDB();

const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use(morgan("dev"));

app.use("/user", userRoutes);
app.use("/product", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

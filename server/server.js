import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "colors";

import errorHandler from "./middleware/error.js";

// Route Imports
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";

import connectDB from "./config/db.js";
connectDB();

const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Error handling middleware (must be mounted after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.green.bold);
});

process.on("unhandledRejection", (error, promise) => {
    console.log(`Error: ${error.message}`.red.bold);
    // Close server and exit process
    server.close(() => process.exit(1));
});

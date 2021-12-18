import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "colors";
import cookieParser from "cookie-parser";

import errorHandler from "./middleware/error.js";

// Route Imports
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
// Admin Route Imports
import productAdminRoutes from "./routes/products.admin.js";
import collectionRoutes from "./routes/collections.js";

// For populating purposes
import "./models/Variant.js";
import "./models/Media.js";
import "./models/Collection.js";

import connectDB from "./config/db.js";
connectDB();

const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

if (process.env.NODE_ENV === "development") {
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );
}

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
const adminPath = "/admin";
app.use(`${adminPath}/products`, productAdminRoutes);

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

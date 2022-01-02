import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import express from "express";

import cors from "cors";
import morgan from "morgan";
import "colors";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";
import hpp from "hpp";

import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import errorHandler from "./middleware/error.js";

// Route Imports
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import collectionRoutes from "./routes/collections.js";
import stripeRoutes from "./routes/stripe.js";
// Admin Route Imports
import productAdminRoutes from "./routes/products.admin.js";
import collectionAdminRoutes from "./routes/collections.admin.js";

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

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Sanitize Data
app.use(mongoSanitize());
// Prevent XSS Attacks
app.use(xss());
// Rate Limiter
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Static Folder
app.use(express.static(path.join(dirname(fileURLToPath(import.meta.url)), "/../client/build")));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/collections", collectionRoutes);
app.use("/stripe", stripeRoutes);
const adminPath = "/admin";
app.use(`${adminPath}/products`, productAdminRoutes);
app.use(`${adminPath}/collections`, collectionAdminRoutes);

// Error handling middleware (must be mounted after routes)
app.use(errorHandler);

if (process.env.NODE_ENV !== "development") {
    app.get("*", (req, res) => {
        res.sendFile(
            path.join(dirname(fileURLToPath(import.meta.url)), "/../client/build/index.html")
        );
    });
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.green.bold);
});

process.on("unhandledRejection", (error, promise) => {
    console.log(`Error: ${error.message}`.red.bold);
    // Close server and exit process
    server.close(() => process.exit(1));
});

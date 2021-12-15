import ErrorResponse from "../utils/errorResponse.js";

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    // Log to console for dev
    console.log(err.message.red);

    // Mongoose bad ObjectId
    if (err.name === "CastError") {
        const message = `Resource not found`;
        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const message = `Duplication field value entered: ${Object.keys(err.keyValue).join("")}`;
        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors)
            .map((item) => item.message)
            .join(", ");
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error",
    });
};

export default errorHandler;
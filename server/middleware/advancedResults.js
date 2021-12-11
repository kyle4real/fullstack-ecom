import ErrorResponse from "../utils/errorResponse.js";

const advancedResults = (model, populate) => async (req, res, next) => {
    let query;

    // Copy req.query
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ["select", "sort", "page", "limit"];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach((param) => delete reqQuery[param]);

    // Create query string
    let queryStr = JSON.stringify(reqQuery);

    // Create operators ($gt, $gte, etc.)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in|nin)\b/g, (match) => `$${match}`);

    // Finding resource & reverse populate
    query = model.find(JSON.parse(queryStr));

    // Select fields
    if (req.query.select) {
        const fields = req.query.select.split(",").join(" ");
        query = query.select(fields);
    }

    // Sort
    if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        query = query.sort(sortBy);
    } else {
        // @note-to-self    the minus means descending order
        query = query.sort("-createdAt");
    }

    // Pagination
    const total = await model.countDocuments();
    const page = parseInt(req.query.page, 10) || 1;
    const limit =
        req.query.limit === "all" || !req.query.limit ? total : parseInt(req.query.limit, 10);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    query = query.skip(startIndex).limit(limit);

    if (populate) {
        query = query.populate(populate);
    }

    // Executing query
    let results;
    try {
        results = await query;
    } catch (error) {
        return next(new ErrorResponse(`Invalid query`, 400));
    }

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
        pagination.next = {
            page: page + 1,
            limit,
        };
    }
    if (startIndex > 0) {
        pagination.prev = {
            page: page - 1,
            limit,
        };
    }

    res.advancedResults = {
        success: true,
        // count: results.length,
        count: total,
        pagination,
        data: results,
    };

    next();
};

export default advancedResults;

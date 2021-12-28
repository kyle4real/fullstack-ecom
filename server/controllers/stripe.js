import asyncHandler from "../middleware/async.js";
import ErrorResponse from "../utils/errorResponse.js";
import stripe from "../config/stripe.js";
import Variant from "../models/Variant.js";

// @desc    Create Stripe Checkout Session
// @route   POST /stripe/create-checkout-session
// @access  Public
export const createCheckoutSession = asyncHandler(async (req, res, next) => {
    const variants = await Variant.find({
        _id: { $in: req.body.cart.map((x) => x.variant) },
    }).populate([{ path: "product", populate: { path: "image" } }, { path: "media" }]);

    const qtyHash = req.body.cart.reduce((r, v) => ({ ...r, [v.variant]: v.qty }), {});

    const line_items = variants.reduce((r, v) => {
        // const productHasVariants = v.sku !== null;
        const quantity = qtyHash[v._id];
        const unit_amount = v.price * 100;

        const line_item = {
            quantity,
            price_data: {
                currency: "usd",
                product_data: {
                    name: `${v.product.title} - ${v.title}`,
                },
                unit_amount,
            },
        };

        if (!!v?.media) {
            line_item.price_data.product_data.images = [v.media.url];
        } else if (!!v.product?.image) {
            line_item.price_data.product_data.images = [v.product.image.url];
        }
        return [...r, line_item];
    }, []);

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items,
        success_url: `${process.env.CLIENT_URL}/checkout-success`,
        cancel_url: `${process.env.CLIENT_URL}/checkout-cancelled`,
    });

    res.status(200).json({ url: session.url });
});

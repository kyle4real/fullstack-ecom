import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart(state, action) {
            const { product, variant } = action.payload;

            const cartId = `${product._id}-${variant._id}`;

            const cartItemIndex = state.cart.findIndex((item) => item._id === cartId);
            if (cartItemIndex === -1) {
                const productCpy = { ...product };
                delete productCpy.variants;
                delete productCpy.media;
                state.cart.push({ _id: cartId, qty: 1, product: { ...productCpy, variant } });
            } else {
                state.cart[cartItemIndex].qty++;
            }
        },
        decCartItem(state, action) {
            const { cartId } = action.payload;
            const cartItemIndex = state.cart.findIndex((item) => item._id === cartId);
            state.cart[cartItemIndex].qty--;
        },
        incCartItem(state, action) {
            const { cartId } = action.payload;
            const cartItemIndex = state.cart.findIndex((item) => item._id === cartId);
            state.cart[cartItemIndex].qty++;
        },
        removeFromCart(state, action) {
            const { cartId } = action.payload;
            state.cart = state.cart.filter((item) => item._id !== cartId);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: JSON.parse(window.localStorage.getItem("cart")) || [],
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

            setCartLocalStorage(state.cart);
        },
        decCartItem(state, action) {
            const { cartId } = action.payload;
            const cartItemIndex = state.cart.findIndex((item) => item._id === cartId);
            state.cart[cartItemIndex].qty--;

            setCartLocalStorage(state.cart);
        },
        incCartItem(state, action) {
            const { cartId } = action.payload;
            const cartItemIndex = state.cart.findIndex((item) => item._id === cartId);
            state.cart[cartItemIndex].qty++;

            setCartLocalStorage(state.cart);
        },
        removeFromCart(state, action) {
            const { cartId } = action.payload;
            state.cart = state.cart.filter((item) => item._id !== cartId);

            setCartLocalStorage(state.cart);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

const setCartLocalStorage = (cart) => window.localStorage.setItem("cart", JSON.stringify(cart));

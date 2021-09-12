import { createSlice } from "@reduxjs/toolkit";

// const cartProduct = {
//     qty: 1,
//     variantSelection: '',
//     productObj: {}
// }

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartProducts: [],
    },
    reducers: {
        addToCart(state, action) {
            const { data } = action.payload;

            const cartProduct = {
                qty: 1,
                variantSelection: data.variant,
                productObj: data.product,
            };
            state.cartProducts.push(cartProduct);
        },
        removeFromCart(state, action) {
            const { data } = action.payload;
            state.cartProducts = state.cartProducts.filter((item) => item._id !== data.product._id);
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

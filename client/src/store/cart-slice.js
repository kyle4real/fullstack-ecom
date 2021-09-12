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

            const productIndex = state.cartProducts.findIndex(
                ({ variantSelection, productObj }) =>
                    variantSelection === data.variant && productObj.title === data.product.title
            );
            if (productIndex === -1) {
                const cartProduct = {
                    qty: 1,
                    variantSelection: data.variant,
                    productObj: data.product,
                };
                state.cartProducts.push(cartProduct);
            } else {
                state.cartProducts[productIndex].qty++;
            }
        },
        subFromCart(state, action) {
            const { data } = action.payload;
            const productIndex = state.cartProducts.findIndex(
                ({ variantSelection, productObj }) =>
                    variantSelection === data.variant && productObj.title === data.product.title
            );
            state.cartProducts[productIndex].qty--;
        },
        removeFromCart(state, action) {
            const { data } = action.payload;
            state.cartProducts = state.cartProducts.filter(
                ({ variantSelection, productObj }) =>
                    variantSelection !== data.variant || productObj.title !== data.product.title
            );
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

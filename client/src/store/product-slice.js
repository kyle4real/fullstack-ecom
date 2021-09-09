import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productsArray: [],
        currentProduct: null,
    },
    reducers: {
        replaceProducts(state, action) {
            const { data } = action.payload;
            state.productsArray = data.result;
        },
        replaceCurrentProduct(state, action) {
            const { data } = action.payload;
            state.currentProduct = data.result;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice;

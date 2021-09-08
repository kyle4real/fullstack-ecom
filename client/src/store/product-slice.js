import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productsArray: [],
    },
    reducers: {
        replaceProducts(state, action) {
            const { data } = action.payload;
            state.productsArray = data.result;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice;

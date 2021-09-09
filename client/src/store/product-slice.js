import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        productsArray: [],
        currentProduct: null,
        isEdited: false,
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
        changeIsEdited(state, action) {
            const boolean = action.payload;
            state.isEdited = boolean;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice;

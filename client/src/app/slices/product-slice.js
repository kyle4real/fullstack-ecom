import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
    },
    reducers: {
        replaceProduct(state, action) {
            const { data } = action.payload;
            state.product = data.data;
        },
        resetProduct(state) {
            state.product = null;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice;

import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: null,
        isEdited: false,
    },
    reducers: {
        replaceProducts(state, action) {
            const { data } = action.payload;
            console.log(data);
            state.products = data.data;
        },
        resetProducts(state) {
            state.products = null;
        },
    },
});

export const productsActions = productsSlice.actions;
export default productsSlice;

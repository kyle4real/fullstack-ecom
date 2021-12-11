import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "light",
        cartDrawer: false,
    },
    reducers: {
        toggleCart(state) {
            state.cartDrawer = !state.cartDrawer;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

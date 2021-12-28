import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "light",
        cartDrawer: false,
        initialLoading: true,
    },
    reducers: {
        toggleCart(state) {
            state.cartDrawer = !state.cartDrawer;
        },
        setCartDrawer(state, action) {
            state.cartDrawer = action.payload;
        },
        setInitialLoading(state, action) {
            state.initialLoading = action.payload;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

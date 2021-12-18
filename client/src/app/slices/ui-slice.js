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
        setInitialLoading(state, action) {
            state.initialLoading = action.payload;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

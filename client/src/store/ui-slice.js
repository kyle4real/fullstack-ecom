import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "light",
        loading: {
            productTable: false,
            productDisplay: false,
            imageUpload: false,
            imageDelete: false,
            productList: false,
        },
    },
    reducers: {
        updateLoading(state, action) {
            const { constituent, isLoading } = action.payload;
            state.loading[constituent] = isLoading;
        },
    },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

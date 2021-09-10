import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "light",
        loading: {
            productDisplay: false,
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

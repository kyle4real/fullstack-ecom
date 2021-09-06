import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "light",
    },
    reducers: {},
});

export const uiActions = uiSlice.actions;
export default uiSlice;

import { createSlice } from "@reduxjs/toolkit";
import collectionsSlice from "./collections-slice";

const collectionSlice = createSlice({
    name: "collection",
    initialState: {
        collection: null,
    },
    reducers: {
        replaceCollection(state, action) {
            const { data } = action.payload;
            state.collection = data.data;
        },
        resetCollection(state) {
            state.collection = null;
        },
    },
});

export const collectionActions = collectionsSlice.actions;
export default collectionSlice;

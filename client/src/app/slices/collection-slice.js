import { createSlice } from "@reduxjs/toolkit";

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

export const collectionActions = collectionSlice.actions;
export default collectionSlice;

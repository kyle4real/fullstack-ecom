import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
    name: "collections",
    initialState: {
        collections: null,
    },
    reducers: {
        replaceCollections(state, action) {
            const { data } = action.payload;
            state.collections = data.data;
        },
        resetCollections(state) {
            state.collections = null;
        },
    },
});

export const collectionsActions = collectionsSlice.actions;
export default collectionsSlice;

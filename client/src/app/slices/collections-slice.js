import { createSlice } from "@reduxjs/toolkit";

const collectionsSlice = createSlice({
    name: "collections",
    initialState: {
        collections: null,
        collectionsTitles: null,
    },
    reducers: {
        replaceCollections(state, action) {
            const { data } = action.payload;
            state.collections = data.data;
        },
        resetCollections(state) {
            state.collections = null;
        },
        replaceCollectionsTitles(state, action) {
            const { data } = action.payload;
            state.collectionsTitles = data.data;
        },
    },
});

export const collectionsActions = collectionsSlice.actions;
export default collectionsSlice;

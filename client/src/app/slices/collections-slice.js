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
        updateCollectionsTitles(state, action) {
            const { data } = action.payload;
            const collectionId = data.data._id;
            const collectionIndex = state.collectionsTitles.findIndex(
                (item) => item._id === collectionId
            );
            const keys = Object.keys(state.collectionsTitles[collectionIndex]);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                state.collectionsTitles[collectionIndex][key] = data.data[key];
            }
        },
    },
});

export const collectionsActions = collectionsSlice.actions;
export default collectionsSlice;

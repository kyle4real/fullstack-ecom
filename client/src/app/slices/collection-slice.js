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
        updateCollection(state, action) {
            const { data, updateKeys } = action.payload;
            for (let i = 0; i < updateKeys.length; i++) {
                const key = updateKeys[i];
                state.collection[key] = data.data[key];
            }
        },
    },
});

export const collectionActions = collectionSlice.actions;
export default collectionSlice;

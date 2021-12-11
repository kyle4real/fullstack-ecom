import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../../accessToken";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
        role: null,
        me: null,
        meId: null,
        loading: true,
        meLoading: false,
    },
    reducers: {
        replaceAccessToken(state, action) {
            const { data } = action.payload;
            state.accessToken = data.data.accessToken;
            const { role, id } = getUserData(state.accessToken);
            state.role = role;
            state.meId = id;
        },
        resetAccessToken(state) {
            state.accessToken = null;
            state.role = null;
            state.meId = null;
        },
        // me
        replaceMe(state, action) {
            const { data } = action.payload;
            state.me = data.data;
        },
        resetMe(state) {
            state.me = null;
        },
        // loading
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setMeLoading(state, action) {
            state.meLoading = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;

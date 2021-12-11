import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../../accessToken";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
        role: null,
        me: null,
        firstName: null,
        meId: null,
        loading: true,
        meLoading: false,
    },
    reducers: {
        replaceAccessToken(state, action) {
            const { data } = action.payload;
            state.accessToken = data.data.accessToken;
            const { role, id, firstName } = getUserData(state.accessToken);
            state.role = role;
            state.meId = id;
            state.firstName = firstName;
        },
        resetAccessToken(state) {
            state.accessToken = null;
            state.role = null;
            state.meId = null;
            state.firstName = null;
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

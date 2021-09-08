import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        authData: JSON.parse(localStorage.getItem("profile"))?.result || null,
        authToken: JSON.parse(localStorage.getItem("profile"))?.token || null,
        userList: null,
    },
    reducers: {
        loginUser(state, action) {
            const { data } = action.payload;
            localStorage.setItem("profile", JSON.stringify({ ...data }));
            state.authData = data.result;
            state.authToken = data.token;
        },
        logoutUser(state) {
            localStorage.removeItem("profile");
            state.authData = null;
            state.authToken = null;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;

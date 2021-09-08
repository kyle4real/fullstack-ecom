import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        authData: JSON.parse(localStorage.getItem("profile")),
        userList: null,
    },
    reducers: {
        loginUser(state, action) {
            const { data } = action.payload;
            localStorage.setItem("profile", JSON.stringify({ ...data }));
            state.authData = data;
        },
        logoutUser(state) {
            localStorage.removeItem("profile");
            state.authData = null;
        },
        replaceAuthData(state) {
            state.authData = JSON.parse(localStorage.getItem("profile"));
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;

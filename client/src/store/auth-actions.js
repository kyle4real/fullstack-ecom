import * as api from "./../api";
import { authActions } from "./auth-slice";

export const loginUser = (formInput, history) => {
    return async (dispatch) => {
        try {
            const { data } = await api.login(formInput);
            dispatch(authActions.loginUser({ data }));
            history.push("/account");
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const registerUser = (formInput, history) => {
    return async (dispatch) => {
        try {
            const { data } = await api.register(formInput);
            dispatch(authActions.loginUser({ data }));
            history.push("/account");
        } catch (error) {
            console.log(error.message);
        }
    };
};

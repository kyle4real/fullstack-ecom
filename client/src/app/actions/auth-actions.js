import { authActions } from "../slices/auth-slice";
import * as api from "./../../api";

// TODO

export const loginUser = (formInput, history) => {
    return async (dispatch) => {
        try {
            const { data } = await api.login(formInput);
            dispatch(authActions.loginUser({ data }));
            history.push("/account");
        } catch (error) {
            console.log(error);
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
            console.log(error);
        }
    };
};

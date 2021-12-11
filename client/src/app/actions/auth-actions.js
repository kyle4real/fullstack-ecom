import { authActions } from "../slices/auth-slice";
import * as api from "./../../api";

// TODO

export const login = (form, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.login(form);
            dispatch(authActions.replaceAccessToken({ data }));
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback();
        }
    };
};

export const register = (form, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.register(form);
            dispatch(authActions.replaceAccessToken({ data }));
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback();
        }
    };
};

export const refresh = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.refresh();
            dispatch(authActions.replaceAccessToken({ data }));
        } catch (error) {
            dispatch(authActions.resetAccessToken());
        } finally {
            dispatch(authActions.setLoading(false));
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            await api.logout();
            dispatch(authActions.resetAccessToken());
        } catch (error) {
            console.log(error);
        }
    };
};

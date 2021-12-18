import { uiActions } from "../slices/ui-slice";
import * as api from "./../../api";

export const getProvisions = () => {
    return async (dispatch) => {
        try {
            setTimeout(() => {
                dispatch(uiActions.setInitialLoading(false));
            }, 2000);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };
};

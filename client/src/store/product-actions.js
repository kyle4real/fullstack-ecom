import * as api from "./../api";
import { productActions } from "./product-slice";

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const { data } = await api.products();
            dispatch(productActions.replaceProducts({ data }));
        } catch (error) {
            console.log(error.message);
        }
    };
};

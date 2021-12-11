import { productsActions } from "../slices/products-slice";
import * as api from "./../../api";

export const getProducts = ({ onComplete, onError }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.getProducts();
            dispatch(productsActions.replaceProducts({ data }));
        } catch (error) {
            console.log(error);
            onError(error);
        } finally {
            onComplete();
        }
    };
};

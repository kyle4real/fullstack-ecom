import { productActions } from "../slices/product-slice";
import * as api from "./../../api";

export const getProductBySku = (productSku, { onComplete, onError }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.getProductBySku(productSku);
            dispatch(productActions.replaceProduct({ data }));
        } catch (error) {
            onError(error);
        } finally {
            onComplete();
        }
    };
};

export const getProduct = (productId, { onComplete, onError }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.getProductById_admin(productId);
            dispatch(productActions.replaceProduct({ data }));
        } catch (error) {
            onError(error);
        } finally {
            onComplete();
        }
    };
};

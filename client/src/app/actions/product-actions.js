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

export const uploadMedia = (obj, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.media(obj);
            dispatch(productActions.replaceProduct({ data }));
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback();
        }
    };
};
export const deleteMedia = (obj, callback) => {
    return async (dispatch) => {
        try {
            const { data } = await api.deleteMedia(obj);
            dispatch(productActions.replaceProduct({ data }));
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback();
        }
    };
};

export const updateVariant = (productId, obj) => {
    return async (dispatch) => {
        try {
            const { data } = await api.variant(productId, obj);
            dispatch(productActions.replaceCurrentProduct({ data }));
        } catch (error) {
            console.log(error.message);
        }
    };
};

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

export const getProduct = (productId) => {
    return async (dispatch) => {
        try {
            const { data } = await api.product(productId);
            dispatch(productActions.replaceCurrentProduct({ data }));
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const uploadMedia = (obj) => {
    return async (dispatch) => {
        try {
            const { data } = await api.media(obj);
            dispatch(productActions.replaceCurrentProduct({ data }));
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const deleteMedia = (obj) => {
    return async (dispatch) => {
        try {
            const { data } = await api.deleteMedia(obj);
            console.log(data);
            // dispatch(productActions.replaceCurrentProduct({data}));
        } catch (error) {
            console.log(error.message);
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

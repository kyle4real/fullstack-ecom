import * as api from "./../api";
import { productActions } from "./product-slice";
import { uiActions } from "./ui-slice";

export const getProducts = () => {
    return async (dispatch) => {
        dispatch(uiActions.updateLoading({ constituent: "productTable", isLoading: true }));
        try {
            const { data } = await api.products();
            dispatch(productActions.replaceProducts({ data }));
        } catch (error) {
            console.log(error.message);
        }
        dispatch(uiActions.updateLoading({ constituent: "productTable", isLoading: false }));
    };
};

export const getProduct = (productId) => {
    return async (dispatch) => {
        dispatch(uiActions.updateLoading({ constituent: "productDisplay", isLoading: true }));
        try {
            const { data } = await api.product(productId);
            dispatch(productActions.replaceCurrentProduct({ data }));
        } catch (error) {
            console.log(error.message);
        }
        dispatch(uiActions.updateLoading({ constituent: "productDisplay", isLoading: false }));
    };
};

export const uploadMedia = (obj) => {
    return async (dispatch) => {
        dispatch(uiActions.updateLoading({ constituent: "imageUpload", isLoading: true }));
        try {
            const { data } = await api.media(obj);
            dispatch(productActions.replaceCurrentProduct({ data }));
        } catch (error) {
            console.log(error.message);
        }
        dispatch(uiActions.updateLoading({ constituent: "imageUpload", isLoading: false }));
    };
};

export const deleteMedia = (obj) => {
    return async (dispatch) => {
        dispatch(uiActions.updateLoading({ constituent: "imageDelete", isLoading: true }));
        try {
            const { data } = await api.deleteMedia(obj);
            dispatch(productActions.replaceCurrentProduct({ data }));
        } catch (error) {
            console.log(error.message);
        }
        dispatch(uiActions.updateLoading({ constituent: "imageDelete", isLoading: false }));
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

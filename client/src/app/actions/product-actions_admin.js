import { productActions } from "../slices/product-slice";
import * as api from "./../../api";

export const getProduct = (productId, { onComplete, onError }) => {
    return async (dispatch) => {
        try {
            let { data } = await api.getProductById_admin(productId);
            data = actorlyMediaToVariantPopulate(data.data);
            dispatch(productActions.replaceProduct({ data }));
        } catch (error) {
            onError(error);
        } finally {
            onComplete();
        }
    };
};

export const updateProduct = (productId, productObj, callback) => {
    return async (dispatch, getState) => {
        try {
            dispatch(productActions.setProductLoading(true));

            let { data } = await api.updateProduct_admin(productId, productObj);
            if (productObj.variants !== undefined) {
                const media = getState().product.product.media;
                data = actorlyMediaToVariantPopulate({ ...data.data, media });
            }
            const updateKeys = Object.keys(productObj);
            dispatch(productActions.updateProduct({ data, updateKeys }));
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback();
            dispatch(productActions.setProductLoading(false));
        }
    };
};

export const addMedia = (productId, base64Img) => {
    return async (dispatch) => {
        try {
            dispatch(productActions.setMediaLoading(true));
            const { data } = await api.addMedia(productId, base64Img);
            dispatch(productActions.addMedia({ data }));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(productActions.setMediaLoading(false));
        }
    };
};

export const addVariant = (productId, variantObj, callback) => {
    return async (dispatch) => {
        try {
            dispatch(productActions.setVariantLoading(true));
            const { data } = await api.addVariant(productId, variantObj);
            dispatch(productActions.addVariant({ data }));
        } catch (error) {
            console.log(error);
        } finally {
            callback && callback();
            dispatch(productActions.setVariantLoading(false));
        }
    };
};
export const deleteVariant = (productId, variantId) => {
    return async (dispatch) => {
        try {
            dispatch(productActions.setVariantLoading(variantId));
            await api.deleteVariant(productId, variantId);
            dispatch(productActions.deleteVariant({ variantId }));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(productActions.setVariantLoading(false));
        }
    };
};

// actorly populate
const actorlyMediaToVariantPopulate = (product) => {
    const mediaHash = product.media.reduce((r, v) => ({ ...r, [v._id]: v }), {});
    const variants = product.variants.reduce(
        (r, v) => [...r, { ...v, media: mediaHash[v.media] }],
        []
    );
    return { data: { ...product, variants } };
};

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

export const updateProduct = (productId, productObj) => {
    return async (dispatch, getState) => {
        try {
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
        }
    };
};

// actorly populate
const actorlyMediaToVariantPopulate = (product) => {
    console.log(product);
    const mediaHash = product.media.reduce((r, v) => ({ ...r, [v._id]: v }), {});
    const variants = product.variants.reduce(
        (r, v) => [...r, { ...v, media: mediaHash[v.media] }],
        []
    );
    return { data: { ...product, variants } };
};

import { productActions } from "../slices/product-slice";
import * as api from "./../../api";

export const getProduct = (productId, { onComplete, onError }) => {
    return async (dispatch) => {
        try {
            let { data } = await api.getProductById_admin(productId);
            data = actorlyMediaToVariantPopulate(data.data);
            console.log(data);
            dispatch(productActions.replaceProduct({ data }));
        } catch (error) {
            onError(error);
        } finally {
            onComplete();
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

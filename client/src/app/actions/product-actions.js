import { productActions } from "../slices/product-slice";
import * as api from "./../../api";

export const getProductBySku = (productSku, { onComplete, onError }) => {
    return async (dispatch) => {
        try {
            let { data } = await api.getProductBySku(productSku);
            data = actorlyCustomPopulate(data.data);
            dispatch(productActions.replaceProduct({ data }));
        } catch (error) {
            onError(error);
        } finally {
            onComplete();
        }
    };
};

// actorly populate
const actorlyCustomPopulate = (product) => {
    const mediaHash = product.media.reduce((r, v) => ({ ...r, [v._id]: v }), {});
    const variantHash = {};
    let variants = product.variants.reduce((r, v) => {
        variantHash[v.media] = v;
        return [...r, { ...v, media: mediaHash[v.media] || null }];
    }, []);
    let media = product.media.map((v) => ({ ...v, variant: variantHash?.[v._id] || null }));
    if (!!media.length) {
        variants = [...variants].sort((a, b) => a?.media?.position - b?.media?.position);
        media = [...media].sort((a, b) => a.position - b.position);
    }
    return { data: { ...product, variants, media } };
};

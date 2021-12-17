import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
        productLoading: false,
        mediaLoading: false,
        variantLoading: false,
    },
    reducers: {
        replaceProduct(state, action) {
            const { data } = action.payload;
            state.product = data.data;
        },
        resetProduct(state) {
            state.product = null;
        },
        updateProduct(state, action) {
            const { data, updateKeys } = action.payload;
            for (let i = 0; i < updateKeys.length; i++) {
                const key = updateKeys[i];
                if (key !== "variants") state.product[key] = data.data[key];
                else {
                    for (let j = 0; j < data.data[key].length; j++) {
                        const variant = data.data[key][j];
                        const variantIndex = state.product.variants.findIndex(
                            (item) => item._id === variant._id
                        );
                        state.product.variants[variantIndex] = variant;
                    }
                }
            }
        },
        addMedia(state, action) {
            const { data } = action.payload;
            state.product.media.push(data.data);
        },
        deleteMedia(state, action) {
            const { mediaId } = action.payload;
            const mediaIndex = state.product.media.findIndex((item) => item._id === mediaId);
            state.product.media.splice(mediaIndex, 1);
            for (let i = mediaIndex; i < state.product.media.length; i++) {
                state.product.media[i].position--;
            }
            for (let i = 0; i < state.product.variants.length; i++) {
                const variant = state.product.variants[i];
                if (variant?.media?._id === mediaId) {
                    state.product.variants[i].media = null;
                }
            }
        },
        addVariant(state, action) {
            const { data } = action.payload;
            state.product.variants.push(data.data);
        },
        replaceVariant(state, action) {
            const { data } = action.payload;
            const variantIndex = state.product.variants.findIndex(
                (item) => item._id === data.data._id
            );
            state.product.variants[variantIndex] = data.data;
        },
        deleteVariant(state, action) {
            const { variantId } = action.payload;
            const variantIndex = state.product.variants.findIndex((item) => item._id === variantId);
            state.product.variants.splice(variantIndex, 1);
        },
        // loading
        setProductLoading(state, action) {
            state.productLoading = action.payload;
        },
        setMediaLoading(state, action) {
            state.mediaLoading = action.payload;
        },
        setVariantLoading(state, action) {
            state.variantLoading = action.payload;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice;

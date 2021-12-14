import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
        productLoading: false,
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
        // loading
        setProductLoading(state, action) {
            state.productLoading = action.payload;
        },
    },
});

export const productActions = productSlice.actions;
export default productSlice;

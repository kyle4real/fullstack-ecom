import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth-slice";
import cartSlice from "./slices/cart-slice";
import productSlice from "./slices/product-slice";
import productsSlice from "./slices/products-slice";
import uiSlice from "./slices/ui-slice";

const store = configureStore(
    {
        reducer: {
            ui: uiSlice.reducer,
            auth: authSlice.reducer,
            product: productSlice.reducer,
            products: productsSlice.reducer,
            cart: cartSlice.reducer,
        },
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

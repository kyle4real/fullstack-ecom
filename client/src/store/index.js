import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import productSlice from "./product-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
        product: productSlice.reducer,
    },
});
export default store;

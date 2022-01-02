import axios from "axios";
import { authActions } from "../app/slices/auth-slice";
import store from "./../app/store";

let baseURL = "http://localhost:5000";

const API = axios.create({ baseURL, withCredentials: true });

const getAccessToken = () => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    return accessToken;
};

API.interceptors.request.use((req) => {
    const token = getAccessToken();
    req.headers.Authorization = `Bearer ${token || ""}`;
    return req;
});

API.interceptors.response.use(
    (res) => res,
    async (err) => {
        if (err.response) {
            const message = err.reponse?.data?.error;
            const errArr = ["No refresh token detected", "Invalid refresh token", "jwt expired"];
            if (errArr.includes(message)) {
                store.dispatch(authActions.resetAccessToken());
                return Promise.reject(err);
            }
            if (err.response.status === 401) {
                try {
                    const { data } = await API.post(`${authPath}/refresh_token`);
                    store.dispatch(authActions.replaceAccessToken({ data }));
                    return API(err.config);
                } catch (error) {
                    return Promise.reject(error);
                }
            }
        }
        return Promise.reject(err);
    }
);

const adminPath = "/admin";

const stripePath = "/stripe";
const authPath = "/auth";
const productsPath = "/products";
const collectionsPath = "/collections";

// AUTH
export const login = (form) => API.post(`${authPath}/login`, form);
export const register = (form) => API.post(`${authPath}/register`, form);
export const refresh = () => API.post(`${authPath}/refresh_token`);
export const logout = () => API.get(`${authPath}/logout`);
export const getMe = () => API.get(`${authPath}/me`);

// CHECKOUT
export const createCheckoutSession = (cart) => {
    return API.post(`${stripePath}/create-checkout-session`, { cart });
};

// GUEST
export const getProducts = (query) => {
    if (!query) {
        return API.get(`${productsPath}/`);
    } else return API.get(`${productsPath}${query}`);
};
export const getProductBySku = (productSku) => {
    return API.get(`${productsPath}/${productSku}`);
};

export const getCollectionsTitles = () => {
    return API.get(`${collectionsPath}/titles`);
};

export const getProductsForCollection = (collectionId) => {
    return API.get(`${collectionsPath}/${collectionId}/products`);
};

// ADMIN
export const getProducts_admin = () => {
    return API.get(`${adminPath}${productsPath}/`);
};
export const getProductById_admin = (productId) => {
    return API.get(`${adminPath}${productsPath}/${productId}`);
};
export const updateProduct_admin = (productId, productObj) => {
    return API.put(`${adminPath}${productsPath}/${productId}`, productObj);
};
export const createProduct = (productObj) => {
    return API.post(`${adminPath}${productsPath}/`, productObj);
};
export const deleteProduct = (productId) => {
    return API.delete(`${adminPath}${productsPath}/${productId}`);
};

export const addMedia = (productId, base64Img) => {
    return API.post(`${adminPath}${productsPath}/${productId}/media`, { base64Img });
};
export const deleteMedia = (productId, mediaId) => {
    return API.delete(`${adminPath}${productsPath}/${productId}/media/${mediaId}`);
};

export const addVariant = (productId, variantObj) => {
    return API.post(`${adminPath}${productsPath}/${productId}/variants`, variantObj);
};
export const updateVariant = (productId, variantId, variantObj) => {
    return API.put(`${adminPath}${productsPath}/${productId}/variants/${variantId}`, variantObj);
};
export const deleteVariant = (productId, variantId) => {
    return API.delete(`${adminPath}${productsPath}/${productId}/variants/${variantId}`);
};

export const getCollections = () => {
    return API.get(`${adminPath}${collectionsPath}/`);
};
export const getCollection = (collectionId) => {
    return API.get(`${adminPath}${collectionsPath}/${collectionId}`);
};
export const updateCollection = (collectionId, collectionObj) => {
    return API.put(`${adminPath}${collectionsPath}/${collectionId}`, collectionObj);
};
export const createCollection = (collectionObj) => {
    return API.post(`${adminPath}${collectionsPath}/`, collectionObj);
};
export const deleteCollection = (collectionId) => {
    return API.delete(`${adminPath}${collectionsPath}/${collectionId}`);
};

import axios from "axios";
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

const adminPath = "/admin";

const authPath = "/auth";
const productsPath = "/products";

// AUTH
export const login = (form) => API.post(`${authPath}/login`, form);
export const register = (form) => API.post(`${authPath}/register`, form);
export const refresh = () => API.post(`${authPath}/refresh_token`);
export const logout = () => API.get(`${authPath}/logout`);
export const getMe = () => API.get(`${authPath}/me`);

// GUEST
export const getProducts = () => {
    return API.get(`${productsPath}/`);
};
export const getProductBySku = (productSku) => {
    return API.get(`${productsPath}/${productSku}`);
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

export const addMedia = (productId, base64Img) => {
    return API.post(`${adminPath}${productsPath}/${productId}/media`, { base64Img });
};

export const addVariant = (productId, variantObj) => {
    return API.post(`${adminPath}${productsPath}/${productId}/variants`, variantObj);
};
export const deleteVariant = (productId, variantId) => {
    return API.delete(`${adminPath}${productsPath}/${productId}/variants/${variantId}`);
};

import axios from "axios";

let baseURL = "http://localhost:5000";

const API = axios.create({ baseURL, withCredentials: true });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
});

const authPath = "/auth";
const usersPath = "/users";
const productsPath = "/products";

export const login = (form) => API.post(`${authPath}/login`, form);
export const register = (form) => API.post(`${authPath}/register`, form);
export const refresh = () => API.post(`${authPath}/refresh_token`);
export const logout = () => API.get(`${authPath}/logout`);

export const getProducts = () => API.get(`${productsPath}/`);

export const getProductBySku = (productSku) => API.get(`${productsPath}/sku/${productSku}`);
export const getProduct = (productId) => API.get(`${productsPath}/${productId}`);

export const variant = (productId, obj) => API.post(`${productsPath}/${productId}/variant`, obj);

export const media = (productId, obj) => API.post(`${productsPath}/${productId}/media`, obj);
export const deleteMedia = (productId, mediaId) =>
    API.delete(`${productsPath}/${productId}/media/${mediaId}`);

import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
});

const userPath = "/users";
const productPath = "/products";

export const login = (formInput) => API.post(`${userPath}/signin`, formInput);
export const register = (formInput) => API.post(`${userPath}/signup`, formInput);

export const products = () => API.get(`${productPath}/`);

export const product = (productId) => API.get(`${productPath}/${productId}`);

export const variant = (productId, obj) => API.post(`${productPath}/${productId}/variant`, obj);

export const media = (obj) => API.post(`${productPath}/media`, obj);
export const deleteMedia = (obj) => API.post(`${productPath}/media/delete`, obj);

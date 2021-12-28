import * as api from "./../../api";

export const createCheckoutSession = () => {
    return async (dispatch, getState) => {
        try {
            const cartArr = getState().cart.cart;
            const cart = cartArr.reduce(
                (r, { product, qty }) => [...r, { qty, variant: product.variant._id }],
                []
            );
            const { data } = await api.createCheckoutSession(cart);
            const url = data.url;
            window.location = url;
        } catch (error) {
            console.log(error);
        }
    };
};

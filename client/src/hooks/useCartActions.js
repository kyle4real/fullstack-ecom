import { useDispatch } from "react-redux";
import { cartActions } from "../app/slices/cart-slice";

const useCartActions = () => {
    const dispatch = useDispatch();
    const removeHandler = (_id) => {
        dispatch(cartActions.removeFromCart({ cartId: _id }));
    };
    const addHandler = (_id) => {
        dispatch(cartActions.addToCart({ cartId: _id }));
    };
    const subHandler = (_id) => {
        dispatch(cartActions.subFromCart({ cartId: _id }));
    };
    return { removeHandler, addHandler, subHandler };
};

export default useCartActions;

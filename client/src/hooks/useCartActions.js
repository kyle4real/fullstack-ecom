import { useDispatch } from "react-redux";
import { cartActions } from "../app/slices/cart-slice";

const useCartActions = () => {
    const dispatch = useDispatch();
    const removeHandler = (_id) => {
        dispatch(cartActions.removeFromCart({ cartId: _id }));
    };
    const incHandler = (_id) => {
        dispatch(cartActions.incCartItem({ cartId: _id }));
    };
    const decHandler = (_id) => {
        dispatch(cartActions.decCartItem({ cartId: _id }));
    };
    return { removeHandler, incHandler, decHandler };
};

export default useCartActions;

import { useDispatch } from "react-redux";
import { cartActions } from "../app/slices/cart-slice";

const useCartActions = () => {
    const dispatch = useDispatch();
    const removeHandler = (productObj, variantSelection) => {
        dispatch(
            cartActions.removeFromCart({ data: { product: productObj, variant: variantSelection } })
        );
    };
    const addHandler = (productObj, variantSelection) => {
        dispatch(
            cartActions.addToCart({ data: { product: productObj, variant: variantSelection } })
        );
    };
    const subHandler = (productObj, variantSelection) => {
        dispatch(
            cartActions.subFromCart({ data: { product: productObj, variant: variantSelection } })
        );
    };
    return { removeHandler, addHandler, subHandler };
};

export default useCartActions;

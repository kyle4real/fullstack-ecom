import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../app/slices/ui-slice";
import {
    SCartEmptyNotification,
    SContinueShopping,
    SContinueShoppingContainer,
    SContinueShoppingLink,
} from "./styles";

const EmptyCart = () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(uiActions.setCartDrawer(false));
    return (
        <>
            <SCartEmptyNotification>Your cart is currently empty.</SCartEmptyNotification>
            <SContinueShoppingContainer>
                <SContinueShopping>Continue Shopping</SContinueShopping>
                <>&nbsp;</>
                <SContinueShoppingLink to="/shop" onClick={onClick}>
                    here
                </SContinueShoppingLink>
                <>.</>
            </SContinueShoppingContainer>
        </>
    );
};

export default EmptyCart;

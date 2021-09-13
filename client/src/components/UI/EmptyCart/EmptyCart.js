import React from "react";
import {
    SCartEmptyNotification,
    SContinueShopping,
    SContinueShoppingContainer,
    SContinueShoppingLink,
} from "./styles";

const EmptyCart = () => {
    return (
        <>
            <SCartEmptyNotification>Your cart is currently empty.</SCartEmptyNotification>
            <SContinueShoppingContainer>
                <SContinueShopping>Continue Shopping</SContinueShopping>
                <>&nbsp;</>
                <SContinueShoppingLink to="/shop">here</SContinueShoppingLink>
                <>.</>
            </SContinueShoppingContainer>
        </>
    );
};

export default EmptyCart;

import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { uiActions } from "../../app/slices/ui-slice";
import { missingImg } from "../../assets";

import useDetectClickaway from "../../hooks/useClickAway";
import Button from "../UI/Button/Button";
import EmptyCart from "../UI/EmptyCart/EmptyCart";
import Overlay from "../UI/Overlay/Overlay";
import QuantitySelection from "../UI/QuantitySelection/QuantitySelection";
import {
    SButtonControl,
    SCartButtons,
    SCartDrawer,
    SCartDrawerContainer,
    SCartHead,
    SCartHeadSpan,
    SCartProduct,
    SCartProductDisplay,
    SCartTotal,
    SCartTotalLabel,
    SCartTotalPrice,
    SCartWrap,
    SCloseIcon,
    SImage,
    SImageContainer,
    SProductContent,
    SProductPrice,
    SProductTitle,
    SProductVariant,
} from "./styles";

const CartDrawer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartRef = useRef();
    const { cartDrawer } = useSelector((state) => state.ui);
    const { cart } = useSelector((state) => state.cart);
    useDetectClickaway(cartRef, () => {
        if (cartDrawer) {
            dispatch(uiActions.toggleCart());
        }
    });

    const cartRedirectHandler = () => {
        history.push("/cart");
        dispatch(uiActions.toggleCart());
    };

    // const cartAmount = useMemo(() => {
    //     return cart.reduce((r, v, i) => {
    //         return r + v.qty;
    //     }, 0);
    // }, [cart]);

    // const totalPrice = useMemo(() => {
    //     return cart.reduce((r, v) => {
    //         return (
    //             r +
    //             v.qty *
    //                 v.productObj.variants.find(({ title }) => title === v.variantSelection).price
    //         );
    //     }, 0);
    // }, [cart]);

    const { cartQty, cartTotalPrice } = useMemo(() => {
        return cart.reduce(
            (r, v) => {
                let { cartQty, cartTotalPrice } = r;
                cartQty += v.qty;
                cartTotalPrice += v.qty * v.product.variant.price;
                return { cartQty, cartTotalPrice };
            },
            { cartQty: 0, cartTotalPrice: 0 }
        );
    }, [cart]);

    return (
        <>
            {cartDrawer && <Overlay />}
            <SCartWrap ref={cartRef}>
                <SCartDrawerContainer className={cartDrawer ? "cart-open" : ""}>
                    <SCartDrawer>
                        <SCartHead>
                            <SCartHeadSpan>Your Cart - {cartQty} Items</SCartHeadSpan>
                            <SCloseIcon onClick={() => dispatch(uiActions.toggleCart())} />
                        </SCartHead>
                        <SCartProductDisplay>
                            {[...cart]?.reverse()?.map((cartItem, index) => {
                                const { product } = cartItem;
                                const { title } = product;
                                const { title: variantTitle, price } = product.variant;
                                const { url } = product.variant.media;

                                return (
                                    <SCartProduct key={index}>
                                        <SImageContainer>
                                            <SImage src={url} />
                                        </SImageContainer>
                                        <SProductContent>
                                            <SProductTitle>{title}</SProductTitle>
                                            <SProductVariant>{variantTitle}</SProductVariant>
                                            <SProductPrice>${price}.00 USD</SProductPrice>
                                            <QuantitySelection cartItem={cartItem} />
                                        </SProductContent>
                                    </SCartProduct>
                                );
                            })}
                        </SCartProductDisplay>
                        <SCartTotal>
                            <SCartTotalLabel>Total</SCartTotalLabel>
                            <SCartTotalPrice>${cartTotalPrice}.00 USD</SCartTotalPrice>
                        </SCartTotal>
                        {cart.length === 0 && <EmptyCart />}
                        {cart.length > 0 && (
                            <SCartButtons>
                                <SButtonControl>
                                    <Button>Checkout</Button>
                                </SButtonControl>
                                <SButtonControl onClick={cartRedirectHandler}>
                                    <Button secondary>Your Cart</Button>
                                </SButtonControl>
                            </SCartButtons>
                        )}
                    </SCartDrawer>
                </SCartDrawerContainer>
            </SCartWrap>
        </>
    );
};

export default CartDrawer;

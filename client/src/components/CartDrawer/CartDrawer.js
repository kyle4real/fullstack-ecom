import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import useDetectClickaway from "../../hooks/useClickAway";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button/Button";
import Overlay from "../UI/Overlay/Overlay";
import {
    SButtonControl,
    SCartButtons,
    SCartDrawer,
    SCartDrawerContainer,
    SCartEmptyNotification,
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
    SMinusIcon,
    SPlusIcon,
    SProductContent,
    SProductPrice,
    SProductTitle,
    SProductVariant,
    SQtySelection,
    SQtySelectionButton,
    SQtySelectionSpan,
    SRemoveButton,
} from "./styles";

const CartDrawer = ({ layoutRef }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cartRef = useRef();
    useDetectClickaway(cartRef, () => {
        if (cartDrawer) {
            dispatch(uiActions.toggleCart());
        }
    });
    const { cartDrawer } = useSelector((state) => state.ui);
    const { cartProducts } = useSelector((state) => state.cart);

    useEffect(() => {
        if (cartDrawer) {
            cartRef.current.classList.add("cart-open");
            layoutRef.current.style["height"] = `100vh`;
            layoutRef.current.style["overflow"] = "hidden";
        } else {
            cartRef.current.classList.remove("cart-open");
            layoutRef.current.style["height"] = "100%";
            layoutRef.current.style["overflow"] = "initial";
        }
    }, [cartDrawer, layoutRef]);

    const cartRedirectHandler = () => {
        history.push("/cart");
        dispatch(uiActions.toggleCart());
    };

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

    const cartAmount = useMemo(() => {
        return cartProducts.reduce((r, v, i) => {
            return r + v.qty;
        }, 0);
    }, [cartProducts]);

    const totalPrice = useMemo(() => {
        return cartProducts.reduce((r, v) => {
            return (
                r +
                v.qty *
                    v.productObj.variants.find(({ title }) => title === v.variantSelection).price
            );
        }, 0);
    }, [cartProducts]);
    return (
        <>
            {cartDrawer && <Overlay />}
            <SCartWrap>
                <SCartDrawerContainer ref={cartRef}>
                    <SCartDrawer>
                        <SCartHead>
                            <SCartHeadSpan>Your Cart - {cartAmount} Items</SCartHeadSpan>
                            <SCloseIcon onClick={() => dispatch(uiActions.toggleCart())} />
                        </SCartHead>
                        <SCartProductDisplay>
                            {[...cartProducts]
                                ?.reverse()
                                ?.map(({ productObj, variantSelection, qty }, index) => {
                                    const { variants, media, title } = productObj;
                                    const { mediaUrl, price } = variants?.find(
                                        ({ title }) => title === variantSelection
                                    );
                                    return (
                                        <SCartProduct key={index}>
                                            <SImageContainer>
                                                <SImage src={mediaUrl || media?.[0]?.url} />
                                            </SImageContainer>
                                            <SProductContent>
                                                <SProductTitle>{title}</SProductTitle>
                                                <SProductVariant>
                                                    {variantSelection}
                                                </SProductVariant>
                                                <SProductPrice>${price}.00 USD</SProductPrice>
                                                <SQtySelection>
                                                    <SQtySelectionButton
                                                        disabled={qty === 1}
                                                        onClick={() =>
                                                            subHandler(productObj, variantSelection)
                                                        }
                                                    >
                                                        <SMinusIcon />
                                                    </SQtySelectionButton>
                                                    <SQtySelectionSpan>{qty}</SQtySelectionSpan>
                                                    <SQtySelectionButton
                                                        onClick={() =>
                                                            addHandler(productObj, variantSelection)
                                                        }
                                                    >
                                                        <SPlusIcon />
                                                    </SQtySelectionButton>
                                                </SQtySelection>
                                                <SRemoveButton
                                                    onClick={() =>
                                                        removeHandler(productObj, variantSelection)
                                                    }
                                                >
                                                    Remove
                                                </SRemoveButton>
                                            </SProductContent>
                                        </SCartProduct>
                                    );
                                })}
                        </SCartProductDisplay>
                        <SCartTotal>
                            <SCartTotalLabel>Total</SCartTotalLabel>
                            <SCartTotalPrice>${totalPrice}.00 USD</SCartTotalPrice>
                        </SCartTotal>
                        {cartProducts.length === 0 && (
                            <SCartEmptyNotification>
                                Your Cart Is Currently Empty
                            </SCartEmptyNotification>
                        )}
                        {cartProducts.length > 0 && (
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

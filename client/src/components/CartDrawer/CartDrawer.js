import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button/Button";
import {
    SButtonControl,
    SCartButtons,
    SCartDrawer,
    SCartHead,
    SCartHeadSection,
    SCartHeadSpan,
    SCartProduct,
    SCartProductDisplay,
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

const CartDrawer = () => {
    const dispatch = useDispatch();
    const { cartProducts } = useSelector((state) => state.cart);

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

    return (
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
                                    <SProductVariant>{variantSelection}</SProductVariant>
                                    <SProductPrice>${price}.00 USD</SProductPrice>
                                    <SQtySelection>
                                        <SQtySelectionButton
                                            disabled={qty === 1}
                                            onClick={() => subHandler(productObj, variantSelection)}
                                        >
                                            <SMinusIcon />
                                        </SQtySelectionButton>
                                        <SQtySelectionSpan>{qty}</SQtySelectionSpan>
                                        <SQtySelectionButton
                                            onClick={() => addHandler(productObj, variantSelection)}
                                        >
                                            <SPlusIcon />
                                        </SQtySelectionButton>
                                    </SQtySelection>
                                    <SRemoveButton
                                        onClick={() => removeHandler(productObj, variantSelection)}
                                    >
                                        Remove
                                    </SRemoveButton>
                                </SProductContent>
                            </SCartProduct>
                        );
                    })}
            </SCartProductDisplay>
            <SCartButtons>
                <SButtonControl>
                    <Button>Checkout</Button>
                </SButtonControl>
                <SButtonControl>
                    <Button>Your Cart</Button>
                </SButtonControl>
            </SCartButtons>
        </SCartDrawer>
    );
};

export default CartDrawer;

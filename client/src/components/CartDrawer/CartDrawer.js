import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import {
    SArrow,
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
    SQtySelectionDropdown,
    SQtySelectionPopup,
    SQtySelectionSpan,
    SRemoveButton,
} from "./styles";

const CartDrawer = () => {
    const dispatch = useDispatch();
    const { cartProducts } = useSelector((state) => state.cart);

    useEffect(() => {
        console.log(cartProducts);
    }, [cartProducts]);

    return (
        <SCartDrawer>
            <SCartHead>
                <SCartHeadSection />
                <SCartHeadSection>
                    <SCartHeadSpan>Your Cart</SCartHeadSpan>
                </SCartHeadSection>
                <SCartHeadSection>
                    <SCloseIcon onClick={() => dispatch(uiActions.toggleCart())} />
                </SCartHeadSection>
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
                                        <SQtySelectionSpan>
                                            <SMinusIcon />
                                        </SQtySelectionSpan>
                                        <SQtySelectionSpan>{qty}</SQtySelectionSpan>
                                        <SQtySelectionSpan>
                                            <SPlusIcon />
                                        </SQtySelectionSpan>
                                    </SQtySelection>
                                    <SRemoveButton>Remove</SRemoveButton>
                                </SProductContent>
                            </SCartProduct>
                        );
                    })}
            </SCartProductDisplay>
        </SCartDrawer>
    );
};

export default CartDrawer;

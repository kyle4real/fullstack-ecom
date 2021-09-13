import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useCartActions from "../../hooks/useCartActions";
import QuantitySelection from "../UI/QuantitySelection/QuantitySelection";

import {
    SCartEmptyNotification,
    SCartPage,
    SCartPageTitle,
    SContinueShopping,
    SContinueShoppingContainer,
    SContinueShoppingLink,
    SImage,
    SImageContainer,
    SMinusIcon,
    SPlusIcon,
    SProductPrice,
    SProductTitle,
    SProductVariant,
    SQtySelection,
    SQtySelectionButton,
    SQtySelectionSpan,
    SRemoveButton,
    STable,
    STableBody,
    STableBodyTD,
    STableBodyTR,
    STableHead,
    STableHeadTH,
    STableHeadTR,
} from "./styles";

const CartPage = () => {
    const dispatch = useDispatch();
    const { authData } = useSelector((state) => state.auth);
    const firstName = authData?.name?.split(" ")?.[0];
    const { cartProducts } = useSelector((state) => state.cart);
    const { removeHandler, addHandler, subHandler } = useCartActions();

    return (
        <SCartPage>
            <SCartPageTitle>{firstName ? <>{firstName}'s</> : <>Your</>} Cart</SCartPageTitle>
            <>
                <>
                    {cartProducts?.length === 0 && (
                        <>
                            <SCartEmptyNotification>
                                Your cart is currently empty.
                            </SCartEmptyNotification>
                            <SContinueShoppingContainer>
                                <SContinueShopping>Continue Shopping</SContinueShopping>
                                <>&nbsp;</>
                                <SContinueShoppingLink to="/shop">here</SContinueShoppingLink>
                                <>.</>
                            </SContinueShoppingContainer>
                        </>
                    )}
                </>
                {cartProducts?.length > 0 && (
                    <STable>
                        <STableHead>
                            <STableHeadTR>
                                <STableHeadTH colSpan={2}>Item</STableHeadTH>
                                <STableHeadTH>Quantity</STableHeadTH>
                                <STableHeadTH>Subtotal</STableHeadTH>
                            </STableHeadTR>
                        </STableHead>
                        <STableBody>
                            {[...cartProducts]?.reverse()?.map((cartProduct, index) => {
                                const { productObj, variantSelection, qty } = cartProduct;
                                const { variants, media, title } = productObj;
                                const { mediaUrl, price } = variants?.find(
                                    ({ title }) => title === variantSelection
                                );
                                return (
                                    <STableBodyTR key={index}>
                                        <STableBodyTD>
                                            <SImageContainer>
                                                <SImage src={mediaUrl || media?.[0]?.url} />
                                            </SImageContainer>
                                        </STableBodyTD>
                                        <STableBodyTD>
                                            <SProductTitle>{title}</SProductTitle>
                                            <SProductVariant>{variantSelection}</SProductVariant>
                                            <SProductPrice>${price}.00 USD</SProductPrice>
                                            <QuantitySelection cartProduct={cartProduct} mobile />
                                        </STableBodyTD>
                                        <STableBodyTD>
                                            <QuantitySelection cartProduct={cartProduct} />
                                        </STableBodyTD>
                                        <STableBodyTD>${qty * price}.00 USD</STableBodyTD>
                                    </STableBodyTR>
                                );
                            })}
                        </STableBody>
                    </STable>
                )}
            </>
        </SCartPage>
    );
};

export default CartPage;

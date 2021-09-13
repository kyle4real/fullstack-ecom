import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../UI/EmptyCart/EmptyCart";
import QuantitySelection from "../UI/QuantitySelection/QuantitySelection";

import {
    SCartPage,
    SCartPageTitle,
    SImage,
    SImageContainer,
    SProductPrice,
    SProductTitle,
    SProductVariant,
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

    return (
        <SCartPage>
            <SCartPageTitle>{firstName ? <>{firstName}'s</> : <>Your</>} Cart</SCartPageTitle>
            <>
                <>{cartProducts?.length === 0 && <EmptyCart />}</>
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

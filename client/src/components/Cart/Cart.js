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

const Cart = () => {
    const dispatch = useDispatch();
    const { firstName } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    return (
        <SCartPage>
            <SCartPageTitle>{firstName ? <>{firstName}'s</> : <>Your</>} Cart</SCartPageTitle>
            {(() => {
                if (!cart.length) return <EmptyCart />;
                return (
                    <STable>
                        <STableHead>
                            <STableHeadTR>
                                <STableHeadTH colSpan={2}>Item</STableHeadTH>
                                <STableHeadTH>Quantity</STableHeadTH>
                                <STableHeadTH>Subtotal</STableHeadTH>
                            </STableHeadTR>
                        </STableHead>
                        <STableBody>
                            {[...cart].reverse().map((cartItem, index) => {
                                const { product, qty } = cartItem;
                                const { title } = product;
                                const { title: variantTitle, price } = product.variant;
                                const { url } = product.variant.media;

                                return (
                                    <STableBodyTR key={index}>
                                        <STableBodyTD>
                                            <SImageContainer>
                                                <SImage src={url} />
                                            </SImageContainer>
                                        </STableBodyTD>
                                        <STableBodyTD>
                                            <SProductTitle>{title}</SProductTitle>
                                            <SProductVariant>{variantTitle}</SProductVariant>
                                            <SProductPrice>${price}.00 USD</SProductPrice>
                                            <QuantitySelection cartItem={cartItem} mobile />
                                        </STableBodyTD>
                                        <STableBodyTD>
                                            <QuantitySelection cartItem={cartItem} />
                                        </STableBodyTD>
                                        <STableBodyTD>${qty * price}.00 USD</STableBodyTD>
                                    </STableBodyTR>
                                );
                            })}
                        </STableBody>
                    </STable>
                );
            })()}
        </SCartPage>
    );
};

export default Cart;

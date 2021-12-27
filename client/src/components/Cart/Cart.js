import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../UI/Button/Button";
import EmptyCart from "../UI/EmptyCart/EmptyCart";
import QuantitySelection from "../UI/QuantitySelection/QuantitySelection";

import {
    SCartButtons,
    SCartPage,
    SCartPageTitle,
    SCartSummary,
    SCartSummaryDesc,
    SCartTotal,
    SCartTotalTagline,
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
    STotalContainer,
} from "./styles";

const Cart = () => {
    const history = useHistory();
    const { cart } = useSelector((state) => state.cart);

    const cartTotalPrice = cart.reduce((r, v) => (r += v.qty * v.product.variant.price), 0);
    return (
        <SCartPage>
            {(() => {
                if (!cart.length) return <EmptyCart />;
                return (
                    <>
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
                                                <SImageContainer
                                                    to={`/products/${product.sku}?variant=${product.variant._id}`}
                                                >
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
                        <SCartSummary>
                            <STotalContainer>
                                <SCartTotalTagline>Total</SCartTotalTagline>
                                <SCartTotal>${cartTotalPrice}.00 USD</SCartTotal>
                            </STotalContainer>
                            <SCartSummaryDesc>
                                Taxes and shipping calculated at checkout
                            </SCartSummaryDesc>
                        </SCartSummary>
                        <SCartButtons>
                            <Button secondary onClick={() => history.push("/shop")}>
                                Continue Shopping
                            </Button>
                            <Button>Checkout</Button>
                        </SCartButtons>
                    </>
                );
            })()}
        </SCartPage>
    );
};

export default Cart;

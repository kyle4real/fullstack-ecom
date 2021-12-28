import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCheckoutSession } from "../../app/actions/checkout-actions";
import { priceFormatter } from "../../utils/priceFormat";
import Button from "../UI/Button/Button";
import EmptyCart from "../UI/EmptyCart/EmptyCart";
import QuantitySelection from "../UI/QuantitySelection/QuantitySelection";

import {
    SCartButtons,
    SCartPage,
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
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart } = useSelector((state) => state.cart);

    const checkoutHandler = () => {
        dispatch(createCheckoutSession());
    };

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
                                    const hasMedia = !!product.variant?.media?.url;
                                    const url = hasMedia
                                        ? product.variant.media.url
                                        : product.image.url || null;
                                    const hasVariants = product.variant.sku !== null;

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
                                                <SProductVariant
                                                    style={!hasVariants ? { display: "none" } : {}}
                                                >
                                                    {variantTitle}
                                                </SProductVariant>
                                                <SProductPrice>
                                                    {priceFormatter.format(price)} USD
                                                </SProductPrice>
                                                <QuantitySelection cartItem={cartItem} mobile />
                                            </STableBodyTD>
                                            <STableBodyTD>
                                                <QuantitySelection cartItem={cartItem} />
                                            </STableBodyTD>
                                            <STableBodyTD>
                                                {priceFormatter.format(qty * price)} USD
                                            </STableBodyTD>
                                        </STableBodyTR>
                                    );
                                })}
                            </STableBody>
                        </STable>
                        <SCartSummary>
                            <STotalContainer>
                                <SCartTotalTagline>Total</SCartTotalTagline>
                                <SCartTotal>{priceFormatter.format(cartTotalPrice)} USD</SCartTotal>
                            </STotalContainer>
                            <SCartSummaryDesc>
                                Taxes and shipping calculated at checkout
                            </SCartSummaryDesc>
                        </SCartSummary>
                        <SCartButtons>
                            <Button secondary onClick={() => history.push("/shop")}>
                                Continue Shopping
                            </Button>
                            <Button onClick={checkoutHandler}>Checkout</Button>
                        </SCartButtons>
                    </>
                );
            })()}
        </SCartPage>
    );
};

export default Cart;

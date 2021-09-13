import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { missingImg } from "../../assets";
import { cartActions } from "../../store/cart-slice";
import {
    SCartEmptyNotification,
    SCartPage,
    SCartPageTitle,
    SContentSpanHead,
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
                            {[...cartProducts]
                                ?.reverse()
                                ?.map(({ productObj, variantSelection, qty }, index) => {
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
                                                <SProductVariant>
                                                    {variantSelection}
                                                </SProductVariant>
                                                <SProductPrice>${price}.00 USD</SProductPrice>
                                                <>
                                                    <SQtySelection mobile>
                                                        <SQtySelectionButton
                                                            disabled={qty === 1}
                                                            onClick={() =>
                                                                subHandler(
                                                                    productObj,
                                                                    variantSelection
                                                                )
                                                            }
                                                        >
                                                            <SMinusIcon />
                                                        </SQtySelectionButton>
                                                        <SQtySelectionSpan>{qty}</SQtySelectionSpan>
                                                        <SQtySelectionButton
                                                            onClick={() =>
                                                                addHandler(
                                                                    productObj,
                                                                    variantSelection
                                                                )
                                                            }
                                                        >
                                                            <SPlusIcon />
                                                        </SQtySelectionButton>
                                                    </SQtySelection>
                                                    <SRemoveButton
                                                        mobile
                                                        onClick={() =>
                                                            removeHandler(
                                                                productObj,
                                                                variantSelection
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </SRemoveButton>
                                                </>
                                            </STableBodyTD>
                                            <STableBodyTD>
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

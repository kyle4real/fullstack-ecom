import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { missingImg } from "../../assets";
import { cartActions } from "../../app/slices/cart-slice";

import Accordian from "../UI/Accordian/Accordian";

import Button from "../UI/Button/Button";

import Rating from "../UI/Rating/Rating";
import {
    SButtonControl,
    SButtonFIXED,
    SCardSpan,
    SCardSpanControl,
    SCollectionName,
    SContent,
    SContentACCORDIAN,
    SContentBUTTONS,
    SContentCARD,
    SContentSpacebetween,
    SContentTOP,
    SContentVARIANTS,
    SDesktopWrapper,
    SExpressIcon,
    SImage,
    SImageContainer,
    SMediaBOTTOM,
    SMediaMAIN,
    SMediaTOP,
    SMobileImage,
    SMobileImageContainer,
    SMobileMediaBottom,
    SMobileWrapper,
    SProductGrid,
    SProductPrice,
    SProductTitle,
    SReturnIcon,
    SShippingIcon,
    SVariantSelect,
    SVariantSelection,
} from "./styles";
import { uiActions } from "../../app/slices/ui-slice";
import useQuery from "../../hooks/useQuery";
import { SLabel, SSelect, SSelectOption } from "../UI/AuthForm/styles";
import { useEffect } from "react";

const Product = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const query = useQuery();
    const { url } = useRouteMatch();
    const { product } = useSelector((state) => state.product);

    const variantSelectHandler = (variantId) => {
        const newUrl = url.concat(`?variant=${variantId}`);
        history.push(newUrl);
    };

    const addToCartHandler = (variant, product) => {
        dispatch(
            cartActions.addToCart({
                data: {
                    variant,
                    product,
                },
            })
        );
        dispatch(uiActions.toggleCart());
    };

    const variantId = query.get("variant");
    const currentVariant = variantId && product.variants.find((item) => item._id === variantId);
    const { mainMedia, media } = useMemo(() => {
        const mainMedia = !currentVariant
            ? product.media.find((item) => item.position === 1)
            : product.media.find((item) => item._id === currentVariant.media);
        const media = product.media.filter((item) => item._id !== mainMedia._id);
        return { mainMedia, media };
    }, [product.media, currentVariant]);

    const topMedia = media.slice(0, 3);
    const bottomMedia = media.slice(3);
    return (
        <SProductGrid>
            <div>
                <SMobileWrapper>
                    <SMediaMAIN>
                        <SImageContainer>
                            <SImage src={mainMedia.url} />
                        </SImageContainer>
                    </SMediaMAIN>
                    <SMobileMediaBottom>
                        {media.map(({ url, _id }, index) => (
                            <SMobileImageContainer key={index}>
                                <SMobileImage src={url} />
                            </SMobileImageContainer>
                        ))}
                    </SMobileMediaBottom>
                </SMobileWrapper>

                <SDesktopWrapper>
                    <SMediaTOP>
                        {topMedia.map(({ url }, index) => (
                            <SImageContainer key={index}>
                                <SImage src={url} />
                            </SImageContainer>
                        ))}
                    </SMediaTOP>
                    <SMediaMAIN>
                        <SImageContainer>
                            <SImage src={mainMedia.url} />
                        </SImageContainer>
                    </SMediaMAIN>
                    <SMediaBOTTOM>
                        {bottomMedia.map(({ url }, index) => (
                            <SImageContainer key={index}>
                                <SImage src={url} />
                            </SImageContainer>
                        ))}
                    </SMediaBOTTOM>
                </SDesktopWrapper>
            </div>
            <div>
                <SContent>
                    <SContentTOP>
                        <Rating />
                        <SContentSpacebetween>
                            <SProductTitle>{product?.title}</SProductTitle>
                            <SProductPrice>${"5"}.00 USD</SProductPrice>
                        </SContentSpacebetween>
                        <SCollectionName>Ecom Collection</SCollectionName>
                        <SProductPrice mobile>${"5"}.00 USD</SProductPrice>
                    </SContentTOP>
                    <SVariantSelection>
                        <SLabel>Variant</SLabel>
                        <SVariantSelect
                            value={variantId}
                            onChange={(e) => variantSelectHandler(e.target.value)}
                        >
                            {product.variants.map(({ title, _id }, index) => {
                                return (
                                    <SSelectOption key={index} value={_id}>
                                        {title}
                                    </SSelectOption>
                                );
                            })}
                        </SVariantSelect>
                    </SVariantSelection>

                    <SContentBUTTONS>
                        <SButtonControl>
                            <Button
                                font={"14px"}
                                onClick={() => addToCartHandler(params.variant, { ...product })}
                            >
                                Add To Cart
                            </Button>
                        </SButtonControl>
                        <SButtonControl>
                            <Button secondary font={"14px"}>
                                Checkout Now
                            </Button>
                        </SButtonControl>
                    </SContentBUTTONS>

                    <SButtonFIXED>
                        <Button
                            font={"14px"}
                            onClick={() => addToCartHandler(params.variant, { ...product })}
                        >
                            Add To Cart
                        </Button>
                    </SButtonFIXED>

                    <SContentCARD>
                        <SCardSpanControl>
                            <SReturnIcon />
                            <SCardSpan>Free Returns On All Orders</SCardSpan>
                        </SCardSpanControl>
                        <SCardSpanControl>
                            <SShippingIcon />
                            <SCardSpan>Free Standard Over $75</SCardSpan>
                        </SCardSpanControl>
                        <SCardSpanControl>
                            <SExpressIcon />
                            <SCardSpan>Free Express Over $150</SCardSpan>
                        </SCardSpanControl>
                    </SContentCARD>
                    <SContentACCORDIAN>
                        <Accordian
                            data={[
                                {
                                    title: "Description",
                                    content: `lit. Quibusdam repellendrem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam 
                                    repellendus, laboriosam voluptate sadfasdf asdfasdf sdfasdf asdf asdfasdf adsdf asd dfasdfsdf
                                    temporibus odit at exercitationem velit! Lorem ipsum dolor sit amet consectetur adipi`,
                                },
                                {
                                    title: "Delivery & Returns",
                                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                                accusantium officia. Soluta praesentium blanditiis, maxime
                                temporibus odit at exercitationem velit!`,
                                },
                            ]}
                        />
                    </SContentACCORDIAN>
                </SContent>
            </div>
        </SProductGrid>
    );
};

export default Product;

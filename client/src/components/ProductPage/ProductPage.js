import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { missingImg } from "../../assets";
import { cartActions } from "../../store/cart-slice";

import { productActions } from "../../store/product-slice";
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
    SContentSection,
    SContentSpacebetween,
    SContentTOP,
    SContentVARIANTS,
    SDesktopWrapper,
    SExpressIcon,
    SImage,
    SImageContainer,
    SMediaBOTTOM,
    SMediaItemBOTTOM,
    SMediaItemTOP,
    SMediaMAIN,
    SMediaSection,
    SMediaTOP,
    SMobileImage,
    SMobileImageContainer,
    SMobileMediaBottom,
    SMobileWrapper,
    SProductPage,
    SProductPrice,
    SProductTitle,
    SReturnIcon,
    SShippingIcon,
    SVariantGridItem,
    SVariantImageContainer,
    SVariantSelection,
    SVariantsGrid,
    SVariantsHead,
    SVariantsName,
} from "./styles";

const ProductPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { url } = useRouteMatch();
    const { currentProduct, productsArray } = useSelector((state) => state.product);
    const [currentHover, setCurrentHover] = useState(null);
    const [currentMain, setCurrentMain] = useState(null);
    const productSku = params.product;
    const productVariant = params.variant;

    useEffect(() => {
        const product = productsArray?.find?.(({ sku }) => sku === productSku);
        dispatch(productActions.replaceCurrentProduct({ data: { result: product } }));

        return () => dispatch(productActions.replaceCurrentProduct({ data: { result: null } }));
    }, [dispatch, productsArray, productSku]);

    const variantSelectHandler = (variantTitle) => {
        setCurrentMain(null);
        const newUrl = url.split("/").slice(0, -1).concat(variantTitle).join("/");
        history.push(newUrl);
    };

    let { TOPMedia, MAINMedia, BOTTOMMedia, MobileMediaMAIN, MobileMediaBOTTOM } = useMemo(() => {
        let TOPMedia = [],
            MAINMedia = null,
            BOTTOMMedia = [];
        const mediaArr = currentProduct?.media;
        const variantsArr = currentProduct?.variants;
        const variantUrl = variantsArr?.find(({ title }) => title === productVariant)?.mediaUrl;
        const filteredMediaArr = mediaArr?.filter(({ url }) => url !== variantUrl);

        if (mediaArr?.length >= 5) {
            TOPMedia = filteredMediaArr?.slice(1, 4);
            MAINMedia = variantUrl;
            BOTTOMMedia = filteredMediaArr?.slice(2);
        } else if (mediaArr?.length >= 4) {
            MAINMedia = variantUrl;
            BOTTOMMedia = filteredMediaArr;
        } else if (mediaArr?.length >= 3) {
            TOPMedia = filteredMediaArr;
            MAINMedia = variantUrl;
        }

        let MobileMediaMAIN = null;
        let MobileMediaBOTTOM = [];

        MobileMediaMAIN = variantUrl;
        MobileMediaBOTTOM = mediaArr;
        return { TOPMedia, MAINMedia, BOTTOMMedia, MobileMediaMAIN, MobileMediaBOTTOM };
    }, [currentProduct?.media, currentProduct?.variants, productVariant]);

    return (
        <SProductPage>
            <SMediaSection>
                <SMobileWrapper>
                    <SMediaMAIN>
                        <SImageContainer>
                            <SImage src={currentMain || (MobileMediaMAIN && MobileMediaMAIN)} />
                        </SImageContainer>
                    </SMediaMAIN>
                    <SMobileMediaBottom>
                        {MobileMediaBOTTOM?.map(({ url }, index) => (
                            <SMobileImageContainer key={index} onClick={() => setCurrentMain(url)}>
                                <SMobileImage src={url} />
                            </SMobileImageContainer>
                        ))}
                    </SMobileMediaBottom>
                </SMobileWrapper>

                <SDesktopWrapper>
                    <SMediaTOP>
                        {TOPMedia?.map(({ url }, index) => (
                            <SMediaItemTOP key={index}>
                                <SImageContainer>
                                    <SImage src={url} />
                                </SImageContainer>
                            </SMediaItemTOP>
                        ))}
                    </SMediaTOP>
                    <SMediaMAIN>
                        <SImageContainer>
                            <SImage src={MAINMedia && MAINMedia} />
                        </SImageContainer>
                    </SMediaMAIN>
                    <SMediaBOTTOM>
                        {BOTTOMMedia?.map(({ url }, index) => (
                            <SMediaItemBOTTOM key={index}>
                                <SImageContainer>
                                    <SImage src={url} />
                                </SImageContainer>
                            </SMediaItemBOTTOM>
                        ))}
                    </SMediaBOTTOM>
                </SDesktopWrapper>
            </SMediaSection>
            <SContentSection>
                <SContent>
                    <SContentTOP>
                        <Rating />
                        <SContentSpacebetween>
                            <SProductTitle>{currentProduct?.title}</SProductTitle>
                            <SProductPrice>${currentProduct?.price}.00 USD</SProductPrice>
                        </SContentSpacebetween>
                        <SCollectionName>Ecom Collection</SCollectionName>
                        <SProductPrice mobile>${currentProduct?.price}.00 USD</SProductPrice>
                    </SContentTOP>
                    <SContentVARIANTS>
                        <SVariantsHead>
                            <SVariantsName>Size:</SVariantsName>
                            <SVariantSelection>
                                {currentHover ? currentHover : productVariant}
                            </SVariantSelection>
                        </SVariantsHead>
                        <SVariantsGrid>
                            {currentProduct?.variants?.map(({ mediaUrl, title }, index) => (
                                <SVariantGridItem key={index}>
                                    <SVariantImageContainer
                                        onClick={() => variantSelectHandler(title)}
                                        active={
                                            currentHover
                                                ? currentHover === title
                                                : productVariant === title
                                        }
                                        onMouseEnter={() => setCurrentHover(title)}
                                        onMouseLeave={() => setCurrentHover(null)}
                                    >
                                        <SImage src={mediaUrl || missingImg} />
                                    </SVariantImageContainer>
                                </SVariantGridItem>
                            ))}
                        </SVariantsGrid>
                    </SContentVARIANTS>

                    <SContentBUTTONS>
                        <SButtonControl>
                            <Button
                                font={"14px"}
                                onClick={() =>
                                    dispatch(
                                        cartActions.addToCart({
                                            data: {
                                                variant: productVariant,
                                                product: { ...currentProduct },
                                            },
                                        })
                                    )
                                }
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
                        <Button font={"14px"}>Add To Cart</Button>
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
                                    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                                accusantium officia. Soluta praesentium blanditiis, maxime
                                temporibus odit at exercitationem velit!`,
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
            </SContentSection>
        </SProductPage>
    );
};

export default ProductPage;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useRouteMatch } from "react-router";
import { missingImg } from "../../assets";
import { getProduct } from "../../store/product-actions";
import { productActions } from "../../store/product-slice";
import Accordian from "../UI/Accordian/Accordian";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Rating from "../UI/Rating/Rating";
import {
    SAccordianCard,
    SAccordianContainer,
    SAccordianContent,
    SAccordianHead,
    SAccordianTitle,
    SButtonControl,
    SCardSpan,
    SCardSpanControl,
    SCollectionName,
    SContent,
    SContentACCORDIAN,
    SContentBUTTONS,
    SContentCARD,
    SContentCard,
    SContentSection,
    SContentSpacebetween,
    SContentSpan,
    SContentTOP,
    SContentVARIANTS,
    SExpressIcon,
    SImage,
    SImageContainer,
    SMediaBOTTOM,
    SMediaItemBOTTOM,
    SMediaItemTOP,
    SMediaMAIN,
    SMediaSection,
    SMediaTOP,
    SPlusIcon,
    SProductPage,
    SProductPrice,
    SProductTitle,
    SPurchaseButtons,
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
    const productSku = params.product;
    const productVariant = params.variant;

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const product = productsArray?.find?.(({ sku }) => sku === productSku);
        dispatch(productActions.replaceCurrentProduct({ data: { result: product } }));

        return () => dispatch(productActions.replaceCurrentProduct({ data: { result: null } }));
    }, [dispatch, productsArray, productSku]);

    const variantSelectHandler = (variantTitle) => {
        const newUrl = url.split("/").slice(0, -1).concat(variantTitle).join("/");
        history.push(newUrl);
    };

    return (
        <SProductPage>
            <SMediaSection>
                <SMediaTOP>
                    {currentProduct?.media?.slice(1, 4)?.map(({ url }) => (
                        <SMediaItemTOP>
                            <SImageContainer>
                                <SImage src={url} />
                            </SImageContainer>
                        </SMediaItemTOP>
                    ))}
                </SMediaTOP>
                <SMediaMAIN>
                    <SImageContainer>
                        <SImage src={currentProduct?.media?.[0]?.url} />
                    </SImageContainer>
                </SMediaMAIN>
                <SMediaBOTTOM>
                    {currentProduct?.media?.slice(2, 4)?.map(({ url }) => (
                        <SMediaItemBOTTOM>
                            <SImageContainer>
                                <SImage src={url} />
                            </SImageContainer>
                        </SMediaItemBOTTOM>
                    ))}
                </SMediaBOTTOM>
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
                            <Button font={"14px"}>Add To Cart</Button>
                        </SButtonControl>
                        <SButtonControl>
                            <Button secondary font={"14px"}>
                                Checkout Now
                            </Button>
                        </SButtonControl>
                    </SContentBUTTONS>
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

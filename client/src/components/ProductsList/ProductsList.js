import React from "react";
import {
    SContent,
    SContentImg,
    SContentImgContainer,
    SContentInfo,
    SHead,
    SHeadTitle,
    SInfo,
    SList,
    SListItem,
    SPrice,
    SProductsList,
    SRegularPrice,
    SSaleContainer,
    SSalePrice,
    STag,
    STitle,
    SVariant,
    SVariantLink,
    SVariants,
} from "./styles";

import { missingImg } from "./../../assets";
import { useSelector } from "react-redux";
import Loading from "../UI/Loading/Loading";

const ProductsList = ({ productsArray }) => {
    const { loading } = useSelector((state) => state.ui);

    if (loading.productList) {
        return (
            <>
                <Loading fixed />
            </>
        );
    }
    return (
        <SProductsList>
            <SHead>
                <SHeadTitle>All Products</SHeadTitle>
            </SHead>
            <SList>
                {productsArray?.map?.(
                    ({ title, price, salePrice, tags, variants, media }, index) => {
                        const sale = price !== salePrice;
                        console.log(media);
                        return (
                            <SListItem key={index}>
                                <SContent>
                                    <SContentImgContainer>
                                        <SContentImg src={media?.[0]?.url || missingImg} />
                                    </SContentImgContainer>
                                    <SContentInfo>
                                        <SInfo>
                                            <STag>{tags?.[0]}</STag>
                                            <STitle>{title}</STitle>
                                            <SVariants>
                                                {variants.map(({ title: variantTitle }, index) => {
                                                    const isLast = index === variants.length - 1;
                                                    return (
                                                        <SVariant>
                                                            <SVariantLink>
                                                                {variantTitle}
                                                                {!isLast && <>&nbsp;/&nbsp;</>}
                                                            </SVariantLink>
                                                        </SVariant>
                                                    );
                                                })}
                                            </SVariants>
                                        </SInfo>
                                        {!sale && <SPrice>${price}.00 USD</SPrice>}
                                        {sale && (
                                            <SSaleContainer>
                                                <SSalePrice>${salePrice}.00 USD</SSalePrice>
                                                <SRegularPrice>${price}.00 USD</SRegularPrice>
                                            </SSaleContainer>
                                        )}
                                    </SContentInfo>
                                </SContent>
                            </SListItem>
                        );
                    }
                )}
            </SList>
        </SProductsList>
    );
};

export default ProductsList;

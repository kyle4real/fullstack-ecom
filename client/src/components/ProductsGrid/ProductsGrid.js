import React from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { missingImg } from "../../assets";
import usePagination from "../../hooks/usePagination";
import useSearch from "../../hooks/useSearch";

import {
    SComparePrice,
    SContent,
    SGrid,
    SGridItem,
    SImage,
    SImageContainer,
    SInfoControl,
    SPrice,
    SProductsGrid,
    SSaleIcon,
    SSalePercentage,
    SSaleTag,
    STag,
    STitle,
} from "./styles";

const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
});

const ProductsGrid = () => {
    const history = useHistory();
    const { products } = useSelector((state) => state.products);
    const uiProducts = useSearch(products);
    const { PaginationUi, resourcesUi } = usePagination({
        resourceArr: uiProducts,
        perPage: 8,
        initialCurrentPage: 1,
    });

    const productSelectHandler = (productSku) => {
        history.push(`/products/${productSku}`);
    };

    return (
        <>
            <SProductsGrid>
                <SGrid>
                    {resourcesUi?.map(({ title, tags, variants, sku, image }, index) => {
                        let price = null;
                        let compareAtPrice = null;
                        if (!!variants.length) {
                            const priceObj = variants.reduce(
                                (r, v) =>
                                    v.price < r.price
                                        ? { price: v.price, compareAtPrice: v.compare_at_price }
                                        : r,
                                {
                                    price: variants[0].price,
                                    compareAtPrice: variants[0].compare_at_price,
                                }
                            );
                            price = priceObj.price;
                            compareAtPrice = priceObj.compareAtPrice;
                        }

                        const hasSale = price && compareAtPrice && price !== compareAtPrice;
                        const percentOff = !hasSale
                            ? undefined
                            : Math.round((1 - price / compareAtPrice) * 100);
                        price = price ? priceFormatter.format(price) : "N/A";
                        return (
                            <SGridItem key={index}>
                                <SImageContainer onClick={() => productSelectHandler(sku)}>
                                    <SImage src={image?.url || missingImg} />
                                </SImageContainer>
                                <SContent>
                                    <SInfoControl>
                                        {!hasSale && <STag>{tags?.[0]}</STag>}
                                        {hasSale && (
                                            <SSaleTag>
                                                <SSaleIcon />
                                                <SSalePercentage>{percentOff}% off</SSalePercentage>
                                            </SSaleTag>
                                        )}
                                        <SPrice>{price}</SPrice>
                                    </SInfoControl>
                                    <SInfoControl>
                                        <STitle>{title}</STitle>
                                        {hasSale && (
                                            <SComparePrice>
                                                {priceFormatter.format(compareAtPrice)}
                                            </SComparePrice>
                                        )}
                                    </SInfoControl>
                                </SContent>
                            </SGridItem>
                        );
                    })}
                </SGrid>
            </SProductsGrid>
            {PaginationUi}
        </>
    );
};

export default ProductsGrid;

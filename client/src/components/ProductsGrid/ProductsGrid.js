import React, { useMemo } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { missingImg } from "../../assets";
import usePagination from "../../hooks/usePagination";
import useSearch from "../../hooks/useSearch";
import { priceFormatter } from "../../utils/priceFormat";

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

const ProductsGrid = () => {
    const history = useHistory();
    const { products } = useSelector((state) => state.products);
    var uiProducts = useMemo(
        () =>
            products.reduce((r, v) => {
                const { price, compareAtPrice } = v.variants.reduce(
                    (r, v) => {
                        return v.price < r.price
                            ? { price: v.price, compareAtPrice: v.compare_at_price }
                            : r;
                    },
                    { price: v.variants[0].price, compareAtPrice: v.variants[0].compare_at_price }
                );
                return [...r, { price, compareAtPrice, ...v }];
            }, []),
        [products]
    );
    uiProducts = useSearch(uiProducts);
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
                    {resourcesUi?.map(({ title, sku, image, price, compareAtPrice }, index) => {
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
                                        {!hasSale && <STag>New</STag>}
                                        {hasSale && (
                                            <SSaleTag>
                                                <SSaleIcon />
                                                <SSalePercentage>{percentOff}% off</SSalePercentage>
                                            </SSaleTag>
                                        )}
                                        <SPrice>{price} USD</SPrice>
                                    </SInfoControl>
                                    <SInfoControl>
                                        <STitle>{title}</STitle>
                                        {hasSale && (
                                            <SComparePrice>
                                                {priceFormatter.format(compareAtPrice)} USD
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

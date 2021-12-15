import React from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { missingImg } from "../../assets";
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

    console.log(products);

    const productSelectHandler = (productSku, variantId) => {
        history.push(`/products/${productSku}?variant=${variantId}`);
    };

    return (
        <SProductsGrid>
            <SGrid>
                {products?.map?.(({ title, tags, variants, sku, image }, index) => {
                    const { price, compareAtPrice } = variants.reduce(
                        (r, v) =>
                            v.price < r.price
                                ? { price: v.price, compareAtPrice: v.compare_at_price }
                                : r,
                        { price: variants[0].price, compareAtPrice: variants[0].compare_at_price }
                    );

                    const hasSale = price !== compareAtPrice;
                    return (
                        <SGridItem key={index}>
                            <SImageContainer
                                onClick={() => productSelectHandler(sku, variants[0]._id)}
                            >
                                <SImage src={image?.url || missingImg} />
                            </SImageContainer>
                            {/* <SThumbnailsContainer>
                                <>
                                    {thumbnails.map(({ media, sku: variantSku }, index) => {
                                        return (
                                            <SThumbnailImageContainer
                                                key={index}
                                                onClick={() =>
                                                    productSelectHandler(sku, variantSku)
                                                }
                                            >
                                                <SThumbnailImage src={media.url} />
                                            </SThumbnailImageContainer>
                                        );
                                    })}
                                </>
                            </SThumbnailsContainer> */}
                            <SContent>
                                <SInfoControl>
                                    {!hasSale && <STag>{tags?.[0]}</STag>}
                                    {hasSale && (
                                        <SSaleTag>
                                            <SSaleIcon />
                                            <SSalePercentage>
                                                {Math.round((1 - price / compareAtPrice) * 100)}%
                                                off
                                            </SSalePercentage>
                                        </SSaleTag>
                                    )}
                                    <SPrice>{priceFormatter.format(price)}</SPrice>
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
    );
};

export default ProductsGrid;

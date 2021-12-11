import React from "react";
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
    SThumbnailImage,
    SThumbnailImageContainer,
    SThumbnailsContainer,
    STitle,
} from "./styles";

const ProductsGrid = () => {
    const history = useHistory();
    const { products } = useSelector((state) => state.products);

    console.log(products);

    const productSelectHandler = (productSku, variantTitle) => {
        history.push(`/products/${productSku}/${variantTitle}`);
    };
    return (
        <SProductsGrid>
            <SGrid>
                {products?.map?.(
                    ({ title, price, salePrice, tags, variants, media, sku }, index) => {
                        let images = variants
                            ?.reduce((r, v) => {
                                return r.concat(v.mediaUrl);
                            }, [])
                            ?.slice(1);
                        images = images?.length > 4 ? images?.slice(0, 4) : images;
                        const noImg = images?.length === 0;
                        return (
                            <SGridItem key={index}>
                                <SImageContainer
                                    onClick={() => productSelectHandler(sku, variants?.[0]?.title)}
                                >
                                    <SImage src={media?.[0]?.url || missingImg} />
                                </SImageContainer>
                                <SThumbnailsContainer>
                                    {!noImg && (
                                        <>
                                            {variants.map(({ mediaUrl, title }, index) => {
                                                return (
                                                    <SThumbnailImageContainer
                                                        key={index}
                                                        onClick={() =>
                                                            productSelectHandler(sku, title)
                                                        }
                                                    >
                                                        <SThumbnailImage src={mediaUrl} />
                                                    </SThumbnailImageContainer>
                                                );
                                            })}
                                        </>
                                    )}
                                </SThumbnailsContainer>
                                <SContent>
                                    <SInfoControl>
                                        {!salePrice && <STag>{tags?.[0]}</STag>}
                                        {salePrice && (
                                            <SSaleTag>
                                                <SSaleIcon />
                                                <SSalePercentage>
                                                    {Math.round((1 - salePrice / price) * 100)}% off
                                                </SSalePercentage>
                                            </SSaleTag>
                                        )}
                                        <SPrice>${!salePrice ? price : salePrice}.00</SPrice>
                                    </SInfoControl>
                                    <SInfoControl>
                                        <STitle>{title}</STitle>
                                        {salePrice && <SComparePrice>${price}.00</SComparePrice>}
                                    </SInfoControl>
                                </SContent>
                            </SGridItem>
                        );
                    }
                )}
            </SGrid>
        </SProductsGrid>
    );
};

export default ProductsGrid;

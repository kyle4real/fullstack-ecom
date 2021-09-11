import React from "react";
import { useHistory, useRouteMatch } from "react-router";
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

const ProductsGrid = ({ productsArray }) => {
    const { url } = useRouteMatch();
    const history = useHistory();

    const productSelectHandler = (productSku, variantTitle) => {
        history.push(`${url}/products/${productSku}/${variantTitle}`);
    };
    return (
        <SProductsGrid>
            <SGrid>
                {productsArray?.map?.(
                    ({ title, price, salePrice, tags, variants, media, sku }, index) => {
                        let images = media
                            .reduce((r, v) => {
                                return r.concat(v.url);
                            }, [])
                            .slice(1);
                        images = images.length > 4 ? images.slice(0, 4) : images;
                        const noImg = images.length === 0;
                        return (
                            <SGridItem
                                key={index}
                                onClick={() => productSelectHandler(sku, variants[0].title)}
                            >
                                <SImageContainer>
                                    <SImage src={media?.[0]?.url || missingImg} />
                                    {!noImg && (
                                        <SThumbnailsContainer className={"test"}>
                                            {images.map((url, index) => {
                                                return (
                                                    <SThumbnailImageContainer key={index}>
                                                        <SThumbnailImage src={url} />
                                                    </SThumbnailImageContainer>
                                                );
                                            })}
                                        </SThumbnailsContainer>
                                    )}
                                </SImageContainer>
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

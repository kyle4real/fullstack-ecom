import React from "react";
import { missingImg } from "../../assets";
import { SHead, SHeadTitle } from "../ProductsList/styles";
import {
    SContent,
    SGrid,
    SGridItem,
    SImage,
    SImageContainer,
    SProductsGrid,
    SThumbnailImage,
    SThumbnailImageContainer,
    SThumbnailsContainer,
} from "./styles";

const ProductsGrid = ({ productsArray }) => {
    return (
        <SProductsGrid>
            <SHead>
                <SHeadTitle>Products GRID</SHeadTitle>
            </SHead>
            <SGrid>
                {productsArray?.map?.(
                    ({ title, price, salePrice, tags, variants, media }, index) => {
                        let images = media
                            .reduce((r, v) => {
                                return r.concat(v.url);
                            }, [])
                            .slice(1);
                        images = images.length > 4 ? images.slice(0, 4) : images;
                        const noImg = images.length === 0;
                        return (
                            <SGridItem>
                                <SImageContainer>
                                    <SImage src={media?.[0]?.url || missingImg} />
                                    {!noImg && (
                                        <SThumbnailsContainer className={"test"}>
                                            {images.map((url) => {
                                                return (
                                                    <SThumbnailImageContainer>
                                                        <SThumbnailImage src={url} />
                                                    </SThumbnailImageContainer>
                                                );
                                            })}
                                        </SThumbnailsContainer>
                                    )}
                                </SImageContainer>
                                <SContent>hi</SContent>
                            </SGridItem>
                        );
                    }
                )}
            </SGrid>
        </SProductsGrid>
    );
};

export default ProductsGrid;

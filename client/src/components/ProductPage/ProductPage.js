import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { missingImg } from "../../assets";
import { getProduct } from "../../store/product-actions";
import { productActions } from "../../store/product-slice";
import {
    SContentSection,
    SImage,
    SImageContainer,
    SMediaBOTTOM,
    SMediaItemBOTTOM,
    SMediaItemTOP,
    SMediaMAIN,
    SMediaSection,
    SMediaTOP,
    SProductPage,
} from "./styles";

const ProductPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { currentProduct, productsArray } = useSelector((state) => state.product);
    useEffect(() => {
        const productSku = params.product;
        const product = productsArray?.find?.(({ sku }) => sku === productSku);
        dispatch(productActions.replaceCurrentProduct({ data: { result: product } }));

        return () => dispatch(productActions.replaceCurrentProduct({ data: { result: null } }));
    }, [dispatch, params.product, productsArray]);

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
            <SContentSection></SContentSection>
        </SProductPage>
    );
};

export default ProductPage;

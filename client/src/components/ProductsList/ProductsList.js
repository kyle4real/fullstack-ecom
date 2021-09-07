import React from "react";
import {
    SContent,
    SContentImg,
    SContentImgContainer,
    SContentInfo,
    SHead,
    SHeadTitle,
    SInfo,
    SInfoHead,
    SList,
    SListItem,
    SPrice,
    SProductListHead,
    SProductsList,
    SProductsListHead,
    STag,
    STagContainer,
    STagIcon,
    STitle,
} from "./styles";

import Bones from "./../../assets/bones.png";

const ProductsList = () => {
    // issue as props after component setup
    const productsArr = [
        {
            title: "Bone",
            price: "12.99",
            salePrice: "9.99",
        },
        {
            title: "Beef Treat Bag",
            price: "15.99",
            salePrice: "15.99",
        },
        {
            title: "Chicken Treat Bag",
            price: "15.99",
            salePrice: "15.99",
        },
        {
            title: "Turkey Bone",
            price: "14.99",
            salePrice: "11.59",
        },
        {
            title: "Bone",
            price: "12.99",
            salePrice: "9.99",
        },
        {
            title: "Beef Treat Bag",
            price: "15.99",
            salePrice: "15.99",
        },
        {
            title: "Chicken Treat Bag",
            price: "15.99",
            salePrice: "15.99",
        },
        {
            title: "Turkey Bone",
            price: "14.99",
            salePrice: "11.59",
        },
    ];

    return (
        <SProductsList>
            <SHead>
                <SHeadTitle>All Products</SHeadTitle>
            </SHead>
            <SList>
                {productsArr.map(({ title, price, salePrice }, index) => {
                    const noSale = price === salePrice;
                    return (
                        <SListItem key={index}>
                            <SContent>
                                <SContentImgContainer>
                                    <SContentImg src={Bones} />
                                </SContentImgContainer>
                                <SContentInfo>
                                    <SInfo>
                                        <STag>NEW</STag>
                                        <STitle>{title}</STitle>
                                    </SInfo>
                                    <SPrice>{price}</SPrice>
                                </SContentInfo>
                            </SContent>
                        </SListItem>
                    );
                })}
            </SList>
        </SProductsList>
    );
};

export default ProductsList;

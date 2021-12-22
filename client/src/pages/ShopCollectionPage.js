import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const ShopCollectionPage = () => {
    const params = useParams();
    const { collectionsTitles } = useSelector((state) => state.collections);

    const collection = collectionsTitles.find((item) => item.slug === params.collection);
    return (
        <PageLayout
            head={{ title: collection.title }}
            layoutArr={[
                {
                    type: "contain",
                    component: <ProductsGrid productsArray={[]} />,
                },
            ]}
        />
    );
};

export default ShopCollectionPage;

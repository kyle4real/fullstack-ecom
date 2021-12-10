import React from "react";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const ShopCategoryPage = () => {
    return (
        <PageLayout
            layoutArr={[
                {
                    type: "contain",
                    component: <ProductsGrid productsArray={[]} />,
                },
            ]}
        />
    );
};

export default ShopCategoryPage;

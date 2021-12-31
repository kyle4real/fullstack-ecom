import React from "react";
import { useHistory } from "react-router-dom";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import Button from "../UI/Button/Button";
import { SCTAContainer, SFeaturedProducts, SFeaturedProductsTitle } from "./styles";

const FeaturedProducts = () => {
    const history = useHistory();

    return (
        <SFeaturedProducts>
            <SFeaturedProductsTitle>Featured Products</SFeaturedProductsTitle>
            <ProductsGrid />
            <SCTAContainer>
                <Button onClick={() => history.push(`/shop`)}>View All</Button>
            </SCTAContainer>
        </SFeaturedProducts>
    );
};

export default FeaturedProducts;

import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "../app/actions/products-actions";
import { productsActions } from "../app/slices/products-slice";

import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const ShopPage = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getProducts({ onComplete, onError }));

        return () => dispatch(productsActions.resetProducts());
    }, [dispatch]);

    return (
        <PageLayout
            searchBar
            loading={loading}
            error={error}
            head={{ title: "All Products" }}
            layoutArr={[
                {
                    type: "contain",
                    component: <ProductsGrid />,
                },
            ]}
        />
    );
};

export default ShopPage;

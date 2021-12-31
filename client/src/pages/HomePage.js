import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSelectProducts } from "../app/actions/products-actions";
import { productsActions } from "../app/slices/products-slice";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const HomePage = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getSelectProducts("?limit=4", { onComplete, onError }));

        return () => dispatch(productsActions.resetProducts());
    }, [dispatch]);

    return (
        <PageLayout
            loading={loading}
            error={error}
            layoutArr={[
                { type: "span", component: <Hero /> },
                { type: "contain", customSize: "xl", component: <FeaturedProducts /> },
            ]}
        />
    );
};

export default HomePage;

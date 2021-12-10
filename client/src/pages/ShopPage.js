import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { getProducts } from "../app/actions/products-actions";
import { productsActions } from "../app/slices/products-slice";

import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";

import ShopCategoryPage from "./ShopCategoryPage";
import ShopCollectionPage from "./ShopCollectionPage";

const ShopPage = () => {
    const { path } = useRouteMatch();
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
        <>
            <Switch>
                <Route exact path={path}>
                    <PageLayout
                        loading={loading}
                        error={error}
                        layoutArr={[
                            {
                                type: "contain",
                                component: <ProductsGrid />,
                            },
                        ]}
                    />
                </Route>
                <Route exact path={`${path}/collections/:collection`}>
                    <ShopCollectionPage />
                </Route>
                <Route exact path={`${path}/categories/:category`}>
                    <ShopCategoryPage />
                </Route>
            </Switch>
        </>
    );
};

export default ShopPage;

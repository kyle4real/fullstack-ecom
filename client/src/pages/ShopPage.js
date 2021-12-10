import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Product from "../components/Product/Product";

import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import PageLayout from "../components/UI/PageLayout/PageLayout";
import { getProducts } from "../store/product-actions";
import { productActions } from "../store/product-slice";
import ShopCategoryPage from "./ShopCategoryPage";
import ShopCollectionPage from "./ShopCollectionPage";

const ShopPage = () => {
    const { path } = useRouteMatch();
    const dispatch = useDispatch();
    const { productsArray } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProducts());

        return () => {
            dispatch(productActions.replaceProducts({ data: { result: null } }));
        };
    }, [dispatch]);

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <PageLayout
                        layoutArr={[
                            {
                                type: "contain",
                                component: <ProductsGrid productsArray={productsArray} />,
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
